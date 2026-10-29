import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";
import { cn } from "@/lib/utils";

export const SiteLayout = () => {
  const { pathname, hash } = useLocation();
  const isHome = pathname === "/";
  useScrollToHash();

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className={cn("flex-1", !isHome && "pt-16 md:pt-20")}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};
