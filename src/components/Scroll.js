import React from 'react';

const Scroll = (props) => {
	return (
		<div className='scroll-bar'>
			{props.children}
		</div>	
	);
}

export default Scroll;