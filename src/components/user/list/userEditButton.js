
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class UserEditButton extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = { edit: false, id: this.props.id };
		this.edit = this.edit.bind(this);
	}
	edit(e) {
		e.preventDefault();
		this.setState({ edit: true });
		setTimeout(() => {
			this.setState({ edit: false });
		});
	}
	render() {
		return (
			<span>
				<button type='button' className='btn btn-sm btn-default' onClick={this.edit} >Editar</button>
				{this.state.edit && <Redirect to={`/users/${this.props.id}/editar`} />}
			</span>
		);
	}
}

UserEditButton.propTypes = {
	id: PropTypes.number.isRequired
};

export default UserEditButton;