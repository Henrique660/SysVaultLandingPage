import { useRef, useCallback } from "react";
import { useScrolled } from "../../hooks/useScrolled";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import "./Header.css";

const NAV_ITEMS = [
  { href: "#apresentacao", label: "Apresentação" },
  { href: "#produtos", label: "Produtos" },
  { href: "#orcamento", label: "Orçamento" },
  { href: "#comentarios", label: "Comentários" },
] as const;

export function Header() {
  const scrolled = useScrolled();
  const activeSpy = useScrollSpy(["apresentacao", "produtos", "orcamento", "comentarios"]);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = useCallback(() => {
    const nav = navRef.current;
    const btn = toggleRef.current;
    if (!nav || !btn) return;

    const open = nav.classList.toggle("open");
    btn.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  }, []);

  const closeMenu = useCallback(() => {
    const nav = navRef.current;
    const btn = toggleRef.current;
    if (!nav || !btn) return;

    nav.classList.remove("open");
    btn.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }, []);

  return (
    <header className={`site-head${scrolled ? " is-scrolled" : ""}`} id="topo">
      <div className="container head-inner">
        <a className="brand" href="#apresentacao">
          SysVault<em>SW</em>
        </a>
        <span className="head-meta">Desenvolvimento sob encomenda</span>
        <nav className="nav" id="nav" ref={navRef} aria-label="Navegação principal">
          {NAV_ITEMS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={activeSpy.current === href.slice(1) ? "is-active" : ""}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          className="nav-toggle"
          ref={toggleRef}
          type="button"
          aria-label="Abrir menu"
          aria-expanded="false"
          aria-controls="nav"
          onClick={toggleMenu}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
