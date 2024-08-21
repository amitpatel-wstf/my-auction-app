"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token!==process.env.NEXT_PUBLIC_ADMIN_TOKEN) {
      router.push("/");
    }
  }, [router]);

  return <div>{children}</div>;
};

export default layout;
