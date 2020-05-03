import React from 'react';
import '../index.css';
import Images from '../images/imgIndex'

const Card = ({ id, name, info, image }) => {
	return (
		<div className='roman-card'>
			<img className='bust' alt={image} src={Images[image]} />
			<h2>{name}</h2>
			<p>{info}</p>
		</div>
	);
}

export default Card;