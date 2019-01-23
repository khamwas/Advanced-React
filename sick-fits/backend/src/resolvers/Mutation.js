const Mutations = {
	createItem: async function(parent, args, ctx, info) {
		//TODO: check if they are logged in
		const item = await ctx.db.mutation.createItem(
			{
				data: {
					...args
				}
			},
			info
		);
		return item;
	}

	// createDog: function(parent, args, ctx, info) {
	// 	global.dogs = global.dogs || [];
	// 	//create a dog!
	// 	const newDog = { name: args.name };
	// 	global.dogs.push(newDog);
	// 	return newDog;
	// 	// console.log(args);
	// }
};

module.exports = Mutations;
