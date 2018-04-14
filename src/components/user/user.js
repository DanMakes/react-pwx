import React from 'react';
import { Breadcrumb, BreadcrumbItem, Row, Col } from 'react-bootstrap';

import UserListPage from './list/user';
import UserDetailPage from './detail/userDetail';

class UserPage extends React.Component {
	render() {
		return (
			<section>
				<Breadcrumb>
					<BreadcrumbItem>
						Usuários
					</BreadcrumbItem>
				</Breadcrumb>
				<Row>
					<Col md={6}>
						<UserListPage />
					</Col>
					<Col md={6}>

					</Col>
				</Row>

			</section>
		);
	}
}

export default UserPage;