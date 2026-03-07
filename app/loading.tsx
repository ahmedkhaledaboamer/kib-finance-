import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-400 animate-spin" />
          <div className="relative p-4 rounded-full">
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-3xl object-contain"
            />
          </div>
        </div>
        <p className="text-sm tracking-wide text-slate-300">
          Loading...
        </p>
      </div>
    </div>
  );
}
