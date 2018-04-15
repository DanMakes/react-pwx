import React from 'react';
import { Breadcrumb, BreadcrumbItem, Row, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import UserListPage from './list/user';
import UserDetailPage from './detail/userDetail';
import UserPutPage from './put/userPut';

class UserPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			creating: false,
			updating: false
		};
	}
	newUser(e) {
		this.setState({
			creating: true, updating: false
		});
	}
	render() {
		return (
			<section>
				<Row>
					<Col>
						<Breadcrumb>
							<BreadcrumbItem>
								Usuários
							</BreadcrumbItem>
						</Breadcrumb>
						<Link to='/users/novo' className='btn btn-primary' type='button'>
							Novo
						</Link>
					</Col>
				</Row>
				<br />
				<Row>
					<Col md={6}>
						<UserListPage />
					</Col>
					<Col md={6}>
						<Route exact path='/users/:id([0-9])' component={UserDetailPage} />
						<Route exact path='/users/novo' component={UserPutPage} />
					</Col>
				</Row>
				<ToastContainer />
			</section>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({ users: state.users.users, user: state.users.user });
export default connect(mapStateToProps)(UserPage);