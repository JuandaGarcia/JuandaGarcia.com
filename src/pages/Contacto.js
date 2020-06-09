import React from 'react'
import Swal from 'sweetalert2'

class Contacto extends React.Component {
	state = {
		nombre: '',
		email: '',
		mensaje: '',
	}

	PostData = async (e) => {
		e.preventDefault()
		let myHeaders = new Headers()
		myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

		let urlencoded = new URLSearchParams()
		urlencoded.append('nombre', this.state.nombre)
		urlencoded.append('email', this.state.email)
		urlencoded.append('mensaje', this.state.mensaje)

		let requestOptions = {
			mode: 'no-cors',
			method: 'POST',
			headers: myHeaders,
			body: urlencoded,
			redirect: 'follow',
		}

		try {
			await fetch(
				'http://servicios.juandagarcia.com/juandagarcia.php',
				requestOptions
			).then(() => {
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'El mensaje se envió con éxito',
					showConfirmButton: false,
				})
			})
		} catch (error) {
			Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'Ocurrió un error, por favor inténtalo mas tarde',
				showConfirmButton: false,
			})
		}

		this.setState({
			nombre: '',
			email: '',
			mensaje: '',
		})
	}

	render() {
		return (
			<section className="FormContacto">
				<div className="illustration">
					<div className="illustration-team">
						<div className="hands">
							<svg
								className="hand-left"
								viewBox="0 0 159 282"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0 281.822C35.477 232.997 70.673 176.191 82.2168 153.533C77.4554 139.637 70.373 114.193 66.2574 105.047C62.1417 95.9015 49.0947 90.1581 48.752 88.0591C48.1636 84.7697 51.4541 81.6766 58.8675 81.9161C82.2657 82.672 90.7275 97.4854 91.8998 101.1C98.1674 83.8129 92.6077 37.534 91.5865 23.9644C90.5653 10.3949 82.2248 1.43239 87.1105 0.310784C97.5908 -2.09514 106.103 10.0452 108.403 16.8357C109.937 21.3627 111.5 27.927 113.093 36.5284C116.63 27.9077 117.911 17.9313 116.933 6.59941C116.202 -1.8773 129.824 5.46324 131.687 12.2562C136.543 29.9732 128.236 51.8242 129.137 55.3185C130.039 58.8128 136.549 35.1227 136.636 28.816C136.723 22.5093 147.005 27.1396 147.692 34.5991C149.922 58.8173 139.587 79.4608 137.411 86.3957C135.236 93.3307 148.935 70.9757 150.794 67.3963C152.653 63.8169 158.769 67.8717 158.829 74.2409C158.89 80.6102 146.462 96.8776 140.305 112.365C134.147 127.853 145.869 154.871 131.723 171.095C109.944 196.074 99.5544 242.012 90.1715 281.822C-0.110319 281.751 21.1032 281.608 0 281.822Z"
									fill="url(#paint0_linear)"
								/>
								<path
									d="M102.024 114.648C101.554 114.359 100.938 114.506 100.648 114.976C100.359 115.446 100.506 116.062 100.976 116.352L102.024 114.648ZM118 138.5L117.026 138.727C117.093 139.014 117.282 139.256 117.544 139.39C117.806 139.524 118.113 139.536 118.385 139.423L118 138.5ZM129.086 139.41C129.589 139.639 130.182 139.417 130.41 138.914C130.639 138.411 130.417 137.818 129.914 137.59L129.086 139.41ZM100.976 116.352C107.273 120.227 111.291 125.813 113.74 130.466C114.963 132.788 115.787 134.866 116.305 136.359C116.564 137.105 116.746 137.704 116.862 138.113C116.921 138.318 116.962 138.475 116.989 138.579C117.003 138.631 117.012 138.67 117.018 138.695C117.021 138.707 117.024 138.716 117.025 138.722C117.026 138.724 117.026 138.726 117.026 138.727C117.026 138.728 117.026 138.728 117.026 138.728C117.026 138.728 117.026 138.728 117.026 138.728C117.026 138.728 117.026 138.727 118 138.5C118.974 138.273 118.974 138.272 118.974 138.272C118.974 138.272 118.974 138.271 118.973 138.271C118.973 138.27 118.973 138.269 118.973 138.267C118.972 138.265 118.971 138.261 118.97 138.257C118.968 138.247 118.965 138.235 118.961 138.219C118.953 138.186 118.941 138.14 118.926 138.08C118.895 137.961 118.849 137.788 118.786 137.566C118.66 137.124 118.467 136.489 118.195 135.704C117.65 134.134 116.788 131.962 115.51 129.534C112.959 124.687 108.727 118.773 102.024 114.648L100.976 116.352ZM118 138.5C118.385 139.423 118.384 139.423 118.384 139.423C118.384 139.423 118.384 139.423 118.384 139.424C118.383 139.424 118.383 139.424 118.383 139.424C118.383 139.424 118.383 139.424 118.384 139.423C118.385 139.423 118.388 139.422 118.392 139.42C118.4 139.417 118.414 139.411 118.433 139.404C118.471 139.389 118.53 139.366 118.61 139.337C118.769 139.28 119.007 139.198 119.312 139.106C119.923 138.922 120.795 138.7 121.829 138.553C123.91 138.255 126.573 138.268 129.086 139.41L129.914 137.59C126.927 136.232 123.84 136.245 121.546 136.573C120.393 136.737 119.421 136.984 118.735 137.191C118.391 137.294 118.118 137.388 117.927 137.458C117.832 137.492 117.757 137.521 117.705 137.541C117.678 137.551 117.658 137.56 117.643 137.566C117.635 137.569 117.629 137.571 117.625 137.573C117.622 137.574 117.621 137.575 117.619 137.576C117.618 137.576 117.618 137.576 117.617 137.576C117.617 137.576 117.616 137.577 117.616 137.577C117.616 137.577 117.615 137.577 118 138.5Z"
									fill="black"
								/>
								<path
									d="M113.5 32C113.5 32 113.284 55.6355 115 62"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M81.0001 153.575C81.0001 153.575 88.5001 165 103 163"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M131.5 47C131.5 47 127 61.5 128.5 73.5"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<defs>
									<linearGradient
										id="paint0_linear"
										x1="119"
										y1="1.21492e-06"
										x2="68"
										y2="288"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#74E5A6" />
										<stop offset="0.629834" stopColor="#47CF73" />
										<stop offset="1" stopColor="#E1CA72" />
									</linearGradient>
								</defs>
							</svg>

							<svg
								className="hand-right"
								viewBox="0 0 159 282"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M158.83 281.822C123.353 232.997 88.1566 176.191 76.6128 153.533C81.3742 139.637 88.4566 114.193 92.5722 105.047C96.6879 95.9015 109.735 90.1581 110.078 88.0591C110.666 84.7697 107.376 81.6766 99.9621 81.9161C76.5639 82.672 68.1021 97.4854 66.9298 101.1C60.6622 83.8129 66.2219 37.534 67.2431 23.9644C68.2642 10.3949 76.6048 1.43239 71.7191 0.310784C61.2388 -2.09514 52.7266 10.0452 50.4261 16.8357C48.8924 21.3627 47.3294 27.927 45.7368 36.5284C42.1992 27.9077 40.919 17.9313 41.8963 6.59941C42.6273 -1.8773 29.0052 5.46324 27.143 12.2562C22.2862 29.9732 30.5937 51.8242 29.6921 55.3185C28.7905 58.8128 22.2802 35.1227 22.1934 28.816C22.1066 22.5093 11.8248 27.1396 11.138 34.5991C8.90808 58.8173 19.2427 79.4608 21.4182 86.3957C23.5937 93.3307 9.89507 70.9757 8.03583 67.3963C6.17659 63.8169 0.0605293 67.8717 0.000221335 74.2409C-0.0600866 80.6102 12.3677 96.8776 18.5249 112.365C24.6822 127.853 12.9605 154.871 27.1062 171.095C48.8853 196.074 59.2751 242.012 68.6581 281.822C158.94 281.751 137.726 281.608 158.83 281.822Z"
									fill="url(#paint1_linear)"
								/>
								<path
									d="M56.8055 114.648C57.2759 114.359 57.8918 114.506 58.1813 114.976C58.4707 115.446 58.324 116.062 57.8537 116.352L56.8055 114.648ZM40.8296 138.5L41.8034 138.727C41.7366 139.014 41.5472 139.256 41.2855 139.39C41.0238 139.524 40.7164 139.536 40.4449 139.423L40.8296 138.5ZM29.7434 139.41C29.2406 139.639 28.6477 139.417 28.4192 138.914C28.1907 138.411 28.413 137.818 28.9158 137.59L29.7434 139.41ZM57.8537 116.352C51.5562 120.227 47.5382 125.813 45.0895 130.466C43.867 132.788 43.0424 134.866 42.5243 136.359C42.2654 137.105 42.0836 137.704 41.9672 138.113C41.909 138.318 41.8672 138.475 41.8404 138.579C41.827 138.631 41.8173 138.67 41.8112 138.695C41.8082 138.707 41.806 138.716 41.8047 138.722C41.8041 138.724 41.8036 138.726 41.8034 138.727C41.8033 138.728 41.8033 138.728 41.8032 138.728C41.8032 138.728 41.8033 138.728 41.8033 138.728C41.8033 138.728 41.8034 138.727 40.8296 138.5C39.8557 138.273 39.8558 138.272 39.8559 138.272C39.856 138.272 39.8561 138.271 39.8562 138.271C39.8564 138.27 39.8567 138.269 39.857 138.267C39.8576 138.265 39.8585 138.261 39.8596 138.257C39.8617 138.247 39.8648 138.235 39.8688 138.219C39.8767 138.186 39.8883 138.14 39.9037 138.08C39.9345 137.961 39.9806 137.788 40.0435 137.566C40.1693 137.124 40.3624 136.489 40.6348 135.704C41.1792 134.134 42.042 131.962 43.3196 129.534C45.8708 124.687 50.1029 118.773 56.8055 114.648L57.8537 116.352ZM40.8296 138.5C40.4449 139.423 40.4452 139.423 40.4455 139.423C40.4455 139.423 40.4458 139.423 40.4459 139.424C40.4461 139.424 40.4463 139.424 40.4463 139.424C40.4464 139.424 40.4462 139.424 40.4455 139.423C40.4443 139.423 40.4417 139.422 40.4376 139.42C40.4295 139.417 40.4159 139.411 40.3968 139.404C40.3587 139.389 40.2991 139.366 40.2197 139.337C40.0607 139.28 39.8225 139.198 39.5177 139.106C38.9071 138.922 38.035 138.7 37.0006 138.553C34.9195 138.255 32.2568 138.268 29.7434 139.41L28.9158 137.59C31.9023 136.232 34.9896 136.245 37.2835 136.573C38.4366 136.737 39.4083 136.984 40.0945 137.191C40.4382 137.294 40.7117 137.388 40.9023 137.458C40.9977 137.492 41.0724 137.521 41.1249 137.541C41.1511 137.551 41.1718 137.56 41.1867 137.566C41.1942 137.569 41.2003 137.571 41.2048 137.573C41.2071 137.574 41.2091 137.575 41.2106 137.576C41.2114 137.576 41.2121 137.576 41.2127 137.576C41.213 137.576 41.2133 137.577 41.2135 137.577C41.2138 137.577 41.2142 137.577 40.8296 138.5Z"
									fill="black"
								/>
								<path
									d="M45.3296 32C45.3296 32 45.5452 55.6355 43.8296 62"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M77.8295 153.575C77.8295 153.575 70.3295 165 55.8296 163"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M27.3296 47C27.3296 47 31.8296 61.5 30.3296 73.5"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<defs>
									<linearGradient
										id="paint1_linear"
										x1="67"
										y1="6.80376e-07"
										x2="85"
										y2="302"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#76DAFF" />
										<stop offset="0.469613" stopColor="#0EBEFF" />
										<stop offset="1" stopColor="#9F8198" />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<div className="marks">
							<div className="mark mark-1"></div>
							<div className="mark mark-2"></div>
							<div className="mark mark-3"></div>
							<div className="mark mark-4"></div>
							<div className="mark mark-5"></div>
						</div>
					</div>
				</div>
				<div className="form">
					<div className="container-form">
						<div className="redes-form">
							<a
								className="icono-social-contacto email noSelect"
								href="mailto: juandagarciadev@gmail.com"
								rel="noopener noreferrer"
							>
								{}
							</a>
							<a
								className="icono-social-contacto whatsapp noSelect"
								href="https://api.whatsapp.com/send?phone=573184291360&text=Hola%20Juan"
								target="_blank"
								rel="noopener noreferrer"
							>
								{}
							</a>
							<a
								className="icono-social-contacto instagram noSelect"
								href="https://www.instagram.com/juandagarciaa/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{}
							</a>
							<a
								className="icono-social-contacto linkedin noSelect"
								href="https://www.linkedin.com/in/juandagarciaa/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{}
							</a>
							<a
								className="icono-social-contacto github noSelect"
								href="https://www.github.com/juandagarcia/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{}
							</a>
							<a
								className="icono-social-contacto youtube noSelect"
								href="https://www.github.com/juandagarcia/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{}
							</a>
						</div>
						<form onSubmit={(e) => this.PostData(e)}>
							<input
								placeholder="Nombre"
								required
								value={this.state.nombre}
								className="input-textarea"
								name="name"
								type="text"
								maxLength="40"
								onChange={(e) => this.setState({ nombre: e.target.value })}
							/>
							<br />
							<input
								required
								placeholder="Email"
								value={this.state.email}
								className="input-textarea"
								name="email"
								type="email"
								maxLength="50"
								onChange={(e) => this.setState({ email: e.target.value })}
							/>
							<br />
							<textarea
								placeholder="Mensaje"
								required
								value={this.state.mensaje}
								onChange={(e) => this.setState({ mensaje: e.target.value })}
								className="input-textarea"
								name="mensaje"
								id=""
								rows="5"
							></textarea>
							<div className="noSelect">
								<button className="btn-primary">Enviar</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		)
	}
}

export default Contacto
