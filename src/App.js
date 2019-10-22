import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import './App.css';
import SearchForm from './components/SearchForm';
import { DOG_BREEDS_URL } from './constants';

const App = () => {
	const [ suggestions, setSuggestions ] = useState(['Dog']);

	/**
	 * Use the Dog API to fetch for all dog breeds and set them as auto complete suggestions
	*/

	function fetchSuggestions() {
		fetch(DOG_BREEDS_URL)
			.then(response => {
				return response.json();
			})
			.then(data => {
				if (data.status === 'success') {
					let breeds = Object.keys(data.message).map(
						breed => breed.charAt(0).toUpperCase() + breed.slice(1)
					);
					setSuggestions(breeds);
				} else {
					alert('There was an issue loading suggestions');
				}
			})
			.catch(err => console.error(err));
	}
	
	useEffect( () => {
		fetchSuggestions();
	}, []);



	return (
		<div className="App">
			<header className="App__header">
				<img src={logo} alt="hm-logo" />
				<h1>Front End Task</h1>
			</header>

			<section className="App__question">
				<h3>CSS Button</h3>
				<button>Delete</button>
			</section>

			<section className="App__Question">
				<h3>Fetch a Random Dog</h3>
				<SearchForm suggestions={suggestions} />
			</section>
		</div>
	);
};

export default App;

