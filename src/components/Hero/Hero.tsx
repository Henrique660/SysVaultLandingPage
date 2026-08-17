import { ArrowIcon } from "../ArrowIcon";
import "./Hero.css";
import "./Marquee.css";

export function Hero() {
  return (
    /*teste*/
    <section className="hero" id="apresentacao">
      <div className="container">
        <div className="hero-grid">
          <div>
            <p className="hero-kicker reveal">
              <span className="mono">SysVault SW</span>
              <span className="mono">—</span>
              <span className="mono">Dev sob encomenda</span>
            </p>
            <h1 className="reveal" style={{ "--d": ".06s" } as React.CSSProperties}>
              Software sob medida, do primeiro clique ao fechamento do caixa.
            </h1>
            <p className="lead reveal" style={{ "--d": ".12s" } as React.CSSProperties}>
              Landing pages, marketplaces e software de backoffice com PDV integrado — projetados para o seu negócio,
              do planejamento à operação.
            </p>
            <div className="hero-actions reveal" style={{ "--d": ".18s" } as React.CSSProperties}>
              <a className="btn" href="#orcamento">
                Quero um orçamento
                <ArrowIcon />
              </a>
              <a className="link-arrow" href="#produtos">
                Ver produtos
                <ArrowIcon />
              </a>
            </div>
            <p className="hero-meta reveal" style={{ "--d": ".24s" } as React.CSSProperties}>
              <span>Landing pages</span>
              <span>Marketplaces</span>
              <span>Backoffice &amp; PDV</span>
            </p>
          </div>

          <HeroFigure />
        </div>
      </div>

      <Marquee />
    </section>
  );
}

function HeroFigure() {
  return (
    <figure className="hero-fig reveal" style={{ "--d": ".14s" } as React.CSSProperties}>
      <div className="fig-stack">
        <span className="fig-ghost" aria-hidden="true" />
        <div className="fig-paper">
          <span className="fig-no" aria-hidden="true">01</span>
          <span className="fig-tape" aria-hidden="true" />
          <div className="mock">
            <div className="mock-bar">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="mock-addr">sysvaultsw.com.br</span>
            </div>
            <div className="mock-body">
              <p className="mock-kicker">Feito sob encomenda</p>
              <p className="mock-title">
                Do clique
                <br />
                ao caixa.
              </p>
              <div className="mock-row">
                <span className="bar w60" />
                <span className="bar w40" />
              </div>
              <span className="mock-btn">Solicitar projeto</span>
            </div>
          </div>
          <span className="fig-shape torn" aria-hidden="true" />
          <div className="fig-note">
            <p className="fig-note-title">Um só parceiro de tecnologia</p>
            <p className="fig-note-text">Sites que vendem, plataformas que operam e um sistema que fecha o dia.</p>
          </div>
          <span className="fig-stamp" aria-hidden="true">Sob encomenda</span>
        </div>
      </div>
      <figcaption className="fig-cap">FIG. 01 — Landing, marketplace e PDV no mesmo projeto</figcaption>
    </figure>
  );
}

function Marquee() {
  const items = ["Landing pages", "Marketplaces", "Backoffice & PDV", "Sob encomenda", "Do planejamento à operação"];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={`a-${i}`}>{item}</span>
        ))}
        {items.map((item, i) => (
          <span key={`b-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
