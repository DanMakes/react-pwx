import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserSearch from './userSearch';
import UserList from './userList';

import { Loading } from '../../common';
import * as userActions from '../../../actions/userActions';


class UserListPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			loading: false,
			users: []
		};
	}
	componentWillMount() {
		this.setState({ loading: true });
		this.props.load()
			.then(() => this.setState({ loading: false }))
			.catch(() => this.setState({ loading: false }));
	}
	onSearch() {

	}
	render() {
		return (
			<Row>
				<Col>
					<Panel>
						<Panel.Heading>
							<UserSearch onChange={this.onSearch} />
						</Panel.Heading>
						{this.state.loading && <Loading />}
						<Panel.Body>
							{!this.loading && <UserList users={this.props.users}></UserList>}
						</Panel.Body>
					</Panel>
				</Col>
			</Row>
		);
	}
}


const mapStateToProps = state => ({ users: state.users.users });
const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);