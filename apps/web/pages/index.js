import Link from 'next/link';
import { products } from '../data/products';

export default function Home() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Hijabi's Stop</h1>
        <p>Modest fashion for hijabi lifestyles</p>
      </header>
      <section className="grid">
        {products.slice(0, 6).map((p) => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
