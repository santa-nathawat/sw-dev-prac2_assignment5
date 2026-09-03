export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-[url('/img/banner.jpg')] bg-cover bg-center px-6 py-24 text-white">
      <div className="absolute inset-0 bg-zinc-950/55" />
      <div className="relative mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-200">
          Venue Explorer
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          Find the right place for your next event.
        </h1>
      </div>
    </section>
  );
}
