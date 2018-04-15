import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

import * as userActions from '../../../actions/userActions';
import PropTypes from 'prop-types';
import { Loading } from '../../common';
import DetailTextField from './detailTextField';

class UserDetailPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			loading: false,
			user: this.props.user
		};
	}
	formatter(val) {
		return val.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '\$1.\$2.\$3\-\$4');
	}
	load(id) {
		this.setState({ loading: true });
		return this.props.get(id)
			.then((user) => this.setState({ user, loading: false }))
			.catch(() => this.setState({ loading: false }));
	}
	componentWillReceiveProps(nextProps, nextState) {
		if (this.props.match.params.id !== nextProps.match.params.id)
			this.load(nextProps.match.params.id);
	}
	componentWillMount() {
		this.load(this.props.match.params.id);
	}
	render() {
		return (
			<Panel>
				<Panel.Body>
					{this.state.loading && <Loading />}
					{!this.state.loading &&
						< ListGroup>
							<ListGroupItem className='no-divider'>
								<DetailTextField text={`${this.props.user.nome} ${this.props.user.sobrenome}`} label='Nome' />
							</ListGroupItem>
							<ListGroupItem className='no-divider'>
								<DetailTextField text={this.props.user.email} label='Email' />
							</ListGroupItem>
							<ListGroupItem className='no-divider'>
								<DetailTextField text={this.props.user.cpf} label='CPF' formatter={this.formatter} />
							</ListGroupItem>

						</ListGroup>
					}
				</Panel.Body>
			</Panel>
		);
	}
}

UserDetailPage.propTypes = {
	user: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({ user: state.users.user });
const mapDispatchToProps = dispatch => bindActionCreators({ get: userActions.get }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailPage);
