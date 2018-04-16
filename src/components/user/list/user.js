import React from 'react';
import { Row, Col, Panel, Pager, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserSearch from './userSearch';
import UserList from './userList';

import { Loading } from '../../common';
import * as userActions from '../../../actions/userActions';


class UserListPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			filter: undefined,
			query: undefined,
			loading: false,
			users: this.props.users,
			page: 1
		};
	}
	componentWillMount() {
		this.onSearch();
	}
	onSearch(query, page) {
		this.setState({ query, page, loading: true });
		this.props.load({ query, page })
			.then(() => this.setState({ loading: false }))
			.catch(() => this.setState({ loading: false }));
	}
	addPage(quantity) {
		const page = (this.state.page || 1) + quantity;
		this.onSearch(this.state.query, page)
	}

	render() {
		return (
			<Row>
				<Col>
					<Panel>
						<Panel.Heading>
							<Row>
								<Col md={10}>
									<UserSearch onChange={(args) => this.onSearch(args)} />
								</Col>
								<Col md={2}>
									<Button bsStyle='default' bsSize='sm' type='button' onClick={() => this.onSearch(this.state.query, this.state.page)}>Atualizar</Button>
								</Col>
							</Row>
						</Panel.Heading>
						{this.state.loading && <Loading />}
						<Panel.Body>
							{!this.state.loading && <UserList users={this.props.users}></UserList>}
						</Panel.Body>
					</Panel>
					<Pager>
						<Pager.Item previous onClick={(e) => this.addPage(-1)} disabled={!this.state.page || this.state.page <= 1}>
							Anterior
						</Pager.Item>
						<Pager.Item next onClick={(e) => this.addPage(1)} disabled={this.props.users.length < 10}>
							Próximo
						</Pager.Item>
					</Pager>
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = state => ({ users: state.users.users, page: 1 });
const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);