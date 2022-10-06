import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Talentos</h2>
          <p>
            Dedicación. Expertise. Pasión.
          </p>
        </div>
        <div className='row'>

        <div className="container talent-item">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/talento/01.jpg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text talent-description">
                <h2>Mel Krywoj</h2>
                <h3>Apasionada por lo que hace, en su libertad elige este deporte una y otra vez.</h3>
                <p>Hoy es una promesa del tenis Argentino y sueña con pisar las "grandes ligas" a nivel internacional 
                  postulándose en el top 50 del mundo.</p>
                <p>Correr, aguantar y jugar con variantes son sus fuertes. Su vida está dedicada al tenis, lo sufre, lo transpira, 
                  lo piensa, lo ama y lo vuelve a elegir cada vez que golpea una pelota.</p>
                <a href='https://www.youtube.com/watch?v=BR4yI8vLgX0'>
                  <i className='fa fa-youtube'></i> Ver presentación
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container talent-item">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/talento/03.jpg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text talent-description">
                <h2>Mora Robirosa</h2>
                <h3>Espera poder llegar a mucha gente con su voz, y con lo que tiene para transmitir.</h3>
                <p>Tiene mas de 15.000 reproducciones en Spotify donde publicó 3 sencillos y 2 colaboraciones con otros artistas. </p>
                <p>Mora Robirosa es de Buenos Aires, Argentina y apenas está empezando a crecer en este largo camino como artista. 
                  Escribe su música traduciendo sus emociones a palabras y de palabras a melodías que concluyen en canciones.</p>
                <a href='https://www.youtube.com/watch?v=AZZgZVyqZN0'>
                  <i className='fa fa-youtube'></i> Ver presentación
                </a>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}
