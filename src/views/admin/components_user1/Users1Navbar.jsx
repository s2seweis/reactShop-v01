import { FilterOutlined, PlusOutlined } from '@ant-design/icons';
import { FiltersToggle, SearchBar } from 'components/common';
import { ADD_USER1 } from 'constants/routes';
import PropType from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Users1Navbar = (props) => {
  const { users1Count, totalUsers1Count } = props;
  const history = useHistory();

  return (
    <div className="product-admin-header">



      <h5 className="product-admin-header-title"
       style={{ 
          width: '400px', 
         
          backgroundColor: 'red'
        }}
      
      >
        Users2 &nbsp;
        (
        {`${users1Count} / ${totalUsers1Count}`}
        )
      </h5>




      <SearchBar />
            &nbsp;
      {/* <FiltersToggle>
        <button className="button-muted button-small" type="button">
          <FilterOutlined />
          &nbsp;More Filters
        </button>
      </FiltersToggle> */}
      <button
        className="button button-small"
        onClick={() => history.push(ADD_USER1)}
        type="button"
      >
        <PlusOutlined />
        &nbsp; Add New User2
      </button>
    </div>
  );
};

Users1Navbar.propTypes = {
  users1Count: PropType.number.isRequired,
  totalUsers1Count: PropType.number.isRequired
};

export default Users1Navbar;

// okay
