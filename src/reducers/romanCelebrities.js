import { initialState } from './initialState';
import { romans } from '../romans';

export const romanCelebrities = (state=initialState, action={}) => {
	return Object.assign(
		{},
		state,
		{ romans: romans }
	);
}