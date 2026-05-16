// ============================================================
// AUTH SERVICE
// Handles login, logout, registration, and session retrieval.
// Uses HttpOnly cookies (managed by the server) for auth tokens.
// ============================================================

import { apiClient } from "./api-client"
import type { User } from "@/types"

// ---- Request / Response shapes ----

export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface AuthResponse {
  user: User
  /** Access token — only returned if NOT using HttpOnly cookies */
  accessToken?: string
}

// ============================================================
// PLACEHOLDER IMPLEMENTATIONS
// ============================================================

/**
 * Authenticate an existing user and start a session.
 */
export async function login(payload: LoginPayload): Promise<AuthResponse> {
  // TODO: return apiClient<ApiResponse<AuthResponse>>("/auth/login", {
  //   method: "POST",
  //   body: payload,
  // }).then(r => r.data)
  void apiClient
  void payload
  throw new Error("Auth service not yet connected to backend.")
}

/**
 * Register a new customer account.
 */
export async function register(payload: RegisterPayload): Promise<AuthResponse> {
  // TODO: return apiClient<ApiResponse<AuthResponse>>("/auth/register", {
  //   method: "POST",
  //   body: payload,
  // }).then(r => r.data)
  void payload
  throw new Error("Auth service not yet connected to backend.")
}

/**
 * Invalidate the current session / clear auth cookies.
 */
export async function logout(): Promise<void> {
  // TODO: return apiClient<void>("/auth/logout", { method: "POST" })
}

/**
 * Fetch the currently authenticated user from the session.
 * Returns `null` if no session exists (unauthenticated).
 */
export async function getMe(): Promise<User | null> {
  // TODO: return apiClient<ApiResponse<User>>("/auth/me", { cache: "no-store" })
  //   .then(r => r.data)
  //   .catch(() => null)
  return null
}
