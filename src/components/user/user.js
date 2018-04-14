import React from 'react';
import { Breadcrumb, BreadcrumbItem, } from 'react-bootstrap';

import { Route } from 'react-router';
import UserListPage from './list/user';

class UserPage extends React.Component {
	render() {
		return (
			<section>
				<Breadcrumb>
					<BreadcrumbItem>
						Usuários
					</BreadcrumbItem>
				</Breadcrumb>
				<Route path='/users' component={UserListPage}></Route>
			</section>
		);
	}
}

export default UserPage;