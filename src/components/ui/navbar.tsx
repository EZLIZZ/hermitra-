"use client";

import $axios from "@/lib/axios.instance";
import {
  Bell,
  LogOut,
  User,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await $axios.post("/auth/logout");
      if (res?.data?.redirect) {
        router.push(res.data.redirect);
      } else {
    window.location.href = "/";
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img src="/photos/logo.png" className="h-16"/>
          </Link>

          {/* Navigation items */}
          <div className="flex items-center space-x-6">
            <Link
              href="/dashboard/ultrasound"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              Ultrasound
            </Link>
            <Link
              href="dashboard/assessment"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              Assessment
            </Link>
            <Link
              href="/dashboard/doctors"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              Experts
            </Link>

            {/* Tracker Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1 font-medium text-gray-700 hover:text-pink-600">
                  <span className="font-medium">Tracker</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/period">Period</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/exercise">Exercise</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/nutrition">Nutrition</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Notifications */}
            <Button variant="ghost" className="relative text-gray-700 hover:text-pink-600">
              <Bell className="w-6 h-6" />
              {/* Ping badge */}
              <span className="absolute top-0 right-0 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-600"></span>
              </span>
            </Button>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold p-0"
                >
                  A
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/tracker">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}

function mobileNav(){
  return(
  <div className="sm:hidden flex ">

  </div>
  )
}