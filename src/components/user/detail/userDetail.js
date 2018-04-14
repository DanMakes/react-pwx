import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../../actions/userActions';

class UserDetailPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			loading: false,
			user: this.props.user
		};
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log(this.props, 'prev')

		return nextProps.match.params.id !== this.props.match.params.id;
	}
	componentDidUpdate() {
		// console.log(this.props.match.params)
		this.setState({ loading: true });
		this.props.get(this.props.match.params.id)
			.then(() => this.setState({ loading: false }))
			.catch(() => this.setState({ loading: false }));
		// this.props.get(this.props.match.params.id)
		// 	.then(user => this.setState({ user }));
	}
	componentWillMount() {
		this.props.get(this.props.match.params.id);
	}
	render() {
		return (
			<div>Olá {this.props.user && this.props.user.nome}</div>
		)
	}
}


// const mapStateToProps = state => {
// 	console.log(state);
// 	return { user: state.user }
// };
const mapStateToProps = (state, ownProps) => {
	return {
		user: state.users.user
	};
};
const mapDispatchToProps = dispatch => bindActionCreators({ get: userActions.get }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailPage);
