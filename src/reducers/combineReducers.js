import { combineReducers } from 'redux';
import { romanCelebrities } from './romanCelebrities';
import { searchRomans } from './searchRomans';

export default combineReducers({
	romanCelebrities,
	searchRomans
})