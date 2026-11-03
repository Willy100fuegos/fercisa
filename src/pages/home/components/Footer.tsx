const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Certificaciones", href: "#certificaciones" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t-4 border-accent-500 bg-secondary-950">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <a href="#inicio" className="inline-flex items-center gap-3">
              <img
                src="http://imgfz.com/i/khGKQ0c.png"
                alt="Logo Grupo Ferroviario y Civil Fercisa"
                title="Grupo Ferroviario y Civil Fercisa"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-background-100/60">
              Grupo Ferroviario y Civil, S.A. de C.V. Especialistas en construcción, mantenimiento y reparación de
              infraestructura ferroviaria, civil y electromecánica.
            </p>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-background-50">
              Enlaces Rápidos
            </p>
            <nav className="mt-5 grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm whitespace-nowrap text-background-100/60 transition-colors hover:text-accent-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-background-50">Contacto</p>
            <ul className="mt-5 space-y-3 text-sm text-background-100/60">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-2-line mt-0.5 text-accent-400"></i>
                <span>Río Bravo #108, Col: Coatzacoalcos CP: 96499, Veracruz. México.</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-phone-line text-accent-400"></i>
                <a href="tel:+529212149585" className="transition-colors hover:text-accent-400">
                  (921) 2149585
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-line text-accent-400"></i>
                <a href="mailto:gpofercisa@prodigy.net.mx" className="transition-colors hover:text-accent-400">
                  gpofercisa@prodigy.net.mx
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-secondary-800 pt-6 sm:flex-row">
          <p className="text-center text-sm text-background-100/50 sm:text-left">
            © {new Date().getFullYear()} Grupo Ferroviario y Civil, S.A. de C.V. Todos los derechos reservados.
          </p>
          <p className="text-xs uppercase tracking-widest text-background-100/40">
            Ingeniería · Ferroviario · Civil
          </p>
        </div>
      </div>
    </footer>
  );
}