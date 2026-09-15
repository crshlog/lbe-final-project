export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Flexbox untuk navigasi */}
      <nav className="flex items-center justify-between p-6 bg-gray-300">
        <span className="text-2xl font-bold font-Iosevka Charon text-slate-900">PUSING</span>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-xl font-semibold font-Iosevka Charon text-slate-600 hover:text-slate-900">
            Jadwal
          </a>
          <a
            href="#"
            className="text-xl font-semibold font-Iosevka Charon text-slate-600 hover:text-slate-900">
            Upcoming
          </a>
          <a
            href="#"
            className="text-xl font-semibold font-Iosevka Charon text-slate-600 hover:text-slate-900">
            Lomba
          </a>
          <a
            href="#"
            className="text-xl font-semibold font-Iosevka Charon text-slate-600 hover:text-slate-900">
            Talk show
          </a>
        </div>
      </nav>

      {/* Grid untuk daftar card */}
      <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Artikel 1</h2>
          <p className="mt-2 text-sm text-slate-600">
            Contoh penerapan Flexbox dan Grid pada Next.js dengan Tailwind CSS.
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Artikel 2</h2>
          <p className="mt-2 text-sm text-slate-600">
            Layout responsif otomatis menyesuaikan ukuran layar mobile hingga
            desktop.
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Artikel 3</h2>
          <p className="mt-2 text-sm text-slate-600">
            Menggabungkan elemen semantic HTML dengan utility classes Tailwind.
          </p>
        </article>
      </section>
    </main>
  );
}