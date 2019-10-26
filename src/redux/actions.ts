import ACTIONS from './actions.config';
// import Service from './service';
import axios from 'axios';

// get countries
export const getAllCountries = () => {
	return (dispatch: any) => {
		const url = 'https://restcountries.eu/rest/v2/all';
		axios.get(url).then((result: any) => {
			dispatch(getCountriesSuccessAction(result.data));
		});
	};
};

export const getCountriesSuccessAction = (countries: any) => ({
	type: ACTIONS.GET_ALL_COUNTRIES,
	payload: { countries }
});

// add image

export const addImageCountry = (country: any, image: any) => ({
	type: ACTIONS.ADD_IMAGE,
	payload: { image, country }
});

// export const getMoviesAction = (searchTerm: any) => {
// 	console.log('dispatching...');
// 	return (dispatch: any) => {
// 		const url = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchTerm}`;

// 		dispatch(getMovieStartedAction());
// 		axios
// 			.get(url)
// 			.then((result: any) => {
// 				console.log(result);
// 				dispatch(getMoviesSuccessAction(result.data.Search));
// 			})
// 			.catch((e) => console.log(e));
// 	};
// };

// export const saveMovieComment = (comment: any) => ({
// 	type: ACTIONS.ADD_COMMENT,
// 	payload: { comment }
// });
