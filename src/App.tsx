import React from 'react';
import CountriesImage from './components/countries-image';
import CountriesAddImage from './components/countries-add-image';
import CountriesImageList from './components/countries-image-list';
import './App.css';
import { Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={CountriesAddImage} />
			</Switch>
		</div>
	);
};

export default App;
