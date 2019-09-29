import React from 'react';

const style = {
	fontSize: 110,
	color:    'white',
	textShadow: '2px 2px 2px #FF0000',
	position: 'absolute',
	top: '40%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
};

export const Display = (props) => {
	return (
		<div style={style}>
			{props.number}
		</div>
	);
}
