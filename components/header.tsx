import { MainNav } from "@/components/main-nav";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-800/10 bg-gradient-to-b from-emerald-900/95 to-[#011c2c]/95 backdrop-blur supports-[backdrop-filter]:from-emerald-900/80 supports-[backdrop-filter]:to-[#011c2c]/80">
      <div className="container flex h-16 items-center justify-between justify-center space-x-4 min-h-[120px]">
        <div className="">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo/logo.png"
              width={150}
              height={150}
              alt="logo of ARBIChO"
            />
          </Link>
        </div>
        <MainNav />
      </div>
    </header>
  );
}
