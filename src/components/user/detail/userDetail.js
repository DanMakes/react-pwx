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
	componentWillMount() {
		// this.setState(Object.assign(this.state, { loading: true }));

		// this.props.get(this.props.match.params.id)
		// this.props.get(this.props.match.params.id)
		// 	.then((user) => {
		// 		// this.setState({ user, loading: false });

		// 	})
		// 	.catch(() => {
		// 		// this.setState({ loading: false });
		// 	});
	}
	render() {
		return (
			<div>Olá {this.props.users}</div>
		)
	}
}


// const mapStateToProps = state => {
// 	console.log(state);
// 	return { user: state.user }
// };
const mapStateToProps = (state, ownProps) => {
	return {
		user: state.user
	};
};
console.log(userActions);
const mapDispatchToProps = dispatch => bindActionCreators({ get: userActions.get }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailPage);
