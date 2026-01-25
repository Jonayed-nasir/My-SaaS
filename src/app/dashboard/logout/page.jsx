// app/dashboard/logout/page.js
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();
  useEffect(() => {
    // session clear logic
    router.push("/login");
  }, [router]);

  return <p>Logging out...</p>;
}
