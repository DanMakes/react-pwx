
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
const ConfirmDialog = ({ title, text, onConfirm, show }) => {
	return (
		< Modal
			{...this.props}
		>
			<Modal.Header>{title}</Modal.Header>
			<Modal.Body>{text}</Modal.Body>
			<Modal.Footer>
				<Button bsStyle='default' type='button'>Cancelar</Button>
				<Button bsStyle='danger' type='button' onClick={() => { this.setState({ show: false }); onConfirm(true) }}>Confirmar</Button>
			</Modal.Footer>


		</Modal >
	);
};

ConfirmDialog.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	onConfirm: PropTypes.func.isRequired
};

ConfirmDialog.defaultProp = {
	title: 'Confirmação?',
	text: 'Você tem certeza?'
};

export default ConfirmDialog;