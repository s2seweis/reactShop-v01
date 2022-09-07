// import { CloseOutlined } from '@ant-design/icons';
// import { BasketItemControl } from 'components/basket';
// import { ImageLoader } from 'components/common';
// import { displayMoney } from 'helpers/utils';
// import PropType from 'prop-types';
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// // import { removeFromBasket } from 'redux/actions/basketActions';

// const OrderItem = ({ menu }) => {
//   const dispatch = useDispatch();
//   // const onRemoveFromBasket = () => dispatch(removeFromBasket(menu.id));

//   return (
//     <div className="basket-item">
//       {/* <BasketItemControl menu={menu} /> */}
//       <div className="basket-item-wrapper">
//         <div className="basket-item-img-wrapper">
//           <ImageLoader
//             alt={menu.name}
//             className="basket-item-img"
//             src={menu.image}
//           />
//         </div>
//         <div className="basket-item-details">
//           <Link to={`/menu/${menu.id}`} onClick={() => document.body.classList.remove('is-basket-open')}>
//             <h4 className="underline basket-item-name">
//               {menu.name}
//             </h4>
//           </Link>
//           <div className="basket-item-specs">
//             <div>
//               <span className="spec-title">Quantity</span>
//               <h5 className="my-0">{menu.quantity}</h5>
//             </div>
//             <div>
//               <span className="spec-title">Size</span>
//               <h5 className="my-0">
//                 {menu.selectedSize}
//                 {' '}
//                 mm
//               </h5>
//             </div>
//             <div>
//               <span className="spec-title">Color</span>
//               <div style={{
//                 backgroundColor: menu.selectedColor || menu.availableColors[0],
//                 width: '15px',
//                 height: '15px',
//                 borderRadius: '50%'
//               }}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="basket-item-price">
//           <h4 className="my-0">{displayMoney(menu.price * menu.quantity)}</h4>
//         </div>
//         {/* <button
//           className="basket-item-remove button button-border button-border-gray button-small"
//           onClick={onRemoveFromBasket}
//           type="button"
//         >
//           <CloseOutlined />
//         </button> */}
//       </div>
//     </div>
//   );
// };

// OrderItem.propTypes = {
//   menu: PropType.shape({
//     id: PropType.string,
//     name: PropType.string,
//     brand: PropType.string,
//     price: PropType.number,
//     quantity: PropType.number,
//     maxQuantity: PropType.number,
//     description: PropType.string,
//     keywords: PropType.arrayOf(PropType.string),
//     selectedSize: PropType.string,
//     selectedColor: PropType.string,
//     imageCollection: PropType.arrayOf(PropType.string),
//     sizes: PropType.arrayOf(PropType.number),
//     image: PropType.string,
//     imageUrl: PropType.string,
//     isFeatured: PropType.bool,
//     isRecommended: PropType.bool,
//     availableColors: PropType.arrayOf(PropType.string)
//   }).isRequired
// };

// export default OrderItem;