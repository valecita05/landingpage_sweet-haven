const ITEMS = [
  { name: "Pastel Berry", price: 70, img: "/img/pastelberry.jpeg", desc: "Bizcocho de vainilla con crema de queso y bayas vibrantes." },
  { name: "Torta de Chocolate", price: 89, img: "/img/chocomenta.jpg", desc: "Fudge de chocolate con 55% cacao." },
  { name: "New York style cheesecake", price: 99, img: "/img/chesecake.jpg", desc: "Cheesecake horneado con mermelada de berries." },
  { name: "Pistacho & Frambuesa", price: 85, img: "/img/tortapistacho.jpg", desc: "Relleno de jalea y pistachos." },
  { name: "Torta de Nutella", price: 79, img: "/img/nutella.jpg", desc: "Vainilla, chocolate y manjar." },
  { name: "Tarta Vasca", price: 99, img: "/img/vasca.jpeg", desc: "Receta tradicional vasca." }
];

function Products({ onAddToCart }) {
  return (
    <section className="sh-featured">
      <div className="container">
        <h2 className="section-title">
          Nuestros Pasteles Estrella <img src="/img/bunny.png" alt="" />
        </h2>
        <div className="grid">
          {ITEMS.map((it, i) => (
            <article key={i} className="card">
              <div className="thumb"><img src={it.img} alt={it.name} /></div>
              <div className="body">
                <h3>{it.name}</h3>
                <p className="desc">{it.desc}</p>
                <div className="meta">
                  <span className="price">S/{it.price}</span>
                  <button className="btn btn-chip" onClick={() => onAddToCart(it)}>
                    Añadir 🧺
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Products;