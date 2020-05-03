import React from 'react';
import Card from './Card';

const CardList = ({ romans }) => {
	return (
		<div className='container'>
			{
				romans.map((name, i) => {
					return <Card 
						key={i} 
						id={romans[i].id} 
						name={romans[i].name} 
						info={romans[i].info} 
						image={romans[i].image} 
						/>
				})
			}
		</div>
	);
}

export default CardList;