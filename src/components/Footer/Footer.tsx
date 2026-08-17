import "./Footer.css";

export function Footer() {
  return (
    <footer className="site-foot">
      <div className="container">
        <div className="foot-grid">
          <div>
            <p className="foot-brand">
              SysVault<em>SW</em>
            </p>
            <p className="foot-tag">
              Desenvolvimento de software por encomenda — landing pages, marketplaces, backoffice e PDV.
            </p>
          </div>
          <div className="foot-col">
            <h4>Contato</h4>
            <p>devhenri.silva@gmail.com</p>
            <p>(51) 990018827</p>
            <p>Atendimento on-line</p>
          </div>
          <div className="foot-col">
            <h4>Navegação</h4>
            <a href="#apresentacao">Apresentação</a>
            <a href="#produtos">Produtos</a>
            <a href="#orcamento">Quero orçamento</a>
            <a href="#comentarios">Comentários</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>&copy; 2026 SysVault SW</span>
          <span>Software sob encomenda</span>
          <div className="foot-socials">
            <a
              href="https://www.instagram.com/sysvaultsw/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
            <a
              href="https://github.com/repos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/henrique-silva-875969375"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
          <div className="foot-credit">
            <p>Desenvolvido por: <span>SysVault</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
