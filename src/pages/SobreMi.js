import React from 'react'
import me from '../img/me.jpg'

function SobreMi() {
	return (
		<div className="sobremi">
			<div className="gradient-border" id="box">
				<div className="sobre-mi-info">
					<h1>Sobre mí</h1>
					<br />
					<p>
						Además de los cursos que he tomado en la universidad, he tomado
						varios cursos en línea a medida que avanzo en mis habilidades.
						Algunos de estos cursos en línea que he tomado incluyen The React
						Complete Guide , The Complete JavaScript Course y HTML & CSS for
						Beginners.
					</p>
					<br />
					<br />
					<h1>Mis habilidades</h1>
					<br />
					<p>
						Además de los cursos que he tomado en la universidad, he tomado
						varios cursos en línea a medida que avanzo en mis habilidades.
						Algunos de estos cursos en línea que he tomado incluyen{' '}
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
							<li>• React.js</li>
							<li>• Redux</li>
							<li>• HTML5</li>
							<li>• CSS3</li>
						</ul>
						<ul>
							<li>• JavaScript</li>
							<li>• Git / GitHub</li>
							<li>• Wordpress</li>
							<li>• C#</li>
						</ul>
						<ul>
							<li>• C / C++</li>
							<li>• Java</li>
							<li>• PHP</li>
							<li>• MySQL</li>
						</ul>
						<ul>
							<li>• Unity</li>
							<li>• Photoshop</li>
							<li>• Figma</li>
							<li>• Vegas Pro </li>
						</ul>
					</div>
				</div>
				<div className="sobre-mi-img">
					<img src={me} alt="Juanda Garcia" />
				</div>
			</div>
		</div>
	)
}

export default SobreMi
