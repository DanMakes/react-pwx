import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { BounceLoader } from 'react-spinners';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import MaskedInput from 'react-maskedinput';
import classNames from 'classnames';
import * as userActions from '../../../actions/userActions';
import moment from 'moment';
import { removeMask } from '../../../util/utils';
import { Loading } from '../../common/';

import validator from 'validator';


class UserPutPage extends React.Component {
	constructor(props, context) {
		super(props, context);


		// this.create = this.create.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.submit = this.submit.bind(this);
		this.state = {
			submitting: false,
			loading: false,
			isCreation: this.props.isCreation,
			nome: {
				valid: true,
				value: '',
				message: ''
			},
			sobrenome: {
				valid: true,
				value: '',
				message: ''
			},
			cpf: {
				valid: true,
				value: '',
				message: ''
			},
			email: {
				valid: true,
				value: '',
				message: ''
			},
			nascimento: {
				valid: true,
				value: '',
				message: ''
			}

		}
	}
	handleChange(event) {
		const state = this.state;
		state[event.target.name].value = event.target.value;
		this.setState(state);
	}
	resetValidations() {
		const state = this.state;

		Object.keys(state)
			.map(key => {
				if (state[key].hasOwnProperty('valid')) {
					state[key].valid = true;
					state[key].message = '';
				}
				return state[key];
			});
	}
	isValid() {
		const state = this.state;
		let isValid = true;

		if (!validator.isEmail(state.email.value)) {
			state.email.valid = false;
			state.email.message = `O email ${state.email.value} não é válido`;
			isValid = false;
		}

		if (!validator.isLength(state.nome.value.concat(state.sobrenome.value), { min: 0, max: 150 })) {
			state.sobrenome.valid = state.nome.valid = false;
			state.sobrenome.message = state.nome.message = 'Nome e sobrenome excedem o limite de 150 caracteres';
			isValid = false;
		}
		if (!moment(state.nascimento.value, 'DD/MM/YYYY').isValid()) {
			state.nascimento.valid = false;
			state.nascimento.message = 'Data inválida';
			isValid = false;
		}

		if (!state.nome.value.length) {
			state.nome.valid = false;
			state.nome.message = 'Nome é obrigatório';
			isValid = false;
		}

		if (!state.sobrenome.value.length) {
			state.sobrenome.valid = false;
			state.sobrenome.message = 'Sobrenome é obrigatório';
			isValid = false;
		}

		if (!state.cpf.value.length) {
			state.cpf.valid = false;
			state.cpf.message = 'CPF é obrigatório';
			isValid = false;
		}

		if (!state.nascimento.value.length) {
			state.nascimento.valid = false;
			state.nascimento.message = 'Nascimento é obrigatório';
			isValid = false;
		}

		if (!isValid) {
			this.setState(state);
		}

		return isValid;

	}
	submit(e) {
		e.preventDefault();
		var state = this.state;

		if (state.submitting) return;


		this.resetValidations();
		if (!this.isValid()) return toast.error('O formulário contém dados inválidos.');

		const user = {
			id: this.props.match.params.id,
			isCreation: this.state.isCreation
		};

		state.submitting = true;
		this.setState(state);
		Object.keys(state)
			.map(key => {
				if (state[key].hasOwnProperty('value')) {
					user[key] = state[key].value;
				}
				return state;
			});
		user.cpf = removeMask(user.cpf);
		user.nascimentoTs = moment(user.nascimento, 'dd/MM/yyyy').valueOf();
		delete user.nascimento;

		return this.props.put(Object.assign({}, user))
			.then(() => toast.success('Usuário salvo com sucesso'))
			.catch(() => toast.error('Problemas ao salvar usuário'))
			.then(() => this.setState({ submitting: false }))
			.then(() => this.props.isCreation ? this.props.history.goBack.bind(this.props.history)() : function () { });
	}
	load(id) {
		this.setState({ loading: true });
		return this.props.get(id)
			.then(({ user }) => {
				// this.setState({ user, loading: false })
				const state = this.state;
				Object.assign(state, {
					user,
					loading: false,
					nome: {
						valid: true,
						value: user.nome,
						message: ''
					},
					sobrenome: {
						valid: true,
						value: user.sobrenome,
						message: ''
					},
					cpf: {
						valid: true,
						value: user.cpf,
						message: ''
					},
					email: {
						valid: true,
						value: user.email,
						message: ''
					},
					nascimento: {
						valid: true,
						value: moment(user.nascimentoTs).format('DD/MM/YYYY'),
						message: ''
					},

				});
				this.setState(state);
			})
			.catch(() => {
				toast.error('Usuário inexistente');
			});
	}
	componentWillMount() {
		if (this.props.match && this.props.match.params.id)
			this.load(this.props.match.params.id);
	}
	render() {
		const { nome, sobrenome, email, nascimento, cpf } = this.state;
		const groupClasses = {};
		['nome', 'sobrenome', 'email', 'nascimento'].forEach(item => {
			groupClasses[item] = classNames('form-group', { 'has-error': !this.state[item].valid });
		});
		return (
			<div className='wrapper'>
				{this.state.loading && <Loading />}
				{!this.state.loading && (
					<form className="form" onSubmit={this.submit}>
						<h2 className="header">{this.state.isCreation ? 'Novo ' : 'Editar '} usuário</h2>

						<div className={groupClasses.nome}>
							<input type="text" name="nome" className="form-control"
								placeholder="Nome" value={this.state.nome.value} onChange={this.handleChange} autoFocus />
							<span className="help-block">{nome.message}</span>
						</div>
						<div className={groupClasses.sobrenome}>
							<input type="text" name="sobrenome" className="form-control"
								placeholder="Sobrenome" value={this.state.sobrenome.value} onChange={this.handleChange} />
							<span className="help-block">{sobrenome.message}</span>
						</div>
						<div className={groupClasses.cpf}>
							<MaskedInput type="text" name="cpf" className="form-control" mask='111.111.111-11'
								placeholder="CPF" value={this.state.cpf.value} onChange={this.handleChange} />
							<span className="help-block">{cpf.message}</span>
						</div>
						<div className={groupClasses.email}>
							<input type="text" name="email" className="form-control"
								placeholder="Email" value={this.state.email.value} onChange={this.handleChange} />
							<span className="help-block">{email.message}</span>
						</div>
						<div className={groupClasses.nascimento}>
							<MaskedInput type="text" name="nascimento" className="form-control"
								mask='11/11/1111'
								placeholder="Data de Nascimento (dd/MM/yyyy)" value={this.state.nascimento.value} onChange={this.handleChange} />
							<span className="help-block">{nascimento.message}</span>
						</div>
						<button type='submit' className='btn btn-primary'>
							{this.state.submitting ? (<BounceLoader size={18} />) : 'Salvar'}
						</button>&nbsp;
					<Link className='btn btn-default' type='button' to='/users/'> Cancelar</Link>
					</form>
				)}
			</div>
		);
	}
}

UserPutPage.propTypes = {
	user: PropTypes.object
};

UserPutPage.defaultProps = {
	user: { isCreation: true }
};

const mapStateToProps = (state, ownProp) => {
	// const user = Object.assign({}, state.users.user);
	return {
		id: ownProp.match.params.id,
		nome: {},
		nascimento: {},
		sobrenome: {},
		email: {},
		cpf: {},
		isCreation: !ownProp.match.params.id,
	};
};

const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserPutPage);