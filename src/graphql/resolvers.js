import { gql } from '@apollo/client';

/* TypeDef are capitalized */
export const typeDefs = gql`
  extend type Mutation {
    ToggleCartHidden: Boolean!
  }
`;

const GET_CART_HIDDDEN = gql`
  {
    cartHidden @client
  }
`;

export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, _context, _info) => {
      const { cache } = _context;
      const data = cache.readQuery({
        query: GET_CART_HIDDDEN,
        variables: {},
      });

      const { cartHidden } = data;

      cache.writeQuery({
        query: GET_CART_HIDDDEN,
        data: {
          cartHidden: !cartHidden,
        },
      });

			return !cartHidden;
    },
  },
};
