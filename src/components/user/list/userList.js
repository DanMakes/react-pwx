import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

const UserList = ({ users }) => {

	return (
		<ListGroup>
			{users.map(user =>
				<ListGroupItem key={user.id}>
					{user.nome}
				</ListGroupItem>
			)}
		</ListGroup>
	);
};

UserList.propTypes = {
	users: PropTypes.array.isRequired
};

export default UserList;