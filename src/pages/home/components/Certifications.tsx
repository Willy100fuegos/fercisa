import Reveal from "@/components/base/Reveal";

const certifications = [
  { src: "http://imgfz.com/i/agpq0QT.jpeg", alt: "Certificación ISO 9001:2015", label: "ISO 9001:2015", detail: "Gestión de Calidad" },
  { src: "http://imgfz.com/i/zqm7pKO.jpeg", alt: "Certificación ISO 14001:2015", label: "ISO 14001:2015", detail: "Gestión Ambiental" },
  { src: "http://imgfz.com/i/YF2Xwnu.jpeg", alt: "Certificación ISO 45001:2018", label: "ISO 45001:2018", detail: "Seguridad y Salud" },
];

export default function Certifications() {
  return (
    <section id="certificaciones" className="bg-background-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent-600">
              <span className="h-px w-8 bg-accent-500"></span>
              Política de Calidad
              <span className="h-px w-8 bg-accent-500"></span>
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-bold leading-[1.05] text-secondary-900 md:text-6xl">
              Estándares de Clase Mundial
              <span className="block text-primary-600">Nuestro Compromiso con la Excelencia</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-foreground-600">
              Estamos comprometidos a proporcionar servicios de excelencia apoyados en un sistema de gestión de calidad
              ISO 9001:2015, ISO 14001:2015 e ISO 45001:2018.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="texture-steel mt-14 overflow-hidden rounded-lg border border-secondary-800 bg-secondary-900 p-8 md:p-14">
            <div className="grid gap-10 md:grid-cols-3 md:justify-items-center">
              {certifications.map((cert, i) => (
                <div key={cert.alt} className="flex w-full max-w-[240px] flex-col items-center gap-5 text-center">
                  <div className="relative flex h-48 w-full items-center justify-center rounded-md border border-background-200 bg-background-50 p-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.35)]">
                    <span className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 font-heading text-sm font-bold text-secondary-950">
                      {i + 1}
                    </span>
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      title={cert.alt}
                      className="max-h-40 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-xl font-bold uppercase tracking-wide text-background-50">
                      {cert.label}
                    </p>
                    <p className="mt-1 text-sm text-background-100/60">{cert.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}