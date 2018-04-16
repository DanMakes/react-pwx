import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { BounceLoader } from 'react-spinners';
import * as userActions from '../../../actions/userActions';

class UserDelete extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			user: this.props.user,
			removing: false,
			goBack: this.props.goBack
		};
		this.remove.bind(this);
	}
	remove(e) {
		e.preventDefault();
		const state = this.state;

		if (state.removing) return;

		state.removing = true;
		this.setState(state);

		this.props.remove(this.props.user.id)
			.then(() => toast.success('Usuário removido com sucesso'))
			.catch(toast.error)
			.then(() => {
				if (this.props.goBack) {
					// this.props.history.goBack();
					this.setState({ removing: false })
				} else {
				}
			});
	}
	render() {
		return (
			<button type='button' className='btn btn-sm btn-danger' onClick={(e) => this.remove(e)} disabled={this.state.removing}>  {this.state.removing ? (<BounceLoader size={18} />) : 'Remover'}</button>
		);
	}
};

UserDelete.propTypes = {
	user: PropTypes.object.isRequired,
	goBack: PropTypes.bool
};

UserDelete.propDefault = {
	goBack: false
};



const mapStateToProps = (state, ownProps) => ({ user: ownProps.user, removing: false });
const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserDelete);