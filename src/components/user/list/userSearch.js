import React from 'react';
import PropTypes from 'prop-types';

const UserSearch = ({ }) => {
	return (
		<input type='search' className='form-control' placeholder='Pesquisar' />
	);
};

UserSearch.propTypes = {
	onChange: PropTypes.func.isRequired
};


export default UserSearch;