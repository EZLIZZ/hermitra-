"use client";

import Navsign from "@/components/ui/navsign";
import Navbar from "@/components/ui/navbar";

export default function Nav({
  isLoggedIn,
}: {
  isLoggedIn: boolean;
}) {
  return isLoggedIn ? <Navbar /> : <Navsign />;
}
