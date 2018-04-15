
import React from 'react';
import PropTypes from 'prop-types';

const DetailTextField = ({ text, label, formatter }) => {
	return (
		<div>
			{formatter ? formatter(text) : text}
			<br />
			{label && (<small>
				{label}
			</small>)}
		</div>
	);
};

DetailTextField.propTypes = {
	text: PropTypes.string.isRequired,
	label: PropTypes.string,
	formatter: PropTypes.func
};

DetailTextField.defaultProps = {
	text: ''
};

export default DetailTextField;