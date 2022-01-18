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
							Mi nombre es Juan David García Rincón, tengo 21 años y me
							considero una persona muy creativa y autodidacta. Cuento con 3
							años de experiencia en el área del desarrollo Frontend trabajando
							en proyectos con empresas de diferentes lugares de Colombia, mi
							tecnología favorita para desarrollar es React junto con NextJS. Mi
							objetivo como profesional es desarrollar soluciones tecnológicas
							que generen un gran impacto en la sociedad aplicando mis
							conocimientos en tecnología y desarrollo software.
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
