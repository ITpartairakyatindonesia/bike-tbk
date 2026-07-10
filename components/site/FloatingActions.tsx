"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="fixed z-40 bottom-5 right-5 flex flex-col gap-3">
      {/* WhatsApp bubble hidden temporarily */}
      {/* <a
        href="https://wa.me/6281200000000"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="h-13 w-13 h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-105 transition"
      >
        <MessageCircle className="h-6 w-6" />
      </a> */}
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "h-11 w-11 grid place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant hover:bg-primary-deep transition",
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </div>
  );
}
