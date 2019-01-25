import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import gql from 'graphql-tag';
import Error from './ErrorMessage';

const CREATE_ITEM_MUTATION = gql`
	mutation CREATE_ITEM_MUTATION(
		$title: String!
		$description: String!
		$price: Int!
		$image: String
		$largeImage: String
	) {
		createItem(
			title: $title
			description: $description
			price: $price
			image: $image
			largeImage: $largeImage
		) {
			id
		}
	}
`;

class CreateItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: '',
			image: '',
			largeImage: '',
			price: 5
		};
	}
	handleChange = (e, name) => {
		this.setState({ [name]: e.target.value });
	};

	render() {
		return (
			<Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
				{(createItem, payload) => (
					<Form
						onSubmit={async (e) => {
							//stop form from submitting
							e.preventDefault();
							//call the mutation
							const res = await createItem();
							console.log(res);
						}}
					>
						<Error error={payload.error} />
						<fieldset disabled={payload.loading} aria-busy={payload.loading}>
							<label htmlFor='title'>
								Title
								<input
									onChange={(e) => this.handleChange(e, 'title')}
									type='text'
									id='title'
									name='title'
									placeholder='Title'
									required
									value={this.state.title}
								/>
							</label>
							<label htmlFor='price'>
								Price
								<input
									onChange={(e) => this.handleChange(e, 'price')}
									type='number'
									id='price'
									name='price'
									placeholder='Price'
									required
									value={this.state.price}
								/>
							</label>
							<label htmlFor='description'>
								Description
								<textarea
									onChange={(e) => this.handleChange(e, 'description')}
									id='description'
									name='description'
									placeholder='Enter a description'
									required
									value={this.state.description}
								/>
							</label>
							<button type='submit'>Submit</button>
						</fieldset>
					</Form>
				)}
			</Mutation>
		);
	}
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };
