import React, { useReducer } from 'react';
import ProductContext from './ProductContext';
import { productReducer } from './ProductReducer';
import * as Types from '../type';
import axios from 'axios';

const ProductState = (props) => {
	const initialState = {
		products: [],
		filteredProducts: [],
		singleProduct: {},
		loading: false,
	};

	const [state, dispatch] = useReducer(productReducer, initialState);

	const setLoading = () => dispatch({ type: Types.SET_LOADING });

	const seachProduct = async (text) => {
		setLoading();
		const url = `'https://dummyjson.com/products/search?q=${text}`;
		const resp = await axios.get(url);
		dispatch({ type: Types.SEARCH_PRODUCT, payload: resp.data });
	};

	const getProducts = async (text) => {
		setLoading();
		const url = `'https://dummyjson.com/products`;
		const resp = await axios.get(url);
		dispatch({ type: Types.GET_PRODUCT, payload: resp.data });
	};

	const getSingleProduct = async (id) => {
		setLoading();
		const url = `'https://dummyjson.com/products/${id}`;
		const resp = await axios.get(url);
		dispatch({ type: Types.GET_SINGLE_PRODUCT, payload: resp.data });
	};

	return (
		<ProductContext.Provider
			value={{
				products: state.products,
				filteredProducts: state.filteredProducts,
				product: state.product,
				loading: state.loading,
				seachProduct,
				setLoading,
				getProducts,
				getSingleProduct,
			}}
		>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductState;
