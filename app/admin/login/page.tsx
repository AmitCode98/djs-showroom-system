// Login page — UI stub prepared for future authentication integration
// TODO: Connect to next-auth, custom JWT, or similar when backend is ready

import * as React from "react"
import { Diamond } from "@phosphor-icons/react/dist/ssr"

export default function AdminLoginPage() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 font-sans antialiased flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 mb-4">
              <Diamond weight="light" className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-900">DJS Admin</h1>
            <p className="text-sm text-slate-400 mt-1">Showroom Control System</p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-[15px] font-semibold text-slate-800 mb-5">Sign in to continue</h2>

            <form className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="admin@djsshowroom.com"
                  className="h-10 px-3 text-[13px] rounded-lg border border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="h-10 px-3 text-[13px] rounded-lg border border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
                />
              </div>

              <button
                type="submit"
                className="w-full h-10 rounded-lg bg-slate-900 text-white text-[13px] font-semibold hover:bg-slate-700 transition-colors mt-2"
              >
                Sign In
              </button>
            </form>

            <p className="text-center text-[11px] text-slate-400 mt-5">
              For showroom staff access only. Unauthorized access is prohibited.
            </p>
          </div>

          {/* Back link */}
          <p className="text-center mt-5">
            <a href="/" className="text-[12px] text-slate-400 hover:text-slate-600 transition-colors">
              ← Back to Storefront
            </a>
          </p>
        </div>
      </body>
    </html>
  )
}
