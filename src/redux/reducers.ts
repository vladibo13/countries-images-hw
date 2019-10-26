import Actions from './actions.config';

const initialState = {
	countries: [],
	images: []
};

export default function root(state = initialState, action: any) {
	switch (action.type) {
		// case Actions.ADD_COMMENT: {
		// 	console.log(state);

		// 	const newComment = action.payload.comment;
		// 	return {
		// 		...state,
		// 		comments: [ ...state.comments, { newComment } ]
		// 	};
		// }
		case Actions.GET_ALL_COUNTRIES: {
			const { countries: newCountries } = action.payload;
			const countriesByName = newCountries.reduce((init: any, currentCountry: any) => {
				const { name } = currentCountry;
				return [ ...init, name ];
			}, []);
			return {
				...state,
				countries: countriesByName
			};
		}

		case Actions.ADD_IMAGE: {
			const { country, image } = action.payload;
			// add all current images of country if exist otherwise set to empty array
			const currentCountry = state.images[country] || [];
			return {
				...state,
				images: { ...state.images, [country]: [ ...currentCountry, image ] }
			};
		}
		default:
			return state;
	}
}
