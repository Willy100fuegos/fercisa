import Reveal from "@/components/base/Reveal";

const pillars = [
  {
    icon: "ri-focus-3-line",
    title: "Misión",
    text: "Proporcionar servicios aplicando estándares de calidad que agreguen valor a nuestros clientes excediendo sus expectativas.",
  },
  {
    icon: "ri-eye-line",
    title: "Visión",
    text: "Ser una empresa líder a nivel nacional en constante mejora; organizada para responder con agilidad al cambio.",
  },
  {
    icon: "ri-heart-3-line",
    title: "Valores",
    text: "Responsabilidad, Trabajo en equipo, Sentido de Identidad, Liderazgo, Disciplina, Conducta ética y Experiencia.",
  },
];

const stagger = ["lg:mt-0", "lg:mt-12", "lg:mt-6"];

export default function About() {
  return (
    <section id="nosotros" className="texture-concrete bg-background-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent-600">
                <span className="h-px w-8 bg-accent-500"></span>
                Quiénes Somos
              </span>
              <h2 className="mt-5 font-heading text-4xl font-bold leading-[1.05] text-secondary-900 md:text-6xl">
                QUIÉNES SOMOS
                <span className="block text-primary-600">El Poder Detrás de la Infraestructura de México</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="border-l-2 border-accent-500 pl-5 text-base leading-relaxed text-foreground-600 md:text-lg">
                Creada en 2008, somos un grupo de profesionales de élite dedicados al área de Obra Civil, construcción,
                reparación y mantenimiento de vías férreas, y venta de materiales férreos.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 120} className={stagger[i]}>
              <div className="texture-steel group relative overflow-hidden rounded-lg border border-secondary-600/50 bg-secondary-900 p-8 transition-colors hover:border-accent-500/60">
                <span className="absolute -right-3 -top-6 font-heading text-8xl font-bold text-secondary-800/50 transition-colors group-hover:text-accent-500/10">
                  0{i + 1}
                </span>
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-md bg-accent-500/15 text-accent-400">
                    <i className={`${pillar.icon} text-2xl`}></i>
                  </div>
                  <h3 className="mt-6 font-heading text-3xl font-bold uppercase tracking-wide text-background-50">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-background-100/70">{pillar.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 overflow-hidden rounded-lg border border-background-300 bg-secondary-950">
            <div className="grid lg:grid-cols-12">
              <div className="flex flex-col justify-center gap-4 p-8 lg:col-span-4 md:p-10">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
                  <i className="ri-play-circle-line text-lg"></i>
                  Video Institucional
                </span>
                <h3 className="font-heading text-2xl font-bold text-background-50 md:text-3xl">
                  Conoce más sobre Grupo Fercisa
                </h3>
                <p className="text-sm leading-relaxed text-background-100/70">
                  Descubre la maquinaria, el talento y la escala de nuestras operaciones en el sector ferroviario y civil.
                </p>
              </div>
              <div className="relative aspect-video w-full lg:col-span-8">
                <iframe
                  src="https://www.youtube.com/embed/nVTnoitPxd0"
                  title="Video institucional Grupo Fercisa"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}