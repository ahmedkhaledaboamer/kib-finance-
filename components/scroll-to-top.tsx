"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 300;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="cursor-pointer fixed bottom-6 end-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-secondary shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary"
    >
      <ChevronUp className="h-6 w-6" aria-hidden />
    </button>
  );
}
