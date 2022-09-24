/* eslint-disable react/forbid-prop-types */
import PropType from 'prop-types';
import React from 'react';
import { SettingItem } from '.';

const SettingsTable = ({ filteredSettings }) => (
  <div>
    {filteredSettings.length > 0 && (
      <div className="grid grid-product grid-count-6">
        <div className="grid-col" />
        <div className="grid-col">
          <h5>Name</h5>
        </div>
        <div className="grid-col">
          <h5>Brand</h5>
        </div>
        <div className="grid-col">
          <h5>Price</h5>
        </div>
        <div className="grid-col">
          <h5>Date Added</h5>
        </div>
        <div className="grid-col">
          <h5>Qty</h5>
        </div>
      </div>
    )}
    {filteredSettings.length === 0 ? new Array(10).fill({}).map((setting, index) => (
      <SettingItem
        // eslint-disable-next-line react/no-array-index-key
        key={`product-skeleton ${index}`}
        setting={setting}
      />
    )) : filteredSettings.map((setting) => (
      <SettingItem
        key={setting.id}
        setting={setting}
      />
    ))}
  </div>
);

SettingsTable.propTypes = {
  filteredSettings: PropType.array.isRequired
};

export default SettingsTable;
