"use client"

import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  DollarSign,
  Megaphone,
  Receipt,
  Settings,
  Activity,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useSidebar } from "@/context/SidebarContext"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: DollarSign, label: "Revenue", href: "?view=revenue-chart" },
  { icon: Megaphone, label: "Campaigns", href: "?view=campaigns-progress" },
  { icon: Receipt, label: "Transactions", href: "?view=transactions-table" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function Sidebar() {
  const pathname = usePathname()
  const { isOpen, setIsOpen , toggleSidebar} = useSidebar();
  return (
    <>

{/* below code is wrriten to click background and closes the sidebar */}
    {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)} // Clicking the background closes it
        />
      )}

      <aside className={`fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-border bg-sidebar lg:translate-x-0   
     ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-16 items-center justify-between gap-2 border-b border-border px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Activity className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Dashify</span>
          </div>
          
          <button 
            onClick={toggleSidebar}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-semibold transition-all duration-200 active:scale-95 lg:hidden"
          >
            <span className="text-sm transition-transform group-hover:rotate-90 duration-200">✕</span> 
            Close
          </button>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-border p-4">
          <div className="rounded-lg bg-secondary/50 p-4">
            <p className="text-sm font-medium text-foreground">Need help?</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Check our documentation
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}
