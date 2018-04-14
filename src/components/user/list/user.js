import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import UserList from './userList';
import UserDetailPage from '../detail/userDetail';

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
	render() {
		return (
			<Row>
				<Col>
					<Panel>
						<Panel.Heading>
							<input type='search' className='form-control' placeholder='Pesquisar' />
						</Panel.Heading>
						{this.state.loading && <Loading />}
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

const mapStateToProps = state => ({ users: state.users });
const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);