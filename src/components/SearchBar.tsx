import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  Search,
  Label,
  SearchResultData,
  SearchProps,
  SearchResultProps,
  Item
} from "semantic-ui-react";
import debounce from "lodash/debounce";
import escapeRegExp from "lodash/escapeRegExp";
import filter from "lodash/filter";
import { createSelector } from "reselect";
import { fetchProducts } from "../actions";
import { AppState } from "../reducers";
import history from "../history";

const getProducts = (state: AppState) => state.products;

const getSearchFormatedProducts = createSelector(getProducts, products => {
  return products.map(p => {
    const price = p.price_discount > 0 ? p.price_discount : p.price;
    const searchResult: SearchResultProps = {
      title: p.name,
      price: price + " $",
      description: p.excerpt,
      image: p.photo,
      id: p.id
    };
    return searchResult;
  });
});

type TSearchState = {
  isLoading?: boolean;
  results: SearchResultProps[];
  value: any;
};

const initialState: TSearchState = { isLoading: false, results: [], value: "" };

const SearchBar: React.FC = () => {
  const products = useSelector(getSearchFormatedProducts);
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleResultSelect = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: SearchResultData
  ) => {
    setState({ ...state, value: data.result.title });
    history.push(`/product/${data.result.id}`);
    // setState({ value: data.result });
  };

  const handleSearchChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    data: SearchProps
  ) => {
    setState({ ...state, isLoading: true, value: data.value });

    if (data.value && data.value.length < 1) return setState(initialState);

    const re = new RegExp(escapeRegExp(data.value), "i");
    const isMatch = (result: SearchResultProps) => re.test(result.title);
    const resu = filter(products, isMatch);
    console.log(resu);
    setState({ ...state, isLoading: false, results: resu, value: data.value });
    //   setState({
    //     ...state,
    //     isLoading: false,
    //     results: filter(products, isMatch)
    //   });
  };
  const { isLoading, results, value } = state;
  return (
    <Search
      loading={isLoading}
      results={results}
      value={value}
      onResultSelect={handleResultSelect}
      onSearchChange={debounce(handleSearchChange, 500, { leading: true })}
    />
  );
};

export default SearchBar;
