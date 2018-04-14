import React from 'react';
import { HashLoader } from 'react-spinners';
const Loading = () => {
	return (
		<div className="loading">
			<HashLoader className='align-middle' />
		</div>
	);
};
export default Loading;