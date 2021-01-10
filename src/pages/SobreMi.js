import React from 'react'
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
							Responsive Design), maquetación con CSS Grid Layoud y Flexbox,
							etc.
						</p>
						<br />
						<br />
						<h1>
							Mis habilidades <>🌌</>
						</h1>
						<br />
						<p>
							He tomado varios cursos en línea a medida que avanzo en mis
							habilidades. Algunos de estos cursos incluyen{' '}
							<a
								className="noSelect"
								target="_blank"
								rel="noopener noreferrer"
								href="https://platzi.com/clases/html5-css3/"
							>
								<strong>Desarrollo web online</strong>
							</a>
							{''},{' '}
							<a
								className="noSelect"
								target="_blank"
								rel="noopener noreferrer"
								href="https://platzi.com/clases/responsive-design/"
							>
								<strong>Responsive Design</strong>
							</a>
							{''},{' '}
							<a
								className="noSelect"
								target="_blank"
								rel="noopener noreferrer"
								href="https://platzi.com/clases/fundamentos-javascript/"
							>
								<strong>Fundamentos de JavaScript</strong>
							</a>
							{''},{' '}
							<a
								className="noSelect"
								target="_blank"
								rel="noopener noreferrer"
								href="https://platzi.com/clases/react/"
							>
								<strong>React.js</strong>
							</a>
							{''},{' '}
							<a
								className="noSelect"
								target="_blank"
								rel="noopener noreferrer"
								href="https://platzi.com/clases/redux/"
							>
								<strong>Redux</strong>
							</a>
							{''}, etc.
						</p>
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
