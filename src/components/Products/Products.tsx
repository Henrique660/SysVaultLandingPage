import { ArrowIcon } from "../ArrowIcon";
import "./Products.css";

import imgLanding from "../../img/lpmocky.png";
import imgMarketplace from "../../img/mktplaceMock.png";
import imgBackoffice from "../../img/SysVaultmock.png";

interface ProductData {
  number: string;
  title: string;
  description: string;
  caps: string[];
  chip: string;
  figure: string;
  visual: React.ReactNode;
  flip?: boolean;
}

const PRODUCTS: ProductData[] = [
  {
    number: "01 — Landing pages",
    title: "Sites de conversão sob medida.",
    description:
      "Apresentamos seu produto com design de alta performance e captamos contatos qualificados — do conceito ao SEO.",
    caps: ["Design sob medida", "UX e SEO", "Formulários e captação"],
    chip: "UI sob medida",
    figure: "FIG. 02 — Estrutura de landing sob medida",
    visual: <img src={imgLanding} alt="Mockup de landing page" className="product-img" />,
  },
  {
    number: "02 — Marketplace",
    title: "Plataforma para vender em escala.",
    description:
      "Catálogo, carrinho em um ambiente próprio, no seu domínio.",
    caps: ["Carrinho", "Catálogo", "Dashboards"],
    chip: "Ambiente próprio",
    figure: "FIG. 03 — Vitrine de catálogo",
    visual: <img src={imgMarketplace} alt="Mockup de marketplace" className="product-img" />,
    flip: true,
  },
  {
    number: "03 — Backoffice & PDV",
    title: "A operação do seu negócio num só sistema.",
    description:
      "Estoque, vendas, cadastro de colaboradores, registro de ponto com integração mobile e muito, muito mais!!!.",
    caps: ["Estoque e vendas", "PDV", "RH e Registro de Ponto Mobile"],
    chip: "Gestão integrada",
    figure: "FIG. 04 — Estoque SysVault SW",
    visual: <img src={imgBackoffice} alt="Mockup de backoffice e PDV" className="product-img" />,
  },
];

export function Products() {
  return (
    <section className="sec" id="produtos">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-no">02</span>
          <div>
            <p className="eyebrow">Produtos</p>
            <h2>Três frentes, um só time.</h2>
          </div>
        </div>

        <div className="products-list">
          {PRODUCTS.map((product, i) => (
            <article
              className={`product reveal${product.flip ? " product-flip" : ""}`}
              key={i}
            >
              <div className="product-meta">
                <span className="product-no">{product.number}</span>
                <h3>{product.title}</h3>
                <p className="product-desc">{product.description}</p>
                <ul className="product-caps">
                  {product.caps.map((cap) => (
                    <li key={cap}>{cap}</li>
                  ))}
                </ul>
              </div>
              <figure className="product-visual">
                <span className="product-chip torn" aria-hidden="true">
                  {product.chip}
                </span>
                {product.flip !== true && <span className="tape" aria-hidden="true" />}
                {product.visual}
                <figcaption className="product-cap">{product.figure}</figcaption>
              </figure>
            </article>
          ))}
        </div>

        <div className="products-cta reveal">
          <a className="link-arrow" href="#orcamento">
            Quero um projeto assim
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
