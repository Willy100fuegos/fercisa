import { useState } from "react";
import { projects } from "@/mocks/projects";
import Reveal from "@/components/base/Reveal";

const markers = [
  { label: "Sureste de México", icon: "ri-train-line" },
  { label: "Golfo de México", icon: "ri-building-3-line" },
  { label: "Costa de Veracruz", icon: "ri-anchor-line" },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="proyectos" className="bg-background-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent-600">
                <span className="h-px w-8 bg-accent-500"></span>
                Proyectos Destacados
              </span>
              <h2 className="mt-5 max-w-2xl font-heading text-4xl font-bold leading-[1.05] text-secondary-900 md:text-6xl">
                Experiencia que nos respalda
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-foreground-600">
              Proyectos de gran escala ejecutados bajo las más estrictas normas de calidad y seguridad industrial.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Mapa de ubicaciones */}
          <Reveal className="lg:col-span-3">
            <div className="relative h-full min-h-[480px] overflow-hidden rounded-lg border border-background-300 bg-secondary-900">
              <iframe
                src="https://maps.google.com/maps?q=Veracruz%2C%20Mexico&z=7&output=embed"
                title="Mapa de ubicaciones de proyectos Fercisa"
                className="absolute inset-0 h-full w-full opacity-90"
                style={{ border: 0, filter: "saturate(0.85) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>

              <div className="pointer-events-none absolute left-0 top-0 m-6 rounded-md border border-background-100/15 bg-secondary-950/80 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-400">
                  Ubicaciones de Proyectos
                </p>
                <p className="mt-1 text-sm text-background-100/80">Región Golfo y Sureste de México</p>
              </div>

              <div className="pointer-events-none absolute bottom-0 right-0 m-6 flex flex-col gap-2">
                {markers.map((marker) => (
                  <div
                    key={marker.label}
                    className="flex items-center gap-2 rounded-md border border-background-100/15 bg-secondary-950/80 px-3 py-2 backdrop-blur-sm"
                  >
                    <i className={`${marker.icon} text-accent-400`}></i>
                    <span className="text-xs whitespace-nowrap text-background-100/80">{marker.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Tarjetas de proyectos expandibles */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {projects.map((project, i) => {
              const isOpen = expanded === i;
              return (
                <Reveal key={project.title} delay={i * 100}>
                  <article
                    className={`overflow-hidden rounded-lg border transition-colors ${
                      isOpen ? "border-accent-500/60 bg-background-100" : "border-background-200 bg-background-50"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : i)}
                      className="flex w-full items-center gap-4 p-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="h-16 w-24 shrink-0 overflow-hidden rounded-md">
                        <img
                          src={project.image}
                          alt={project.title}
                          title={`${project.title} - Grupo Ferroviario y Civil`}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-accent-600">
                          {project.category}
                        </p>
                        <h3 className="mt-1 font-heading text-base font-bold leading-tight text-secondary-900">
                          {project.title}
                        </h3>
                      </div>
                      <i
                        className={`ri-arrow-down-s-line text-xl text-foreground-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      ></i>
                    </button>

                    {isOpen && (
                      <div className="border-t border-background-200 px-4 py-4">
                        <p className="text-sm leading-relaxed text-foreground-600">{project.description}</p>
                        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
                          <span className="inline-flex items-center gap-1.5 text-foreground-500">
                            <i className="ri-map-pin-2-line"></i>
                            {project.location}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-foreground-500">
                            <i className="ri-calendar-line"></i>
                            {project.year}
                          </span>
                        </div>
                      </div>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}