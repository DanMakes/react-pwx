import React from 'react';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap';
class UserPage extends React.Component {
	render() {
		return (
			<Jumbotron>
				<Row>
					<Col>
						Daew
						<Button bsStyle='primary'>Primary </Button>
					</Col>
				</Row>
			</Jumbotron>
		);
	}
}

export default UserPage;