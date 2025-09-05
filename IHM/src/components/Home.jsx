import React from 'react'
import './HomeStyles.css'

const equipo = [
  {
    name: 'Toby',
    job: 'Cocker Spaniel',
    img: 'https://images.happypet.care/images/42922/cocker-spaniel-puppy-in-flowers.webp'
  },
  {
    name: 'Ancizar',
    job: 'Mejor amigo',
    img: 'https://media.istockphoto.com/id/1049296398/es/foto/retrato-de-perro-negro-cocker-spaniel.jpg?s=612x612&w=0&k=20&c=W36CZpt91HDteh7_alQ68nI0ix3D7QD38iJM1dhCduI='
  },
  {
    name: 'Juanda',
    job: 'Compañera de juegos',
    img: 'https://static.bainet.es/clip/e08c0dbf-55d0-428b-9a73-a654e6a39a4e_facebook-aspect-ratio_default_0.jpg'
  },
  {
    name: 'Julián',
    job: 'Hermano adoptivo',
    img: 'https://blog.terranea.es/wp-content/uploads/2021/06/springer-spaniel.jpg'
  }
];

function Home() {
  return (
    <div>
      {/* Navegación */}
      <nav className="navbar">
        <div className="navbar-container">
          <a className="navbar-brand" href="#home">
            <span role="img" aria-label="dog"></span> Toby
          </a>
          <ul className="navbar-links">
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#hobbies">Hobbies</a></li>
            <li><a href="#gallery">Galería</a></li>
            <li><a href="#team">Equipo</a></li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="header" id="home">
        <div className="header-content">
          <img
            className="imagenCocker"
            src="https://images.happypet.care/images/42922/cocker-spaniel-puppy-in-flowers.webp"
            alt="Cocker Spaniel Toby"
          />
          <h1 className="tituloUno">
            ¡Hola! Soy <span className="badge">Toby</span>
          </h1>
          <p className="subtitulo">Tu cocker spaniel favorito <span role="img" aria-label="star"></span></p>
          <a href="#about" className="btn btn-hero">Conóceme</a>
        </div>
      </header>

      {/* Sobre mí */}
      <section className="about card-ui" id="about">
        <h2>Sobre mí <span role="img" aria-label="paw">🐾</span></h2>
        <p>
          Soy un <b>cocker spaniel</b> juguetón y cariñoso. Me encanta correr, jugar con mi pelota y recibir muchas caricias.<br />
          Vivo para los paseos largos y las siestas. <span className="highlight">¡Siempre estoy listo para jugar!</span>
        </p>
        <div className="about-badges">
          <span className="badge badge-info">Cariñoso</span>
          <span className="badge badge-success">Juguetón</span>
          <span className="badge badge-warning">Dormilón</span>
        </div>
      </section>

      {/* Hobbies */}
      <section className="hobbies card-ui" id="hobbies">
        <h2>Mis hobbies favoritos <span role="img" aria-label="ball"></span></h2>
        <ul>
          <li>Perseguir pelotas</li>
          <li>Comer galletas</li>
          <li>Pasear por el parque</li>
          <li>Dormir en lugares cómodos</li>
          <li>Jugar con mi familia</li>
        </ul>
      </section>

      {/* Galería */}
      <section className="galeria card-ui" id="gallery">
        <h2>Galería <span role="img" aria-label="camera">📸</span></h2>
        <div className="galeria-imagenes">
          <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=200&q=80" alt="Toby jugando" />
          <img src="https://assets.orvis.com/is/image/orvisprd/AdobeStock_110099855" alt="Toby en el parque" />
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80" alt="Toby descansando" />
        </div>
      </section>

      {/* Equipo */}
      <section className="team card-ui" id="team">
        <h2>Mi equipo <span role="img" aria-label="friends">👨‍👩‍👧</span></h2>
        <div className="team-row">
          {equipo.map((d, i) => (
            <div key={d.name + i} className="team-card">
              <img src={d.img} alt={d.name} className="team-img" />
              <h4>{d.name}</h4>
              <span className="badge badge-team">{d.job}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 <b>Toby el Cocker Spaniel</b>. Hecho con <span role="img" aria-label="heart">❤️</span> para ti :*.</p>
      </footer>
    </div>
  )
}

export default Home