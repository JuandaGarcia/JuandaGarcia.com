import React from 'react'

const ProjectButtons = props => {
	if (props.link) {
		return (
			<a
				className="btn-details"
				href={props.link}
				target="_blank"
				rel="noopener noreferrer"
			>
				{props.text}
				<div className={`icono-btn-details ${props.css}`}></div>
			</a>
		)
	}
	return ''
}

export default ProjectButtons
