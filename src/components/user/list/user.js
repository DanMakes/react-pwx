import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserList from './userList';

class UserListPage extends React.Component {
	render() {
		return (
			<Row>
				<Col>
					<Panel>
						<Panel.Heading>
							<input type='search' class='form-control' placeholder='Pesquisar' />
						</Panel.Heading>
						<Panel.Body>
							<UserList users={this.props.users}></UserList>
						</Panel.Body>
					</Panel>
				</Col>
			</Row>
		);
	}
}

UserListPage.propTypes = {
	users: PropTypes.array
};

function mapStateToProps(state, ownProps) {
	return {
		users: state.users
	}
};

export default connect(mapStateToProps)(UserListPage);