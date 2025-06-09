"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link href="/" className="navbar-brand">
          Timer Fitness
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {pathname === "/" && (
              <>
                <li className="nav-item">
                  <Link href="/sobre" className="nav-link">
                    Sobre
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/missaoevalores" className="nav-link">
                    Missao e Valores
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/contato" className="nav-link">
                    Contato
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item"></li>
            <li className="nav-item">
              <Link href="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
