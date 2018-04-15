import React from 'react';
import PropTypes from 'prop-types';

const UserSearch = ({ a }) => {
	return (
		<input type='search' className='form-control' placeholder='Pesquisar' />
	);
};

UserSearch.propTypes = {
	onChange: PropTypes.func.isRequired
};


export default UserSearch;