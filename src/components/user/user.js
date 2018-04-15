import React from 'react';
import { Breadcrumb, BreadcrumbItem, Row, Col, Button } from 'react-bootstrap';

import { Route, Link } from 'react-router-dom';
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
		// this.setState({ creating: true, updating: false });
		// console.log('oi');
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
						<Button bsStyle='primary' onClick={this.newUser()} type='button'>
							Novo
						</Button>
					</Col>
				</Row>
				<br />
				<Row>
					<Col md={6}>
						<UserListPage />
					</Col>
					<Col md={6}>
						<Route exact path='/users/:id' component={UserDetailPage} />
						{/* <Route exact path='/users/add' component={UserPutPage} /> */}
					</Col>
				</Row>
				<UserPutPage show={this.props.creating} />
			</section>
		);
	}
}

export default UserPage;