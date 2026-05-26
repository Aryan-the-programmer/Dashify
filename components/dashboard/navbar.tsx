"use client"

import { Bell, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Show, UserButton, SignInButton } from "@clerk/nextjs"
import {useState} from "react"
import { Menu } from "lucide-react"
import { useSidebar } from "@/context/SidebarContext"

export function Navbar() {

  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-sm">
      {/* <div className="relative w-80">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search (Comming) Soon"
          className="w-full bg-secondary/50 pl-9 text-sm"
        />
      </div> */}
      <div>
        <div className="flex items-center gap-4 lg:hidden">
                  <button 
                    className="rounded-md p-2 text-muted-foreground hover:bg-sidebar-accent hover:text-foreground focus:outline-none"
                    aria-label="Toggle Sidebar"
                    onClick={toggleSidebar}
                  >
                    <Menu className="h-6 w-6" />
                  </button>
          <h1 className="text-xl font-bold text-foreground">Dashify</h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
        </Button>



        <Show when="signed-in">
          <UserButton />
        </Show>
        <Show when="signed-out">
          <SignInButton />
        </Show>
        {/* <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-foreground">John Doe</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </div> */}
      </div>
    </header>
  )
}

