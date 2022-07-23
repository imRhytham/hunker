import * as Types from '../types';

export const productReducer = (state, action) => {
	switch (action.type) {
		case Types.CLEAR_PRODUCT:
			return {
				...state,
				products: [],
				loading: false,
			};

		case Types.GET_SINGLE_PRODUCT:
			return {
				...state,
				singleProduct: action.payload,
				loading: false,
			};

		case Types.GET_FILTERED_PRODUCTS:
			return {
				...state,
				filteredProducts: action.payload,
				loading: false,
			};

		case Types.SEARCH_PRODUCT:
			return {
				...state,
				products: action.payload,
				loading: false,
			};

		case Types.SET_LOADING:
			return {
				...state,
				loading: true,
			};

		default:
			return state;
	}
};
