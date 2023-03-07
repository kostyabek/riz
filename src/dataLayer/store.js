import { createStore } from "redux";
import {
  tryConvert,
  uahToUsdConverter,
  usdToUahConverter,
} from "../uiLayer/utils";

const initialState = {
  cartItemIds: [],
  products: [
    {
      id: 1,
      title: "Product A",
      description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
      shortDescription: "Lorem ipsum dolor sit amet",
      category: "Category A",
      price: 114.99,
    },
    {
      id: 2,
      title: "Product B",
      description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
      shortDescription: "Lorem ipsum dolor sit amet",
      category: "Category A",
      price: 114.99,
    },
    {
      id: 3,
      title: "Product C",
      description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
      shortDescription: "Lorem ipsum dolor sit amet",
      category: "Category A",
      price: 114.99,
    },
    {
      id: 4,
      title: "Product D",
      description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
      shortDescription: "Lorem ipsum dolor sit amet",
      category: "Category B",
      price: 114.99,
    },
    {
      id: 5,
      title: "Product E",
      description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
      shortDescription: "Lorem ipsum dolor sit amet",
      category: "Category B",
      price: 114.99,
    },
    {
      id: 6,
      title: "Product F",
      description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
      shortDescription: "Lorem ipsum dolor sit amet",
      category: "Category B",
      price: 114.99,
    },
    {
      id: 7,
      title: "Product G",
      description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
      shortDescription: "Lorem ipsum dolor sit amet",
      category: "Category C",
      price: 114.99,
    },
    {
      id: 8,
      title: "Product H",
      description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
      shortDescription: "Lorem ipsum dolor sit amet",
      category: "Category C",
      price: 114.99,
    },
    {
      id: 9,
      title: "Product I",
      description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
      shortDescription: "Lorem ipsum dolor sit amet",
      category: "Category D",
      price: 114.99,
    },
    {
      id: 10,
      title: "Product J",
      description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
      shortDescription: "Lorem ipsum dolor sit amet",
      category: "Category D",
      price: 114.99,
    },
    {
      id: 11,
      title: "Product K",
      description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
      shortDescription: "Lorem ipsum dolor sit amet",
      category: "Category D",
      price: 114.99,
    },
    {
      id: 12,
      title: "Product L",
      description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
      shortDescription: "Lorem ipsum dolor sit amet",
      category: "Category D",
      price: 114.99,
    },
  ],
  categories: ["Category A", "Category B", "Category C", "Category D"],
  currencyData: {
    currency: "USD",
    symbol: "$",
  },
};

const addItemActionHandler = (state, itemId) => {
  return {
    ...state,
    cartItemIds: [...state.cartItemIds, itemId],
  };
};

const removeItemActionHandler = (state, itemId) => {
  const filteredItems = state.cartItemIds.filter((id) => id !== itemId);
  return {
    ...state,
    cartItemIds: filteredItems,
  };
};

const currencyChangeActionHandler = (state, currencyData) => {
  const isUsd = currencyData.currency === "USD";
  const products = state.products.map((e) => {
    return {
      ...e,
      price: tryConvert(e.price, isUsd ? uahToUsdConverter : usdToUahConverter),
    };
  });

  return {
    ...state,
    products,
    currencyData,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addItem":
      return addItemActionHandler(state, action.itemId);
    case "removeItem":
      return removeItemActionHandler(state, action.itemId);
    case "currencyChange":
      return currencyChangeActionHandler(state, action.currencyData);
    default:
      break;
  }

  return state;
};

export const store = createStore(reducer);
