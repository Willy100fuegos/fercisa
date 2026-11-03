export default function TopBar() {
  return (
    <div className="border-b border-secondary-800 bg-secondary-950 text-background-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-4 py-2 text-xs sm:flex-row md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          <a
            href="tel:+529212149585"
            className="flex items-center gap-2 whitespace-nowrap text-background-100/80 transition-colors hover:text-accent-400"
          >
            <i className="ri-phone-line"></i>
            <span>(921) 2149585</span>
          </a>
          <a
            href="mailto:gpofercisa@prodigy.net.mx"
            className="flex items-center gap-2 whitespace-nowrap text-background-100/80 transition-colors hover:text-accent-400"
          >
            <i className="ri-mail-line"></i>
            <span>gpofercisa@prodigy.net.mx</span>
          </a>
        </div>
        <div className="flex items-center gap-2 whitespace-nowrap text-background-100/80">
          <i className="ri-time-line"></i>
          <span>Lun – Vie · 8:00 – 17:00</span>
        </div>
      </div>
    </div>
  );
}