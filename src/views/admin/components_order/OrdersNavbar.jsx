import { FilterOutlined, PlusOutlined } from '@ant-design/icons';
import { FiltersToogleOrder, SearchBar } from 'components/common';
import { ADD_ORDER } from 'constants/routes';
import PropType from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

const OrdersNavbar = (props) => {
  const { ordersCount, totalOrdersCount } = props;
  const history = useHistory();

  return (
    <div className="product-admin-header">
      <h3 className="product-admin-header-title">
        Orders2 &nbsp;
        (
        {`${ordersCount} / ${totalOrdersCount}`}
        )
      </h3>
      <SearchBar />
            &nbsp;
      {/* <FiltersToogleMenu>
        <button className="button-muted button-small" type="button">
          <FilterOutlined />
          &nbsp;More Filters
        </button>
      </FiltersToogleMenu> */}
      
  
      {/* <button
        className="button button-small"
        onClick={() => history.push(ADD_MENU)}
        type="button"
      >
        <PlusOutlined />
        &nbsp; Add New Menu2
      </button> */}
    </div>
  );
};

OrdersNavbar.propTypes = {
  ordersCount: PropType.number.isRequired,
  totalOrdersCount: PropType.number.isRequired
};

export default OrdersNavbar;

// okay