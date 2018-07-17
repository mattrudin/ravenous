import React from 'react';
import './SearchBar.css';

const sortByOptions = {
	"Best Match": "best_match",
	"Highest Rated": "rating",
	"Most Reviewed": "review_count"
}

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match'
		};
	}

	getSortByClass(sortByOption) {
		if (this.state.sortBy === sortByOption) {
			return 'active';
		} else {
			return '';
		}
	}

	handleSortByChange(sortByOption) {
		this.setState({
			sortBy: sortByOption
		});
	}

	handleTermChanges(event) {
		this.setState({
			term: event.target.value
		});
	}

	handleLocationChange(event) {
		this.setState({
			location: event.target.value
		});
	}

	renderSortByOptions() {
		return Object.keys(sortByOptions).map(sortByOption => {
			let sortByOptionValue = sortByOptions[sortByOption];
			return <li className="{getSortByClass(sortByOptionValue)}" onClick={handleSortByChange.bind(this, sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
		});
	}

	render() {
		return(
			<div className="SearchBar">
			  <div className="SearchBar-sort-options">
			    <ul>
			      {this.renderSortByOptions()}
			    </ul>
			  </div>
			  <div className="SearchBar-fields">
			    <input placeholder="Search Businesses" />
			    <input placeholder="Where?" />
			  </div>
			  <div className="SearchBar-submit">
			    <a>Let's Go</a>
			  </div>
			</div>
			);
	}
}

export default SearchBar;