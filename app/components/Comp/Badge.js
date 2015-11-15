import React from 'react';
import mergeObjects from './m';

//Badge styles
import styles from './styles/badge.js';

/**
* @discription: This component render badges
 * @props: type (String):
 		- Type of button [primary, default, secondary, danger, success]
		- default: default
 * @props: label (String): Label text - default: 'Label'
 *
 * USAGE:
 * <Badge  type="danger" label="Refected" />
 *
 */
class Badge extends React.Component {
	render() {
		const { type, label } = this.props;
		let badgeStyle = mergeObjects(
			styles.base,
			styles.variant(type)
		);
		return (
			<span style={badgeStyle}>{label}</span>
		);
	}
}

Badge.propTypes = {
	label: React.PropTypes.string
};

Badge.defaultProps = {
	label: 'Label'
}

export default Badge;
