import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { connect } from 'react-redux';
import { setSearchField } from '../actions/setSearchField';

const mapStateToProps = state => {
	return {
		romanCelebrities: state.romanCelebrities,
		searchField: state.searchRomans.searchField
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: (event) => 
			dispatch(setSearchField(event.target.value)),
	}
}

class App extends React.Component {
	render() {
		const { romanCelebrities, searchField, onSearchChange } = this.props;
		const filteredRomans = romanCelebrities.romans.filter(roman => {
			return roman.name.toLowerCase()
				.includes(searchField.toLowerCase());
		})

		return (
			<div>
				<h1 className='roman-header'>
					Roman Celebrities
				</h1>
				<SearchBox 
					className='roman-textbox' 
					searchChange={onSearchChange} 
				/>
				<Scroll>
					<ErrorBoundry>
						<CardList romans={filteredRomans} />
					</ErrorBoundry>
				</Scroll>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);