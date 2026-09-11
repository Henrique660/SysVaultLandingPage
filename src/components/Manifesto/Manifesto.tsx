import "./Manifesto.css";

const SERVICES = [
  "Landing pages de alta conversão",
  "Marketplaces multi-vendedor",
  "Backoffice e PDV integrados",
  "Integrações e automações",
  "Manutenção e evolução contínua",
  "Suporte próximo ao cliente",
];

export function Manifesto() {
  return (
    <section className="sec manifesto-sec">
      <div className="container">
        <div className="manifesto">
          <p className="manifesto-statement reveal">
            Projetos sob encomenda não são produtos de prateleira. Começamos pelo seu problema, desenhamos a solução em
            conjunto e entregamos código, design e suporte — sem caixas-pretas.
          </p>
          <ul className="manifesto-list reveal" style={{ "--d": ".1s" } as React.CSSProperties}>
            {SERVICES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
