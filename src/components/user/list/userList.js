import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserList = ({ users = [] }) => {
	return (
		<ListGroup>
			{users.map(user =>
				<Link key={user.id} to={`/users/${user.id}`} >
					<ListGroupItem>
						{user.nome}
					</ListGroupItem>
				</Link>
			)}
		</ListGroup>
	);
};

UserList.propTypes = {
	users: PropTypes.array.isRequired
};

export default UserList;