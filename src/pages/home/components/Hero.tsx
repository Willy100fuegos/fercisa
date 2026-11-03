const stats = [
  { value: "2008", label: "Año de Fundación" },
  { value: "3", label: "Certificaciones ISO" },
  { value: "100%", label: "Proyectos Entregados" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-secondary-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12">
        {/* Panel izquierdo: contenido */}
        <div className="flex flex-col justify-center px-4 py-16 md:px-6 md:py-24 lg:col-span-6 lg:py-28">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
            <span className="h-px w-8 bg-accent-500"></span>
            Grupo Ferroviario y Civil, S.A. de C.V
          </span>

          <h1 className="mt-6 font-heading text-5xl font-bold leading-[0.95] text-background-50 md:text-7xl lg:text-8xl">
            FERCISA
            <span className="mt-3 block text-2xl font-bold leading-tight text-primary-200 md:text-4xl lg:text-5xl">
              Construcción de Escala Industrial
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-background-100/90 md:text-lg">
            Especialistas en construcción, mantenimiento y reparación de vías férreas, obra civil y
            electromecánica para la infraestructura que mueve a México.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-500 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide whitespace-nowrap text-secondary-950 transition-colors hover:bg-accent-400"
            >
              Nuestros Servicios
              <i className="ri-arrow-right-line"></i>
            </a>
            <a
              href="#nosotros"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-background-100/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide whitespace-nowrap text-background-50 transition-colors hover:border-accent-400 hover:text-accent-400"
            >
              Conócenos
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-secondary-800 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl font-bold text-background-50 md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-background-100/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Panel derecho: composición layered de imágenes */}
        <div className="relative min-h-[420px] lg:col-span-6 lg:min-h-0">
          <div className="absolute inset-0">
            <img
              src="http://imgfz.com/i/5AjgHGI.jpeg"
              alt="Mezcladora de concreto industrial Fercisa"
              title="Maquinaria industrial - Grupo Ferroviario y Civil"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-primary-900/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-950 via-secondary-950/20 to-transparent lg:bg-gradient-to-l"></div>
          </div>

          {/* Blueprint layered */}
          <div className="absolute bottom-6 left-6 hidden w-56 rotate-[-3deg] overflow-hidden rounded-md border border-background-100/20 bg-secondary-950 shadow-2xl shadow-black/40 md:block lg:w-64">
            <img
              src="https://readdy.ai/api/search-image?query=Highly%20detailed%20industrial%20engineering%20blueprint%20with%20technical%20schematic%20drawings%20of%20railway%20tracks%20steel%20bridges%20pipelines%20and%20heavy%20machinery%20precise%20white%20linework%20on%20a%20deep%20steel%20blue%20background%20architectural%20grid%20lines%20measurement%20annotations%20technical%20specifications%20high%20resolution&width=900&height=1200&seq=fercisa-blueprint-1&orientation=portrait"
              alt="Plano de ingeniería industrial Fercisa"
              title="Plano técnico de ingeniería - Fercisa"
              className="h-48 w-full object-cover object-top lg:h-56"
            />
            <div className="flex items-center gap-2 px-3 py-2 text-[10px] uppercase tracking-widest text-primary-300">
              <i className="ri-draft-line"></i>
              <span>Esquema de Ingeniería</span>
            </div>
          </div>

          <div className="absolute right-6 top-6 rounded-md border border-background-100/15 bg-secondary-950/70 px-4 py-2 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-400">Ingeniería de Alta Tecnología</p>
          </div>
        </div>
      </div>
    </section>
  );
}