import React from 'react'
import { Link } from 'react-router-dom'
// import me from '../img/me.jpg'

function SobreMi() {
	return (
		<main className="section-page">
			<div className="sobremi">
				<div className="gradient-border" id="box">
					<div className="sobre-mi-info">
						<h1>
							Sobre mí <>🚀</>
						</h1>
						<br />
						<p>
							Hola, mi nombre es Juan David García Rincón, tengo 20 años,
							actualmente trabajo como desarrollador Frontend en Waco Services.
							Me considero una persona muy creativa y autodidacta. En 2019 gane
							una Beca para hacer parte del programa de Frontend de Facebook
							Developer Circles y Platzi. A la fecha tengo conocimientos amplios
							en HTML5, CSS3 y JavaScript junto con librerías como React JS,
							manejadores de estados como Redux, Frameworks como NextJS para
							hacer server side rendering, preprocesadores de CSS como SASS,
							Responsive Design, maquetación con CSS Grid Layoud y Flexbox, etc.
						</p>
						<br />
						<br />
						<h1>
							Mis habilidades <>🌌</>
						</h1>
						<br />
						<div className="list-info-sobremi">
							<ul>
								<li>• React</li>
								<li>• Redux</li>
								<li>• NextJS</li>
								<li>• Firebase</li>
							</ul>
							<ul>
								<li>• HTML5</li>
								<li>• CSS3</li>
								<li>• SASS</li>
								<li>• JavaScript</li>
							</ul>
							<ul>
								<li>• Git / GitHub</li>
								<li>• NodeJS</li>
								<li>• Express</li>
								<li>• MongoDB</li>
							</ul>
							<ul>
								<li>• MySQL</li>
								<li>• UI / UX</li>
								<li>• Figma</li>
								<li>• Photoshop</li>
							</ul>
						</div>
						<div className="sobre-mi-info__links">
							<a
								className="download-btn"
								href="/docs/cv-juan-garcia.pdf"
								download
							>
								<span className="download-icon"></span>Descargar CV
							</a>
							<Link className="download-btn white" to="/proyectos">
								Ver Proyectos
							</Link>
						</div>
					</div>
					<div className="sobre-mi-img">
						<img src="/img/me.jpg" /* {me} */ alt="Juanda Garcia" />
					</div>
				</div>
			</div>
		</main>
	)
}

export default SobreMi
