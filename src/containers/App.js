import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { romans } from '../romans';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			romans: romans,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { romans, searchfield } = this.state;
		const filteredRomans = romans.filter(roman => {
			return roman.name.toLowerCase()
				.includes(searchfield.toLowerCase());
		})

		return (
			<div>
				<h1 className='roman-header'>
					Roman Celebrities
				</h1>
				<SearchBox 
					className='roman-textbox' 
					searchChange={this.onSearchChange} 
				/>
				<Scroll>
					<CardList romans={filteredRomans} />
				</Scroll>
			</div>
		)
	}
}

export default App;