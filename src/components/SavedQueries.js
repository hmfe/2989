import React from 'react';
import PropTypes from 'prop-types';
import './SavedQueries.css';

const SavedQueries = ({ savedQueries, deleteQuery, clearSearchHistory }) => {
	return (
		<div className="SavedQueries">
			<h5>
				Saved history
				<span onClick={clearSearchHistory}>Clear search history</span>
			</h5>
			<ul>
				{savedQueries.map((query, i) => {
					return (
						<li key={i}>
							{query}
							<span onClick={() => deleteQuery(query)}>x</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

SavedQueries.defaultProps = {
	savedQueries: []
};

SavedQueries.propTypes = {
	savedQueries: PropTypes.array.isRequired,
	deleteQuery: PropTypes.func,
	clearSearchHistory: PropTypes.func
};

export default SavedQueries;
