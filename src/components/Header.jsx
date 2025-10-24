import React from "react";

function Header({ cartCount, onCartClick, onUserClick }) {
  return (
    <header className="sh-header">
      <div className="container">
        <nav className="sh-header__nav">
          <ul className="left">
            <li><a href="#">Menú</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Nuestra Misión</a></li>
            <li><a href="#">Personalizados</a></li>
          </ul>

          <div className="brand">
            <div className="brand__sup">Sweet</div>
            <div className="brand__main">Ha-ven</div>
            <div className="brand__underline"></div>
          </div>

          <ul className="right">
            <li><a href="#" aria-label="Buscar">🔍</a></li>
            <li>
              <button
                className="icon-btn"
                onClick={onUserClick}
                aria-label="Usuario"
              >
                👤
              </button>
            </li>
            <li><a href="#" aria-label="Favoritos">♡</a></li>
            <li>
              <button
                className="icon-btn"
                onClick={onCartClick}
                aria-label="Carrito"
              >
                🛒
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;