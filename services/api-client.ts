// ============================================================
// API CLIENT
// Central HTTP client for all service calls.
// Configure baseURL, default headers, and error handling here.
// All service files import from this module — never use raw `fetch` directly.
// ============================================================

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api"

export class ApiError extends Error {
  constructor(
    public readonly statusCode: number,
    message: string,
    public readonly errors?: Record<string, string[]>
  ) {
    super(message)
    this.name = "ApiError"
  }
}

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

interface RequestOptions {
  method?: HttpMethod
  body?: unknown
  headers?: Record<string, string>
  /** Next.js fetch cache strategy */
  cache?: RequestCache
  /** Next.js ISR revalidate in seconds */
  revalidate?: number
}

/**
 * apiClient
 *
 * Generic typed fetch wrapper. Automatically:
 * - Attaches `Content-Type: application/json`
 * - Parses JSON responses
 * - Throws `ApiError` on non-2xx responses
 */
export async function apiClient<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const {
    method = "GET",
    body,
    headers = {},
    cache,
    revalidate,
  } = options

  const url = `${BASE_URL}${endpoint}`

  const fetchOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
    ...(cache ? { cache } : {}),
    ...(revalidate !== undefined
      ? { next: { revalidate } }
      : {}),
  }

  const response = await fetch(url, fetchOptions)

  if (!response.ok) {
    let errorPayload: { message?: string; errors?: Record<string, string[]> } = {}
    try {
      errorPayload = await response.json()
    } catch {
      // Response body may not be JSON — ignore
    }

    throw new ApiError(
      response.status,
      errorPayload.message ?? `Request failed with status ${response.status}`,
      errorPayload.errors
    )
  }

  // Handle 204 No Content
  if (response.status === 204) {
    return undefined as T
  }

  return response.json() as Promise<T>
}
