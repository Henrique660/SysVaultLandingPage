import { useState, useRef, useCallback, type FormEvent, type ChangeEvent } from "react";
import { ArrowIcon } from "../ArrowIcon";
import "./Quote.css";

const PROJECT_TYPES = [
  "Landing page",
  "Marketplace",
  "SysVault SW",
  "HolySheet",
  "Outro",
];

const STEPS = [
  { num: "01", text: "Você conta o projeto — prazo, escopo e objetivos." },
  { num: "02", text: "Recebemos e propomos — proposta técnica e de investimento sob medida." },
  { num: "03", text: "Desenvolvemos e entregamos — com suporte e evolução contínua." },
];

export function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    const form = formRef.current;
    if (!form) return;
    const field = form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    if (field) {
      setInvalid((prev) => ({ ...prev, [name]: !field.checkValidity() }));
    }
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const form = formRef.current;
      if (!form) return;

      const newInvalid: Record<string, boolean> = {};
      for (const el of Array.from(form.elements)) {
        if ("name" in el && "checkValidity" in el) {
          const field = el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
          if (field.name) newInvalid[field.name] = !field.checkValidity();
        }
      }
      setInvalid(newInvalid);

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const data = new FormData(form);
      const nome = (data.get("nome") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      const telefone = (data.get("telefone") || "").toString().trim();
      const empresa = (data.get("empresa") || "").toString().trim();
      const tipo = (data.get("tipo") || "").toString().trim();
      const mensagem = (data.get("mensagem") || "").toString().trim();

      const lines = [
        "Olá! Gostaria de solicitar um orçamento.",
        "",
        `*Nome:* ${nome}`,
        `*E-mail:* ${email}`,
        telefone && `*Telefone:* ${telefone}`,
        empresa && `*Empresa:* ${empresa}`,
        `*Tipo de projeto:* ${tipo}`,
        "",
        `*Sobre o projeto:*`,
        mensagem,
      ].filter(Boolean);

      const text = encodeURIComponent(lines.join("\n"));
      window.open(`https://wa.me/5551990018827?text=${text}`, "_blank");

      setSubmitted(true);
      successRef.current?.focus({ preventScroll: true });
    },
    []
  );

  const resetForm = useCallback(() => {
    formRef.current?.reset();
    setSubmitted(false);
    setInvalid({});
  }, []);

  return (
    <section className="sec" id="orcamento">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-no">03</span>
          <div>
            <p className="eyebrow">Quero orçamento</p>
            <h2>Conte o que você precisa.</h2>
          </div>
        </div>

        <div className="quote-grid">
          <div className="quote-intro reveal">
            <p className="lead">
              Preencha o formulário ao lado com o essencial do seu projeto. Nossa equipe analisa e retorna com uma
              proposta sob medida.
            </p>
            <ol className="steps">
              {STEPS.map(({ num, text }) => (
                <li key={num}>
                  <b>{num}</b>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="form-shell reveal" style={{ "--d": ".1s" } as React.CSSProperties}>
            {!submitted ? (
              <form ref={formRef} noValidate onSubmit={handleSubmit}>
                <h3>Pedido de orçamento</h3>
                <p className="form-sub">
                  Campos marcados com <span className="req">*</span> são obrigatórios.
                </p>

                <FormField
                  label="Nome"
                  name="nome"
                  type="text"
                  autoComplete="name"
                  placeholder="Seu nome"
                  required
                  invalid={invalid.nome}
                  onChange={handleChange}
                />

                <FormField
                  label="E-mail"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="nome@empresa.com.br"
                  required
                  invalid={invalid.email}
                  onChange={handleChange}
                />

                <FormField
                  label="WhatsApp / Telefone"
                  name="telefone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(00) 00000-0000"
                  invalid={invalid.telefone}
                  onChange={handleChange}
                />

                <FormField
                  label="Empresa"
                  name="empresa"
                  type="text"
                  autoComplete="organization"
                  placeholder="Sua empresa"
                  invalid={invalid.empresa}
                  onChange={handleChange}
                />

                <div className={`form-row${invalid.tipo ? " invalid" : ""}`}>
                  <label htmlFor="f-tipo">
                    Tipo de projeto <span className="req">*</span>
                  </label>
                  <select id="f-tipo" name="tipo" required defaultValue="" onChange={handleChange}>
                    <option value="" disabled>
                      Escolha o tipo de projeto
                    </option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className={`form-row${invalid.mensagem ? " invalid" : ""}`}>
                  <label htmlFor="f-mensagem">
                    Sobre o projeto <span className="req">*</span>
                  </label>
                  <textarea
                    id="f-mensagem"
                    name="mensagem"
                    placeholder="Conte sobre o projeto: objetivos, prazo, escopo…"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="form-actions">
                  <button className="btn" type="submit">
                    Enviar pedido de orçamento
                    <ArrowIcon />
                  </button>
                </div>
              </form>
            ) : (
              <div className="form-success" ref={successRef} tabIndex={-1}>
                <div className="check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 12.5l5 5L20 6.5" />
                  </svg>
                </div>
                <h3>Pedido de orçamento enviado.</h3>
                <p>Recebemos suas informações e retornaremos pelo e-mail informado com uma proposta sob medida.</p>
                <button className="link-arrow" type="button" onClick={resetForm}>
                  Fazer novo pedido
                  <ArrowIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Reusable form field --- */
interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
  invalid?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FormField({ label, name, type, autoComplete, placeholder, required, invalid, onChange }: FormFieldProps) {
  const id = `f-${name}`;
  return (
    <div className={`form-row${invalid ? " invalid" : ""}`}>
      <label htmlFor={id}>
        {label} {required && <span className="req">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
}
