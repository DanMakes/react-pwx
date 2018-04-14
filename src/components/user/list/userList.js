import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const UserList = ({ users = [] }) => {

	return (
		<ListGroup>
			{users.map(user =>
				<LinkContainer key={user.id} to={`/users/${user.id}`} activeClassName='active'>
					<ListGroupItem >
						{user.nome}
					</ListGroupItem>
				</LinkContainer>
			)}
		</ListGroup>
	);
};

UserList.propTypes = {
	users: PropTypes.array.isRequired
};

export default UserList;