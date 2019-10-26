import React from 'react';
import { connect } from 'react-redux';
import { getAllCountries, addImageCountry } from '../../redux/actions';

class CountriesAddImage extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			countrySelectInput: '',
			countryTextInput: ''
		};
	}
	componentDidMount() {
		this.props.onGetAllCountries();
	}
	onSubmitHandler = (e: any) => {
		e.preventDefault();
		this.props.onAddImageCountry(this.state.countrySelectInput, this.state.countryTextInput);
		this.setState({ countrySelectInput: '', countryTextInput: '' });
	};

	handleSelect = (e: any) => {
		this.setState({ countrySelectInput: e.target.value });
	};

	handleInput = (e: any) => {
		this.setState({ countryTextInput: e.target.value });
	};
	render() {
		const { countries } = this.props;
		return (
			<div className="container ">
				<h1 className="text-center my-5 display-4">Add An Image</h1>
				<form onSubmit={this.onSubmitHandler}>
					<select
						value={this.state.countrySelectInput}
						onChange={this.handleSelect}
						className="custom-select"
					>
						<option selected>Select A Country To Add Image</option>

						{countries.map((country: any) => <option value={country}>{country}</option>)}
					</select>
					<input
						value={this.state.countryTextInput}
						onChange={this.handleInput}
						type="text"
						className="form-control mt-3"
					/>
					<button className="btn btn-lg btn-outline-primary mt-3">Add Image</button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		onAddImageCountry: (country: any, image: any) => {
			dispatch(addImageCountry(country, image));
		},
		onGetAllCountries: () => {
			dispatch(getAllCountries());
		}
	};
};

function mapStateToProps(state: any) {
	console.log('state from redux');
	return {
		...state
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesAddImage);
