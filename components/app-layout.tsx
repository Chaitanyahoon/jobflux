"use client"

import type React from "react"
import { MainNavbar } from "@/components/main-navbar"

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNavbar />
      <main className="flex-1">{children}</main>
    </div>
  )
}
