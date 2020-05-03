import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='roman-input'>
			<label>Search</label>
			<input
				className='roman-textbox'
				type='search'
				onChange={searchChange}
			/>
		</div>
	)
}

export default SearchBox;