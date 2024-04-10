import React from 'react'

export default function Alerts(props) {
	const convertCapital = (word) => {
		const lower = word.toLowerCase();
		return lower.charAt(0).toUpperCase() + word.slice(1);
	}
	return (
		<div style={{ height: '50px' }}>
			{props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
				<strong>{convertCapital(props.alert.type)}</strong>{props.alert.msg}
			</div>}
		</div>
	)
}
