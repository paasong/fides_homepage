// src/components/AutoPageScroll.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  to: string;
  back?: string;
}

export default function AutoPageScroll({ to, back }: Props) {
  const router = useRouter();

  useEffect(() => {
    let lastScrollTime = 0;

    const handleScroll = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime < 800) return;
      lastScrollTime = now;

      if (e.deltaY > 50) {
        router.push(to);
      } else if (e.deltaY < -50 && back) {
        router.push(back);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [to, back, router]);

  return null;
}