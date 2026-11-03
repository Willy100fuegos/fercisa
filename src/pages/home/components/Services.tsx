import { services } from "@/mocks/services";
import Reveal from "@/components/base/Reveal";

const spans = ["lg:col-span-2", "lg:col-span-1", "lg:col-span-1", "lg:col-span-2"];

export default function Services() {
  return (
    <section id="servicios" className="bg-secondary-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
                <span className="h-px w-8 bg-accent-500"></span>
                Nuestros Servicios
              </span>
              <h2 className="mt-5 max-w-2xl font-heading text-4xl font-bold leading-[1.05] text-background-50 md:text-6xl">
                Soluciones Integrales para la Industria
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-background-100/70">
              Servicios especializados con personal calificado y maquinaria propia para garantizar resultados de escala industrial.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100} className={spans[i]}>
              <article className="group relative h-[320px] overflow-hidden rounded-lg border border-secondary-800 md:h-[420px]">
                <img
                  src={service.image}
                  alt={service.title}
                  title={`${service.title} - Grupo Ferroviario y Civil`}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-950 via-secondary-950/40 to-secondary-950/10 transition-opacity duration-500 group-hover:from-secondary-950 group-hover:via-secondary-950/70"></div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="flex items-center gap-4">
                    <span className="font-heading text-4xl font-bold text-accent-400 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] md:text-5xl">
                      {service.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-md border border-background-100/30 bg-secondary-950/60 text-primary-300 backdrop-blur-sm">
                      <i className={`${service.icon} text-xl`}></i>
                    </div>
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-bold uppercase tracking-wide text-background-50 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-background-100/80 opacity-0 transition-all duration-500 ease-out group-hover:max-h-40 group-hover:opacity-100">
                    {service.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}