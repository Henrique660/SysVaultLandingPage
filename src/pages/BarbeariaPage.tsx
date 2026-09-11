import { useEffect, useState } from "react";
import "./BarbeariaPage.css";

import homeShot from "../page/WhatsApp-Image-2026-09-11-at-14.26.28-_3_.jpeg";
import loginShot from "../page/WhatsApp-Image-2026-09-11-at-14.26.28-_2_.jpeg";
import servicesShot from "../page/WhatsApp-Image-2026-09-11-at-14.26.28-_1_.jpeg";
import timesShot from "../page/WhatsApp-Image-2026-09-11-at-14.26.28.jpeg";

const screenshots = [
  { image: homeShot, alt: "Tela inicial do app da barbearia", caption: "Entrada e instalação do app" },
  { image: loginShot, alt: "Tela de login do app da barbearia", caption: "Acesso à conta do cliente" },
  { image: servicesShot, alt: "Tela de escolha de barbeiro e serviços", caption: "Serviços e profissional" },
  { image: timesShot, alt: "Tela de seleção de data e horários", caption: "Data e horários disponíveis" },
];

export function BarbeariaPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    document.title = "Barbearia Original — Produto digital | SysVault SW";
    return () => {
      document.title = "SysVault SW";
    };
  }, []);

  return (
    <div className="barbearia-page">
      <header className="barbearia-shell barbearia-topbar">
        <a className="barbearia-brand" href="/">
          <span className="barbearia-brand-mark">BO</span>
          <span>Barbearia Original</span>
        </a>
        <nav className="barbearia-nav" aria-label="Navegação do produto">
          <a href="#produto">Produto</a>
          <a href="#telas">Telas</a>
          <a href="#fluxo">Fluxo</a>
          <a href="#pwa">PWA mobile</a>
          <a className="barbearia-nav-cta" href="#contato">Ver projeto ↗</a>
        </nav>
      </header>

      <main>
        <section className="barbearia-shell barbearia-hero" id="inicio">
          <div>
            <p className="barbearia-eyebrow">Case de produto · 2026</p>
            <h1>Agendar ficou <span>mais simples.</span></h1>
            <p className="barbearia-hero-copy">
              Uma experiência digital que conecta clientes, barbeiros e operação em um só lugar —
              do primeiro toque ao horário confirmado.
            </p>
            <div className="barbearia-actions">
              <a className="barbearia-btn barbearia-btn-primary" href="#produto">
                Explorar o produto <span aria-hidden="true">↓</span>
              </a>
              <button className="barbearia-btn barbearia-btn-quiet" type="button" onClick={() => setModalOpen(true)}>
                Agendar demonstração
              </button>
            </div>
            <p className="barbearia-hero-note">Produto conceitual para portfólio · interface responsiva + PWA</p>
          </div>

          <div className="barbearia-product-stage" aria-label="Prévia das interfaces do produto">
            <span className="barbearia-stage-label">duas visões · um ecossistema</span>
            <div className="barbearia-shot barbearia-shot-secondary">
              <img src={servicesShot} alt="Tela de escolha de barbeiro e serviços" />
              <span>Escolha do serviço</span>
            </div>
            <div className="barbearia-shot barbearia-shot-main">
              <img src={homeShot} alt="Tela inicial do app da barbearia" />
              <span>Experiência mobile</span>
            </div>
          </div>
        </section>

        <section className="barbearia-shell barbearia-section" id="produto">
          <div className="barbearia-section-head">
            <div>
              <p className="barbearia-eyebrow">A ideia central</p>
              <h2>Menos espera.<br />Mais presença.</h2>
            </div>
            <p className="barbearia-section-intro">
              A plataforma traduz a experiência premium da barbearia para o digital sem tornar o cuidado impessoal.
            </p>
          </div>
          <div className="barbearia-pillars">
            <article><span>01</span><h3>Para quem agenda</h3><p>Escolha serviço, profissional e horário em poucos passos, com uma confirmação que não deixa dúvidas.</p></article>
            <article><span>02</span><h3>Para quem atende</h3><p>Uma agenda legível para organizar a cadeira, antecipar a rotina e manter cada atendimento no ritmo certo.</p></article>
            <article><span>03</span><h3>Para quem gerencia</h3><p>Indicadores operacionais para entender a casa, distribuir a equipe e tomar decisões com contexto.</p></article>
          </div>
        </section>

        <section className="barbearia-shell barbearia-section" id="telas">
          <div className="barbearia-section-head">
            <div>
              <p className="barbearia-eyebrow">Produto em uso</p>
              <h2>Telas que<br />guiam a escolha.</h2>
            </div>
            <p className="barbearia-section-intro">
              Capturas reais do aplicativo mostram como a experiência conduz o cliente do acesso ao horário confirmado.
            </p>
          </div>
          <div className="barbearia-screens-grid">
            {screenshots.map((screen) => (
              <figure key={screen.caption}>
                <div><img src={screen.image} alt={screen.alt} /></div>
                <figcaption>{screen.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="barbearia-flow" id="fluxo">
          <div className="barbearia-shell">
            <div className="barbearia-section-head">
              <div>
                <p className="barbearia-eyebrow">Fluxo principal</p>
                <h2>Do toque<br />à cadeira.</h2>
              </div>
              <p className="barbearia-section-intro">
                O produto reduz fricção nos momentos que mais importam: descobrir, decidir e aparecer.
              </p>
            </div>
            <div className="barbearia-flow-grid">
              <div className="barbearia-flow-list">
                <article><b>01</b><div><h3>Descobrir</h3><p>Serviços, valores e profissionais apresentados com clareza, sem menus escondidos.</p></div></article>
                <article><b>02</b><div><h3>Escolher</h3><p>Disponibilidade real por profissional e uma seleção de horário que cabe no polegar.</p></div></article>
                <article><b>03</b><div><h3>Confirmar</h3><p>Resumo direto, lembrete e acesso rápido à próxima visita, mesmo sem abrir o navegador.</p></div></article>
              </div>
              <div className="barbearia-desktop-screen">
                <div className="barbearia-browser-bar"><i /><i /><i /></div>
                <div className="barbearia-screen-content">
                  <aside><strong>ORIGINAL</strong><span className="active">Agenda</span><span>Clientes</span><span>Equipe</span><span>Relatórios</span></aside>
                  <div className="barbearia-screen-main">
                    <h3>Agenda da equipe</h3>
                    <p>Organize a operação sem perder o olhar para o atendimento.</p>
                    <div className="barbearia-calendar">
                      {["SEG 23", "TER 24", "QUA 25", "QUI 26", "SEX 27"].map((day, index) => (
                        <div key={day}><em>{day}</em><mark>{index % 2 === 0 ? "09:00" : "10:30"}<br />{index % 2 === 0 ? "Bruno" : "Lucas"}</mark>{index !== 2 && <mark>{index % 2 === 0 ? "14:30" : "16:00"}<br />Rafael</mark>}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="barbearia-shell barbearia-section barbearia-install" id="pwa">
          <div className="barbearia-install-copy">
            <p className="barbearia-eyebrow">Uma experiência que acompanha</p>
            <h2>Instale.<br />Abra.<br />Agende.</h2>
            <p>Como PWA, o produto combina a velocidade de um site com a conveniência de um app: sem loja, sem download pesado, sempre a um toque de distância.</p>
            <button className="barbearia-btn barbearia-btn-quiet" type="button" onClick={() => setInstalled(true)}>
              {installed ? "Atalho adicionado ✓" : "Simular instalação ↗"}
            </button>
          </div>
          <div className="barbearia-install-card">
            <div><strong>Barbearia Original</strong><span>● pronto para instalar</span></div>
            <article><b>1</b><p><strong>Abra pelo navegador</strong>O cliente acessa o link da barbearia pelo celular.</p></article>
            <article><b>2</b><p><strong>Adicione à tela inicial</strong>Um toque transforma a experiência em atalho nativo.</p></article>
            <article><b>3</b><p><strong>Volte quando quiser</strong>A agenda e o próximo horário ficam sempre por perto.</p></article>
          </div>
        </section>
      </main>

      <footer className="barbearia-shell barbearia-footer" id="contato">
        <span><strong>Barbearia Original</strong> · conceito de produto digital</span>
        <span>Estratégia · UX/UI · PWA</span>
        <a href="/">Voltar para SysVault ↗</a>
      </footer>

      {modalOpen && (
        <div className="barbearia-modal-backdrop" role="presentation" onClick={(event) => event.target === event.currentTarget && setModalOpen(false)}>
          <div className="barbearia-modal" role="dialog" aria-modal="true" aria-labelledby="barbearia-modal-title">
            <button type="button" className="barbearia-close" onClick={() => setModalOpen(false)} aria-label="Fechar">×</button>
            {submitted ? (
              <>
                <p className="barbearia-eyebrow">Tudo certo</p>
                <h2 id="barbearia-modal-title">Pedido recebido.</h2>
                <p>A demonstração foi registrada para este protótipo. Obrigado pelo interesse.</p>
              </>
            ) : (
              <>
                <p className="barbearia-eyebrow">Demonstração</p>
                <h2 id="barbearia-modal-title">Vamos marcar uma conversa?</h2>
                <p>Deixe seus dados e a equipe retorna com uma visão guiada do produto.</p>
                <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
                  <label htmlFor="barbearia-name">Seu nome</label>
                  <input id="barbearia-name" name="name" required autoComplete="name" />
                  <label htmlFor="barbearia-email">E-mail</label>
                  <input id="barbearia-email" name="email" type="email" required autoComplete="email" />
                  <label htmlFor="barbearia-role">Você está buscando</label>
                  <select id="barbearia-role" name="role">
                    <option>Conhecer o produto</option>
                    <option>Uma solução para minha barbearia</option>
                    <option>Uma parceria de design</option>
                  </select>
                  <button className="barbearia-btn barbearia-btn-submit" type="submit">Solicitar demonstração</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
