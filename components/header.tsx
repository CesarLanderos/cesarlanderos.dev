import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <button
          type="button"
          className="navbar-burger burger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          tabIndex={0}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div className={`navbar-menu is-shadowless ${isMenuOpen && "is-active"}`}>
        <div className="navbar-end has-text-centered">
          <div className="navbar-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className="navbar-item">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </div>
          <div className="navbar-item">
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
