import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';

class Item extends Component {
	constructor(props) {
		super(props);
	}
	// static propTypes = {
	// 	item: PropTypes.object.isRequired
	// };

	render() {
		const item = this.props;
		// console.log(this.props);
		return (
			<ItemStyles>
				<Title>{item.title}</Title>
			</ItemStyles>
		);
	}
}

// Item.propTypes = {};

export default Item;
