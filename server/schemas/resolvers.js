// TODO: Define the query and mutation functionality to work with the Mongoose models.
// Use the functionality in the user-controller.js as a guide.

const { User } = require('../models');
const signToken = require('');

const resolvers = {
  Query: {
    me: async () => {
      return await User.find({}).populate('users');
    },
    books: async () => {
      return await bookSchema.find({}).populate('books');
    },
  },
  Mutation: {
    removeBook: async (parent, {  }) => {
      return await bookSchema.remove({  });
    },
  },
};

module.exports = resolvers;
