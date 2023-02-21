import { useFormikContext } from 'formik';
import { displayMoney } from 'helpers/utils';
import PropType from 'prop-types';
import React from 'react';

const ShippingTotal = ({ subtotal }) => {
  const { values } = useFormikContext();
  console.log(subtotal)
  console.log(+subtotal)

  const deliveryCosts1 = +50;
  console.log(deliveryCosts1)

  const deliveryCosts2 = 50;
  console.log(deliveryCosts2)

  const deliveryCosts3 = "50";
  console.log(deliveryCosts3)

  const costsTotal = subtotal + deliveryCosts1
  console.log(costsTotal)

  return (
    <div className="checkout-total d-flex-end padding-right-m">
      <table>
        <tbody>
          <tr>
            <td>
              <span className="d-block margin-0 padding-right-s text-right">
                International Shipping: &nbsp;
              </span>
            </td>
            <td>
              <h4 className="basket-total-amount text-subtle text-right margin-0 ">
                {values.isInternational ? '$50.00' : '$0.00'}
              </h4>
            </td>
          </tr>
          <tr>
            <td>
              <span className="d-block margin-0 padding-right-s text-right">
                Subtotal: &nbsp;
              </span>
            </td>
            <td>
              <h4 className="basket-total-amount text-subtle text-right margin-0">
                {displayMoney(subtotal)}
              </h4>
            </td>
          </tr>
          <tr>
            <td>
              <span className="d-block margin-0 padding-right-s text-right">
                Total: &nbsp;
              </span>
            </td>
            <td>


              {/* Using for add ingredients component  */}
              <h2 className="basket-total-amount text-right">
                {/* {displayMoney(Number(subtotal) + (values.isInternational ? 50 : 0))} */}
                {displayMoney(Number(subtotal) + (values.isInternational ? deliveryCosts2 : 0))}
              </h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

ShippingTotal.propTypes = {
  // subtotal: PropType.string.isRequired
  subtotal: PropType.number.isRequired
};

export default ShippingTotal;
