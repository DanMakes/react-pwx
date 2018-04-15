import React from 'react';
import { Modal } from 'react-bootstrap';

class UserPutPage extends React.Component {

	render() {
		return (
			<Modal
				{...this.props}>
				<Modal.Header closeButton={true}>
					<Modal.Title>Novo</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Bodyzao
				</Modal.Body>
			</Modal>
		);
	}
}

export default UserPutPage;