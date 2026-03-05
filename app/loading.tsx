import Logo from "@/components/logo";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-full border-4 border-slate-700 border-t-emerald-400 animate-spin" />
          <div className="relative p-4 bg-slate-900 rounded-full shadow-lg shadow-emerald-500/20">
            <Logo size={80} />
          </div>
        </div>
        <p className="text-sm tracking-wide text-slate-300">
          Loading...
        </p>
      </div>
    </div>
  );
}
