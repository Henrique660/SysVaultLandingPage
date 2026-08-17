import "./Testimonials.css";

interface Testimonial {
  quote: string;
  author: string;
  authorUrl?: string;
  company?: string;
  hasTape?: boolean;
  delay?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "\u201cFiquei encantada com o meu site profissional, superou minhas expectativas \u2014 És um profissional incrível e parabéns pelo seu trabalho e por ajudar com suas técnicas e conhecimento. Tenho certeza que meu site vai bombar!\u201d",
    author: "Sabrina Biazi",
    authorUrl: "https://sabrina-biazi-psico.vercel.app/",
  },
  {
    quote:
      "\u201cO site já está trazendo resultados 🥰 \u2014 Fiquei muito satisfeita com o resultado! O site ficou profissional, bonito e, principalmente, já está trazendo resultados para o meu negócio. Dá para perceber o cuidado em cada detalhe. Super recomendo o trabalho!\u201c",
    author: "Evelyn Rodrigues",
    company: "",
    hasTape: true,
    delay: ".08s",
  },
  /*
  {
    quote:
      "\u201cTexto do depoimento do cliente \u2014 substituir pela cita\u00e7\u00e3o real do projeto atendido.\u201d",
    author: "[Nome do cliente]",
    company: "[Empresa]",
    delay: ".16s",
  },
  */
];

export function Testimonials() {
  return (
    <section className="sec" id="comentarios">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-no">04</span>
          <div>
            <p className="eyebrow">Comentários de clientes</p>
            <h2>Quem já fez um projeto conosco.</h2>
          </div>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <figure
              className="quote-card reveal"
              style={t.delay ? ({ "--d": t.delay } as React.CSSProperties) : undefined}
              key={i}
            >
              {t.hasTape && <span className="tape" aria-hidden="true" />}
              <blockquote>{t.quote}</blockquote>
              <figcaption className="quote-src">
                {t.authorUrl ? (
                  <a href={t.authorUrl} target="_blank" rel="noopener noreferrer">
                    <b>{t.author}</b>
                  </a>
                ) : (
                  <b>{t.author}</b>
                )}
                {t.company && <> · {t.company}</>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
