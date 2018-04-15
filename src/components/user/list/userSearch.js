import React from 'react';
import PropTypes from 'prop-types';
// const UserSearch = ({ onChange}) => {
// 	return (
// 		<input type='search' className='form-control' placeholder='Pesquisar' />
// 	);
// };


class UserSearch extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			search: '',
			timeout: ''
		};
	}
	handleChange(event) {
		clearTimeout(this.state.timeout);
		const timeout = setTimeout(() => {
			this.props.onChange(this.state.search);
		}, this.props.debounce);
		this.setState({
			timeout,
			search: event.target.value
		});

	}
	render() {
		return (
			<input type='search' className='form-control' value={this.state.search} placeholder='Pesquisar' onChange={(e) => this.handleChange(e)} />
		);
	}
}
UserSearch.propTypes = {
	onChange: PropTypes.func.isRequired,
	debounce: PropTypes.number
};

UserSearch.defaultProps = {
	debounce: 600
};


export default UserSearch;