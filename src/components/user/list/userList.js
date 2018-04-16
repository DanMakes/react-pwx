import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import UserDelete from '../delete/userDelete';
import UserEditButton from './userEditButton';

const UserList = ({ users = [] }) => {
	return (
		<ListGroup>
			{users.map(user =>
				<Link key={user.id} to={`/users/${user.id}`} datatype='button' >
					<ListGroupItem>
						{user.nome} {user.sobrenome}
						<div className="list-actions">
							<div className="btn-group">
								<UserDelete user={user} /> &nbsp;
								<UserEditButton id={user.id} />
							</div>
						</div>
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