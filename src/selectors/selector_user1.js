/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
export const selectFilter = (users1, filter) => {
  if (!users1 || users1.length === 0) return [];

  const keyword = filter.keyword.toLowerCase();

  return users1.filter((user1) => {
    const isInRange = filter.maxPrice
      ? (user1.price >= filter.minPrice && user1.price <= filter.maxPrice)
      : true;
    const matchKeyword = user1.keywords ? user1.keywords.includes(keyword) : true;
    // const matchName = user1.name ? user1.name.toLowerCase().includes(keyword) : true;
    const matchDescription = user1.description
      ? user1.description.toLowerCase().includes(keyword)
      : true;
    const matchBrand = user1.brand ? user1.brand.toLowerCase().includes(filter.brand) : true;

    return ((matchKeyword || matchDescription) && matchBrand && isInRange);
  }).sort((a, b) => {
    if (filter.sortBy === 'name-desc') {
      return a.name < b.name ? 1 : -1;
    } else if (filter.sortBy === 'name-asc') {
      return a.name > b.name ? 1 : -1;
    } else if (filter.sortBy === 'price-desc') {
      return a.price < b.price ? 1 : -1;
    }

    return a.price > b.price ? 1 : -1;
  });
};

// Select user1 with highest price
export const selectMax = (users1) => {
  if (!users1 || users1.length === 0) return 0;

  let high = users1[0];

  for (let i = 0; i < users1.length; i++) {
    if (users1[i].price > high.price) {
      high = users1[i];
    }
  }

  return Math.floor(high.price);
};

// Select user1 with lowest price
export const selectMin = (users1) => {
  if (!users1 || users1.length === 0) return 0;
  let low = users1[0];

  for (let i = 0; i < users1.length; i++) {
    if (users1[i].price < low.price) {
      low = users1[i];
    }
  }

  return Math.floor(low.price);
};
