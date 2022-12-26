/* eslint-disable react/forbid-prop-types */
import { Boundary, MessageDisplay } from 'components/common';
import PropType from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from 'redux/actions/miscActions';
import { getIngredient } from 'redux/actions/ingredientActions';

const IngredientList = (props) => {
  const {
   ingredients, filteredIngredients, isLoading, requestStatus, children
  } = props;
  const [isFetching, setFetching] = useState(false);
  const dispatch = useDispatch();

  const fetchIngredients = () => {
    setFetching(true);
    dispatch(getIngredient(ingredients));
  };

  useEffect(() => {
    if (ingredients === 0 || !ingredients.lastRefKey) {
      fetchIngredients();
    }

    window.scrollTo(0, 0);
    return () => dispatch(setLoading(false));
  }, []);

  useEffect(() => {
    setFetching(false);
  }, [ingredients.lastRefKey]);

  // if (filteredIngredients.length === 0 && !isLoading) {
  //   return (
  //     <MessageDisplay message={requestStatus?.message || 'No ingredients found for the moment.'} />
  //   );
  // } if (filteredIngredients.length === 0 && requestStatus) {
  //   return (
  //     <MessageDisplay
  //       message={requestStatus?.message || 'Something went wrong :('}
  //       action={fetchIngredients}
  //       buttonLabel="Try Again"
  //     />
  //   );
  // }
  return (
    <Boundary>
      {children}
      {/* Show 'Show More' button if ingredients length is less than total ingredients */}
      {/* {ingredients.items.length < ingredients.total && (
        <div className="d-flex-center padding-l">
          <button
            className="button button-small"
            disabled={isFetching}
            onClick={fetchIngredients}
            type="button"
          >
            {isFetching ? 'Fetching Items...' : 'Show More Items'}
          </button>
        </div>
      )} */}
    </Boundary>
  );
};

IngredientList.defaultProps = {
  requestStatus: null
};

IngredientList.propTypes = {
  ingredients: PropType.object.isRequired,
  filteredIngredients: PropType.array.isRequired,
  isLoading: PropType.bool.isRequired,
  requestStatus: PropType.string,
  children: PropType.oneOfType([
    PropType.arrayOf(PropType.node),
    PropType.node
  ]).isRequired
};

export default IngredientList;
