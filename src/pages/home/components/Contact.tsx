import { useState, type FormEvent } from "react";
import Reveal from "@/components/base/Reveal";

const FORM_URL = "https://readdy.ai/api/form/da2l8fqamq5jpe1hrvl0";

const contactItems = [
  { icon: "ri-map-pin-2-line", label: "Dirección", value: "Río Bravo #108, Col: Coatzacoalcos CP: 96499, Veracruz. México." },
  { icon: "ri-phone-line", label: "Teléfonos", value: "(921) 2149585 / FAX (921) 2171476", href: "tel:+529212149585" },
  { icon: "ri-mail-line", label: "Email", value: "gpofercisa@prodigy.net.mx", href: "mailto:gpofercisa@prodigy.net.mx" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [messageLength, setMessageLength] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const honeypot = (formData.get("company_alt") as string) || "";
    if (honeypot.trim() !== "") {
      setStatus("success");
      setErrorMessage("");
      form.reset();
      setMessageLength(0);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const body = new URLSearchParams();
      formData.forEach((value, key) => {
        if (key === "company_alt") return;
        body.append(key, value as string);
      });

      const response = await fetch(FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      const responseText = await response.text();
      let parsed: { code?: string; message?: string; meta?: { message?: string; detail?: string } } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || "";
      const isSpam = /spam|form data is spam/i.test(responseText) || /spam/i.test(serverMsg);

      if (response.ok && parsed?.code === "OK" && !isSpam) {
        setStatus("success");
        form.reset();
        setMessageLength(0);
      } else {
        setStatus("error");
        setErrorMessage(serverMsg || "Ocurrió un error al enviar tu mensaje. Inténtalo de nuevo.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("No se pudo enviar el mensaje. Revisa tu conexión e inténtalo de nuevo.");
    }
  }

  return (
    <section id="contacto" className="bg-background-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent-600">
                <span className="h-px w-8 bg-accent-500"></span>
                Contacto
              </span>
              <h2 className="mt-5 max-w-2xl font-heading text-4xl font-bold leading-[1.05] text-secondary-900 md:text-6xl">
                Iniciemos tu próximo proyecto
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-foreground-600">
              Desarrollamos proyectos de construcción, mantenimiento y reparación. Atenderemos tu petición a la brevedad.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Panel formulario */}
          <Reveal>
            <div className="texture-concrete rounded-lg border border-background-300 bg-background-50 p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary-900 text-accent-400">
                      <i className={`${item.icon} text-lg`}></i>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-foreground-500">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-foreground-800 transition-colors hover:text-accent-600"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground-800">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <form
                id="form-contacto-fercisa"
                data-readdy-form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
                noValidate
              >
                <div>
                  <label htmlFor="nombre" className="mb-2 block text-sm font-semibold uppercase tracking-wide text-foreground-700">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    className="w-full rounded-md border border-background-200 bg-background-50 px-4 py-3 text-sm text-foreground-900 placeholder:text-foreground-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-100"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold uppercase tracking-wide text-foreground-700">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@correo.com"
                      className="w-full rounded-md border border-background-200 bg-background-50 px-4 py-3 text-sm text-foreground-900 placeholder:text-foreground-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="mb-2 block text-sm font-semibold uppercase tracking-wide text-foreground-700">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      placeholder="(000) 000 0000"
                      className="w-full rounded-md border border-background-200 bg-background-50 px-4 py-3 text-sm text-foreground-900 placeholder:text-foreground-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-100"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="mb-2 block text-sm font-semibold uppercase tracking-wide text-foreground-700">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    maxLength={500}
                    onChange={(e) => setMessageLength(e.target.value.length)}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="w-full resize-none rounded-md border border-background-200 bg-background-50 px-4 py-3 text-sm text-foreground-900 placeholder:text-foreground-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-100"
                  />
                  <p className="mt-1 text-right text-xs text-foreground-400">{messageLength}/500</p>
                </div>

                <input
                  type="text"
                  name="company_alt"
                  className="readdy-hp-field"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  readOnly
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide whitespace-nowrap text-secondary-950 transition-colors hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
                  <i className="ri-send-plane-line"></i>
                </button>

                {status === "success" && (
                  <p className="rounded-md bg-accent-100 px-4 py-3 text-sm text-accent-900">
                    Gracias por tu mensaje. Nos pondremos en contacto contigo a la brevedad.
                  </p>
                )}
                {status === "error" && (
                  <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">{errorMessage}</p>
                )}
              </form>
            </div>
          </Reveal>

          {/* Panel mapa */}
          <Reveal delay={100}>
            <div className="h-full overflow-hidden rounded-lg border-4 border-secondary-900 bg-secondary-900">
              <div className="relative h-full min-h-[480px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.378202716449!2d-94.4229675!3d18.120953399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85e982414eb07aa9%3A0x59bbab04faac01a2!2sGrupo%20Ferroviario%20y%20Civil!5e1!3m2!1ses-419!2smx!4v1787122108007!5m2!1ses-419!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  className="absolute inset-0 h-full w-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Ubicación Grupo Ferroviario y Civil"
                ></iframe>
                <div className="pointer-events-none absolute left-4 top-4 rounded-md border border-background-100/15 bg-secondary-950/85 px-4 py-2 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-400">
                    Coatzacoalcos, Veracruz
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}