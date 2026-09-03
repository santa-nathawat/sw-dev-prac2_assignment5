import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/95 px-6 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between">
        <div className="flex items-center gap-2">
          <TopMenuItem href="/booking" label="Booking" />
        </div>
        <Image
          src="/img/logo.png"
          alt="Venue Explorer logo"
          width={48}
          height={48}
          priority
        />
      </nav>
    </header>
  );
}
