import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
class NavbarComponent extends React.Component {
	render() {
		return (
			<Nav pullLeft>
				<LinkContainer to='/users/' activeClassName='active'>
					<NavItem eventKey={1}>Usuários</NavItem>
				</LinkContainer>
			</Nav>

		);
	}
}

export default NavbarComponent;