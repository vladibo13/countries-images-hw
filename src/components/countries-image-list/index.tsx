import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CountriesImageList extends React.Component<any, any> {
	render() {
		const { images } = this.props;
		console.log(images);
		if (!images) return <h1 className="text-center">No Data</h1>;
		return (
			<div>
				<Link to="/">Home</Link>
				{/* {images.map((image:any) => <p>{image}</p>)} */}
				<h2>Hello From Countries Image List</h2>

				<p>
					{Object.keys(images).map((key: any) => {
						return (
							<p>
								{key} {images[key].map((c: any) => <img src={c} />)}
							</p>
						);
					})}
				</p>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		// onAddImageCountry: (country: any, image: any) => {
		// 	dispatch(addImageCountry(country, image));
		// }
	};
};

function mapStateToProps(state: any) {
	console.log('state from redux');
	return {
		...state
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesImageList);
