import { ArrowRightOutlined, ShopOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { BasketItem } from 'components/basket';
import { CHECKOUT_STEP_2, CHECKOUT_STEP_3 } from 'constants/routes';
import { displayMoney } from 'helpers/utils';
import { useDocumentTitle, useScrollTop } from 'hooks';
import PropType from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StepTracker } from '../components';
import withCheckout from '../hoc/withCheckout';

import { setOrderDetails } from 'redux/actions/checkoutActions';


const Order = ({ basket, payment, shipping, subtotal, Total }) => {
  // useDocumentTitle('Check Out Step 1 | Salinaka');
  // useScrollTop();
  const dispatch = useDispatch();
  const history = useHistory();
  // const onClickPrevious = () => history.push('/');
  // const onClickNext = () => history.push(CHECKOUT_STEP_2);

  const onClickNext = (form) => {
    dispatch(setOrderDetails({
      basket: basket,
      payment: payment,
      shipping: shipping,
      subtotal: subtotal,
      dateAdded: new Date().getTime(),
      // Total: Total

    }));
    // history.push(CHECKOUT_STEP_2);
  };

  return (
    <div className="checkout">
      <StepTracker current={4} />
      <div className="checkout-step-1">
        <h3 className="text-center">Order Summary</h3>
        <span className="d-block text-center">Almost Complete. </span>
        <br />
        {/* <div className="checkout-items">
          {basket.map((product) => (
            <BasketItem
              basket={basket}
              dispatch={dispatch}
              key={product.id}
              product={product}
            />
          ))}
        </div> */}
        <br />
        {/* <div className="basket-total text-right">
          <p className="basket-total-title">Subtotal:</p>
          <h2 className="basket-total-amount">{displayMoney(subtotal)}</h2>
        </div> */}
        <br />
        <div className="checkout-shipping-action">

          {/* <button
            className="button button-muted"
            onClick={onClickPrevious}
            type="button"
          >
            <ShopOutlined />
            &nbsp;
            Continue Shopping
          </button> */}

          <button
            className="button button-muted"
            onClick={() => history.push(CHECKOUT_STEP_3)}
            type="button"
          >
            <ArrowLeftOutlined />
            &nbsp;
            Go Back
          </button>

          <button
            className="button"
            onClick={onClickNext}
            type="submit"
          >
            Place Order
            &nbsp;
            <ArrowRightOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

// OrderSummary.propTypes = {
//   basket: PropType.arrayOf(PropType.object).isRequired,
//   subtotal: PropType.number.isRequired
// };

export default withCheckout(Order);
