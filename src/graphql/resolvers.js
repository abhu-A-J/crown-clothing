import { gql } from '@apollo/client';
import { addItemToCart } from '../redux/cart/cart.utils';

/* TypeDef are capitalized */
export const typeDefs = gql`
   Item {
    quantity: Int
  }

  Mutation {
    toggleCartHidden: Boolean!
    addItemToCart(item: Item): [Item!]
  }
`;

const GET_CART_HIDDDEN = gql`
  {
    cartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
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

    addItemToCart: (_root, _args, _context) => {
      const { item } = _args;
      const { cache } = _context;

      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = addItemToCart(cartItems, item);

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: {
          cartItems: newCartItems,
        },
      });
      return newCartItems;
    },
  },
};
