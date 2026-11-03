import { useEffect, useState } from "react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Certificaciones", href: "#certificaciones" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-secondary-800 bg-secondary-950 shadow-lg shadow-black/20"
          : "border-secondary-800/60 bg-secondary-950/85 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="http://imgfz.com/i/khGKQ0c.png"
            alt="Logo Grupo Ferroviario y Civil Fercisa"
            title="Grupo Ferroviario y Civil Fercisa"
            className="h-12 w-auto object-contain md:h-14"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium uppercase tracking-wide whitespace-nowrap text-background-100/80 transition-colors hover:text-accent-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-md bg-accent-500 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide whitespace-nowrap text-secondary-950 transition-colors hover:bg-accent-400"
          >
            Solicitar Cotización
            <i className="ri-arrow-right-up-line"></i>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-secondary-700 text-background-100 lg:hidden"
          aria-label="Abrir menú"
        >
          <i className={`ri-${open ? "close" : "menu"}-line text-xl`}></i>
        </button>
      </div>

      {open && (
        <div className="border-t border-secondary-800 bg-secondary-950 px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium uppercase tracking-wide text-background-100/80 transition-colors hover:text-accent-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent-500 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-secondary-950 transition-colors hover:bg-accent-400"
            >
              Solicitar Cotización
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}