/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 26431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


var BasketToggle = function BasketToggle(_ref) {
  var children = _ref.children;

  var onClickToggle = function onClickToggle() {
    if (document.body.classList.contains('is-basket-open')) {
      document.body.classList.remove('is-basket-open');
    } else {
      document.body.classList.add('is-basket-open');
    }
  };

  document.addEventListener('click', function (e) {
    var closest = e.target.closest('.basket');
    var toggle = e.target.closest('.basket-toggle');
    var closeToggle = e.target.closest('.basket-item-remove');

    if (!closest && document.body.classList.contains('is-basket-open') && !toggle && !closeToggle) {
      document.body.classList.remove('is-basket-open');
    }
  });
  return children({
    onClickToggle: onClickToggle
  });
};

BasketToggle.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node)]).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasketToggle);

/***/ }),

/***/ 42563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LX": () => (/* reexport */ basket_Basket),
  "fj": () => (/* reexport */ basket_BasketItem),
  "Lr": () => (/* reexport */ basket_BasketItemControl),
  "PK": () => (/* reexport */ BasketToggle/* default */.Z)
});

// EXTERNAL MODULE: ./src/components/common/index.js + 24 modules
var common = __webpack_require__(10090);
// EXTERNAL MODULE: ./src/constants/routes.js
var routes = __webpack_require__(50409);
// EXTERNAL MODULE: ./node_modules/firebase/firebase.js
var firebase = __webpack_require__(23149);
var firebase_default = /*#__PURE__*/__webpack_require__.n(firebase);
// EXTERNAL MODULE: ./src/helpers/utils.js
var utils = __webpack_require__(89722);
// EXTERNAL MODULE: ./src/hooks/index.js + 9 modules
var hooks = __webpack_require__(56311);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__(28216);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./src/redux/actions/basketActions.js
var basketActions = __webpack_require__(14548);
;// CONCATENATED MODULE: ./src/components/basket/Basket.jsx
/* eslint-disable max-len */











var Basket = function Basket() {
  var _useModal = (0,hooks/* useModal */.dd)(),
      isOpenModal = _useModal.isOpenModal,
      onOpenModal = _useModal.onOpenModal,
      onCloseModal = _useModal.onCloseModal;

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return {
      basket: state.basket,
      user: state.auth
    };
  }),
      basket = _useSelector.basket,
      user = _useSelector.user;

  var history = (0,react_router/* useHistory */.k6)();

  var _useLocation = (0,react_router/* useLocation */.TH)(),
      pathname = _useLocation.pathname;

  var dispatch = (0,es/* useDispatch */.I0)();
  var didMount = (0,hooks/* useDidMount */.Hd)();
  (0,react.useEffect)(function () {
    if (didMount && (firebase_default()).auth.currentUser && basket.length !== 0) {
      firebase_default().saveBasketItems(basket, (firebase_default()).auth.currentUser.uid).then(function () {
        console.log('Item saved to basket');
      })["catch"](function (e) {
        console.log(e);
      });
    }
  }, [basket.length]);

  var onCheckOut = function onCheckOut() {
    if (basket.length !== 0 && user) {
      document.body.classList.remove('is-basket-open');
      history.push(routes/* CHECKOUT_STEP_1 */.Fr);
    } else {
      onOpenModal();
    }
  };

  var onSignInClick = function onSignInClick() {
    onCloseModal();
    document.body.classList.remove('basket-open');
    history.push(routes/* CHECKOUT_STEP_1 */.Fr);
  };

  var onClearBasket = function onClearBasket() {
    if (basket.length !== 0) {
      dispatch((0,basketActions/* clearBasket */.RT)());
    }
  };

  return user && user.role === 'ADMIN' ? null : /*#__PURE__*/react.createElement(common/* Boundary */.EW, null, /*#__PURE__*/react.createElement(common/* Modal */.u_, {
    isOpen: isOpenModal,
    onRequestClose: onCloseModal
  }, /*#__PURE__*/react.createElement("p", {
    className: "text-center"
  }, "You must sign in to continue checking out"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    className: "d-flex-center"
  }, /*#__PURE__*/react.createElement("button", {
    className: "button button-border button-border-gray button-small",
    onClick: onCloseModal,
    type: "button"
  }, "Continue shopping"), "\xA0", /*#__PURE__*/react.createElement("button", {
    className: "button button-small",
    onClick: onSignInClick,
    type: "button"
  }, "Sign in to checkout"))), /*#__PURE__*/react.createElement("div", {
    className: "basket"
  }, /*#__PURE__*/react.createElement("div", {
    className: "basket-list"
  }, /*#__PURE__*/react.createElement("div", {
    className: "basket-header"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "basket-header-title"
  }, "My Basket \xA0", /*#__PURE__*/react.createElement("span", null, "(", " ".concat(basket.length, " ").concat(basket.length > 1 ? 'items' : 'item'), ")")), /*#__PURE__*/react.createElement(BasketToggle/* default */.Z, null, function (_ref) {
    var onClickToggle = _ref.onClickToggle;
    return /*#__PURE__*/react.createElement("span", {
      className: "basket-toggle button button-border button-border-gray button-small",
      onClick: onClickToggle,
      role: "presentation"
    }, "Close");
  }), /*#__PURE__*/react.createElement("button", {
    className: "basket-clear button button-border button-border-gray button-small",
    disabled: basket.length === 0,
    onClick: onClearBasket,
    type: "button"
  }, /*#__PURE__*/react.createElement("span", null, "Clear Basket"))), basket.length <= 0 && /*#__PURE__*/react.createElement("div", {
    className: "basket-empty"
  }, /*#__PURE__*/react.createElement("h5", {
    className: "basket-empty-msg"
  }, "Your basket is empty")), basket.map(function (product, i) {
    return /*#__PURE__*/react.createElement(basket_BasketItem // eslint-disable-next-line react/no-array-index-key
    , {
      key: "".concat(product.id, "_").concat(i),
      product: product,
      basket: basket,
      dispatch: dispatch
    });
  })), /*#__PURE__*/react.createElement("div", {
    className: "basket-checkout"
  }, /*#__PURE__*/react.createElement("div", {
    className: "basket-total"
  }, /*#__PURE__*/react.createElement("p", {
    className: "basket-total-title"
  }, "Subtotal Amout:"), /*#__PURE__*/react.createElement("h2", {
    className: "basket-total-amount"
  }, (0,utils/* displayMoney */.ik)((0,utils/* calculateTotal */.tf)(basket.map(function (product) {
    return product.price * product.quantity;
  }))))), /*#__PURE__*/react.createElement("button", {
    className: "basket-checkout-button button",
    disabled: basket.length === 0 || pathname === '/checkout',
    onClick: onCheckOut,
    type: "button"
  }, "Check Out"))));
};

/* harmony default export */ const basket_Basket = (Basket);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(54549);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
;// CONCATENATED MODULE: ./src/components/basket/BasketItem.jsx










var BasketItem = function BasketItem(_ref) {
  var product = _ref.product;
  var dispatch = (0,es/* useDispatch */.I0)();

  var onRemoveFromBasket = function onRemoveFromBasket() {
    return dispatch((0,basketActions/* removeFromBasket */.Er)(product.id));
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "basket-item"
  }, /*#__PURE__*/react.createElement(basket_BasketItemControl, {
    product: product
  }), /*#__PURE__*/react.createElement("div", {
    className: "basket-item-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "basket-item-img-wrapper"
  }, /*#__PURE__*/react.createElement(common/* ImageLoader */.S3, {
    alt: product.name,
    className: "basket-item-img",
    src: product.image
  })), /*#__PURE__*/react.createElement("div", {
    className: "basket-item-details"
  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: "/product/".concat(product.id),
    onClick: function onClick() {
      return document.body.classList.remove('is-basket-open');
    }
  }, /*#__PURE__*/react.createElement("h4", {
    className: "underline basket-item-name"
  }, product.name)), /*#__PURE__*/react.createElement("div", {
    className: "basket-item-specs"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
    className: "spec-title"
  }, "Quantity"), /*#__PURE__*/react.createElement("h5", {
    className: "my-0"
  }, product.quantity)), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
    className: "spec-title"
  }, "Size"), /*#__PURE__*/react.createElement("h5", {
    className: "my-0"
  }, product.selectedSize, ' ', "mm")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
    className: "spec-title"
  }, "Color"), /*#__PURE__*/react.createElement("div", {
    style: {
      backgroundColor: product.selectedColor || product.availableColors[0],
      width: '15px',
      height: '15px',
      borderRadius: '50%'
    }
  })))), /*#__PURE__*/react.createElement("div", {
    className: "basket-item-price"
  }, /*#__PURE__*/react.createElement("h4", {
    className: "my-0"
  }, (0,utils/* displayMoney */.ik)(product.price * product.quantity))), /*#__PURE__*/react.createElement("button", {
    className: "basket-item-remove button button-border button-border-gray button-small",
    onClick: onRemoveFromBasket,
    type: "button"
  }, /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null))));
};

BasketItem.propTypes = {
  product: prop_types_default().shape({
    id: (prop_types_default()).string,
    name: (prop_types_default()).string,
    brand: (prop_types_default()).string,
    price: (prop_types_default()).number,
    quantity: (prop_types_default()).number,
    maxQuantity: (prop_types_default()).number,
    description: (prop_types_default()).string,
    keywords: prop_types_default().arrayOf((prop_types_default()).string),
    selectedSize: (prop_types_default()).string,
    selectedColor: (prop_types_default()).string,
    imageCollection: prop_types_default().arrayOf((prop_types_default()).string),
    sizes: prop_types_default().arrayOf((prop_types_default()).number),
    image: (prop_types_default()).string,
    imageUrl: (prop_types_default()).string,
    isFeatured: (prop_types_default()).bool,
    isRecommended: (prop_types_default()).bool,
    availableColors: prop_types_default().arrayOf((prop_types_default()).string)
  }).isRequired
};
/* harmony default export */ const basket_BasketItem = (BasketItem);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js + 1 modules
var PlusOutlined = __webpack_require__(49101);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/MinusOutlined.js + 1 modules
var MinusOutlined = __webpack_require__(1058);
;// CONCATENATED MODULE: ./src/components/basket/BasketItemControl.jsx






var BasketItemControl = function BasketItemControl(_ref) {
  var product = _ref.product;
  var dispatch = (0,es/* useDispatch */.I0)();

  var onAddQty = function onAddQty() {
    if (product.quantity < product.maxQuantity) {
      dispatch((0,basketActions/* addQtyItem */.xj)(product.id));
    }
  };

  var onMinusQty = function onMinusQty() {
    if (product.maxQuantity >= product.quantity && product.quantity !== 0) {
      dispatch((0,basketActions/* minusQtyItem */.Mq)(product.id));
    }
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "basket-item-control"
  }, /*#__PURE__*/react.createElement("button", {
    className: "button button-border button-border-gray button-small basket-control basket-control-add",
    disabled: product.maxQuantity === product.quantity,
    onClick: onAddQty,
    type: "button"
  }, /*#__PURE__*/react.createElement(PlusOutlined/* default */.Z, {
    style: {
      fontSize: '9px'
    }
  })), /*#__PURE__*/react.createElement("button", {
    className: "button button-border button-border-gray button-small basket-control basket-control-minus",
    disabled: product.quantity === 1,
    onClick: onMinusQty,
    type: "button"
  }, /*#__PURE__*/react.createElement(MinusOutlined/* default */.Z, {
    style: {
      fontSize: '9px'
    }
  })));
};

BasketItemControl.propTypes = {
  product: prop_types_default().shape({
    id: (prop_types_default()).string,
    name: (prop_types_default()).string,
    brand: (prop_types_default()).string,
    price: (prop_types_default()).number,
    quantity: (prop_types_default()).number,
    maxQuantity: (prop_types_default()).number,
    description: (prop_types_default()).string,
    keywords: prop_types_default().arrayOf((prop_types_default()).string),
    selectedSize: (prop_types_default()).string,
    selectedColor: (prop_types_default()).string,
    imageCollection: prop_types_default().arrayOf((prop_types_default()).string),
    sizes: prop_types_default().arrayOf((prop_types_default()).number),
    image: (prop_types_default()).string,
    imageUrl: (prop_types_default()).string,
    isFeatured: (prop_types_default()).bool,
    isRecommended: (prop_types_default()).bool,
    availableColors: prop_types_default().arrayOf((prop_types_default()).string)
  }).isRequired
};
/* harmony default export */ const basket_BasketItemControl = (BasketItemControl);
// EXTERNAL MODULE: ./src/components/basket/BasketToggle.jsx
var BasketToggle = __webpack_require__(26431);
;// CONCATENATED MODULE: ./src/components/basket/index.js





/***/ }),

/***/ 10090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ws": () => (/* reexport */ common_AdminNavigation),
  "MQ": () => (/* reexport */ AdminSidePanel),
  "EW": () => (/* reexport */ common_Boundary),
  "PT": () => (/* reexport */ common_ColorChooser),
  "a7": () => (/* reexport */ common_FiltersToggle),
  "$_": () => (/* reexport */ common_Footer),
  "S3": () => (/* reexport */ common_ImageLoader),
  "t0": () => (/* reexport */ common_MessageDisplay),
  "u_": () => (/* reexport */ common_Modal),
  "W_": () => (/* reexport */ common_Navigation),
  "p9": () => (/* reexport */ common_Preloader),
  "E1": () => (/* reexport */ common_SearchBar),
  "JX": () => (/* reexport */ common_SocialLogin)
});

// UNUSED EXPORTS: Badge, Filters, MobileNavigation, PriceRange

// EXTERNAL MODULE: ./src/constants/routes.js
var routes = __webpack_require__(50409);
;// CONCATENATED MODULE: ./src/images/logo-full.png
/* harmony default export */ const logo_full = (__webpack_require__.p + "images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__(28216);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(7085);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(57254);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UserOutlined.js + 1 modules
var UserOutlined = __webpack_require__(89366);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LogoutOutlined.js + 1 modules
var LogoutOutlined = __webpack_require__(55035);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./src/redux/actions/authActions.js
var authActions = __webpack_require__(67865);
;// CONCATENATED MODULE: ./src/views/account/components/UserAvatar.jsx
/* eslint-disable indent */








var UserNav = function UserNav() {
  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return {
      profile: state.profile,
      isAuthenticating: state.app.isAuthenticating
    };
  }),
      profile = _useSelector.profile,
      isAuthenticating = _useSelector.isAuthenticating;

  var userNav = (0,react.useRef)(null);
  var dispatch = (0,es/* useDispatch */.I0)();

  var toggleDropdown = function toggleDropdown(e) {
    var closest = e.target.closest('div.user-nav');

    try {
      if (!closest && userNav.current.classList.contains('user-sub-open')) {
        userNav.current.classList.remove('user-sub-open');
      }
    } catch (err) {
      console.log(err);
    }
  };

  (0,react.useEffect)(function () {
    document.addEventListener('click', toggleDropdown);
    return function () {
      return document.removeEventListener('click', toggleDropdown);
    };
  }, []);

  var onClickNav = function onClickNav() {
    userNav.current.classList.toggle('user-sub-open');
  };

  return isAuthenticating ? /*#__PURE__*/react.createElement("div", {
    className: "user-nav"
  }, /*#__PURE__*/react.createElement("span", null, "Signing Out"), "\xA0", /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null)) : /*#__PURE__*/react.createElement("div", {
    className: "user-nav",
    onClick: onClickNav,
    onKeyDown: function onKeyDown() {},
    ref: userNav,
    role: "button",
    tabIndex: 0
  }, /*#__PURE__*/react.createElement("h5", {
    className: "text-overflow-ellipsis"
  }, profile.fullname && profile.fullname.split(' ')[0]), /*#__PURE__*/react.createElement("div", {
    className: "user-nav-img-wrapper"
  }, /*#__PURE__*/react.createElement("img", {
    alt: "",
    className: "user-nav-img",
    src: profile.avatar
  })), /*#__PURE__*/react.createElement(DownOutlined/* default */.Z, {
    style: {
      fontSize: '1.2rem',
      marginLeft: '1rem'
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "user-nav-sub"
  }, profile.role !== 'ADMIN' && /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: routes/* ACCOUNT */.yV,
    className: "user-nav-sub-link"
  }, "View Account", /*#__PURE__*/react.createElement(UserOutlined/* default */.Z, null)), /*#__PURE__*/react.createElement("h6", {
    className: "user-nav-sub-link margin-0 d-flex",
    onClick: function onClick() {
      return dispatch((0,authActions/* signOut */.w7)());
    },
    role: "presentation"
  }, "Sign Out", /*#__PURE__*/react.createElement(LogoutOutlined/* default */.Z, null))));
};

UserNav.propType = {
  profile: (prop_types_default()).object.isRequired
};
/* harmony default export */ const UserAvatar = ((0,react_router/* withRouter */.EN)(UserNav));
;// CONCATENATED MODULE: ./src/components/common/AdminNavigation.jsx







var AdminNavigation = function AdminNavigation() {
  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return {
      isAuthenticating: state.app.isAuthenticating,
      profile: state.profile
    };
  }),
      isAuthenticating = _useSelector.isAuthenticating,
      profile = _useSelector.profile;

  return /*#__PURE__*/react.createElement("nav", {
    className: "navigation navigation-admin"
  }, /*#__PURE__*/react.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: routes/* ADMIN_DASHBOARD */.o3,
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement("img", {
    alt: "Logo",
    src: logo_full
  }), /*#__PURE__*/react.createElement("h3", null, "ADMIN PANEL"))), /*#__PURE__*/react.createElement("ul", {
    className: "navigation-menu"
  }, /*#__PURE__*/react.createElement("li", {
    className: "navigation-menu-item"
  }, /*#__PURE__*/react.createElement(UserAvatar, {
    isAuthenticating: isAuthenticating,
    profile: profile
  }))));
};

/* harmony default export */ const common_AdminNavigation = (AdminNavigation);
;// CONCATENATED MODULE: ./src/components/common/AdminSidePanel.jsx




var SideNavigation = function SideNavigation() {
  return /*#__PURE__*/react.createElement("aside", {
    className: "sidenavigation"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sidenavigation-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sidenavigation-item"
  }, /*#__PURE__*/react.createElement(react_router_dom/* NavLink */.OL, {
    activeClassName: "sidenavigation-menu-active",
    className: "sidenavigation-menu",
    to: routes/* ADMIN_PRODUCTS */.Ow
  }, "Products")), /*#__PURE__*/react.createElement("div", {
    className: "sidenavigation-item"
  }, /*#__PURE__*/react.createElement("h4", {
    className: "sidenavigation-menu my-0"
  }, "Users1"))));
};

/* harmony default export */ const AdminSidePanel = (SideNavigation);
;// CONCATENATED MODULE: ./src/components/common/Badge.jsx



var Badge = function Badge(_ref) {
  var count = _ref.count,
      children = _ref.children;
  return /*#__PURE__*/react.createElement("div", {
    className: "badge"
  }, children, count >= 1 && /*#__PURE__*/react.createElement("span", {
    className: "badge-count"
  }, count));
};

Badge.propTypes = {
  count: (prop_types_default()).number.isRequired,
  children: prop_types_default().oneOfType([prop_types_default().arrayOf((prop_types_default()).node), (prop_types_default()).node]).isRequired
};
/* harmony default export */ const common_Badge = (Badge);
;// CONCATENATED MODULE: ./src/components/common/Boundary.jsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Boundary = /*#__PURE__*/function (_Component) {
  _inherits(Boundary, _Component);

  var _super = _createSuper(Boundary);

  function Boundary(props) {
    var _this;

    _classCallCheck(this, Boundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(Boundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      console.log(error);
    }
  }, {
    key: "render",
    value: function render() {
      var hasError = this.state.hasError;
      var children = this.props.children;

      if (hasError) {
        return /*#__PURE__*/react.createElement("div", {
          className: "loader"
        }, /*#__PURE__*/react.createElement("h3", null, ":( Something went wrong."));
      }

      return children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);

  return Boundary;
}(react.Component);

Boundary.propTypes = {
  children: prop_types_default().oneOfType([prop_types_default().arrayOf((prop_types_default()).node), (prop_types_default()).node]).isRequired
};
/* harmony default export */ const common_Boundary = (Boundary);
;// CONCATENATED MODULE: ./src/components/common/ColorChooser.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ColorChooser = function ColorChooser(_ref) {
  var availableColors = _ref.availableColors,
      onSelectedColorChange = _ref.onSelectedColorChange;

  var _useState = (0,react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      selectedColor = _useState2[0],
      setSelectedColor = _useState2[1];

  var setColor = function setColor(color) {
    setSelectedColor(color);
    onSelectedColorChange(color);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "color-chooser"
  }, availableColors.map(function (color) {
    return /*#__PURE__*/react.createElement("div", {
      className: selectedColor === color ? 'color-item color-item-selected' : 'color-item',
      key: color,
      onClick: function onClick() {
        return setColor(color);
      },
      style: {
        backgroundColor: color
      },
      role: "presentation"
    });
  }));
};

ColorChooser.propTypes = {
  availableColors: prop_types_default().arrayOf((prop_types_default()).string).isRequired,
  onSelectedColorChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const common_ColorChooser = (ColorChooser);
// EXTERNAL MODULE: ./src/hooks/index.js + 9 modules
var hooks = __webpack_require__(56311);
// EXTERNAL MODULE: ./src/redux/actions/filterActions.js
var filterActions = __webpack_require__(13266);
// EXTERNAL MODULE: ./src/selectors/selector.js
var selector = __webpack_require__(30874);
// EXTERNAL MODULE: ./node_modules/react-compound-slider/dist/rcs.esm.js + 1 modules
var rcs_esm = __webpack_require__(33354);
;// CONCATENATED MODULE: ./src/components/common/PriceRange/Handle.jsx
function Handle_typeof(obj) { "@babel/helpers - typeof"; return Handle_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Handle_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Handle_slicedToArray(arr, i) { return Handle_arrayWithHoles(arr) || Handle_iterableToArrayLimit(arr, i) || Handle_unsupportedIterableToArray(arr, i) || Handle_nonIterableRest(); }

function Handle_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Handle_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Handle_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Handle_arrayLikeToArray(o, minLen); }

function Handle_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Handle_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Handle_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Handle_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Handle_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Handle_createClass(Constructor, protoProps, staticProps) { if (protoProps) Handle_defineProperties(Constructor.prototype, protoProps); if (staticProps) Handle_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Handle_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Handle_setPrototypeOf(subClass, superClass); }

function Handle_setPrototypeOf(o, p) { Handle_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Handle_setPrototypeOf(o, p); }

function Handle_createSuper(Derived) { var hasNativeReflectConstruct = Handle_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Handle_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Handle_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Handle_possibleConstructorReturn(this, result); }; }

function Handle_possibleConstructorReturn(self, call) { if (call && (Handle_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Handle_assertThisInitialized(self); }

function Handle_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Handle_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Handle_getPrototypeOf(o) { Handle_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Handle_getPrototypeOf(o); }




var Handle = /*#__PURE__*/function (_Component) {
  Handle_inherits(Handle, _Component);

  var _super = Handle_createSuper(Handle);

  function Handle(props) {
    var _this;

    Handle_classCallCheck(this, Handle);

    _this = _super.call(this, props);
    _this.state = {
      mouseOver: false
    };
    return _this;
  }

  Handle_createClass(Handle, [{
    key: "onMouseEnter",
    value: function onMouseEnter() {
      this.setState({
        mouseOver: true
      });
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      this.setState({
        mouseOver: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$domain = Handle_slicedToArray(_this$props.domain, 2),
          min = _this$props$domain[0],
          max = _this$props$domain[1],
          _this$props$handle = _this$props.handle,
          id = _this$props$handle.id,
          value = _this$props$handle.value,
          percent = _this$props$handle.percent,
          isActive = _this$props.isActive,
          disabled = _this$props.disabled,
          getHandleProps = _this$props.getHandleProps;

      var mouseOver = this.state.mouseOver;
      return /*#__PURE__*/react.createElement(react.Fragment, null, (mouseOver || isActive) && !disabled ? /*#__PURE__*/react.createElement("div", {
        style: {
          left: "".concat(percent, "%"),
          position: 'absolute',
          marginLeft: '-11px',
          marginTop: '-35px'
        }
      }, /*#__PURE__*/react.createElement("div", {
        className: "tooltip"
      }, /*#__PURE__*/react.createElement("span", {
        className: "tooltiptext"
      }, "Value:", value))) : null, /*#__PURE__*/react.createElement("div", _extends({
        style: {
          left: "".concat(percent, "%"),
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          WebkitTapHighlightColor: 'rgba(0,0,0,0)',
          zIndex: 400,
          width: 26,
          height: 42,
          cursor: 'pointer',
          // border: '1px solid grey',
          backgroundColor: 'none'
        } // eslint-disable-next-line react/jsx-props-no-spreading

      }, getHandleProps(id, {
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave
      }))), /*#__PURE__*/react.createElement("div", {
        role: "slider",
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        label: "Slider",
        style: {
          left: "".concat(percent, "%"),
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          WebkitTapHighlightColor: 'rgba(0,0,0,0)',
          zIndex: 300,
          width: 24,
          height: 24,
          border: 0,
          borderRadius: '50%',
          boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
          backgroundColor: disabled ? '#666' : '#1a1a1a'
        }
      }));
    }
  }]);

  return Handle;
}(react.Component);

Handle.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  domain: (prop_types_default()).array.isRequired,
  handle: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    value: (prop_types_default()).number.isRequired,
    percent: (prop_types_default()).number.isRequired
  }).isRequired,
  getHandleProps: (prop_types_default()).func.isRequired,
  isActive: (prop_types_default()).bool.isRequired,
  disabled: (prop_types_default()).bool
};
Handle.defaultProps = {
  disabled: false
};
/* harmony default export */ const PriceRange_Handle = (Handle);
;// CONCATENATED MODULE: ./src/components/common/PriceRange/SliderRail.jsx
function SliderRail_extends() { SliderRail_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SliderRail_extends.apply(this, arguments); }

/* eslint-disable react/jsx-props-no-spreading */


var railOuterStyle = {
  position: 'absolute',
  transform: 'translate(0%, -50%)',
  width: '100%',
  height: 42,
  borderRadius: 7,
  cursor: 'pointer' // border: '1px solid grey',

};
var railInnerStyle = {
  position: 'absolute',
  width: '100%',
  height: 14,
  transform: 'translate(0%, -50%)',
  borderRadius: 7,
  pointerEvents: 'none',
  backgroundColor: '#d0d0d0'
};

var SliderRail = function SliderRail(_ref) {
  var getRailProps = _ref.getRailProps;
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", SliderRail_extends({
    style: railOuterStyle
  }, getRailProps())), /*#__PURE__*/react.createElement("div", {
    style: railInnerStyle
  }));
};

SliderRail.propTypes = {
  getRailProps: (prop_types_default()).func.isRequired
};
/* harmony default export */ const PriceRange_SliderRail = (SliderRail);
;// CONCATENATED MODULE: ./src/components/common/PriceRange/Tick.jsx



var Tick = function Tick(_ref) {
  var tick = _ref.tick,
      count = _ref.count,
      format = _ref.format;
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'absolute',
      marginTop: 17,
      width: 1,
      height: 5,
      backgroundColor: 'rgb(200,200,200)',
      left: "".concat(tick.percent, "%")
    }
  }), /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'absolute',
      marginTop: 25,
      fontSize: 10,
      textAlign: 'center',
      marginLeft: "".concat(-(100 / count) / 2, "%"),
      width: "".concat(100 / count, "%"),
      left: "".concat(tick.percent, "%")
    }
  }, format(tick.value)));
};

Tick.propTypes = {
  tick: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    value: (prop_types_default()).number.isRequired,
    percent: (prop_types_default()).number.isRequired
  }).isRequired,
  count: (prop_types_default()).number.isRequired,
  format: (prop_types_default()).func
};
Tick.defaultProps = {
  format: function format(d) {
    return d;
  }
};
/* harmony default export */ const PriceRange_Tick = (Tick);
;// CONCATENATED MODULE: ./src/components/common/PriceRange/Track.jsx
function Track_extends() { Track_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Track_extends.apply(this, arguments); }




var Track = function Track(_ref) {
  var source = _ref.source,
      target = _ref.target,
      getTrackProps = _ref.getTrackProps,
      disabled = _ref.disabled;
  return /*#__PURE__*/react.createElement("div", Track_extends({
    style: {
      position: 'absolute',
      transform: 'translate(0%, -50%)',
      height: 14,
      zIndex: 1,
      backgroundColor: disabled ? '#ffd993' : '#ffa500',
      borderRadius: 7,
      cursor: 'pointer',
      left: "".concat(source.percent, "%"),
      width: "".concat(target.percent - source.percent, "%")
    } // eslint-disable-next-line react/jsx-props-no-spreading

  }, getTrackProps()));
};

Track.propTypes = {
  source: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    value: (prop_types_default()).number.isRequired,
    percent: (prop_types_default()).number.isRequired
  }).isRequired,
  target: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    value: (prop_types_default()).number.isRequired,
    percent: (prop_types_default()).number.isRequired
  }).isRequired,
  getTrackProps: (prop_types_default()).func.isRequired,
  disabled: (prop_types_default()).bool
};
Track.defaultProps = {
  disabled: false
};
/* harmony default export */ const PriceRange_Track = (Track);
;// CONCATENATED MODULE: ./src/components/common/PriceRange/index.jsx
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || PriceRange_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return PriceRange_arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PriceRange_slicedToArray(arr, i) { return PriceRange_arrayWithHoles(arr) || PriceRange_iterableToArrayLimit(arr, i) || PriceRange_unsupportedIterableToArray(arr, i) || PriceRange_nonIterableRest(); }

function PriceRange_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function PriceRange_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PriceRange_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PriceRange_arrayLikeToArray(o, minLen); }

function PriceRange_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PriceRange_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function PriceRange_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var sliderStyle = {
  position: 'relative',
  width: '100%'
};

var PriceRange = function PriceRange(_ref) {
  var min = _ref.min,
      max = _ref.max,
      initMin = _ref.initMin,
      initMax = _ref.initMax,
      productsCount = _ref.productsCount,
      onPriceChange = _ref.onPriceChange;

  var _useState = (0,react.useState)({
    domain: [min, max],
    values: [initMin || min, initMax || max],
    update: [min, max].slice(),
    inputMin: initMin || min,
    inputMax: initMax || max,
    inputError: false,
    reversed: false
  }),
      _useState2 = PriceRange_slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var onUpdate = function onUpdate(update) {
    setState(function () {
      return _objectSpread(_objectSpread({}, state), {}, {
        update: update,
        inputMin: update[0],
        inputMax: update[1]
      });
    });
  };

  var onChange = function onChange(values) {
    setState(function () {
      return _objectSpread(_objectSpread({}, state), {}, {
        values: values,
        inputMin: values[0],
        inputMax: values[1]
      });
    });
    if (values[0] < values[1]) onPriceChange.apply(void 0, _toConsumableArray(values));
  };

  var inputClassName = function inputClassName() {
    return state.inputError ? 'price-range-input price-input-error' : 'price-range-input';
  };

  return /*#__PURE__*/react.createElement("div", {
    style: {
      height: 120,
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "price-range-control"
  }, /*#__PURE__*/react.createElement("input", {
    className: inputClassName(),
    disabled: productsCount === 0,
    max: max,
    min: min,
    type: "number",
    readOnly: true,
    value: state.inputMin
  }), "\u2014", /*#__PURE__*/react.createElement("input", {
    className: inputClassName(),
    disabled: productsCount === 0,
    max: max,
    min: min,
    type: "number",
    readOnly: true,
    value: state.inputMax
  })), /*#__PURE__*/react.createElement(rcs_esm/* Slider */.iR, {
    mode: 1,
    step: 1,
    domain: state.domain,
    rootStyle: sliderStyle,
    onUpdate: onUpdate,
    onChange: onChange,
    values: state.values
  }, /*#__PURE__*/react.createElement(rcs_esm/* Rail */.S0, null, function (_ref2) {
    var getRailProps = _ref2.getRailProps;
    return /*#__PURE__*/react.createElement(PriceRange_SliderRail, {
      getRailProps: getRailProps
    });
  }), /*#__PURE__*/react.createElement(rcs_esm/* Handles */.wO, null, function (_ref3) {
    var handles = _ref3.handles,
        activeHandleID = _ref3.activeHandleID,
        getHandleProps = _ref3.getHandleProps;
    return /*#__PURE__*/react.createElement("div", {
      className: "slider-handles"
    }, handles.map(function (handle) {
      return /*#__PURE__*/react.createElement(PriceRange_Handle, {
        key: handle.id,
        handle: handle,
        domain: state.domain,
        isActive: handle.id === activeHandleID,
        getHandleProps: getHandleProps
      });
    }));
  }), /*#__PURE__*/react.createElement(rcs_esm/* Tracks */.OF, {
    left: false,
    right: false
  }, function (_ref4) {
    var tracks = _ref4.tracks,
        getTrackProps = _ref4.getTrackProps;
    return /*#__PURE__*/react.createElement("div", {
      className: "slider-tracks"
    }, tracks.map(function (_ref5) {
      var id = _ref5.id,
          source = _ref5.source,
          target = _ref5.target;
      return /*#__PURE__*/react.createElement(PriceRange_Track, {
        key: id,
        source: source,
        target: target,
        getTrackProps: getTrackProps
      });
    }));
  }), /*#__PURE__*/react.createElement(rcs_esm/* Ticks */.vb, {
    count: 5
  }, function (_ref6) {
    var ticks = _ref6.ticks;
    return /*#__PURE__*/react.createElement("div", {
      className: "slider-ticks"
    }, ticks.map(function (tick) {
      return /*#__PURE__*/react.createElement(PriceRange_Tick, {
        key: tick.id,
        tick: tick,
        count: ticks.length
      });
    }));
  })));
};

PriceRange.defaultProps = {
  initMin: undefined,
  initMax: undefined
};
PriceRange.propTypes = {
  initMin: (prop_types_default()).number,
  initMax: (prop_types_default()).number,
  min: (prop_types_default()).number.isRequired,
  max: (prop_types_default()).number.isRequired,
  productsCount: (prop_types_default()).number.isRequired,
  onPriceChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const common_PriceRange = (PriceRange);
;// CONCATENATED MODULE: ./src/components/common/Filters.jsx
function Filters_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Filters_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Filters_ownKeys(Object(source), !0).forEach(function (key) { Filters_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Filters_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Filters_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Filters_slicedToArray(arr, i) { return Filters_arrayWithHoles(arr) || Filters_iterableToArrayLimit(arr, i) || Filters_unsupportedIterableToArray(arr, i) || Filters_nonIterableRest(); }

function Filters_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Filters_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Filters_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Filters_arrayLikeToArray(o, minLen); }

function Filters_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Filters_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Filters_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-nested-ternary */









var Filters = function Filters(_ref) {
  var closeModal = _ref.closeModal;

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return {
      filter: state.filter,
      isLoading: state.app.loading,
      products: state.products.items
    };
  }),
      filter = _useSelector.filter,
      isLoading = _useSelector.isLoading,
      products = _useSelector.products;

  var _useState = (0,react.useState)({
    brand: filter.brand,
    minPrice: filter.minPrice,
    maxPrice: filter.maxPrice,
    sortBy: filter.sortBy
  }),
      _useState2 = Filters_slicedToArray(_useState, 2),
      field = _useState2[0],
      setFilter = _useState2[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var history = (0,react_router/* useHistory */.k6)();
  var didMount = (0,hooks/* useDidMount */.Hd)();
  var max = (0,selector/* selectMax */.aB)(products);
  var min = (0,selector/* selectMin */.fJ)(products);
  (0,react.useEffect)(function () {
    if (didMount && window.screen.width <= 480) {
      history.push('/');
    }

    if (didMount && closeModal) closeModal();
    setFilter(filter);
    window.scrollTo(0, 0);
  }, [filter]);

  var onPriceChange = function onPriceChange(minVal, maxVal) {
    setFilter(Filters_objectSpread(Filters_objectSpread({}, field), {}, {
      minPrice: minVal,
      maxPrice: maxVal
    }));
  };

  var onBrandFilterChange = function onBrandFilterChange(e) {
    var val = e.target.value;
    setFilter(Filters_objectSpread(Filters_objectSpread({}, field), {}, {
      brand: val
    }));
  };

  var onSortFilterChange = function onSortFilterChange(e) {
    setFilter(Filters_objectSpread(Filters_objectSpread({}, field), {}, {
      sortBy: e.target.value
    }));
  };

  var onApplyFilter = function onApplyFilter() {
    var isChanged = Object.keys(field).some(function (key) {
      return field[key] !== filter[key];
    });

    if (field.minPrice > field.maxPrice) {
      return;
    }

    if (isChanged) {
      dispatch((0,filterActions/* applyFilter */.Rb)(field));
    } else {
      closeModal();
    }
  };

  var onResetFilter = function onResetFilter() {
    var filterFields = ['brand', 'minPrice', 'maxPrice', 'sortBy'];

    if (filterFields.some(function (key) {
      return !!filter[key];
    })) {
      dispatch((0,filterActions/* resetFilter */.sx)());
    } else {
      closeModal();
    }
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "filters"
  }, /*#__PURE__*/react.createElement("div", {
    className: "filters-field"
  }, /*#__PURE__*/react.createElement("span", null, "Brand"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), products.length === 0 && isLoading ? /*#__PURE__*/react.createElement("h5", {
    className: "text-subtle"
  }, "Loading Filter") : /*#__PURE__*/react.createElement("select", {
    className: "filters-brand",
    value: field.brand,
    disabled: isLoading || products.length === 0,
    onChange: onBrandFilterChange
  }, /*#__PURE__*/react.createElement("option", {
    value: ""
  }, "All Brands"), /*#__PURE__*/react.createElement("option", {
    value: "salt"
  }, "Salt Maalat"), /*#__PURE__*/react.createElement("option", {
    value: "betsin"
  }, "Betsin Maalat"), /*#__PURE__*/react.createElement("option", {
    value: "black"
  }, "Black Kibal"), /*#__PURE__*/react.createElement("option", {
    value: "sexbomb"
  }, "Sexbomb"))), /*#__PURE__*/react.createElement("div", {
    className: "filters-field"
  }, /*#__PURE__*/react.createElement("span", null, "Sort By"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("select", {
    className: "filters-sort-by d-block",
    value: field.sortBy,
    disabled: isLoading || products.length === 0,
    onChange: onSortFilterChange
  }, /*#__PURE__*/react.createElement("option", {
    value: ""
  }, "None"), /*#__PURE__*/react.createElement("option", {
    value: "name-asc"
  }, "Name Ascending A - Z"), /*#__PURE__*/react.createElement("option", {
    value: "name-desc"
  }, "Name Descending Z - A"), /*#__PURE__*/react.createElement("option", {
    value: "price-desc"
  }, "Price High - Low"), /*#__PURE__*/react.createElement("option", {
    value: "price-asc"
  }, "Price Low - High"))), /*#__PURE__*/react.createElement("div", {
    className: "filters-field"
  }, /*#__PURE__*/react.createElement("span", null, "Price Range"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), products.length === 0 && isLoading || max === 0 ? /*#__PURE__*/react.createElement("h5", {
    className: "text-subtle"
  }, "Loading Filter") : products.length === 1 ? /*#__PURE__*/react.createElement("h5", {
    className: "text-subtle"
  }, "No Price Range") : /*#__PURE__*/react.createElement(common_PriceRange, {
    min: min,
    max: max,
    initMin: field.minPrice,
    initMax: field.maxPrice,
    isLoading: isLoading,
    onPriceChange: onPriceChange,
    productsCount: products.length
  })), /*#__PURE__*/react.createElement("div", {
    className: "filters-action"
  }, /*#__PURE__*/react.createElement("button", {
    className: "filters-button button button-small",
    disabled: isLoading || products.length === 0,
    onClick: onApplyFilter,
    type: "button"
  }, "Apply filters"), /*#__PURE__*/react.createElement("button", {
    className: "filters-button button button-border button-small",
    disabled: isLoading || products.length === 0,
    onClick: onResetFilter,
    type: "button"
  }, "Reset filters")));
};

Filters.propTypes = {
  closeModal: (prop_types_default()).func.isRequired
};
/* harmony default export */ const common_Filters = ((0,react_router/* withRouter */.EN)(Filters));
// EXTERNAL MODULE: ./node_modules/react-modal/lib/index.js
var lib = __webpack_require__(83253);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/components/common/Modal.jsx
function Modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Modal_ownKeys(Object(source), !0).forEach(function (key) { Modal_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
      onRequestClose = _ref.onRequestClose,
      afterOpenModal = _ref.afterOpenModal,
      overrideStyle = _ref.overrideStyle,
      children = _ref.children;
  var defaultStyle = {
    content: Modal_objectSpread({
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      position: 'fixed',
      padding: '50px 20px',
      transition: 'all .5s ease',
      zIndex: 9999,
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: '0 5px 10px rgba(0, 0, 0, .1)',
      animation: 'scale .3s ease'
    }, overrideStyle)
  };
  lib_default().setAppElement('#app');
  return /*#__PURE__*/react.createElement((lib_default()), {
    closeTimeoutMS: 300,
    contentLabel: "Product Modal",
    isOpen: isOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: onRequestClose,
    shouldCloseOnOverlayClick: true,
    style: defaultStyle
  }, children);
};

Modal.defaultProps = {
  overrideStyle: {},
  afterOpenModal: function afterOpenModal() {}
};
Modal.propTypes = {
  isOpen: (prop_types_default()).bool.isRequired,
  onRequestClose: (prop_types_default()).func.isRequired,
  afterOpenModal: (prop_types_default()).func,
  // eslint-disable-next-line react/forbid-prop-types
  overrideStyle: (prop_types_default()).object,
  children: prop_types_default().oneOfType([prop_types_default().arrayOf((prop_types_default()).node), (prop_types_default()).node]).isRequired
};
/* harmony default export */ const common_Modal = (Modal);
;// CONCATENATED MODULE: ./src/components/common/FiltersToggle.jsx






var FiltersToggle = function FiltersToggle(_ref) {
  var children = _ref.children;

  var _useModal = (0,hooks/* useModal */.dd)(),
      isOpenModal = _useModal.isOpenModal,
      onOpenModal = _useModal.onOpenModal,
      onCloseModal = _useModal.onCloseModal;

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "filters-toggle",
    onClick: onOpenModal,
    role: "presentation"
  }, children), /*#__PURE__*/react.createElement(common_Modal, {
    isOpen: isOpenModal,
    onRequestClose: onCloseModal
  }, /*#__PURE__*/react.createElement("div", {
    className: "filters-toggle-sub"
  }, /*#__PURE__*/react.createElement(common_Filters, {
    closeModal: onCloseModal
  })), /*#__PURE__*/react.createElement("button", {
    className: "modal-close-button",
    onClick: onCloseModal,
    type: "button"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-times-circle"
  }))));
};

FiltersToggle.propTypes = {
  children: prop_types_default().oneOfType([prop_types_default().arrayOf((prop_types_default()).node), (prop_types_default()).node]).isRequired
};
/* harmony default export */ const common_FiltersToggle = (FiltersToggle);
;// CONCATENATED MODULE: ./src/components/common/Footer.jsx





var Footer = function Footer() {
  var _useLocation = (0,react_router/* useLocation */.TH)(),
      pathname = _useLocation.pathname;

  var visibleOnlyPath = [routes/* HOME */.Sd, routes/* SHOP */.kd];
  return !visibleOnlyPath.includes(pathname) ? null : /*#__PURE__*/react.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/react.createElement("div", {
    className: "footer-col-1"
  }, /*#__PURE__*/react.createElement("strong", null, /*#__PURE__*/react.createElement("span", null, "Developed by", ' ', /*#__PURE__*/react.createElement("a", {
    href: "https://github.com/jgudo"
  }, "JULIUS GUEVARRA")))), /*#__PURE__*/react.createElement("div", {
    className: "footer-col-2"
  }, /*#__PURE__*/react.createElement("img", {
    alt: "Footer logo",
    className: "footer-logo",
    src: logo_full
  }), /*#__PURE__*/react.createElement("h5", null, "\xA9\xA0", new Date().getFullYear())), /*#__PURE__*/react.createElement("div", {
    className: "footer-col-3"
  }, /*#__PURE__*/react.createElement("strong", null, /*#__PURE__*/react.createElement("span", null, "Fork this project \xA0", /*#__PURE__*/react.createElement("a", {
    href: "https://github.com/jgudo/ecommerce-react"
  }, "HERE")))));
};

/* harmony default export */ const common_Footer = (Footer);
;// CONCATENATED MODULE: ./src/components/common/ImageLoader.jsx
function ImageLoader_slicedToArray(arr, i) { return ImageLoader_arrayWithHoles(arr) || ImageLoader_iterableToArrayLimit(arr, i) || ImageLoader_unsupportedIterableToArray(arr, i) || ImageLoader_nonIterableRest(); }

function ImageLoader_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ImageLoader_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ImageLoader_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ImageLoader_arrayLikeToArray(o, minLen); }

function ImageLoader_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ImageLoader_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ImageLoader_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ImageLoader = function ImageLoader(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      className = _ref.className;
  var loadedImages = {};

  var _useState = (0,react.useState)(loadedImages[src]),
      _useState2 = ImageLoader_slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var onLoad = function onLoad() {
    loadedImages[src] = true;
    setLoaded(true);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, !loaded && /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      margin: 'auto'
    }
  }), /*#__PURE__*/react.createElement("img", {
    alt: alt || '',
    className: "".concat(className || '', " ").concat(loaded ? 'is-img-loaded' : 'is-img-loading'),
    onLoad: onLoad,
    src: src
  }));
};

ImageLoader.defaultProps = {
  className: 'image-loader'
};
ImageLoader.propTypes = {
  src: (prop_types_default()).string.isRequired,
  alt: (prop_types_default()).string.isRequired,
  className: (prop_types_default()).string
};
/* harmony default export */ const common_ImageLoader = (ImageLoader);
;// CONCATENATED MODULE: ./src/components/common/MessageDisplay.jsx



var MessageDisplay = function MessageDisplay(_ref) {
  var message = _ref.message,
      description = _ref.description,
      buttonLabel = _ref.buttonLabel,
      action = _ref.action;
  return /*#__PURE__*/react.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "text-center",
    style: {
      wordBreak: 'break-all'
    }
  }, message || 'Message'), description && /*#__PURE__*/react.createElement("span", null, description), /*#__PURE__*/react.createElement("br", null), action && /*#__PURE__*/react.createElement("button", {
    className: "button button-small",
    onClick: action,
    type: "button"
  }, buttonLabel || 'Okay'));
};

MessageDisplay.defaultProps = {
  description: undefined,
  buttonLabel: 'Okay',
  action: undefined
};
MessageDisplay.propTypes = {
  message: (prop_types_default()).string.isRequired,
  description: (prop_types_default()).string,
  buttonLabel: (prop_types_default()).string,
  action: (prop_types_default()).func
};
/* harmony default export */ const common_MessageDisplay = (MessageDisplay);
// EXTERNAL MODULE: ./src/components/basket/index.js + 3 modules
var basket = __webpack_require__(42563);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(76570);
;// CONCATENATED MODULE: ./src/components/common/SearchBar.jsx
function SearchBar_slicedToArray(arr, i) { return SearchBar_arrayWithHoles(arr) || SearchBar_iterableToArrayLimit(arr, i) || SearchBar_unsupportedIterableToArray(arr, i) || SearchBar_nonIterableRest(); }

function SearchBar_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SearchBar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SearchBar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SearchBar_arrayLikeToArray(o, minLen); }

function SearchBar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SearchBar_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SearchBar_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable react/no-array-index-key */






var SearchBar = function SearchBar() {
  var _useState = (0,react.useState)(''),
      _useState2 = SearchBar_slicedToArray(_useState, 2),
      searchInput = _useState2[0],
      setSearchInput = _useState2[1];

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return {
      filter: state.filter,
      isLoading: state.app.loading
    };
  }),
      filter = _useSelector.filter,
      isLoading = _useSelector.isLoading;

  var searchbarRef = (0,react.useRef)(null);
  var history = (0,react_router/* useHistory */.k6)();
  var dispatch = (0,es/* useDispatch */.I0)();
  var isMobile = window.screen.width <= 800;

  var onSearchChange = function onSearchChange(e) {
    var val = e.target.value.trimStart();
    setSearchInput(val);
  };

  var onKeyUp = function onKeyUp(e) {
    if (e.keyCode === 13) {
      // dispatch(setTextFilter(searchInput));
      e.target.blur();
      searchbarRef.current.classList.remove('is-open-recent-search');

      if (isMobile) {
        history.push('/');
      }

      history.push("/search/".concat(searchInput.trim().toLowerCase()));
    }
  };

  var recentSearchClickHandler = function recentSearchClickHandler(e) {
    var searchBar = e.target.closest('.searchbar');

    if (!searchBar) {
      searchbarRef.current.classList.remove('is-open-recent-search');
      document.removeEventListener('click', recentSearchClickHandler);
    }
  };

  var onFocusInput = function onFocusInput(e) {
    e.target.select();

    if (filter.recent.length !== 0) {
      searchbarRef.current.classList.add('is-open-recent-search');
      document.addEventListener('click', recentSearchClickHandler);
    }
  };

  var onClickRecentSearch = function onClickRecentSearch(keyword) {
    // dispatch(setTextFilter(keyword));
    searchbarRef.current.classList.remove('is-open-recent-search');
    history.push("/search/".concat(keyword.trim().toLowerCase()));
  };

  var onClearRecent = function onClearRecent() {
    dispatch((0,filterActions/* clearRecentSearch */.IT)());
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "searchbar",
    ref: searchbarRef
  }, /*#__PURE__*/react.createElement(SearchOutlined/* default */.Z, {
    className: "searchbar-icon"
  }), /*#__PURE__*/react.createElement("input", {
    className: "search-input searchbar-input",
    onChange: onSearchChange,
    onKeyUp: onKeyUp,
    onFocus: onFocusInput,
    placeholder: "Search product...",
    readOnly: isLoading,
    type: "text",
    value: searchInput
  }), filter.recent.length !== 0 && /*#__PURE__*/react.createElement("div", {
    className: "searchbar-recent"
  }, /*#__PURE__*/react.createElement("div", {
    className: "searchbar-recent-header"
  }, /*#__PURE__*/react.createElement("h5", null, "Recent Search"), /*#__PURE__*/react.createElement("h5", {
    className: "searchbar-recent-clear text-subtle",
    onClick: onClearRecent,
    role: "presentation"
  }, "Clear")), filter.recent.map(function (item, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "searchbar-recent-wrapper",
      key: "search-".concat(item, "-").concat(index)
    }, /*#__PURE__*/react.createElement("h5", {
      className: "searchbar-recent-keyword margin-0",
      onClick: function onClick() {
        return onClickRecentSearch(item);
      },
      role: "presentation"
    }, item), /*#__PURE__*/react.createElement("span", {
      className: "searchbar-recent-button text-subtle",
      onClick: function onClick() {
        return dispatch((0,filterActions/* removeSelectedRecent */.Q_)(item));
      },
      role: "presentation"
    }, "X"));
  }))));
};

/* harmony default export */ const common_SearchBar = (SearchBar);
;// CONCATENATED MODULE: ./src/components/common/MobileNavigation.jsx










var Navigation = function Navigation(props) {
  var isAuthenticating = props.isAuthenticating,
      basketLength = props.basketLength,
      disabledPaths = props.disabledPaths,
      user = props.user;

  var _useLocation = (0,react_router/* useLocation */.TH)(),
      pathname = _useLocation.pathname;

  var onClickLink = function onClickLink(e) {
    if (isAuthenticating) e.preventDefault();
  };

  return /*#__PURE__*/react.createElement("nav", {
    className: "mobile-navigation"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mobile-navigation-main"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mobile-navigation-logo"
  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    onClick: onClickLink,
    to: routes/* HOME */.Sd
  }, /*#__PURE__*/react.createElement("h2", null, "SALINAKA"))), /*#__PURE__*/react.createElement(basket/* BasketToggle */.PK, null, function (_ref) {
    var onClickToggle = _ref.onClickToggle;
    return /*#__PURE__*/react.createElement("button", {
      className: "button-link navigation-menu-link basket-toggle",
      onClick: onClickToggle,
      disabled: disabledPaths.includes(pathname),
      type: "button"
    }, /*#__PURE__*/react.createElement(common_Badge, {
      count: basketLength
    }, /*#__PURE__*/react.createElement("i", {
      className: "fa fa-shopping-bag",
      style: {
        fontSize: '2rem'
      }
    })));
  }), /*#__PURE__*/react.createElement("ul", {
    className: "mobile-navigation-menu"
  }, user ? /*#__PURE__*/react.createElement("li", {
    className: "mobile-navigation-item"
  }, /*#__PURE__*/react.createElement(UserAvatar, null)) : /*#__PURE__*/react.createElement(react.Fragment, null, pathname !== routes/* SIGNIN */.OT && /*#__PURE__*/react.createElement("li", {
    className: "mobile-navigation-item"
  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    className: "navigation-menu-link",
    onClick: onClickLink,
    to: routes/* SIGNIN */.OT
  }, "Sign In"))))), /*#__PURE__*/react.createElement("div", {
    className: "mobile-navigation-sec"
  }, /*#__PURE__*/react.createElement(common_SearchBar, null), /*#__PURE__*/react.createElement(common_FiltersToggle, null, /*#__PURE__*/react.createElement("button", {
    className: "button-link button-small",
    type: "button"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-filter"
  })))));
};

Navigation.propTypes = {
  isAuthenticating: (prop_types_default()).bool.isRequired,
  basketLength: (prop_types_default()).number.isRequired,
  disabledPaths: prop_types_default().arrayOf((prop_types_default()).string).isRequired,
  user: prop_types_default().oneOfType([(prop_types_default()).bool, (prop_types_default()).object]).isRequired
};
/* harmony default export */ const MobileNavigation = (Navigation);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/FilterOutlined.js + 1 modules
var FilterOutlined = __webpack_require__(17405);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ShoppingOutlined.js + 1 modules
var ShoppingOutlined = __webpack_require__(89420);
// EXTERNAL MODULE: ./src/components/basket/BasketToggle.jsx
var BasketToggle = __webpack_require__(26431);
;// CONCATENATED MODULE: ./src/components/common/Navigation.jsx
function Navigation_extends() { Navigation_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Navigation_extends.apply(this, arguments); }

/* eslint-disable indent */













var Navigation_Navigation = function Navigation() {
  var navbar = (0,react.useRef)(null);

  var _useLocation = (0,react_router/* useLocation */.TH)(),
      pathname = _useLocation.pathname;

  var store = (0,es/* useSelector */.v9)(function (state) {
    return {
      basketLength: state.basket.length,
      user: state.auth,
      isAuthenticating: state.app.isAuthenticating,
      isLoading: state.app.loading
    };
  });

  var scrollHandler = function scrollHandler() {
    if (navbar.current && window.screen.width > 480) {
      if (window.pageYOffset >= 70) {
        navbar.current.classList.add('is-nav-scrolled');
      } else {
        navbar.current.classList.remove('is-nav-scrolled');
      }
    }
  };

  (0,react.useEffect)(function () {
    window.addEventListener('scroll', scrollHandler);
    return function () {
      return window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  var onClickLink = function onClickLink(e) {
    if (store.isAuthenticating) e.preventDefault();
  }; // disable the basket toggle to these pathnames


  var basketDisabledpathnames = [routes/* CHECKOUT_STEP_1 */.Fr, routes/* CHECKOUT_STEP_2 */.ee, routes/* CHECKOUT_STEP_3 */.PU, routes/* SIGNIN */.OT, routes/* SIGNUP */.kp, routes/* FORGOT_PASSWORD */.lP];

  if (store.user && store.user.role === 'ADMIN') {
    return null;
  }

  if (window.screen.width <= 800) {
    return /*#__PURE__*/react.createElement(MobileNavigation // eslint-disable-next-line react/jsx-props-no-spreading
    , Navigation_extends({}, store, {
      disabledPaths: basketDisabledpathnames,
      pathname: pathname
    }));
  }

  return /*#__PURE__*/react.createElement("nav", {
    className: "navigation",
    ref: navbar
  }, /*#__PURE__*/react.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    onClick: onClickLink,
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    alt: "Logo",
    src: logo_full
  }))), /*#__PURE__*/react.createElement("ul", {
    className: "navigation-menu-main"
  }, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(react_router_dom/* NavLink */.OL, {
    activeClassName: "navigation-menu-active",
    exact: true,
    to: routes/* HOME */.Sd
  }, "Home")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(react_router_dom/* NavLink */.OL, {
    activeClassName: "navigation-menu-active",
    to: routes/* SHOP */.kd
  }, "Shop")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(react_router_dom/* NavLink */.OL, {
    activeClassName: "navigation-menu-active",
    to: routes/* FEATURED_PRODUCTS */.Mh
  }, "Featured")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(react_router_dom/* NavLink */.OL, {
    activeClassName: "navigation-menu-active",
    to: routes/* RECOMMENDED_PRODUCTS */.DG
  }, "Recommended"))), (pathname === routes/* SHOP */.kd || pathname === routes/* SEARCH */.mo) && /*#__PURE__*/react.createElement(common_FiltersToggle, null, /*#__PURE__*/react.createElement("button", {
    className: "button-muted button-small",
    type: "button"
  }, "Filters \xA0", /*#__PURE__*/react.createElement(FilterOutlined/* default */.Z, null))), /*#__PURE__*/react.createElement(common_SearchBar, null), /*#__PURE__*/react.createElement("ul", {
    className: "navigation-menu"
  }, /*#__PURE__*/react.createElement("li", {
    className: "navigation-menu-item"
  }, /*#__PURE__*/react.createElement(BasketToggle/* default */.Z, null, function (_ref) {
    var onClickToggle = _ref.onClickToggle;
    return /*#__PURE__*/react.createElement("button", {
      className: "button-link navigation-menu-link basket-toggle",
      disabled: basketDisabledpathnames.includes(pathname),
      onClick: onClickToggle,
      type: "button"
    }, /*#__PURE__*/react.createElement(common_Badge, {
      count: store.basketLength
    }, /*#__PURE__*/react.createElement(ShoppingOutlined/* default */.Z, {
      style: {
        fontSize: '2.4rem'
      }
    })));
  })), store.user ? /*#__PURE__*/react.createElement("li", {
    className: "navigation-menu-item"
  }, /*#__PURE__*/react.createElement(UserAvatar, null)) : /*#__PURE__*/react.createElement("li", {
    className: "navigation-action"
  }, pathname !== routes/* SIGNUP */.kp && /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    className: "button button-small",
    onClick: onClickLink,
    to: routes/* SIGNUP */.kp
  }, "Sign Up"), pathname !== routes/* SIGNIN */.OT && /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    className: "button button-small button-muted margin-left-s",
    onClick: onClickLink,
    to: routes/* SIGNIN */.OT
  }, "Sign In"))));
};

/* harmony default export */ const common_Navigation = (Navigation_Navigation);
;// CONCATENATED MODULE: ./static/logo-wordmark.png
/* harmony default export */ const logo_wordmark = (__webpack_require__.p + "images/logo-wordmark.c9095b79e4c1cb5d9f82799542443b19.png");
;// CONCATENATED MODULE: ./src/components/common/Preloader.jsx



var Preloader = function Preloader() {
  return /*#__PURE__*/react.createElement("div", {
    className: "preloader"
  }, /*#__PURE__*/react.createElement("svg", {
    className: "logo-symbol",
    viewBox: "0 0 41.25 41.25"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: "20.62",
    cy: "20.62",
    r: "20.62"
  }), /*#__PURE__*/react.createElement("circle", {
    className: "fill-white",
    cx: "29.97",
    cy: "14.93",
    r: "6.58"
  })), /*#__PURE__*/react.createElement("img", {
    alt: "Salinaka logo wordmark",
    src: logo_wordmark
  }));
};

/* harmony default export */ const common_Preloader = (Preloader);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/FacebookOutlined.js + 1 modules
var FacebookOutlined = __webpack_require__(79728);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/GoogleOutlined.js + 1 modules
var GoogleOutlined = __webpack_require__(11013);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/GithubFilled.js + 1 modules
var GithubFilled = __webpack_require__(33461);
;// CONCATENATED MODULE: ./src/components/common/SocialLogin.jsx






var SocialLogin = function SocialLogin(_ref) {
  var isLoading = _ref.isLoading;
  var dispatch = (0,es/* useDispatch */.I0)();

  var onSignInWithGoogle = function onSignInWithGoogle() {
    dispatch((0,authActions/* signInWithGoogle */.qj)());
  };

  var onSignInWithFacebook = function onSignInWithFacebook() {
    dispatch((0,authActions/* signInWithFacebook */.DY)());
  };

  var onSignInWithGithub = function onSignInWithGithub() {
    dispatch((0,authActions/* signInWithGithub */.gU)());
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "auth-provider"
  }, /*#__PURE__*/react.createElement("button", {
    className: "button auth-provider-button provider-facebook",
    disabled: isLoading,
    onClick: onSignInWithFacebook,
    type: "button"
  }, /*#__PURE__*/react.createElement(FacebookOutlined/* default */.Z, null), "Continue with Facebook"), /*#__PURE__*/react.createElement("button", {
    className: "button auth-provider-button provider-google",
    disabled: isLoading,
    onClick: onSignInWithGoogle,
    type: "button"
  }, /*#__PURE__*/react.createElement(GoogleOutlined/* default */.Z, null), "Continue with Google"), /*#__PURE__*/react.createElement("button", {
    className: "button auth-provider-button provider-github",
    disabled: isLoading,
    onClick: onSignInWithGithub,
    type: "button"
  }, /*#__PURE__*/react.createElement(GithubFilled/* default */.Z, null), "Continue with GitHub"));
};

SocialLogin.propTypes = {
  isLoading: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const common_SocialLogin = (SocialLogin);
;// CONCATENATED MODULE: ./src/components/common/index.js


















/***/ }),

/***/ 79895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gk": () => (/* reexport */ CustomColorInput),
  "VT": () => (/* reexport */ formik_CustomCreatableSelect),
  "t7": () => (/* reexport */ formik_CustomInput),
  "Dp": () => (/* reexport */ formik_CustomMobileInput),
  "iJ": () => (/* reexport */ formik_CustomTextarea)
});

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/components/formik/CustomColorInput.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable react/forbid-prop-types */



var InputColor = function InputColor(props) {
  var _form$values$name;

  var name = props.name,
      form = props.form,
      push = props.push,
      remove = props.remove;

  var _React$useState = react.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedColor = _React$useState2[0],
      setSelectedColor = _React$useState2[1];

  var handleColorChange = function handleColorChange(e) {
    var val = e.target.value;
    setSelectedColor(val);
  };

  var handleAddSelectedColor = function handleAddSelectedColor() {
    if (!form.values[name].includes(selectedColor)) {
      push(selectedColor);
      setSelectedColor('');
    }
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "input-group product-form-field"
  }, /*#__PURE__*/react.createElement("div", {
    className: "d-flex"
  }, form.touched[name] && form.errors[name] ? /*#__PURE__*/react.createElement("span", {
    className: "label-input label-error"
  }, form.errors[name]) : /*#__PURE__*/react.createElement("label", {
    className: "label-input",
    htmlFor: name
  }, "Available Colors"), selectedColor && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "color-item",
    style: {
      background: selectedColor
    }
  }), /*#__PURE__*/react.createElement("h4", {
    className: "text-link",
    onClick: handleAddSelectedColor,
    style: {
      textDecoration: 'underline'
    },
    role: "presentation"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-check"
  }), "Add Selected Color"))), /*#__PURE__*/react.createElement("input", {
    name: name,
    type: "color",
    onChange: handleColorChange,
    id: name
  })), /*#__PURE__*/react.createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/react.createElement("span", {
    className: "d-block padding-s"
  }, "Selected Color(s)"), /*#__PURE__*/react.createElement("div", {
    className: "color-chooser"
  }, (_form$values$name = form.values[name]) === null || _form$values$name === void 0 ? void 0 : _form$values$name.map(function (color, index) {
    return /*#__PURE__*/react.createElement("div", {
      key: color,
      onClick: function onClick() {
        return remove(index);
      },
      className: "color-item color-item-deletable",
      title: "Remove ".concat(color),
      style: {
        backgroundColor: color
      },
      role: "presentation"
    });
  }))));
};

InputColor.propTypes = {
  name: (prop_types_default()).string.isRequired,
  form: prop_types_default().shape({
    values: (prop_types_default()).object,
    touched: (prop_types_default()).object,
    errors: (prop_types_default()).object
  }).isRequired,
  push: (prop_types_default()).func.isRequired,
  remove: (prop_types_default()).func.isRequired
};
/* harmony default export */ const CustomColorInput = (InputColor);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(41054);
// EXTERNAL MODULE: ./node_modules/react-select/creatable/dist/react-select.esm.js
var react_select_esm = __webpack_require__(49153);
;// CONCATENATED MODULE: ./src/components/formik/CustomCreatableSelect.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CustomCreatableSelect_slicedToArray(arr, i) { return CustomCreatableSelect_arrayWithHoles(arr) || CustomCreatableSelect_iterableToArrayLimit(arr, i) || CustomCreatableSelect_unsupportedIterableToArray(arr, i) || CustomCreatableSelect_nonIterableRest(); }

function CustomCreatableSelect_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function CustomCreatableSelect_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CustomCreatableSelect_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CustomCreatableSelect_arrayLikeToArray(o, minLen); }

function CustomCreatableSelect_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CustomCreatableSelect_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function CustomCreatableSelect_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable react/forbid-prop-types */





var CustomCreatableSelect = function CustomCreatableSelect(props) {
  var _useField = (0,formik_esm/* useField */.U$)(props),
      _useField2 = CustomCreatableSelect_slicedToArray(_useField, 3),
      field = _useField2[0],
      meta = _useField2[1],
      helpers = _useField2[2];

  var options = props.options,
      defaultValue = props.defaultValue,
      label = props.label,
      placeholder = props.placeholder,
      isMulti = props.isMulti,
      type = props.type,
      iid = props.iid;
  var touched = meta.touched,
      error = meta.error;
  var setValue = helpers.setValue;

  var handleChange = function handleChange(newValue) {
    if (Array.isArray(newValue)) {
      var arr = newValue.map(function (fieldKey) {
        return fieldKey.value;
      });
      setValue(arr);
    } else {
      setValue(newValue.value);
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (type === 'number') {
      var key = e.nativeEvent.key;

      if (/\D/.test(key) && key !== 'Backspace') {
        e.preventDefault();
      }
    }
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "input-group"
  }, touched && error ? /*#__PURE__*/react.createElement("span", {
    className: "label-input label-error"
  }, error) : /*#__PURE__*/react.createElement("label", {
    className: "label-input",
    htmlFor: field.name
  }, label), /*#__PURE__*/react.createElement(react_select_esm/* default */.ZP, {
    isMulti: isMulti,
    placeholder: placeholder,
    name: field.name,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    defaultValue: defaultValue,
    options: options,
    instanceId: iid,
    styles: {
      menu: function menu(provided) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          zIndex: 10
        });
      },
      container: function container(provided) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          marginBottom: '1.2rem'
        });
      },
      control: function control(provided) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          border: touched && error ? '1px solid red' : '1px solid #cacaca'
        });
      }
    }
  }));
};

CustomCreatableSelect.defaultProps = {
  isMulti: false,
  placeholder: '',
  iid: '',
  options: [],
  type: 'string'
};
CustomCreatableSelect.propTypes = {
  options: prop_types_default().arrayOf((prop_types_default()).object),
  defaultValue: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).array]).isRequired,
  label: (prop_types_default()).string.isRequired,
  placeholder: (prop_types_default()).string,
  isMulti: (prop_types_default()).bool,
  type: (prop_types_default()).string,
  iid: (prop_types_default()).string
};
/* harmony default export */ const formik_CustomCreatableSelect = (CustomCreatableSelect);
;// CONCATENATED MODULE: ./src/components/formik/CustomInput.jsx
var _excluded = ["field", "form", "label", "inputRef"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/forbid-prop-types */



var CustomInput = function CustomInput(_ref) {
  var field = _ref.field,
      _ref$form = _ref.form,
      touched = _ref$form.touched,
      errors = _ref$form.errors,
      label = _ref.label,
      inputRef = _ref.inputRef,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react.createElement("div", {
    className: "input-group"
  }, touched[field.name] && errors[field.name] ? /*#__PURE__*/react.createElement("span", {
    className: "label-input label-error"
  }, errors[field.name]) : /*#__PURE__*/react.createElement("label", {
    className: "label-input",
    htmlFor: field.name
  }, label), /*#__PURE__*/react.createElement("input", _extends({
    type: "text",
    id: field.name,
    className: "input-form ".concat(touched[field.name] && errors[field.name] && 'input-error'),
    ref: inputRef
  }, field, props)));
};

CustomInput.defaultProps = {
  inputRef: undefined
};
CustomInput.propTypes = {
  label: (prop_types_default()).string.isRequired,
  field: (prop_types_default()).object.isRequired,
  form: (prop_types_default()).object.isRequired,
  inputRef: prop_types_default().oneOfType([(prop_types_default()).func, prop_types_default().shape({
    current: prop_types_default().instanceOf(Element)
  })])
};
/* harmony default export */ const formik_CustomInput = (CustomInput);
// EXTERNAL MODULE: ./node_modules/react-phone-input-2/lib/lib.js
var lib = __webpack_require__(67555);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/components/formik/CustomMobileInput.jsx
function CustomMobileInput_slicedToArray(arr, i) { return CustomMobileInput_arrayWithHoles(arr) || CustomMobileInput_iterableToArrayLimit(arr, i) || CustomMobileInput_unsupportedIterableToArray(arr, i) || CustomMobileInput_nonIterableRest(); }

function CustomMobileInput_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function CustomMobileInput_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CustomMobileInput_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CustomMobileInput_arrayLikeToArray(o, minLen); }

function CustomMobileInput_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CustomMobileInput_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function CustomMobileInput_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable react/forbid-prop-types */





var CustomMobileInput = function CustomMobileInput(props) {
  var _useField = (0,formik_esm/* useField */.U$)(props),
      _useField2 = CustomMobileInput_slicedToArray(_useField, 3),
      field = _useField2[0],
      meta = _useField2[1],
      helpers = _useField2[2];

  var label = props.label,
      placeholder = props.placeholder,
      defaultValue = props.defaultValue;
  var touched = meta.touched,
      error = meta.error;
  var setValue = helpers.setValue;

  var handleChange = function handleChange(value, data) {
    var mob = {
      dialCode: data.dialCode,
      countryCode: data.countryCode,
      country: data.name,
      value: value
    };
    setValue(mob);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "input-group"
  }, touched && error ? /*#__PURE__*/react.createElement("span", {
    className: "label-input label-error"
  }, (error === null || error === void 0 ? void 0 : error.value) || (error === null || error === void 0 ? void 0 : error.dialCode)) : /*#__PURE__*/react.createElement("label", {
    className: "label-input",
    htmlFor: field.name
  }, label), /*#__PURE__*/react.createElement((lib_default()), {
    name: field.name,
    country: "ph",
    inputClass: "input-form d-block",
    style: {
      border: touched && error ? '1px solid red' : '1px solid #cacaca'
    },
    inputExtraProps: {
      required: true
    },
    onChange: handleChange,
    placeholder: placeholder,
    value: defaultValue.value
  }));
};

CustomMobileInput.defaultProps = {
  label: 'Mobile Number',
  placeholder: '09254461351'
};
CustomMobileInput.propTypes = {
  label: (prop_types_default()).string,
  placeholder: (prop_types_default()).string,
  defaultValue: (prop_types_default()).object.isRequired
};
/* harmony default export */ const formik_CustomMobileInput = (CustomMobileInput);
;// CONCATENATED MODULE: ./src/components/formik/CustomTextarea.jsx
var CustomTextarea_excluded = ["field", "form", "label"];

function CustomTextarea_extends() { CustomTextarea_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CustomTextarea_extends.apply(this, arguments); }

function CustomTextarea_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CustomTextarea_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CustomTextarea_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/forbid-prop-types */



var CustomTextarea = function CustomTextarea(_ref) {
  var field = _ref.field,
      _ref$form = _ref.form,
      touched = _ref$form.touched,
      errors = _ref$form.errors,
      label = _ref.label,
      props = CustomTextarea_objectWithoutProperties(_ref, CustomTextarea_excluded);

  return /*#__PURE__*/react.createElement("div", {
    className: "input-group"
  }, touched[field.name] && errors[field.name] ? /*#__PURE__*/react.createElement("span", {
    className: "label-input label-error"
  }, errors[field.name]) : /*#__PURE__*/react.createElement("label", {
    className: "label-input",
    htmlFor: field.name
  }, label), /*#__PURE__*/react.createElement("textarea", CustomTextarea_extends({
    name: field.name,
    cols: 30,
    rows: 4,
    id: field.name,
    className: "input-form ".concat(touched[field.name] && errors[field.name] && 'input-error')
  }, field, props)));
};

CustomTextarea.propTypes = {
  label: (prop_types_default()).string.isRequired,
  field: (prop_types_default()).object.isRequired,
  form: (prop_types_default()).object.isRequired
};
/* harmony default export */ const formik_CustomTextarea = (CustomTextarea);
;// CONCATENATED MODULE: ./src/components/formik/index.js






/***/ }),

/***/ 95985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$z": () => (/* binding */ ON_AUTHSTATE_SUCCESS),
/* harmony export */   "AZ": () => (/* binding */ DELETE_USER),
/* harmony export */   "Bb": () => (/* binding */ SET_MAX_PRICE_FILTER),
/* harmony export */   "C4": () => (/* binding */ REMOVE_PRODUCT_SUCCESS),
/* harmony export */   "C5": () => (/* binding */ SIGNIN_WITH_FACEBOOK),
/* harmony export */   "D$": () => (/* binding */ SIGNOUT_SUCCESS),
/* harmony export */   "DC": () => (/* binding */ CLEAR_BASKET),
/* harmony export */   "DG": () => (/* binding */ SET_TEXT_FILTER),
/* harmony export */   "F": () => (/* binding */ SEARCH_PRODUCT),
/* harmony export */   "GH": () => (/* binding */ RESET_CHECKOUT),
/* harmony export */   "GI": () => (/* binding */ EDIT_USER),
/* harmony export */   "Gm": () => (/* binding */ ON_AUTHSTATE_CHANGED),
/* harmony export */   "Hq": () => (/* binding */ UPDATE_EMAIL),
/* harmony export */   "I3": () => (/* binding */ SEARCH_PRODUCT_SUCCESS),
/* harmony export */   "JK": () => (/* binding */ IS_AUTHENTICATING),
/* harmony export */   "K2": () => (/* binding */ ADD_QTY_ITEM),
/* harmony export */   "Kh": () => (/* binding */ SET_PROFILE),
/* harmony export */   "MY": () => (/* binding */ APPLY_FILTER),
/* harmony export */   "OD": () => (/* binding */ SIGNIN_SUCCESS),
/* harmony export */   "OT": () => (/* binding */ SIGNIN),
/* harmony export */   "Oh": () => (/* binding */ SIGNIN_WITH_GITHUB),
/* harmony export */   "PM": () => (/* binding */ SIGNOUT),
/* harmony export */   "Pn": () => (/* binding */ SET_BRAND_FILTER),
/* harmony export */   "RI": () => (/* binding */ SET_BASKET_ITEMS),
/* harmony export */   "Rf": () => (/* binding */ SET_AUTH_PERSISTENCE),
/* harmony export */   "TR": () => (/* binding */ ADD_TO_BASKET),
/* harmony export */   "TS": () => (/* binding */ MINUS_QTY_ITEM),
/* harmony export */   "U4": () => (/* binding */ EDIT_PRODUCT),
/* harmony export */   "Xm": () => (/* binding */ RESET_FILTER),
/* harmony export */   "Ys": () => (/* binding */ EDIT_PRODUCT_SUCCESS),
/* harmony export */   "Zp": () => (/* binding */ SET_MIN_PRICE_FILTER),
/* harmony export */   "b1": () => (/* binding */ REMOVE_FROM_BASKET),
/* harmony export */   "bk": () => (/* binding */ RESET_PASSWORD),
/* harmony export */   "br": () => (/* binding */ LOADING),
/* harmony export */   "eI": () => (/* binding */ REMOVE_PRODUCT),
/* harmony export */   "hh": () => (/* binding */ SET_REQUEST_STATUS),
/* harmony export */   "jI": () => (/* binding */ SET_AUTH_STATUS),
/* harmony export */   "jN": () => (/* binding */ ADD_USER),
/* harmony export */   "jp": () => (/* binding */ GET_PRODUCTS_SUCCESS),
/* harmony export */   "kp": () => (/* binding */ SIGNUP),
/* harmony export */   "m1": () => (/* binding */ SET_CHECKOUT_PAYMENT_DETAILS),
/* harmony export */   "ns": () => (/* binding */ SET_CHECKOUT_SHIPPING_DETAILS),
/* harmony export */   "oV": () => (/* binding */ SIGNIN_WITH_GOOGLE),
/* harmony export */   "r0": () => (/* binding */ UPDATE_PROFILE),
/* harmony export */   "s$": () => (/* binding */ ADD_PRODUCT_SUCCESS),
/* harmony export */   "tI": () => (/* binding */ ON_AUTHSTATE_FAIL),
/* harmony export */   "tT": () => (/* binding */ GET_PRODUCTS),
/* harmony export */   "tW": () => (/* binding */ CLEAR_PROFILE),
/* harmony export */   "vQ": () => (/* binding */ REMOVE_SELECTED_RECENT),
/* harmony export */   "xV": () => (/* binding */ CLEAR_RECENT_SEARCH),
/* harmony export */   "z9": () => (/* binding */ UPDATE_PROFILE_SUCCESS),
/* harmony export */   "zN": () => (/* binding */ ADD_PRODUCT),
/* harmony export */   "zY": () => (/* binding */ CLEAR_SEARCH_STATE)
/* harmony export */ });
/* unused harmony exports CANCEL_GET_PRODUCTS, SET_LAST_REF_KEY, SIGNUP_SUCCESS, REGISTER_USER, GET_USER */
var GET_PRODUCTS = 'GET_PRODUCTS';
var SEARCH_PRODUCT = 'SEARCH_PRODUCT';
var SEARCH_PRODUCT_SUCCESS = 'SEARCH_PRODUCT_SUCCESS';
var GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
var ADD_PRODUCT = 'ADD_PRODUCT';
var ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
var REMOVE_PRODUCT = 'REMOVE_PRODUCT';
var REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS';
var EDIT_PRODUCT = 'EDIT_PRODUCT';
var EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';
var CANCEL_GET_PRODUCTS = 'CANCEL_GET_PRODUCTS';
var CLEAR_SEARCH_STATE = 'CLEAR_SEARCH_STATE';
var SET_LAST_REF_KEY = 'SET_LAST_REF_KEY';
var SET_BASKET_ITEMS = 'SET_BASKET_ITEMS';
var ADD_TO_BASKET = 'ADD_TO_BASKET';
var REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
var CLEAR_BASKET = 'CLEAR_BASKET';
var ADD_QTY_ITEM = 'ADD_QTY_ITEM';
var MINUS_QTY_ITEM = 'MINUS_QTY_ITEM';
var SET_CHECKOUT_SHIPPING_DETAILS = 'SET_CHECKOUT_SHIPPING_DETAILS';
var SET_CHECKOUT_PAYMENT_DETAILS = 'SET_CHECKOUT_PAYMENT_DETAILS';
var RESET_CHECKOUT = 'RESET_CHECKOUT';
var SIGNIN = 'SIGNIN';
var SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
var SIGNUP = 'SIGNUP';
var SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
var SIGNOUT = 'SIGNOUT';
var SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
var SET_AUTH_STATUS = 'SET_AUTH_STATUS';
var SIGNIN_WITH_GOOGLE = 'SIGNIN_WITH_GOOGLE';
var SIGNIN_WITH_FACEBOOK = 'SIGNIN_WITH_FACEBOOK';
var SIGNIN_WITH_GITHUB = 'SIGNIN_WITH_GITHUB';
var ON_AUTHSTATE_CHANGED = 'ON_AUTHSTATE_CHANGED';
var SET_AUTH_PERSISTENCE = 'SET_AUTH_PERSISTENCE';
var ON_AUTHSTATE_SUCCESS = 'ON_AUTHSTATE_SUCCESS';
var ON_AUTHSTATE_FAIL = 'ON_AUTHSTATE_FAIL';
var RESET_PASSWORD = 'RESET_PASSWORD';
var UPDATE_EMAIL = 'UPDATE_EMAIL';
var SET_PROFILE = 'SET_PROFILE';
var UPDATE_PROFILE = 'UPDATE_PROFILE';
var UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
var CLEAR_PROFILE = 'CLEAR_PROFILE';
var SET_TEXT_FILTER = 'SET_TEXT_FILTER';
var SET_BRAND_FILTER = 'SET_BRAND_FILTER';
var SET_MIN_PRICE_FILTER = 'SET_MIN_PRICE_FILTER';
var SET_MAX_PRICE_FILTER = 'SET_MAX_PRICE_FILTER';
var RESET_FILTER = 'RESET_FILTER';
var APPLY_FILTER = 'APPLY_FILTER';
var CLEAR_RECENT_SEARCH = 'CLEAR_RECENT_SEARCH';
var REMOVE_SELECTED_RECENT = 'REMOVE_SELECTED_RECENT';
var REGISTER_USER = 'REGISTER_USER';
var GET_USER = 'GET_USER';
var ADD_USER = 'ADD_USER';
var DELETE_USER = 'DELETE_USER';
var EDIT_USER = 'EDIT_USER';
var LOADING = 'LOADING';
var IS_AUTHENTICATING = 'IS_AUTHENTICATING';
var SET_REQUEST_STATUS = 'SET_REQUEST_STATUS';

/***/ }),

/***/ 50409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AX": () => (/* binding */ VIEW_PRODUCT),
/* harmony export */   "DG": () => (/* binding */ RECOMMENDED_PRODUCTS),
/* harmony export */   "EO": () => (/* binding */ ACCOUNT_EDIT),
/* harmony export */   "Fr": () => (/* binding */ CHECKOUT_STEP_1),
/* harmony export */   "Mh": () => (/* binding */ FEATURED_PRODUCTS),
/* harmony export */   "OT": () => (/* binding */ SIGNIN),
/* harmony export */   "Ow": () => (/* binding */ ADMIN_PRODUCTS),
/* harmony export */   "PU": () => (/* binding */ CHECKOUT_STEP_3),
/* harmony export */   "Sd": () => (/* binding */ HOME),
/* harmony export */   "U4": () => (/* binding */ EDIT_PRODUCT),
/* harmony export */   "ee": () => (/* binding */ CHECKOUT_STEP_2),
/* harmony export */   "kd": () => (/* binding */ SHOP),
/* harmony export */   "kp": () => (/* binding */ SIGNUP),
/* harmony export */   "lP": () => (/* binding */ FORGOT_PASSWORD),
/* harmony export */   "mo": () => (/* binding */ SEARCH),
/* harmony export */   "o3": () => (/* binding */ ADMIN_DASHBOARD),
/* harmony export */   "yV": () => (/* binding */ ACCOUNT),
/* harmony export */   "zN": () => (/* binding */ ADD_PRODUCT)
/* harmony export */ });
/* unused harmony exports ADMIN_USERS, SIGNOUT */
var HOME = '/';
var SHOP = '/shop';
var FEATURED_PRODUCTS = '/featured';
var RECOMMENDED_PRODUCTS = '/recommended';
var ACCOUNT = '/account';
var ACCOUNT_EDIT = '/account/edit';
var ADMIN_DASHBOARD = '/admin/dashboard';
var ADMIN_PRODUCTS = '/admin/products';
var ADMIN_USERS = '/admin/users';
var ADD_PRODUCT = '/admin/add';
var EDIT_PRODUCT = '/admin/edit';
var SEARCH = '/search/:searchKey';
var SIGNIN = '/signin';
var SIGNOUT = '/signout';
var SIGNUP = '/signup';
var FORGOT_PASSWORD = '/forgot_password';
var CHECKOUT_STEP_1 = '/checkout/step1';
var CHECKOUT_STEP_2 = '/checkout/step2';
var CHECKOUT_STEP_3 = '/checkout/step3';
var VIEW_PRODUCT = '/product/:id';

/***/ }),

/***/ 89722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Po": () => (/* binding */ displayDate),
/* harmony export */   "aZ": () => (/* binding */ displayActionMessage),
/* harmony export */   "ik": () => (/* binding */ displayMoney),
/* harmony export */   "tf": () => (/* binding */ calculateTotal)
/* harmony export */ });
/* eslint-disable no-nested-ternary */
var displayDate = function displayDate(timestamp) {
  var date = new Date(timestamp);
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear(); // return day + ' ' + monthNames[monthIndex] + ' ' + year;

  return "".concat(monthNames[monthIndex], " ").concat(day, ", ").concat(year);
};
var displayMoney = function displayMoney(n) {
  var format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }); // or use toLocaleString()

  return format.format(n);
};
var calculateTotal = function calculateTotal(arr) {
  if (!arr || (arr === null || arr === void 0 ? void 0 : arr.length) === 0) return 0;
  var total = arr.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  return total.toFixed(2);
};
var displayActionMessage = function displayActionMessage(msg) {
  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
  var div = document.createElement('div');
  var span = document.createElement('span');
  div.className = "toast ".concat(status === 'info' ? 'toast-info' : status === 'success' ? 'toast-success' : 'toast-error' // eslint-disable-next-line indent
  );
  span.className = 'toast-msg';
  span.textContent = msg;
  div.appendChild(span);

  if (document.querySelector('.toast')) {
    document.body.removeChild(document.querySelector('.toast'));
    document.body.appendChild(div);
  } else {
    document.body.appendChild(div);
  }

  setTimeout(function () {
    try {
      document.body.removeChild(div);
    } catch (e) {
      console.log(e);
    }
  }, 3000);
};

/***/ }),

/***/ 56311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Kc": () => (/* reexport */ hooks_useBasket),
  "Hd": () => (/* reexport */ hooks_useDidMount),
  "jr": () => (/* reexport */ hooks_useDocumentTitle),
  "ym": () => (/* reexport */ hooks_useFeaturedProducts),
  "bE": () => (/* reexport */ hooks_useFileHandler),
  "dd": () => (/* reexport */ hooks_useModal),
  "iB": () => (/* reexport */ hooks_useProduct),
  "Kw": () => (/* reexport */ hooks_useRecommendedProducts),
  "j": () => (/* reexport */ hooks_useScrollTop)
});

// EXTERNAL MODULE: ./src/helpers/utils.js
var utils = __webpack_require__(89722);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__(28216);
// EXTERNAL MODULE: ./src/redux/actions/basketActions.js
var basketActions = __webpack_require__(14548);
;// CONCATENATED MODULE: ./src/hooks/useBasket.js




var useBasket = function useBasket() {
  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return {
      basket: state.basket
    };
  }),
      basket = _useSelector.basket;

  var dispatch = (0,es/* useDispatch */.I0)();

  var isItemOnBasket = function isItemOnBasket(id) {
    return !!basket.find(function (item) {
      return item.id === id;
    });
  };

  var addToBasket = function addToBasket(product) {
    if (isItemOnBasket(product.id)) {
      dispatch((0,basketActions/* removeFromBasket */.Er)(product.id));
      (0,utils/* displayActionMessage */.aZ)('Item removed from basket', 'info');
    } else {
      dispatch((0,basketActions/* addToBasket */.H)(product));
      (0,utils/* displayActionMessage */.aZ)('Item added to basket', 'success');
    }
  };

  return {
    basket: basket,
    isItemOnBasket: isItemOnBasket,
    addToBasket: addToBasket
  };
};

/* harmony default export */ const hooks_useBasket = (useBasket);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/hooks/useDidMount.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useDidMount = function useDidMount() {
  var initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _useState = (0,react.useState)(initState),
      _useState2 = _slicedToArray(_useState, 2),
      didMount = _useState2[0],
      setDidMount = _useState2[1];

  (0,react.useEffect)(function () {
    setDidMount(true);
    return function () {
      setDidMount(false);
    };
  }, []);
  return didMount;
};

/* harmony default export */ const hooks_useDidMount = (useDidMount);
;// CONCATENATED MODULE: ./src/hooks/useDocumentTitle.js


var useDocumentTitle = function useDocumentTitle(title) {
  (0,react.useLayoutEffect)(function () {
    if (title) {
      document.title = title;
    } else {
      document.title = 'Salinaka - eCommerce React App';
    }
  }, [title]);
};

/* harmony default export */ const hooks_useDocumentTitle = (useDocumentTitle);
// EXTERNAL MODULE: ./src/services/firebase.js + 1 modules
var firebase = __webpack_require__(73879);
;// CONCATENATED MODULE: ./src/hooks/useFeaturedProducts.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function useFeaturedProducts_slicedToArray(arr, i) { return useFeaturedProducts_arrayWithHoles(arr) || useFeaturedProducts_iterableToArrayLimit(arr, i) || useFeaturedProducts_unsupportedIterableToArray(arr, i) || useFeaturedProducts_nonIterableRest(); }

function useFeaturedProducts_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useFeaturedProducts_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useFeaturedProducts_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useFeaturedProducts_arrayLikeToArray(o, minLen); }

function useFeaturedProducts_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useFeaturedProducts_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useFeaturedProducts_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var useFeaturedProducts = function useFeaturedProducts(itemsCount) {
  var _useState = (0,react.useState)([]),
      _useState2 = useFeaturedProducts_slicedToArray(_useState, 2),
      featuredProducts = _useState2[0],
      setFeaturedProducts = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = useFeaturedProducts_slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react.useState)(''),
      _useState6 = useFeaturedProducts_slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var didMount = hooks_useDidMount(true);

  var fetchFeaturedProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var docs, items;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoading(true);
              setError('');
              _context.next = 5;
              return firebase/* default.getFeaturedProducts */.Z.getFeaturedProducts(itemsCount);

            case 5:
              docs = _context.sent;

              if (docs.empty) {
                if (didMount) {
                  setError('No featured products found.');
                  setLoading(false);
                }
              } else {
                items = [];
                docs.forEach(function (snap) {
                  var data = snap.data();
                  items.push(_objectSpread({
                    id: snap.ref.id
                  }, data));
                });

                if (didMount) {
                  setFeaturedProducts(items);
                  setLoading(false);
                }
              }

              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);

              if (didMount) {
                setError('Failed to fetch featured products');
                setLoading(false);
              }

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function fetchFeaturedProducts() {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react.useEffect)(function () {
    if (featuredProducts.length === 0 && didMount) {
      fetchFeaturedProducts();
    }
  }, []);
  return {
    featuredProducts: featuredProducts,
    fetchFeaturedProducts: fetchFeaturedProducts,
    isLoading: isLoading,
    error: error
  };
};

/* harmony default export */ const hooks_useFeaturedProducts = (useFeaturedProducts);
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 4 modules
var v4 = __webpack_require__(44586);
;// CONCATENATED MODULE: ./src/hooks/useFileHandler.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || useFileHandler_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return useFileHandler_arrayLikeToArray(arr); }

function useFileHandler_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function useFileHandler_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? useFileHandler_ownKeys(Object(source), !0).forEach(function (key) { useFileHandler_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : useFileHandler_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function useFileHandler_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function useFileHandler_slicedToArray(arr, i) { return useFileHandler_arrayWithHoles(arr) || useFileHandler_iterableToArrayLimit(arr, i) || useFileHandler_unsupportedIterableToArray(arr, i) || useFileHandler_nonIterableRest(); }

function useFileHandler_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useFileHandler_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useFileHandler_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useFileHandler_arrayLikeToArray(o, minLen); }

function useFileHandler_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useFileHandler_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useFileHandler_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-alert */



var useFileHandler = function useFileHandler(initState) {
  var _useState = (0,react.useState)(initState),
      _useState2 = useFileHandler_slicedToArray(_useState, 2),
      imageFile = _useState2[0],
      setImageFile = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = useFileHandler_slicedToArray(_useState3, 2),
      isFileLoading = _useState4[0],
      setFileLoading = _useState4[1];

  var removeImage = function removeImage(_ref) {
    var id = _ref.id,
        name = _ref.name;
    var items = imageFile[name].filter(function (item) {
      return item.id !== id;
    });
    setImageFile(useFileHandler_objectSpread(useFileHandler_objectSpread({}, imageFile), {}, useFileHandler_defineProperty({}, name, items)));
  };

  var onFileChange = function onFileChange(event, _ref2) {
    var name = _ref2.name,
        type = _ref2.type;
    var val = event.target.value;
    var img = event.target.files[0];
    var size = img.size / 1024 / 1024;
    var regex = /(\.jpg|\.jpeg|\.png)$/i;
    setFileLoading(true);

    if (!regex.exec(val)) {
      alert('File type must be JPEG or PNG', 'error');
      setFileLoading(false);
    } else if (size > 0.5) {
      alert('File size exceeded 500kb, consider optimizing your image', 'error');
      setFileLoading(false);
    } else if (type === 'multiple') {
      Array.from(event.target.files).forEach(function (file) {
        var reader = new FileReader();
        reader.addEventListener('load', function (e) {
          setImageFile(function (oldFiles) {
            return useFileHandler_objectSpread(useFileHandler_objectSpread({}, oldFiles), {}, useFileHandler_defineProperty({}, name, [].concat(_toConsumableArray(oldFiles[name]), [{
              file: file,
              url: e.target.result,
              id: (0,v4/* default */.Z)()
            }])));
          });
        });
        reader.readAsDataURL(file);
      });
      setFileLoading(false);
    } else {
      // type is single
      var reader = new FileReader();
      reader.addEventListener('load', function (e) {
        setImageFile(useFileHandler_objectSpread(useFileHandler_objectSpread({}, imageFile), {}, useFileHandler_defineProperty({}, name, {
          file: img,
          url: e.target.result
        })));
        setFileLoading(false);
      });
      reader.readAsDataURL(img);
    }
  };

  return {
    imageFile: imageFile,
    setImageFile: setImageFile,
    isFileLoading: isFileLoading,
    onFileChange: onFileChange,
    removeImage: removeImage
  };
};

/* harmony default export */ const hooks_useFileHandler = (useFileHandler);
;// CONCATENATED MODULE: ./src/hooks/useModal.js
function useModal_slicedToArray(arr, i) { return useModal_arrayWithHoles(arr) || useModal_iterableToArrayLimit(arr, i) || useModal_unsupportedIterableToArray(arr, i) || useModal_nonIterableRest(); }

function useModal_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useModal_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useModal_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useModal_arrayLikeToArray(o, minLen); }

function useModal_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useModal_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useModal_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useModal = function useModal() {
  var _useState = (0,react.useState)(false),
      _useState2 = useModal_slicedToArray(_useState, 2),
      isOpenModal = _useState2[0],
      setModalOpen = _useState2[1];

  var onOpenModal = function onOpenModal() {
    setModalOpen(true);
  };

  var onCloseModal = function onCloseModal() {
    setModalOpen(false);
  };

  return {
    isOpenModal: isOpenModal,
    onOpenModal: onOpenModal,
    onCloseModal: onCloseModal
  };
};

/* harmony default export */ const hooks_useModal = (useModal);
;// CONCATENATED MODULE: ./src/hooks/useProduct.js
function useProduct_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function useProduct_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? useProduct_ownKeys(Object(source), !0).forEach(function (key) { useProduct_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : useProduct_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function useProduct_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function useProduct_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function useProduct_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { useProduct_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { useProduct_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function useProduct_slicedToArray(arr, i) { return useProduct_arrayWithHoles(arr) || useProduct_iterableToArrayLimit(arr, i) || useProduct_unsupportedIterableToArray(arr, i) || useProduct_nonIterableRest(); }

function useProduct_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useProduct_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useProduct_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useProduct_arrayLikeToArray(o, minLen); }

function useProduct_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useProduct_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useProduct_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var useProduct = function useProduct(id) {
  // get and check if product exists in store
  var storeProduct = (0,es/* useSelector */.v9)(function (state) {
    return state.products.items.find(function (item) {
      return item.id === id;
    });
  });

  var _useState = (0,react.useState)(storeProduct),
      _useState2 = useProduct_slicedToArray(_useState, 2),
      product = _useState2[0],
      setProduct = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = useProduct_slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react.useState)(null),
      _useState6 = useProduct_slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var didMount = hooks_useDidMount(true);
  (0,react.useEffect)(function () {
    useProduct_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var doc, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(!product || product.id !== id)) {
                _context.next = 7;
                break;
              }

              setLoading(true);
              _context.next = 5;
              return firebase/* default.getSingleProduct */.Z.getSingleProduct(id);

            case 5:
              doc = _context.sent;

              if (doc.exists) {
                data = useProduct_objectSpread(useProduct_objectSpread({}, doc.data()), {}, {
                  id: doc.ref.id
                });

                if (didMount) {
                  setProduct(data);
                  setLoading(false);
                }
              } else {
                setError('Product not found.');
              }

            case 7:
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);

              if (didMount) {
                setLoading(false);
                setError((_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) || 'Something went wrong.');
              }

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }))();
  }, [id]);
  return {
    product: product,
    isLoading: isLoading,
    error: error
  };
};

/* harmony default export */ const hooks_useProduct = (useProduct);
;// CONCATENATED MODULE: ./src/hooks/useRecommendedProducts.js
function useRecommendedProducts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function useRecommendedProducts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? useRecommendedProducts_ownKeys(Object(source), !0).forEach(function (key) { useRecommendedProducts_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : useRecommendedProducts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function useRecommendedProducts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function useRecommendedProducts_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function useRecommendedProducts_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { useRecommendedProducts_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { useRecommendedProducts_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function useRecommendedProducts_slicedToArray(arr, i) { return useRecommendedProducts_arrayWithHoles(arr) || useRecommendedProducts_iterableToArrayLimit(arr, i) || useRecommendedProducts_unsupportedIterableToArray(arr, i) || useRecommendedProducts_nonIterableRest(); }

function useRecommendedProducts_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useRecommendedProducts_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useRecommendedProducts_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useRecommendedProducts_arrayLikeToArray(o, minLen); }

function useRecommendedProducts_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useRecommendedProducts_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useRecommendedProducts_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var useRecommendedProducts = function useRecommendedProducts(itemsCount) {
  var _useState = (0,react.useState)([]),
      _useState2 = useRecommendedProducts_slicedToArray(_useState, 2),
      recommendedProducts = _useState2[0],
      setRecommendedProducts = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = useRecommendedProducts_slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react.useState)(''),
      _useState6 = useRecommendedProducts_slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var didMount = hooks_useDidMount(true);

  var fetchRecommendedProducts = /*#__PURE__*/function () {
    var _ref = useRecommendedProducts_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var docs, items;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoading(true);
              setError('');
              _context.next = 5;
              return firebase/* default.getRecommendedProducts */.Z.getRecommendedProducts(itemsCount);

            case 5:
              docs = _context.sent;

              if (docs.empty) {
                if (didMount) {
                  setError('No recommended products found.');
                  setLoading(false);
                }
              } else {
                items = [];
                docs.forEach(function (snap) {
                  var data = snap.data();
                  items.push(useRecommendedProducts_objectSpread({
                    id: snap.ref.id
                  }, data));
                });

                if (didMount) {
                  setRecommendedProducts(items);
                  setLoading(false);
                }
              }

              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);

              if (didMount) {
                setError('Failed to fetch recommended products');
                setLoading(false);
              }

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function fetchRecommendedProducts() {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react.useEffect)(function () {
    if (recommendedProducts.length === 0 && didMount) {
      fetchRecommendedProducts();
    }
  }, []);
  return {
    recommendedProducts: recommendedProducts,
    fetchRecommendedProducts: fetchRecommendedProducts,
    isLoading: isLoading,
    error: error
  };
};

/* harmony default export */ const hooks_useRecommendedProducts = (useRecommendedProducts);
;// CONCATENATED MODULE: ./src/hooks/useScrollTop.js


var useScrollTop = function useScrollTop() {
  (0,react.useEffect)(function () {
    window.scrollTo(0, 0);
  }, []);
};

/* harmony default export */ const hooks_useScrollTop = (useScrollTop);
;// CONCATENATED MODULE: ./src/hooks/index.js










/***/ }),

/***/ 14898:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./src/components/common/index.js + 24 modules
var common = __webpack_require__(10090);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./src/redux/actions/authActions.js
var authActions = __webpack_require__(67865);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
// EXTERNAL MODULE: ./node_modules/redux-persist/es/index.js + 9 modules
var es = __webpack_require__(43386);
// EXTERNAL MODULE: ./node_modules/redux-persist/lib/storage/index.js
var storage = __webpack_require__(76734);
// EXTERNAL MODULE: ./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js + 2 modules
var redux_saga_core_npm_proxy_esm = __webpack_require__(30797);
// EXTERNAL MODULE: ./src/constants/constants.js
var constants = __webpack_require__(95985);
;// CONCATENATED MODULE: ./src/redux/reducers/authReducer.js

var initState = null; // {
// id: 'test-123',
// role: 'ADMIN',
// provider: 'password'
// };

/* harmony default export */ const authReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants/* SIGNIN_SUCCESS */.OD:
      return {
        id: action.payload.id,
        role: action.payload.role,
        provider: action.payload.provider
      };

    case constants/* SIGNOUT_SUCCESS */.D$:
      return null;

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./src/redux/reducers/basketReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ const basketReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants/* SET_BASKET_ITEMS */.RI:
      return action.payload;

    case constants/* ADD_TO_BASKET */.TR:
      return state.some(function (product) {
        return product.id === action.payload.id;
      }) ? state : [action.payload].concat(_toConsumableArray(state));

    case constants/* REMOVE_FROM_BASKET */.b1:
      return state.filter(function (product) {
        return product.id !== action.payload;
      });

    case constants/* CLEAR_BASKET */.DC:
      return [];

    case constants/* ADD_QTY_ITEM */.K2:
      return state.map(function (product) {
        if (product.id === action.payload) {
          return _objectSpread(_objectSpread({}, product), {}, {
            quantity: product.quantity + 1
          });
        }

        return product;
      });

    case constants/* MINUS_QTY_ITEM */.TS:
      return state.map(function (product) {
        if (product.id === action.payload) {
          return _objectSpread(_objectSpread({}, product), {}, {
            quantity: product.quantity - 1
          });
        }

        return product;
      });

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./src/redux/reducers/checkoutReducer.js
function checkoutReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function checkoutReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? checkoutReducer_ownKeys(Object(source), !0).forEach(function (key) { checkoutReducer_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : checkoutReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function checkoutReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var defaultState = {
  shipping: {},
  payment: {
    type: 'paypal',
    name: '',
    cardnumber: '',
    expiry: '',
    ccv: ''
  }
};
/* harmony default export */ const checkoutReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants/* SET_CHECKOUT_SHIPPING_DETAILS */.ns:
      return checkoutReducer_objectSpread(checkoutReducer_objectSpread({}, state), {}, {
        shipping: action.payload
      });

    case constants/* SET_CHECKOUT_PAYMENT_DETAILS */.m1:
      return checkoutReducer_objectSpread(checkoutReducer_objectSpread({}, state), {}, {
        payment: action.payload
      });

    case constants/* RESET_CHECKOUT */.GH:
      return defaultState;

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./src/redux/reducers/filterReducer.js
function filterReducer_toConsumableArray(arr) { return filterReducer_arrayWithoutHoles(arr) || filterReducer_iterableToArray(arr) || filterReducer_unsupportedIterableToArray(arr) || filterReducer_nonIterableSpread(); }

function filterReducer_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function filterReducer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return filterReducer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return filterReducer_arrayLikeToArray(o, minLen); }

function filterReducer_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function filterReducer_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return filterReducer_arrayLikeToArray(arr); }

function filterReducer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function filterReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function filterReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? filterReducer_ownKeys(Object(source), !0).forEach(function (key) { filterReducer_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : filterReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function filterReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var filterReducer_initState = {
  recent: [],
  keyword: '',
  brand: '',
  minPrice: 0,
  maxPrice: 0,
  sortBy: ''
};
/* harmony default export */ const filterReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : filterReducer_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants/* SET_TEXT_FILTER */.DG:
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        recent: !!state.recent.find(function (n) {
          return n === action.payload;
        }) || action.payload === '' ? state.recent : [action.payload].concat(filterReducer_toConsumableArray(state.recent)),
        keyword: action.payload
      });

    case constants/* SET_BRAND_FILTER */.Pn:
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        brand: action.payload
      });

    case constants/* SET_MAX_PRICE_FILTER */.Bb:
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        maxPrice: action.payload
      });

    case constants/* SET_MIN_PRICE_FILTER */.Zp:
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        minPrice: action.payload
      });

    case constants/* RESET_FILTER */.Xm:
      return filterReducer_initState;

    case constants/* CLEAR_RECENT_SEARCH */.xV:
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        recent: []
      });

    case constants/* REMOVE_SELECTED_RECENT */.vQ:
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        recent: state.recent.filter(function (item) {
          return item !== action.payload;
        })
      });

    case constants/* APPLY_FILTER */.MY:
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), action.payload);

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./src/redux/reducers/miscReducer.js
function miscReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function miscReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? miscReducer_ownKeys(Object(source), !0).forEach(function (key) { miscReducer_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : miscReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function miscReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var miscReducer_initState = {
  loading: false,
  isAuthenticating: false,
  authStatus: null,
  requestStatus: null,
  theme: 'light'
};
/* harmony default export */ const miscReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : miscReducer_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants/* LOADING */.br:
      return miscReducer_objectSpread(miscReducer_objectSpread({}, state), {}, {
        loading: action.payload
      });

    case constants/* IS_AUTHENTICATING */.JK:
      return miscReducer_objectSpread(miscReducer_objectSpread({}, state), {}, {
        isAuthenticating: action.payload
      });

    case constants/* SET_REQUEST_STATUS */.hh:
      return miscReducer_objectSpread(miscReducer_objectSpread({}, state), {}, {
        requestStatus: action.payload
      });

    case constants/* SET_AUTH_STATUS */.jI:
      return miscReducer_objectSpread(miscReducer_objectSpread({}, state), {}, {
        authStatus: action.payload
      });

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./src/redux/reducers/productReducer.js
function productReducer_toConsumableArray(arr) { return productReducer_arrayWithoutHoles(arr) || productReducer_iterableToArray(arr) || productReducer_unsupportedIterableToArray(arr) || productReducer_nonIterableSpread(); }

function productReducer_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function productReducer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return productReducer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return productReducer_arrayLikeToArray(o, minLen); }

function productReducer_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function productReducer_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return productReducer_arrayLikeToArray(arr); }

function productReducer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function productReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function productReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? productReducer_ownKeys(Object(source), !0).forEach(function (key) { productReducer_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : productReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function productReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var productReducer_initState = {
  lastRefKey: null,
  total: 0,
  items: []
};
/* harmony default export */ const productReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    lastRefKey: null,
    total: 0,
    items: [],
    searchedProducts: productReducer_initState
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants/* GET_PRODUCTS_SUCCESS */.jp:
      return productReducer_objectSpread(productReducer_objectSpread({}, state), {}, {
        lastRefKey: action.payload.lastKey,
        total: action.payload.total,
        items: [].concat(productReducer_toConsumableArray(state.items), productReducer_toConsumableArray(action.payload.products))
      });

    case constants/* ADD_PRODUCT_SUCCESS */.s$:
      return productReducer_objectSpread(productReducer_objectSpread({}, state), {}, {
        items: [].concat(productReducer_toConsumableArray(state.items), [action.payload])
      });

    case constants/* SEARCH_PRODUCT_SUCCESS */.I3:
      return productReducer_objectSpread(productReducer_objectSpread({}, state), {}, {
        searchedProducts: {
          lastRefKey: action.payload.lastKey,
          total: action.payload.total,
          items: [].concat(productReducer_toConsumableArray(state.searchedProducts.items), productReducer_toConsumableArray(action.payload.products))
        }
      });

    case constants/* CLEAR_SEARCH_STATE */.zY:
      return productReducer_objectSpread(productReducer_objectSpread({}, state), {}, {
        searchedProducts: productReducer_initState
      });

    case constants/* REMOVE_PRODUCT_SUCCESS */.C4:
      return productReducer_objectSpread(productReducer_objectSpread({}, state), {}, {
        items: state.items.filter(function (product) {
          return product.id !== action.payload;
        })
      });

    case constants/* EDIT_PRODUCT_SUCCESS */.Ys:
      return productReducer_objectSpread(productReducer_objectSpread({}, state), {}, {
        items: state.items.map(function (product) {
          if (product.id === action.payload.id) {
            return productReducer_objectSpread(productReducer_objectSpread({}, product), action.payload.updates);
          }

          return product;
        })
      });

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./src/redux/reducers/profileReducer.js
function profileReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function profileReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? profileReducer_ownKeys(Object(source), !0).forEach(function (key) { profileReducer_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : profileReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function profileReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import profile from 'static/profile.jpg';
// import banner from 'static/banner.jpg';
// const initState = {
//   fullname: 'Pedro Juan',
//   email: 'juanpedro@gmail.com',
//   address: '',
//   mobile: {},
//   avatar: profile,
//   banner,
//   dateJoined: 1954234787348
// };

/* harmony default export */ const profileReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants/* SET_PROFILE */.Kh:
      return action.payload;

    case constants/* UPDATE_PROFILE_SUCCESS */.z9:
      return profileReducer_objectSpread(profileReducer_objectSpread({}, state), action.payload);

    case constants/* CLEAR_PROFILE */.tW:
      return {};

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./src/redux/reducers/userReducer.js
function userReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function userReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? userReducer_ownKeys(Object(source), !0).forEach(function (key) { userReducer_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : userReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function userReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function userReducer_toConsumableArray(arr) { return userReducer_arrayWithoutHoles(arr) || userReducer_iterableToArray(arr) || userReducer_unsupportedIterableToArray(arr) || userReducer_nonIterableSpread(); }

function userReducer_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function userReducer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return userReducer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return userReducer_arrayLikeToArray(o, minLen); }

function userReducer_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function userReducer_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return userReducer_arrayLikeToArray(arr); }

function userReducer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // const initState = [
//   {
//     firstname: 'Gago',
//     lastname: 'Ka',
//     email: 'gagoka@mail.com',
//     password: 'gagooo',
//     avatar: '',
//     banner: '',
//     dateJoined: 0
//   }
// ];

/* harmony default export */ const userReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants/* ADD_USER */.jN:
      return [].concat(userReducer_toConsumableArray(state), [action.payload]);

    case constants/* EDIT_USER */.GI:
      return state.map(function (user) {
        if (user.id === action.payload.id) {
          return userReducer_objectSpread(userReducer_objectSpread({}, user), action.payload);
        }

        return user;
      });

    case constants/* DELETE_USER */.AZ:
      return state.filter(function (user) {
        return user.id !== action.payload;
      });

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./src/redux/reducers/index.js








var rootReducer = {
  products: productReducer,
  basket: basketReducer,
  auth: authReducer,
  profile: profileReducer,
  filter: filterReducer,
  users: userReducer,
  checkout: checkoutReducer,
  app: miscReducer
};
/* harmony default export */ const reducers = (rootReducer);
// EXTERNAL MODULE: ./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js + 1 modules
var redux_saga_effects_npm_proxy_esm = __webpack_require__(34857);
// EXTERNAL MODULE: ./src/constants/routes.js
var routes = __webpack_require__(50409);
;// CONCATENATED MODULE: ./src/images/defaultAvatar.jpg
/* harmony default export */ const defaultAvatar = (__webpack_require__.p + "images/defaultAvatar.4e9edb2a624547982816014bf128fcd5.jpg");
;// CONCATENATED MODULE: ./src/images/defaultBanner.jpg
/* harmony default export */ const defaultBanner = (__webpack_require__.p + "images/defaultBanner.accdc757f2c48d61f24c4fbcef2742fd.jpg");
// EXTERNAL MODULE: ./src/redux/actions/basketActions.js
var basketActions = __webpack_require__(14548);
;// CONCATENATED MODULE: ./src/redux/actions/checkoutActions.js

var setShippingDetails = function setShippingDetails(details) {
  return {
    type: constants/* SET_CHECKOUT_SHIPPING_DETAILS */.ns,
    payload: details
  };
};
var setPaymentDetails = function setPaymentDetails(details) {
  return {
    type: constants/* SET_CHECKOUT_PAYMENT_DETAILS */.m1,
    payload: details
  };
};
var resetCheckout = function resetCheckout() {
  return {
    type: constants/* RESET_CHECKOUT */.GH
  };
};
// EXTERNAL MODULE: ./src/redux/actions/filterActions.js
var filterActions = __webpack_require__(13266);
;// CONCATENATED MODULE: ./src/redux/actions/miscActions.js

var setLoading = function setLoading() {
  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    type: constants/* LOADING */.br,
    payload: bool
  };
};
var setAuthenticating = function setAuthenticating() {
  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    type: constants/* IS_AUTHENTICATING */.JK,
    payload: bool
  };
};
var setRequestStatus = function setRequestStatus(status) {
  return {
    type: constants/* SET_REQUEST_STATUS */.hh,
    payload: status
  };
};
var setAuthStatus = function setAuthStatus() {
  var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    type: constants/* SET_AUTH_STATUS */.jI,
    payload: status
  };
};
;// CONCATENATED MODULE: ./src/redux/actions/profileActions.js

var clearProfile = function clearProfile() {
  return {
    type: constants/* CLEAR_PROFILE */.tW
  };
};
var setProfile = function setProfile(user) {
  return {
    type: constants/* SET_PROFILE */.Kh,
    payload: user
  };
};
var updateEmail = function updateEmail(password, newEmail) {
  return {
    type: UPDATE_EMAIL,
    payload: {
      password: password,
      newEmail: newEmail
    }
  };
};
var updateProfile = function updateProfile(newProfile) {
  return {
    type: constants/* UPDATE_PROFILE */.r0,
    payload: {
      updates: newProfile.updates,
      files: newProfile.files,
      credentials: newProfile.credentials
    }
  };
};
var updateProfileSuccess = function updateProfileSuccess(updates) {
  return {
    type: constants/* UPDATE_PROFILE_SUCCESS */.z9,
    payload: updates
  };
};
// EXTERNAL MODULE: ./src/components/basket/index.js + 3 modules
var components_basket = __webpack_require__(42563);
// EXTERNAL MODULE: ./node_modules/history/esm/history.js + 2 modules
var esm_history = __webpack_require__(90071);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(7085);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EditOutlined.js + 1 modules
var EditOutlined = __webpack_require__(8212);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(41054);
// EXTERNAL MODULE: ./src/hooks/index.js + 9 modules
var hooks = __webpack_require__(56311);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 20 modules
var react_redux_es = __webpack_require__(28216);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 25 modules
var yup_es = __webpack_require__(19501);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__(79508);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(54549);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./src/views/account/edit_account/ConfirmModal.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || ConfirmModal_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ConfirmModal_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ConfirmModal_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ConfirmModal_arrayLikeToArray(o, minLen); }

function ConfirmModal_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ConfirmModal = function ConfirmModal(_ref) {
  var onConfirmUpdate = _ref.onConfirmUpdate,
      modal = _ref.modal;

  var _useState = (0,react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useFormikContext = (0,formik_esm/* useFormikContext */.u6)(),
      values = _useFormikContext.values;

  return /*#__PURE__*/react.createElement(common/* Modal */.u_, {
    isOpen: modal.isOpenModal,
    onRequestClose: modal.onCloseModal
  }, /*#__PURE__*/react.createElement("div", {
    className: "text-center padding-l"
  }, /*#__PURE__*/react.createElement("h4", null, "Confirm Update"), /*#__PURE__*/react.createElement("p", null, "To continue updating profile including your \xA0", /*#__PURE__*/react.createElement("strong", null, "email"), ",", /*#__PURE__*/react.createElement("br", null), "please confirm by entering your password"), /*#__PURE__*/react.createElement("input", {
    className: "input-form d-block",
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    placeholder: "Enter your password",
    required: true,
    type: "password",
    value: password
  })), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    className: "d-flex-center"
  }, /*#__PURE__*/react.createElement("button", {
    className: "button",
    onClick: function onClick() {
      onConfirmUpdate(values, password);
      modal.onCloseModal();
    },
    type: "button"
  }, /*#__PURE__*/react.createElement(CheckOutlined/* default */.Z, null), "\xA0 Confirm")), /*#__PURE__*/react.createElement("button", {
    className: "modal-close-button button button-border button-border-gray button-small",
    onClick: modal.onCloseModal,
    type: "button"
  }, /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null)));
};

ConfirmModal.propTypes = {
  onConfirmUpdate: (prop_types_default()).func.isRequired,
  modal: prop_types_default().shape({
    onCloseModal: (prop_types_default()).func,
    isOpenModal: (prop_types_default()).bool
  }).isRequired
};
/* harmony default export */ const edit_account_ConfirmModal = (ConfirmModal);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowLeftOutlined.js + 1 modules
var ArrowLeftOutlined = __webpack_require__(6700);
// EXTERNAL MODULE: ./src/components/formik/index.js + 5 modules
var formik = __webpack_require__(79895);
;// CONCATENATED MODULE: ./src/views/account/edit_account/EditForm.jsx








var EditForm = function EditForm(_ref) {
  var isLoading = _ref.isLoading,
      authProvider = _ref.authProvider;
  var history = (0,react_router/* useHistory */.k6)();

  var _useFormikContext = (0,formik_esm/* useFormikContext */.u6)(),
      values = _useFormikContext.values,
      submitForm = _useFormikContext.submitForm;

  return /*#__PURE__*/react.createElement("div", {
    className: "user-profile-details"
  }, /*#__PURE__*/react.createElement(formik_esm/* Field */.gN, {
    disabled: isLoading,
    name: "fullname",
    type: "text",
    label: "* Full Name",
    placeholder: "Enter your full name",
    component: formik/* CustomInput */.t7,
    style: {
      textTransform: 'capitalize'
    }
  }), /*#__PURE__*/react.createElement(formik_esm/* Field */.gN, {
    disabled: authProvider !== 'password' || isLoading,
    name: "email",
    type: "email",
    label: "* Email Address",
    placeholder: "test@example.com",
    component: formik/* CustomInput */.t7
  }), /*#__PURE__*/react.createElement(formik_esm/* Field */.gN, {
    disabled: isLoading,
    name: "address",
    type: "text",
    label: "Address (Will be used for checkout)",
    placeholder: "#245 Brgy. Maligalig, Arayat Pampanga, Philippines",
    component: formik/* CustomInput */.t7,
    style: {
      textTransform: 'capitalize'
    }
  }), /*#__PURE__*/react.createElement(formik/* CustomMobileInput */.Dp, {
    defaultValue: values.mobile,
    name: "mobile",
    disabled: isLoading,
    label: "Mobile Number (Will be used for checkout)"
  }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    className: "edit-user-action"
  }, /*#__PURE__*/react.createElement("button", {
    className: "button button-muted w-100-mobile",
    disabled: isLoading,
    onClick: function onClick() {
      return history.push(routes/* ACCOUNT */.yV);
    },
    type: "button"
  }, /*#__PURE__*/react.createElement(ArrowLeftOutlined/* default */.Z, null), "\xA0 Back to Profile"), /*#__PURE__*/react.createElement("button", {
    className: "button w-100-mobile",
    disabled: isLoading,
    onClick: submitForm,
    type: "button"
  }, isLoading ? /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null) : /*#__PURE__*/react.createElement(CheckOutlined/* default */.Z, null), "\xA0", isLoading ? 'Updating Profile' : 'Update Profile')));
};

EditForm.propTypes = {
  isLoading: (prop_types_default()).bool.isRequired,
  authProvider: (prop_types_default()).string.isRequired
};
/* harmony default export */ const edit_account_EditForm = (EditForm);
;// CONCATENATED MODULE: ./src/views/account/edit_account/index.jsx











var FormSchema = yup_es/* object */.Ry().shape({
  fullname: yup_es/* string */.Z_().min(4, 'Full name should be at least 4 characters.').max(60, 'Full name should be only be 4 characters long.').required('Full name is required'),
  email: yup_es/* string */.Z_().email('Email is not valid.').required('Email is required.'),
  address: yup_es/* string */.Z_(),
  mobile: yup_es/* object */.Ry().shape({
    country: yup_es/* string */.Z_(),
    countryCode: yup_es/* string */.Z_(),
    dialCode: yup_es/* string */.Z_(),
    value: yup_es/* string */.Z_()
  })
});

var EditProfile = function EditProfile() {
  (0,hooks/* useDocumentTitle */.jr)('Edit Account | Salinaka');
  (0,hooks/* useScrollTop */.j)();
  var modal = (0,hooks/* useModal */.dd)();
  var dispatch = (0,react_redux_es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    return function () {
      dispatch(setLoading(false));
    };
  }, []);

  var _useSelector = (0,react_redux_es/* useSelector */.v9)(function (state) {
    return {
      profile: state.profile,
      auth: state.auth,
      isLoading: state.app.loading
    };
  }),
      profile = _useSelector.profile,
      auth = _useSelector.auth,
      isLoading = _useSelector.isLoading;

  var initFormikValues = {
    fullname: profile.fullname || '',
    email: profile.email || '',
    address: profile.address || '',
    mobile: profile.mobile || {}
  };

  var _useFileHandler = (0,hooks/* useFileHandler */.bE)({
    avatar: {},
    banner: {}
  }),
      imageFile = _useFileHandler.imageFile,
      isFileLoading = _useFileHandler.isFileLoading,
      onFileChange = _useFileHandler.onFileChange;

  var update = function update(form) {
    var credentials = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    dispatch(updateProfile({
      updates: {
        fullname: form.fullname,
        email: form.email,
        address: form.address,
        mobile: form.mobile,
        avatar: profile.avatar,
        banner: profile.banner
      },
      files: {
        bannerFile: imageFile.banner.file,
        avatarFile: imageFile.avatar.file
      },
      credentials: credentials
    }));
  };

  var onConfirmUpdate = function onConfirmUpdate(form, password) {
    if (password) {
      update(form, {
        email: form.email,
        password: password
      });
    }
  };

  var onSubmitUpdate = function onSubmitUpdate(form) {
    // check if data has changed
    var fieldsChanged = Object.keys(form).some(function (key) {
      return profile[key] !== form[key];
    });

    if (fieldsChanged || Boolean(imageFile.banner.file || imageFile.avatar.file)) {
      if (form.email !== profile.email) {
        modal.onOpenModal();
      } else {
        update(form);
      }
    }
  };

  return /*#__PURE__*/react.createElement(common/* Boundary */.EW, null, /*#__PURE__*/react.createElement("div", {
    className: "edit-user"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "text-center"
  }, "Edit Account Details"), /*#__PURE__*/react.createElement(formik_esm/* Formik */.J9, {
    initialValues: initFormikValues,
    validateOnChange: true,
    validationSchema: FormSchema,
    onSubmit: onSubmitUpdate
  }, function () {
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
      className: "user-profile-banner"
    }, /*#__PURE__*/react.createElement("div", {
      className: "user-profile-banner-wrapper"
    }, /*#__PURE__*/react.createElement(common/* ImageLoader */.S3, {
      alt: "Banner",
      className: "user-profile-banner-img",
      src: imageFile.banner.url || profile.banner
    }), isFileLoading ? /*#__PURE__*/react.createElement("div", {
      className: "loading-wrapper"
    }, /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null)) : /*#__PURE__*/react.createElement("label", {
      className: "edit-button edit-banner-button",
      htmlFor: "edit-banner"
    }, /*#__PURE__*/react.createElement("input", {
      accept: "image/x-png,image/jpeg",
      disabled: isLoading,
      hidden: true,
      id: "edit-banner",
      onChange: function onChange(e) {
        return onFileChange(e, {
          name: 'banner',
          type: 'single'
        });
      },
      type: "file"
    }), /*#__PURE__*/react.createElement(EditOutlined/* default */.Z, null))), /*#__PURE__*/react.createElement("div", {
      className: "user-profile-avatar-wrapper"
    }, /*#__PURE__*/react.createElement(common/* ImageLoader */.S3, {
      alt: "Avatar",
      className: "user-profile-img",
      src: imageFile.avatar.url || profile.avatar
    }), isFileLoading ? /*#__PURE__*/react.createElement("div", {
      className: "loading-wrapper"
    }, /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null)) : /*#__PURE__*/react.createElement("label", {
      className: "edit-button edit-avatar-button",
      htmlFor: "edit-avatar"
    }, /*#__PURE__*/react.createElement("input", {
      accept: "image/x-png,image/jpeg",
      disabled: isLoading,
      hidden: true,
      id: "edit-avatar",
      onChange: function onChange(e) {
        return onFileChange(e, {
          name: 'avatar',
          type: 'single'
        });
      },
      type: "file"
    }), /*#__PURE__*/react.createElement(EditOutlined/* default */.Z, null)))), /*#__PURE__*/react.createElement(edit_account_EditForm, {
      authProvider: auth.provider,
      isLoading: isLoading
    }), /*#__PURE__*/react.createElement(edit_account_ConfirmModal, {
      onConfirmUpdate: onConfirmUpdate,
      modal: modal
    }));
  })));
};

/* harmony default export */ const edit_account = (EditProfile);
;// CONCATENATED MODULE: ./src/views/account/components/UserTab.jsx
function UserTab_slicedToArray(arr, i) { return UserTab_arrayWithHoles(arr) || UserTab_iterableToArrayLimit(arr, i) || UserTab_unsupportedIterableToArray(arr, i) || UserTab_nonIterableRest(); }

function UserTab_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function UserTab_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return UserTab_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UserTab_arrayLikeToArray(o, minLen); }

function UserTab_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function UserTab_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function UserTab_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var UserTab = function UserTab(props) {
  var children = props.children;

  var _useState = (0,react.useState)(children[0].props.index || 0),
      _useState2 = UserTab_slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var onClickTabItem = function onClickTabItem(index) {
    return setActiveTab(index);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "user-tab"
  }, /*#__PURE__*/react.createElement("div", {
    className: "user-tab-nav"
  }, /*#__PURE__*/react.createElement("ul", {
    className: "user-tab-menu"
  }, children.map(function (child) {
    return /*#__PURE__*/react.createElement("li", {
      className: "user-tab-item ".concat(child.props.index === activeTab ? 'user-tab-active' : ''),
      key: child.props.label,
      role: "presentation",
      onClick: function onClick() {
        return onClickTabItem(child.props.index);
      }
    }, child.props.label);
  }))), /*#__PURE__*/react.createElement("div", {
    className: "user-tab-content"
  }, children.map(function (child) {
    if (child.props.index !== activeTab) return null;
    return child.props.children;
  })));
};

UserTab.propTypes = {
  children: prop_types_default().oneOfType([prop_types_default().arrayOf((prop_types_default()).node), (prop_types_default()).node]).isRequired
};
/* harmony default export */ const components_UserTab = (UserTab);
;// CONCATENATED MODULE: ./src/views/account/user_account/index.jsx
/* eslint-disable react/no-multi-comp */




var UserAccountTab = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 99).then(__webpack_require__.bind(__webpack_require__, 68099));
});
var UserWishListTab = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 404).then(__webpack_require__.bind(__webpack_require__, 35404));
});
var UserOrdersTab = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 503).then(__webpack_require__.bind(__webpack_require__, 85503));
});

var Loader = function Loader() {
  return /*#__PURE__*/react.createElement("div", {
    className: "loader",
    style: {
      minHeight: '80vh'
    }
  }, /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null), /*#__PURE__*/react.createElement("h6", null, "Loading ... "));
};

var UserAccount = function UserAccount() {
  (0,hooks/* useScrollTop */.j)();
  (0,hooks/* useDocumentTitle */.jr)('My Account | Salinaka');
  return /*#__PURE__*/react.createElement(components_UserTab, null, /*#__PURE__*/react.createElement("div", {
    index: 0,
    label: "Account"
  }, /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement(Loader, null)
  }, /*#__PURE__*/react.createElement(UserAccountTab, null))), /*#__PURE__*/react.createElement("div", {
    index: 1,
    label: "My Wish List"
  }, /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement(Loader, null)
  }, /*#__PURE__*/react.createElement(UserWishListTab, null))), /*#__PURE__*/react.createElement("div", {
    index: 2,
    label: "My Orders"
  }, /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement(Loader, null)
  }, /*#__PURE__*/react.createElement(UserOrdersTab, null))));
};

/* harmony default export */ const user_account = (UserAccount);
;// CONCATENATED MODULE: ./src/redux/actions/productActions.js

var getProducts = function getProducts(lastRef) {
  return {
    type: constants/* GET_PRODUCTS */.tT,
    payload: lastRef
  };
};
var getProductsSuccess = function getProductsSuccess(products) {
  return {
    type: constants/* GET_PRODUCTS_SUCCESS */.jp,
    payload: products
  };
};
var cancelGetProducts = function cancelGetProducts() {
  return {
    type: CANCEL_GET_PRODUCTS
  };
};
var addProduct = function addProduct(product) {
  return {
    type: constants/* ADD_PRODUCT */.zN,
    payload: product
  };
};
var searchProduct = function searchProduct(searchKey) {
  return {
    type: constants/* SEARCH_PRODUCT */.F,
    payload: {
      searchKey: searchKey
    }
  };
};
var searchProductSuccess = function searchProductSuccess(products) {
  return {
    type: constants/* SEARCH_PRODUCT_SUCCESS */.I3,
    payload: products
  };
};
var clearSearchState = function clearSearchState() {
  return {
    type: constants/* CLEAR_SEARCH_STATE */.zY
  };
};
var addProductSuccess = function addProductSuccess(product) {
  return {
    type: constants/* ADD_PRODUCT_SUCCESS */.s$,
    payload: product
  };
};
var removeProduct = function removeProduct(id) {
  return {
    type: constants/* REMOVE_PRODUCT */.eI,
    payload: id
  };
};
var removeProductSuccess = function removeProductSuccess(id) {
  return {
    type: constants/* REMOVE_PRODUCT_SUCCESS */.C4,
    payload: id
  };
};
var editProduct = function editProduct(id, updates) {
  return {
    type: constants/* EDIT_PRODUCT */.U4,
    payload: {
      id: id,
      updates: updates
    }
  };
};
var editProductSuccess = function editProductSuccess(updates) {
  return {
    type: constants/* EDIT_PRODUCT_SUCCESS */.Ys,
    payload: updates
  };
};
;// CONCATENATED MODULE: ./src/views/admin/add_product/index.jsx






var ProductForm = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 43585));
});

var AddProduct = function AddProduct() {
  (0,hooks/* useScrollTop */.j)();
  (0,hooks/* useDocumentTitle */.jr)('Add New Product | Salinaka');
  var isLoading = (0,react_redux_es/* useSelector */.v9)(function (state) {
    return state.app.loading;
  });
  var dispatch = (0,react_redux_es/* useDispatch */.I0)();

  var onSubmit = function onSubmit(product) {
    dispatch(addProduct(product));
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "product-form-container"
  }, /*#__PURE__*/react.createElement("h2", null, "Add New Product1"), /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement("div", {
      className: "loader",
      style: {
        minHeight: '80vh'
      }
    }, /*#__PURE__*/react.createElement("h6", null, "Loading ... "), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null))
  }, /*#__PURE__*/react.createElement(ProductForm, {
    isLoading: isLoading,
    onSubmit: onSubmit,
    product: {
      name: '',
      brand: '',
      price: 0,
      maxQuantity: 0,
      description: '',
      keywords: [],
      sizes: [],
      image: '',
      isFeatured: false,
      isRecommended: false,
      availableColors: [],
      imageCollection: []
    }
  })));
};

/* harmony default export */ const add_product = ((0,react_router/* withRouter */.EN)(AddProduct));
;// CONCATENATED MODULE: ./src/views/admin/dashboard/index.jsx



var Dashboard = function Dashboard() {
  (0,hooks/* useDocumentTitle */.jr)('Welcome | Admin Dashboard');
  (0,hooks/* useScrollTop */.j)();
  return /*#__PURE__*/react.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react.createElement("h2", null, "Welcome to admin dashboard"));
};

/* harmony default export */ const dashboard = (Dashboard);
;// CONCATENATED MODULE: ./src/views/admin/edit_product/index.jsx







var edit_product_ProductForm = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 43585));
});

var EditProduct = function EditProduct(_ref) {
  var match = _ref.match;
  (0,hooks/* useDocumentTitle */.jr)('Edit Product | Salinaka');
  (0,hooks/* useScrollTop */.j)();

  var _useProduct = (0,hooks/* useProduct */.iB)(match.params.id),
      product = _useProduct.product,
      error = _useProduct.error,
      isLoading = _useProduct.isLoading;

  var dispatch = (0,react_redux_es/* useDispatch */.I0)();

  var onSubmitForm = function onSubmitForm(updates) {
    dispatch(editProduct(product.id, updates));
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "product-form-container"
  }, error && /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
    to: "/dashboard/products"
  }), /*#__PURE__*/react.createElement("h2", null, "Edit Product"), product && /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement("div", {
      className: "loader",
      style: {
        minHeight: '80vh'
      }
    }, /*#__PURE__*/react.createElement("h6", null, "Loading ... "), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null))
  }, /*#__PURE__*/react.createElement(edit_product_ProductForm, {
    isLoading: isLoading,
    onSubmit: onSubmitForm,
    product: product
  })));
};

EditProduct.propTypes = {
  match: prop_types_default().shape({
    params: prop_types_default().shape({
      id: (prop_types_default()).string
    })
  }).isRequired
};
/* harmony default export */ const edit_product = ((0,react_router/* withRouter */.EN)(EditProduct));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js + 1 modules
var CloseCircleOutlined = __webpack_require__(73218);
;// CONCATENATED MODULE: ./src/components/product/ProductAppliedFilters.jsx
/* eslint-disable no-nested-ternary */






var ProductAppliedFilters = function ProductAppliedFilters(_ref) {
  var filteredProductsCount = _ref.filteredProductsCount;
  var filter = (0,react_redux_es/* useSelector */.v9)(function (state) {
    return state.filter;
  }, react_redux_es/* shallowEqual */.wU);
  var fields = ['brand', 'minPrice', 'maxPrice', 'sortBy', 'keyword'];
  var isFiltered = fields.some(function (key) {
    return !!filter[key];
  });
  var dispatch = (0,react_redux_es/* useDispatch */.I0)();

  var onRemoveKeywordFilter = function onRemoveKeywordFilter() {
    dispatch((0,filterActions/* applyFilter */.Rb)({
      keyword: ''
    }));
  };

  var onRemovePriceRangeFilter = function onRemovePriceRangeFilter() {
    dispatch((0,filterActions/* applyFilter */.Rb)({
      minPrice: 0,
      maxPrice: 0
    }));
  };

  var onRemoveBrandFilter = function onRemoveBrandFilter() {
    dispatch((0,filterActions/* applyFilter */.Rb)({
      brand: ''
    }));
  };

  var onRemoveSortFilter = function onRemoveSortFilter() {
    dispatch((0,filterActions/* applyFilter */.Rb)({
      sortBy: ''
    }));
  };

  return !isFiltered ? null : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "product-list-header"
  }, /*#__PURE__*/react.createElement("div", {
    className: "product-list-header-title"
  }, /*#__PURE__*/react.createElement("h5", null, filteredProductsCount > 0 && "Found ".concat(filteredProductsCount, " ").concat(filteredProductsCount > 1 ? 'products' : 'product')))), /*#__PURE__*/react.createElement("div", {
    className: "product-applied-filters"
  }, filter.keyword && /*#__PURE__*/react.createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/react.createElement("span", {
    className: "d-block"
  }, "Keyword"), /*#__PURE__*/react.createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/react.createElement("h5", {
    className: "pill-content margin-0"
  }, filter.keyword), /*#__PURE__*/react.createElement("div", {
    className: "pill-remove",
    onClick: onRemoveKeywordFilter,
    role: "presentation"
  }, /*#__PURE__*/react.createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/react.createElement(CloseCircleOutlined/* default */.Z, null))))), filter.brand && /*#__PURE__*/react.createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/react.createElement("span", {
    className: "d-block"
  }, "Brand"), /*#__PURE__*/react.createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/react.createElement("h5", {
    className: "pill-content margin-0"
  }, filter.brand), /*#__PURE__*/react.createElement("div", {
    className: "pill-remove",
    onClick: onRemoveBrandFilter,
    role: "presentation"
  }, /*#__PURE__*/react.createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/react.createElement(CloseCircleOutlined/* default */.Z, null))))), (!!filter.minPrice || !!filter.maxPrice) && /*#__PURE__*/react.createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/react.createElement("span", {
    className: "d-block"
  }, "Price Range"), /*#__PURE__*/react.createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/react.createElement("h5", {
    className: "pill-content margin-0"
  }, "$", filter.minPrice, "- $", filter.maxPrice), /*#__PURE__*/react.createElement("div", {
    className: "pill-remove",
    onClick: onRemovePriceRangeFilter,
    role: "presentation"
  }, /*#__PURE__*/react.createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/react.createElement(CloseCircleOutlined/* default */.Z, null))))), filter.sortBy && /*#__PURE__*/react.createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/react.createElement("span", {
    className: "d-block"
  }, "Sort By"), /*#__PURE__*/react.createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/react.createElement("h5", {
    className: "pill-content margin-0"
  }, filter.sortBy === 'price-desc' ? 'Price High - Low' : filter.sortBy === 'price-asc' ? 'Price Low - High' : filter.sortBy === 'name-desc' ? 'Name Z - A' : 'Name A - Z'), /*#__PURE__*/react.createElement("div", {
    className: "pill-remove",
    onClick: onRemoveSortFilter,
    role: "presentation"
  }, /*#__PURE__*/react.createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/react.createElement(CloseCircleOutlined/* default */.Z, null)))))));
};

ProductAppliedFilters.defaultProps = {
  filteredProductsCount: 0
};
ProductAppliedFilters.propTypes = {
  filteredProductsCount: (prop_types_default()).number
};
/* harmony default export */ const product_ProductAppliedFilters = (ProductAppliedFilters);
// EXTERNAL MODULE: ./node_modules/react-loading-skeleton/lib/index.js
var lib = __webpack_require__(51655);
;// CONCATENATED MODULE: ./src/components/product/ProductFeatured.jsx






var ProductFeatured = function ProductFeatured(_ref) {
  var product = _ref.product;
  var history = (0,react_router/* useHistory */.k6)();

  var onClickItem = function onClickItem() {
    if (!product) return;
    history.push("/product/".concat(product.id));
  };

  return /*#__PURE__*/react.createElement(lib/* SkeletonTheme */.yB, {
    color: "#e1e1e1",
    highlightColor: "#f2f2f2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "product-display",
    onClick: onClickItem,
    role: "presentation"
  }, /*#__PURE__*/react.createElement("div", {
    className: "product-display-img"
  }, product.image ? /*#__PURE__*/react.createElement(common/* ImageLoader */.S3, {
    className: "product-card-img",
    src: product.image
  }) : /*#__PURE__*/react.createElement(lib/* default */.ZP, {
    width: "100%",
    height: "100%"
  })), /*#__PURE__*/react.createElement("div", {
    className: "product-display-details"
  }, /*#__PURE__*/react.createElement("h2", null, product.name || /*#__PURE__*/react.createElement(lib/* default */.ZP, {
    width: 80
  })), /*#__PURE__*/react.createElement("p", {
    className: "text-subtle text-italic"
  }, product.brand || /*#__PURE__*/react.createElement(lib/* default */.ZP, {
    width: 40
  })))));
};

ProductFeatured.propTypes = {
  product: prop_types_default().shape({
    image: (prop_types_default()).string,
    name: (prop_types_default()).string,
    id: (prop_types_default()).string,
    brand: (prop_types_default()).string
  }).isRequired
};
/* harmony default export */ const product_ProductFeatured = (ProductFeatured);
// EXTERNAL MODULE: ./src/helpers/utils.js
var utils = __webpack_require__(89722);
;// CONCATENATED MODULE: ./src/components/product/ProductItem.jsx
function ProductItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ProductItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ProductItem_ownKeys(Object(source), !0).forEach(function (key) { ProductItem_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ProductItem_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function ProductItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var ProductItem = function ProductItem(_ref) {
  var product = _ref.product,
      isItemOnBasket = _ref.isItemOnBasket,
      addToBasket = _ref.addToBasket;
  var history = (0,react_router/* useHistory */.k6)();

  var onClickItem = function onClickItem() {
    if (!product) return;

    if (product.id) {
      history.push("/product/".concat(product.id));
    }
  };

  var itemOnBasket = isItemOnBasket ? isItemOnBasket(product.id) : false;

  var handleAddToBasket = function handleAddToBasket() {
    if (addToBasket) addToBasket(ProductItem_objectSpread(ProductItem_objectSpread({}, product), {}, {
      selectedSize: product.sizes[0]
    }));
  };

  return /*#__PURE__*/react.createElement(lib/* SkeletonTheme */.yB, {
    color: "#e1e1e1",
    highlightColor: "#f2f2f2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "product-card ".concat(!product.id ? 'product-loading' : ''),
    style: {
      border: product && itemOnBasket ? '1px solid #a6a5a5' : '',
      boxShadow: product && itemOnBasket ? '0 10px 15px rgba(0, 0, 0, .07)' : 'none'
    }
  }, itemOnBasket && /*#__PURE__*/react.createElement(CheckOutlined/* default */.Z, {
    className: "fa fa-check product-card-check"
  }), /*#__PURE__*/react.createElement("div", {
    className: "product-card-content",
    onClick: onClickItem,
    role: "presentation"
  }, /*#__PURE__*/react.createElement("div", {
    className: "product-card-img-wrapper"
  }, product.image ? /*#__PURE__*/react.createElement(common/* ImageLoader */.S3, {
    alt: product.name,
    className: "product-card-img",
    src: product.image
  }) : /*#__PURE__*/react.createElement(lib/* default */.ZP, {
    width: "100%",
    height: "90%"
  })), /*#__PURE__*/react.createElement("div", {
    className: "product-details"
  }, /*#__PURE__*/react.createElement("h5", {
    className: "product-card-name text-overflow-ellipsis margin-auto"
  }, product.name || /*#__PURE__*/react.createElement(lib/* default */.ZP, {
    width: 80
  })), /*#__PURE__*/react.createElement("p", {
    className: "product-card-brand"
  }, product.brand || /*#__PURE__*/react.createElement(lib/* default */.ZP, {
    width: 60
  })), /*#__PURE__*/react.createElement("h4", {
    className: "product-card-price"
  }, product.price ? (0,utils/* displayMoney */.ik)(product.price) : /*#__PURE__*/react.createElement(lib/* default */.ZP, {
    width: 40
  })))), product.id && /*#__PURE__*/react.createElement("button", {
    className: "product-card-button button-small button button-block ".concat(itemOnBasket ? 'button-border button-border-gray' : ''),
    onClick: handleAddToBasket,
    type: "button"
  }, itemOnBasket ? 'Remove from basket' : 'Add to basket')));
};

ProductItem.defaultProps = {
  isItemOnBasket: undefined,
  addToBasket: undefined
};
ProductItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  product: (prop_types_default()).object.isRequired,
  isItemOnBasket: (prop_types_default()).func,
  addToBasket: (prop_types_default()).func
};
/* harmony default export */ const product_ProductItem = (ProductItem);
;// CONCATENATED MODULE: ./src/components/product/ProductGrid.jsx





var ProductGrid = function ProductGrid(_ref) {
  var products = _ref.products;

  var _useBasket = (0,hooks/* useBasket */.Kc)(),
      addToBasket = _useBasket.addToBasket,
      isItemOnBasket = _useBasket.isItemOnBasket;

  return /*#__PURE__*/react.createElement("div", {
    className: "product-grid"
  }, products.length === 0 ? new Array(12).fill({}).map(function (product, index) {
    return /*#__PURE__*/react.createElement(product_ProductItem // eslint-disable-next-line react/no-array-index-key
    , {
      key: "product-skeleton ".concat(index),
      product: product
    });
  }) : products.map(function (product) {
    return /*#__PURE__*/react.createElement(product_ProductItem, {
      key: product.id,
      isItemOnBasket: isItemOnBasket,
      addToBasket: addToBasket,
      product: product
    });
  }));
};

ProductGrid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: (prop_types_default()).array.isRequired
};
/* harmony default export */ const product_ProductGrid = (ProductGrid);
;// CONCATENATED MODULE: ./src/components/product/ProductList.jsx
function ProductList_slicedToArray(arr, i) { return ProductList_arrayWithHoles(arr) || ProductList_iterableToArrayLimit(arr, i) || ProductList_unsupportedIterableToArray(arr, i) || ProductList_nonIterableRest(); }

function ProductList_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ProductList_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ProductList_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ProductList_arrayLikeToArray(o, minLen); }

function ProductList_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ProductList_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ProductList_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable react/forbid-prop-types */







var ProductList = function ProductList(props) {
  var products = props.products,
      filteredProducts = props.filteredProducts,
      isLoading = props.isLoading,
      requestStatus = props.requestStatus,
      children = props.children;

  var _useState = (0,react.useState)(false),
      _useState2 = ProductList_slicedToArray(_useState, 2),
      isFetching = _useState2[0],
      setFetching = _useState2[1];

  var dispatch = (0,react_redux_es/* useDispatch */.I0)();

  var fetchProducts = function fetchProducts() {
    setFetching(true);
    dispatch(getProducts(products.lastRefKey));
  };

  (0,react.useEffect)(function () {
    if (products.items.length === 0 || !products.lastRefKey) {
      fetchProducts();
    }

    window.scrollTo(0, 0);
    return function () {
      return dispatch(setLoading(false));
    };
  }, []);
  (0,react.useEffect)(function () {
    setFetching(false);
  }, [products.lastRefKey]);

  if (filteredProducts.length === 0 && !isLoading) {
    return /*#__PURE__*/react.createElement(common/* MessageDisplay */.t0, {
      message: (requestStatus === null || requestStatus === void 0 ? void 0 : requestStatus.message) || 'No products found.'
    });
  }

  if (filteredProducts.length === 0 && requestStatus) {
    return /*#__PURE__*/react.createElement(common/* MessageDisplay */.t0, {
      message: (requestStatus === null || requestStatus === void 0 ? void 0 : requestStatus.message) || 'Something went wrong :(',
      action: fetchProducts,
      buttonLabel: "Try Again"
    });
  }

  return /*#__PURE__*/react.createElement(common/* Boundary */.EW, null, children, products.items.length < products.total && /*#__PURE__*/react.createElement("div", {
    className: "d-flex-center padding-l"
  }, /*#__PURE__*/react.createElement("button", {
    className: "button button-small",
    disabled: isFetching,
    onClick: fetchProducts,
    type: "button"
  }, isFetching ? 'Fetching Items...' : 'Show More Items')));
};

ProductList.defaultProps = {
  requestStatus: null
};
ProductList.propTypes = {
  products: (prop_types_default()).object.isRequired,
  filteredProducts: (prop_types_default()).array.isRequired,
  isLoading: (prop_types_default()).bool.isRequired,
  requestStatus: (prop_types_default()).string,
  children: prop_types_default().oneOfType([prop_types_default().arrayOf((prop_types_default()).node), (prop_types_default()).node]).isRequired
};
/* harmony default export */ const product_ProductList = (ProductList);
;// CONCATENATED MODULE: ./src/components/product/ProductSearch.jsx






var ProductSearch = function ProductSearch() {
  var history = useHistory();

  var _useSelector = useSelector(function (state) {
    return {
      filter: state.filter,
      products: state.products.items,
      isLoading: state.app.loading,
      productsLength: state.products.length
    };
  }),
      productsLength = _useSelector.productsLength,
      filter = _useSelector.filter,
      products = _useSelector.products,
      isLoading = _useSelector.isLoading;

  var dispatch = useDispatch();
  var searchInput = useRef(null);
  var input = '';
  useEffect(function () {
    searchInput.current.focus();
  }, []);

  var onSearchChange = function onSearchChange(e) {
    var val = e.target.value.trim();
    input = val;

    if (val === '' && productsLength !== 0) {
      dispatch(setTextFilter(val));
      history.push('/');
    }
  };

  var onKeyUp = function onKeyUp(e) {
    if (e.keyCode === 13 && productsLength !== 0) {
      dispatch(setTextFilter(input));
      history.push('/');
    }
  };

  var onClearRecentSearch = function onClearRecentSearch() {
    dispatch(clearRecentSearch());
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "product-search"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-search-header"
  }, /*#__PURE__*/React.createElement("h3", {
    onClick: history.goBack,
    role: "presentation"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-chevron-left"
  })), /*#__PURE__*/React.createElement("div", {
    className: "product-search-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    className: "product-search-input",
    onChange: onSearchChange,
    onKeyUp: onKeyUp,
    placeholder: "Search for product...",
    ref: searchInput,
    type: "text"
  }), /*#__PURE__*/React.createElement("div", {
    className: "searchbar-icon"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "product-search-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-search-recent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-search-recent-header"
  }, /*#__PURE__*/React.createElement("h5", null, "Recent Searches"), /*#__PURE__*/React.createElement("h5", {
    onClick: onClearRecentSearch,
    style: {
      color: 'red'
    },
    role: "presentation"
  }, "Clear")), filter.recent.map(function (item, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement("div", {
        className: "pill-wrapper",
        key: "".concat(item).concat(index)
      }, /*#__PURE__*/React.createElement("div", {
        className: "pill padding-right-l"
      }, /*#__PURE__*/React.createElement("h5", {
        className: "pill-content margin-0",
        onClick: function onClick() {
          dispatch(setTextFilter(item));
          history.push('/');
        },
        role: "presentation"
      }, item), /*#__PURE__*/React.createElement("div", {
        className: "pill-remove",
        onClick: function onClick() {
          return dispatch(removeSelectedRecent(item));
        },
        role: "presentation"
      }, /*#__PURE__*/React.createElement("h5", {
        className: "text-subtle margin-0"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-times-circle"
      })))))
    );
  }), filter.recent.length === 0 && /*#__PURE__*/React.createElement("h5", {
    className: "text-subtle"
  }, "No recent searches")), /*#__PURE__*/React.createElement("div", {
    className: "product-search-filter"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "margin-0"
  }, "Choose Filters")), /*#__PURE__*/React.createElement("div", {
    className: "product-search-filter-sub"
  }, /*#__PURE__*/React.createElement(Filters, {
    dispatch: dispatch,
    filter: filter,
    isLoading: isLoading,
    products: products,
    productsLength: productsLength
  }))));
};

/* harmony default export */ const product_ProductSearch = ((/* unused pure expression or super */ null && (ProductSearch)));
;// CONCATENATED MODULE: ./src/components/product/ProductShowcaseGrid.jsx
/* eslint-disable react/forbid-prop-types */




var ProductShowcase = function ProductShowcase(_ref) {
  var products = _ref.products,
      skeletonCount = _ref.skeletonCount;
  return /*#__PURE__*/react.createElement("div", {
    className: "product-display-grid"
  }, products.length === 0 ? new Array(skeletonCount).fill({}).map(function (product, index) {
    return /*#__PURE__*/react.createElement(product_ProductFeatured // eslint-disable-next-line react/no-array-index-key
    , {
      key: "product-skeleton ".concat(index),
      product: product
    });
  }) : products.map(function (product) {
    return /*#__PURE__*/react.createElement(product_ProductFeatured, {
      key: product.id,
      product: product
    });
  }));
};

ProductShowcase.defaultProps = {
  skeletonCount: 4
};
ProductShowcase.propTypes = {
  products: (prop_types_default()).array.isRequired,
  skeletonCount: (prop_types_default()).number
};
/* harmony default export */ const ProductShowcaseGrid = (ProductShowcase);
;// CONCATENATED MODULE: ./src/components/product/index.js







// EXTERNAL MODULE: ./src/selectors/selector.js
var selector = __webpack_require__(30874);
// EXTERNAL MODULE: ./src/views/admin/components/ProductForm.jsx
var components_ProductForm = __webpack_require__(43585);
;// CONCATENATED MODULE: ./src/views/admin/components/ProductItem.jsx










var ProductItem_ProductItem = function ProductItem(_ref) {
  var product = _ref.product;
  var dispatch = (0,react_redux_es/* useDispatch */.I0)();
  var history = (0,react_router/* useHistory */.k6)();
  var productRef = (0,react.useRef)(null);

  var onClickEdit = function onClickEdit() {
    history.push("".concat(routes/* EDIT_PRODUCT */.U4, "/").concat(product.id));
  };

  var onDeleteProduct = function onDeleteProduct() {
    productRef.current.classList.toggle('item-active');
  };

  var onConfirmDelete = function onConfirmDelete() {
    dispatch(removeProduct(product.id));
    (0,utils/* displayActionMessage */.aZ)('Item successfully deleted');
    productRef.current.classList.remove('item-active');
  };

  var onCancelDelete = function onCancelDelete() {
    productRef.current.classList.remove('item-active');
  };

  return /*#__PURE__*/react.createElement(lib/* SkeletonTheme */.yB, {
    color: "#e1e1e1",
    highlightColor: "#f2f2f2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "item item-products ".concat(!product.id && 'item-loading'),
    ref: productRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "grid grid-count-6"
  }, /*#__PURE__*/react.createElement("div", {
    className: "grid-col item-img-wrapper"
  }, product.image ? /*#__PURE__*/react.createElement(common/* ImageLoader */.S3, {
    alt: product.name,
    className: "item-img",
    src: product.image
  }) : /*#__PURE__*/react.createElement(lib/* default */.ZP, {
    width: 50,
    height: 30
  })), /*#__PURE__*/react.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-overflow-ellipsis"
  }, product.name || /*#__PURE__*/react.createElement(lib/* default */.ZP, {
    width: 50
  }))), /*#__PURE__*/react.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react.createElement("span", null, product.brand || /*#__PURE__*/react.createElement(lib/* default */.ZP, {
    width: 50
  }))), /*#__PURE__*/react.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react.createElement("span", null, product.price ? (0,utils/* displayMoney */.ik)(product.price) : /*#__PURE__*/react.createElement(lib/* default */.ZP, {
    width: 30
  }))), /*#__PURE__*/react.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react.createElement("span", null, product.dateAdded ? (0,utils/* displayDate */.Po)(product.dateAdded) : /*#__PURE__*/react.createElement(lib/* default */.ZP, {
    width: 30
  }))), /*#__PURE__*/react.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react.createElement("span", null, product.maxQuantity || /*#__PURE__*/react.createElement(lib/* default */.ZP, {
    width: 20
  })))), product.id && /*#__PURE__*/react.createElement("div", {
    className: "item-action"
  }, /*#__PURE__*/react.createElement("button", {
    className: "button button-border button-small",
    onClick: onClickEdit,
    type: "button"
  }, "Edit1"), "\xA0", /*#__PURE__*/react.createElement("button", {
    className: "button button-border button-small button-danger",
    onClick: onDeleteProduct,
    type: "button"
  }, "Delete"), /*#__PURE__*/react.createElement("div", {
    className: "item-action-confirm"
  }, /*#__PURE__*/react.createElement("h5", null, "Are you sure you want to delete this?"), /*#__PURE__*/react.createElement("button", {
    className: "button button-small button-border",
    onClick: onCancelDelete,
    type: "button"
  }, "No"), "\xA0", /*#__PURE__*/react.createElement("button", {
    className: "button button-small button-danger",
    onClick: onConfirmDelete,
    type: "button"
  }, "Yes")))));
};

ProductItem_ProductItem.propTypes = {
  product: prop_types_default().shape({
    id: (prop_types_default()).string,
    name: (prop_types_default()).string,
    brand: (prop_types_default()).string,
    price: (prop_types_default()).number,
    maxQuantity: (prop_types_default()).number,
    description: (prop_types_default()).string,
    keywords: prop_types_default().arrayOf((prop_types_default()).string),
    imageCollection: prop_types_default().arrayOf((prop_types_default()).object),
    sizes: prop_types_default().arrayOf((prop_types_default()).string),
    image: (prop_types_default()).string,
    imageUrl: (prop_types_default()).string,
    isFeatured: (prop_types_default()).bool,
    isRecommended: (prop_types_default()).bool,
    dateAdded: (prop_types_default()).number,
    availableColors: prop_types_default().arrayOf((prop_types_default()).string)
  }).isRequired
};
/* harmony default export */ const components_ProductItem = ((0,react_router/* withRouter */.EN)(ProductItem_ProductItem));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/FilterOutlined.js + 1 modules
var FilterOutlined = __webpack_require__(17405);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js + 1 modules
var PlusOutlined = __webpack_require__(49101);
;// CONCATENATED MODULE: ./src/views/admin/components/ProductsNavbar.jsx







var ProductsNavbar = function ProductsNavbar(props) {
  var productsCount = props.productsCount,
      totalProductsCount = props.totalProductsCount;
  var history = (0,react_router/* useHistory */.k6)();
  return /*#__PURE__*/react.createElement("div", {
    className: "product-admin-header"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "product-admin-header-title"
  }, "Products \xA0 (", "".concat(productsCount, " / ").concat(totalProductsCount), ")"), /*#__PURE__*/react.createElement(common/* SearchBar */.E1, null), "\xA0", /*#__PURE__*/react.createElement(common/* FiltersToggle */.a7, null, /*#__PURE__*/react.createElement("button", {
    className: "button-muted button-small",
    type: "button"
  }, /*#__PURE__*/react.createElement(FilterOutlined/* default */.Z, null), "\xA0More Filters")), /*#__PURE__*/react.createElement("button", {
    className: "button button-small",
    onClick: function onClick() {
      return history.push(routes/* ADD_PRODUCT */.zN);
    },
    type: "button"
  }, /*#__PURE__*/react.createElement(PlusOutlined/* default */.Z, null), "\xA0 Add New Product2"));
};

ProductsNavbar.propTypes = {
  productsCount: (prop_types_default()).number.isRequired,
  totalProductsCount: (prop_types_default()).number.isRequired
};
/* harmony default export */ const components_ProductsNavbar = (ProductsNavbar);
;// CONCATENATED MODULE: ./src/views/admin/components/index.js



;// CONCATENATED MODULE: ./src/views/admin/components/ProductsTable.jsx
/* eslint-disable react/forbid-prop-types */




var ProductsTable = function ProductsTable(_ref) {
  var filteredProducts = _ref.filteredProducts;
  return /*#__PURE__*/react.createElement("div", null, filteredProducts.length > 0 && /*#__PURE__*/react.createElement("div", {
    className: "grid grid-product grid-count-6"
  }, /*#__PURE__*/react.createElement("div", {
    className: "grid-col"
  }), /*#__PURE__*/react.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react.createElement("h5", null, "Name")), /*#__PURE__*/react.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react.createElement("h5", null, "Brand")), /*#__PURE__*/react.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react.createElement("h5", null, "Price")), /*#__PURE__*/react.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react.createElement("h5", null, "Date Added")), /*#__PURE__*/react.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react.createElement("h5", null, "Qty"))), filteredProducts.length === 0 ? new Array(10).fill({}).map(function (product, index) {
    return /*#__PURE__*/react.createElement(components_ProductItem // eslint-disable-next-line react/no-array-index-key
    , {
      key: "product-skeleton ".concat(index),
      product: product
    });
  }) : filteredProducts.map(function (product) {
    return /*#__PURE__*/react.createElement(components_ProductItem, {
      key: product.id,
      product: product
    });
  }));
};

ProductsTable.propTypes = {
  filteredProducts: (prop_types_default()).array.isRequired
};
/* harmony default export */ const components_ProductsTable = (ProductsTable);
;// CONCATENATED MODULE: ./src/views/admin/products/index.jsx
/* eslint-disable react/jsx-props-no-spreading */










var Products = function Products() {
  (0,hooks/* useDocumentTitle */.jr)('Product List | Salinaka Admin');
  (0,hooks/* useScrollTop */.j)();
  var store = (0,react_redux_es/* useSelector */.v9)(function (state) {
    return {
      filteredProducts: (0,selector/* selectFilter */.AD)(state.products.items, state.filter),
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading,
      products: state.products
    };
  });
  return /*#__PURE__*/react.createElement(common/* Boundary */.EW, null, /*#__PURE__*/react.createElement(components_ProductsNavbar, {
    productsCount: store.products.items.length,
    totalProductsCount: store.products.total
  }), /*#__PURE__*/react.createElement("div", {
    className: "product-admin-items"
  }, /*#__PURE__*/react.createElement(product_ProductList, store, /*#__PURE__*/react.createElement(product_ProductAppliedFilters, {
    filter: store.filter
  }), /*#__PURE__*/react.createElement(components_ProductsTable, {
    filteredProducts: store.filteredProducts
  }))));
};

/* harmony default export */ const products = ((0,react_router/* withRouter */.EN)(Products));
;// CONCATENATED MODULE: ./src/views/auth/forgot_password/index.jsx
function forgot_password_slicedToArray(arr, i) { return forgot_password_arrayWithHoles(arr) || forgot_password_iterableToArrayLimit(arr, i) || forgot_password_unsupportedIterableToArray(arr, i) || forgot_password_nonIterableRest(); }

function forgot_password_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function forgot_password_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return forgot_password_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return forgot_password_arrayLikeToArray(o, minLen); }

function forgot_password_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function forgot_password_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function forgot_password_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ForgotPassword = function ForgotPassword() {
  var _useSelector = (0,react_redux_es/* useSelector */.v9)(function (state) {
    return {
      isAuthenticating: state.app.isAuthenticating,
      authStatus: state.app.authStatus
    };
  }),
      authStatus = _useSelector.authStatus,
      isAuthenticating = _useSelector.isAuthenticating;

  var dispatch = (0,react_redux_es/* useDispatch */.I0)();
  var didMount = (0,hooks/* useDidMount */.Hd)();

  var _useState = (0,react.useState)({}),
      _useState2 = forgot_password_slicedToArray(_useState, 2),
      forgotPWStatus = _useState2[0],
      setForgotPWStatus = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = forgot_password_slicedToArray(_useState3, 2),
      isSendingForgotPWRequest = _useState4[0],
      setIsSending = _useState4[1];

  var _useState5 = (0,react.useState)({}),
      _useState6 = forgot_password_slicedToArray(_useState5, 2),
      field = _useState6[0],
      setField = _useState6[1];

  (0,hooks/* useScrollTop */.j)();
  (0,hooks/* useDocumentTitle */.jr)('Forgot Password | Salinaka');
  (0,react.useEffect)(function () {
    if (didMount) {
      setForgotPWStatus(authStatus);
      setIsSending(isAuthenticating);
    }
  }, [authStatus, isAuthenticating]);

  var onEmailChange = function onEmailChange(value, error) {
    setField({
      email: value,
      error: error
    });
  };

  var onSubmitEmail = function onSubmitEmail() {
    if (!!field.email && !field.error) {
      dispatch((0,authActions/* resetPassword */.c0)(field.email));
    }
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "forgot_password"
  }, forgotPWStatus.message && /*#__PURE__*/react.createElement("h5", {
    className: "text-center ".concat(authStatus !== null && authStatus !== void 0 && authStatus.success ? 'toast-success' : 'toast-error')
  }, authStatus.message), /*#__PURE__*/react.createElement("h3", null, "Forgot Your Password?"), /*#__PURE__*/react.createElement("p", null, "Enter your email address and we will send you a password reset email."), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("input", {
    field: "email",
    required: true,
    className: "input-form",
    label: "* Email",
    maxLength: 40,
    onChange: onEmailChange,
    placeholder: "Enter your email",
    readOnly: isSendingForgotPWRequest || (authStatus === null || authStatus === void 0 ? void 0 : authStatus.success),
    type: "email",
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("button", {
    className: "button w-100-mobile",
    disabled: isSendingForgotPWRequest || (authStatus === null || authStatus === void 0 ? void 0 : authStatus.success),
    onClick: onSubmitEmail,
    type: "button"
  }, isSendingForgotPWRequest ? /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null) : /*#__PURE__*/react.createElement(CheckOutlined/* default */.Z, null), "\xA0", isSendingForgotPWRequest ? 'Sending Password Reset Email' : 'Send Password Reset Email'));
};

/* harmony default export */ const forgot_password = (ForgotPassword);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowRightOutlined.js + 1 modules
var ArrowRightOutlined = __webpack_require__(93488);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
;// CONCATENATED MODULE: ./src/views/auth/signin/index.jsx













var SignInSchema = yup_es/* object */.Ry().shape({
  email: yup_es/* string */.Z_().email('Email is not valid.').required('Email is required.'),
  password: yup_es/* string */.Z_().required('Password is required.')
});

var SignIn = function SignIn(_ref) {
  var history = _ref.history;

  var _useSelector = (0,react_redux_es/* useSelector */.v9)(function (state) {
    return {
      authStatus: state.app.authStatus,
      isAuthenticating: state.app.isAuthenticating
    };
  }),
      authStatus = _useSelector.authStatus,
      isAuthenticating = _useSelector.isAuthenticating;

  var dispatch = (0,react_redux_es/* useDispatch */.I0)();
  (0,hooks/* useScrollTop */.j)();
  (0,hooks/* useDocumentTitle */.jr)('Sign In | Salinaka');
  (0,react.useEffect)(function () {
    return function () {
      dispatch(setAuthStatus(null));
      dispatch(setAuthenticating(false));
    };
  }, []);

  var onSignUp = function onSignUp() {
    return history.push(routes/* SIGNUP */.kp);
  };

  var onSubmitForm = function onSubmitForm(form) {
    dispatch((0,authActions/* signIn */.zB)(form.email, form.password));
  };

  var onClickLink = function onClickLink(e) {
    if (isAuthenticating) e.preventDefault();
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "auth-content"
  }, (authStatus === null || authStatus === void 0 ? void 0 : authStatus.success) && /*#__PURE__*/react.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "toast-success auth-success"
  }, authStatus.message, /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null))), !(authStatus !== null && authStatus !== void 0 && authStatus.success) && /*#__PURE__*/react.createElement(react.Fragment, null, (authStatus === null || authStatus === void 0 ? void 0 : authStatus.message) && /*#__PURE__*/react.createElement("h5", {
    className: "text-center toast-error"
  }, authStatus === null || authStatus === void 0 ? void 0 : authStatus.message), /*#__PURE__*/react.createElement("div", {
    className: "auth ".concat((authStatus === null || authStatus === void 0 ? void 0 : authStatus.message) && !(authStatus !== null && authStatus !== void 0 && authStatus.success) && 'input-error')
  }, /*#__PURE__*/react.createElement("div", {
    className: "auth-main"
  }, /*#__PURE__*/react.createElement("h3", null, "Sign in to Salinaka"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    className: "auth-wrapper"
  }, /*#__PURE__*/react.createElement(formik_esm/* Formik */.J9, {
    initialValues: {
      email: '',
      password: ''
    },
    validateOnChange: true,
    validationSchema: SignInSchema,
    onSubmit: onSubmitForm
  }, function () {
    return /*#__PURE__*/react.createElement(formik_esm/* Form */.l0, null, /*#__PURE__*/react.createElement("div", {
      className: "auth-field"
    }, /*#__PURE__*/react.createElement(formik_esm/* Field */.gN, {
      disabled: isAuthenticating,
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "test@example.com",
      component: formik/* CustomInput */.t7
    })), /*#__PURE__*/react.createElement("div", {
      className: "auth-field"
    }, /*#__PURE__*/react.createElement(formik_esm/* Field */.gN, {
      disabled: isAuthenticating,
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Your Password",
      component: formik/* CustomInput */.t7
    })), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
      className: "auth-field auth-action"
    }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
      onClick: onClickLink,
      style: {
        textDecoration: 'underline'
      },
      to: routes/* FORGOT_PASSWORD */.lP
    }, /*#__PURE__*/react.createElement("span", null, "Forgot password?")), /*#__PURE__*/react.createElement("button", {
      className: "button auth-button",
      disabled: isAuthenticating,
      type: "submit"
    }, isAuthenticating ? 'Signing In' : 'Sign In', "\xA0", isAuthenticating ? /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null) : /*#__PURE__*/react.createElement(ArrowRightOutlined/* default */.Z, null))));
  }))), /*#__PURE__*/react.createElement("div", {
    className: "auth-divider"
  }, /*#__PURE__*/react.createElement("h6", null, "OR")), /*#__PURE__*/react.createElement(common/* SocialLogin */.JX, {
    isLoading: isAuthenticating
  })), /*#__PURE__*/react.createElement("div", {
    className: "auth-message"
  }, /*#__PURE__*/react.createElement("span", {
    className: "auth-info"
  }, /*#__PURE__*/react.createElement("strong", null, "Don't have an account?")), /*#__PURE__*/react.createElement("button", {
    className: "button button-small button-border button-border-gray button-icon",
    disabled: isAuthenticating,
    onClick: onSignUp,
    type: "button"
  }, "Sign Up"))));
};

SignIn.propTypes = {
  history: prop_types_default().shape({
    push: (prop_types_default()).func
  }).isRequired
};
/* harmony default export */ const signin = (SignIn);
;// CONCATENATED MODULE: ./src/views/auth/signup/index.jsx












var signup_SignInSchema = yup_es/* object */.Ry().shape({
  email: yup_es/* string */.Z_().email('Email is not valid.').required('Email is required.'),
  password: yup_es/* string */.Z_().required('Password is required.').min(8, 'Password length should be at least 8 characters.').matches(/[A-Z\W]/g, 'Password should contain at least 1 uppercase letter.'),
  fullname: yup_es/* string */.Z_().required('Full name is required.').min(4, 'Name should be at least 4 characters.')
});

var SignUp = function SignUp(_ref) {
  var history = _ref.history;

  var _useSelector = (0,react_redux_es/* useSelector */.v9)(function (state) {
    return {
      isAuthenticating: state.app.isAuthenticating,
      authStatus: state.app.authStatus
    };
  }),
      isAuthenticating = _useSelector.isAuthenticating,
      authStatus = _useSelector.authStatus;

  var dispatch = (0,react_redux_es/* useDispatch */.I0)();
  (0,hooks/* useScrollTop */.j)();
  (0,hooks/* useDocumentTitle */.jr)('Sign Up | Salinaka');
  (0,react.useEffect)(function () {
    return function () {
      dispatch(setAuthStatus(null));
      dispatch(setAuthenticating(false));
    };
  }, []);

  var onClickSignIn = function onClickSignIn() {
    return history.push(routes/* SIGNIN */.OT);
  };

  var onFormSubmit = function onFormSubmit(form) {
    dispatch((0,authActions/* signUp */.y1)({
      fullname: form.fullname.trim(),
      email: form.email.trim().toLowerCase(),
      password: form.password.trim()
    }));
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "auth-content"
  }, (authStatus === null || authStatus === void 0 ? void 0 : authStatus.success) && /*#__PURE__*/react.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "toast-success auth-success"
  }, authStatus === null || authStatus === void 0 ? void 0 : authStatus.message, /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null))), !(authStatus !== null && authStatus !== void 0 && authStatus.success) && /*#__PURE__*/react.createElement(react.Fragment, null, (authStatus === null || authStatus === void 0 ? void 0 : authStatus.message) && /*#__PURE__*/react.createElement("h5", {
    className: "text-center toast-error"
  }, authStatus === null || authStatus === void 0 ? void 0 : authStatus.message), /*#__PURE__*/react.createElement("div", {
    className: "auth ".concat((authStatus === null || authStatus === void 0 ? void 0 : authStatus.message) && !(authStatus !== null && authStatus !== void 0 && authStatus.success) && 'input-error')
  }, /*#__PURE__*/react.createElement("div", {
    className: "auth-main"
  }, /*#__PURE__*/react.createElement("h3", null, "Sign up to Salinaka"), /*#__PURE__*/react.createElement(formik_esm/* Formik */.J9, {
    initialValues: {
      fullname: '',
      email: '',
      password: ''
    },
    validateOnChange: true,
    validationSchema: signup_SignInSchema,
    onSubmit: onFormSubmit
  }, function () {
    return /*#__PURE__*/react.createElement(formik_esm/* Form */.l0, null, /*#__PURE__*/react.createElement("div", {
      className: "auth-field"
    }, /*#__PURE__*/react.createElement(formik_esm/* Field */.gN, {
      disabled: isAuthenticating,
      name: "fullname",
      type: "text",
      label: "* Full Name",
      placeholder: "John Doe",
      style: {
        textTransform: 'capitalize'
      },
      component: formik/* CustomInput */.t7
    })), /*#__PURE__*/react.createElement("div", {
      className: "auth-field"
    }, /*#__PURE__*/react.createElement(formik_esm/* Field */.gN, {
      disabled: isAuthenticating,
      name: "email",
      type: "email",
      label: "* Email",
      placeholder: "test@example.com",
      component: formik/* CustomInput */.t7
    })), /*#__PURE__*/react.createElement("div", {
      className: "auth-field"
    }, /*#__PURE__*/react.createElement(formik_esm/* Field */.gN, {
      disabled: isAuthenticating,
      name: "password",
      type: "password",
      label: "* Password",
      placeholder: "Your Password",
      component: formik/* CustomInput */.t7
    })), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
      className: "auth-field auth-action auth-action-signup"
    }, /*#__PURE__*/react.createElement("button", {
      className: "button auth-button",
      disabled: isAuthenticating,
      type: "submit"
    }, isAuthenticating ? 'Signing Up' : 'Sign Up', "\xA0", isAuthenticating ? /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null) : /*#__PURE__*/react.createElement(ArrowRightOutlined/* default */.Z, null))));
  })), /*#__PURE__*/react.createElement("div", {
    className: "auth-divider"
  }, /*#__PURE__*/react.createElement("h6", null, "OR")), /*#__PURE__*/react.createElement(common/* SocialLogin */.JX, {
    isLoading: isAuthenticating
  })), /*#__PURE__*/react.createElement("div", {
    className: "auth-message"
  }, /*#__PURE__*/react.createElement("span", {
    className: "auth-info"
  }, /*#__PURE__*/react.createElement("strong", null, "Already have an account?")), /*#__PURE__*/react.createElement("button", {
    className: "button button-small button-border button-border-gray",
    disabled: isAuthenticating,
    onClick: onClickSignIn,
    type: "button"
  }, "Sign In"))));
};

SignUp.propTypes = {
  history: prop_types_default().shape({
    push: (prop_types_default()).func
  }).isRequired
};
/* harmony default export */ const signup = (SignUp);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ShopOutlined.js + 1 modules
var ShopOutlined = __webpack_require__(74498);
;// CONCATENATED MODULE: ./src/views/checkout/components/StepTracker.jsx



var StepTracker = function StepTracker(_ref) {
  var current = _ref.current;

  // eslint-disable-next-line no-nested-ternary
  var className = function className(step) {
    return current === step ? 'is-active-step' : step < current ? 'is-done-step' : '';
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "checkout-header"
  }, /*#__PURE__*/react.createElement("ul", {
    className: "checkout-header-menu"
  }, /*#__PURE__*/react.createElement("li", {
    className: "checkout-header-list ".concat(className(1))
  }, /*#__PURE__*/react.createElement("div", {
    className: "checkout-header-item"
  }, /*#__PURE__*/react.createElement("div", {
    className: "checkout-header-icon"
  }, /*#__PURE__*/react.createElement("h4", {
    className: "checkout-header-step"
  }, "1")), /*#__PURE__*/react.createElement("h6", {
    className: "checkout-header-subtitle"
  }, "Order Summary"))), /*#__PURE__*/react.createElement("li", {
    className: "checkout-header-list ".concat(className(2))
  }, /*#__PURE__*/react.createElement("div", {
    className: "checkout-header-item"
  }, /*#__PURE__*/react.createElement("div", {
    className: "checkout-header-icon"
  }, /*#__PURE__*/react.createElement("h4", {
    className: "checkout-header-step"
  }, "2")), /*#__PURE__*/react.createElement("h6", {
    className: "checkout-header-subtitle"
  }, "Shipping Details"))), /*#__PURE__*/react.createElement("li", {
    className: "checkout-header-list ".concat(className(3))
  }, /*#__PURE__*/react.createElement("div", {
    className: "checkout-header-item"
  }, /*#__PURE__*/react.createElement("div", {
    className: "checkout-header-icon"
  }, /*#__PURE__*/react.createElement("h4", {
    className: "checkout-header-step"
  }, "3")), /*#__PURE__*/react.createElement("h6", {
    className: "checkout-header-subtitle"
  }, "Payment")))));
};

StepTracker.propTypes = {
  current: (prop_types_default()).number.isRequired
};
/* harmony default export */ const components_StepTracker = (StepTracker);
;// CONCATENATED MODULE: ./src/views/checkout/components/index.js
// eslint-disable-next-line import/prefer-default-export

;// CONCATENATED MODULE: ./src/views/checkout/hoc/withCheckout.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable no-nested-ternary */






var withCheckout = function withCheckout(Component) {
  return (0,react_router/* withRouter */.EN)(function (props) {
    var state = (0,react_redux_es/* useSelector */.v9)(function (store) {
      return {
        isAuth: !!store.auth.id && !!store.auth.role,
        basket: store.basket,
        shipping: store.checkout.shipping,
        payment: store.checkout.payment,
        profile: store.profile
      };
    });
    var shippingFee = state.shipping.isInternational ? 50 : 0;
    var subtotal = (0,utils/* calculateTotal */.tf)(state.basket.map(function (product) {
      return product.price * product.quantity;
    }));

    if (!state.isAuth) {
      return /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
        to: routes/* SIGNIN */.OT
      });
    }

    if (state.basket.length === 0) {
      return /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
        to: "/"
      });
    }

    if (state.isAuth && state.basket.length !== 0) {
      return /*#__PURE__*/react.createElement(Component // eslint-disable-next-line react/jsx-props-no-spreading
      , _extends({}, props, {
        basket: state.basket,
        payment: state.payment,
        profile: state.profile,
        shipping: state.shipping,
        subtotal: Number(subtotal + shippingFee)
      }));
    }

    return null;
  });
};

/* harmony default export */ const hoc_withCheckout = (withCheckout);
;// CONCATENATED MODULE: ./src/views/checkout/step1/index.jsx












var OrderSummary = function OrderSummary(_ref) {
  var basket = _ref.basket,
      subtotal = _ref.subtotal;
  (0,hooks/* useDocumentTitle */.jr)('Check Out Step 1 | Salinaka');
  (0,hooks/* useScrollTop */.j)();
  var dispatch = (0,react_redux_es/* useDispatch */.I0)();
  var history = (0,react_router/* useHistory */.k6)();

  var onClickPrevious = function onClickPrevious() {
    return history.push('/');
  };

  var onClickNext = function onClickNext() {
    return history.push(routes/* CHECKOUT_STEP_2 */.ee);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "checkout"
  }, /*#__PURE__*/react.createElement(components_StepTracker, {
    current: 1
  }), /*#__PURE__*/react.createElement("div", {
    className: "checkout-step-1"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "text-center"
  }, "Order Summary"), /*#__PURE__*/react.createElement("span", {
    className: "d-block text-center"
  }, "Review items in your basket."), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    className: "checkout-items"
  }, basket.map(function (product) {
    return /*#__PURE__*/react.createElement(components_basket/* BasketItem */.fj, {
      basket: basket,
      dispatch: dispatch,
      key: product.id,
      product: product
    });
  })), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    className: "basket-total text-right"
  }, /*#__PURE__*/react.createElement("p", {
    className: "basket-total-title"
  }, "Subtotal:"), /*#__PURE__*/react.createElement("h2", {
    className: "basket-total-amount"
  }, (0,utils/* displayMoney */.ik)(subtotal))), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    className: "checkout-shipping-action"
  }, /*#__PURE__*/react.createElement("button", {
    className: "button button-muted",
    onClick: onClickPrevious,
    type: "button"
  }, /*#__PURE__*/react.createElement(ShopOutlined/* default */.Z, null), "\xA0 Continue Shopping"), /*#__PURE__*/react.createElement("button", {
    className: "button",
    onClick: onClickNext,
    type: "submit"
  }, "Next Step \xA0", /*#__PURE__*/react.createElement(ArrowRightOutlined/* default */.Z, null)))));
};

OrderSummary.propTypes = {
  basket: prop_types_default().arrayOf((prop_types_default()).object).isRequired,
  subtotal: (prop_types_default()).number.isRequired
};
/* harmony default export */ const step1 = (hoc_withCheckout(OrderSummary));
;// CONCATENATED MODULE: ./src/views/checkout/step2/ShippingForm.jsx
function ShippingForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ShippingForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ShippingForm_ownKeys(Object(source), !0).forEach(function (key) { ShippingForm_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ShippingForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function ShippingForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable jsx-a11y/label-has-associated-control */




var ShippingForm = function ShippingForm() {
  var _useFormikContext = (0,formik_esm/* useFormikContext */.u6)(),
      values = _useFormikContext.values;

  return /*#__PURE__*/react.createElement("div", {
    className: "checkout-shipping-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "checkout-shipping-form"
  }, /*#__PURE__*/react.createElement("div", {
    className: "checkout-fieldset"
  }, /*#__PURE__*/react.createElement("div", {
    className: "d-block checkout-field"
  }, /*#__PURE__*/react.createElement(formik_esm/* Field */.gN, {
    name: "fullname",
    type: "text",
    label: "* Full Name",
    placeholder: "Enter your full name",
    component: formik/* CustomInput */.t7,
    style: {
      textTransform: 'capitalize'
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "d-block checkout-field"
  }, /*#__PURE__*/react.createElement(formik_esm/* Field */.gN, {
    name: "email",
    type: "email",
    label: "* Email Address",
    placeholder: "Enter your email address",
    component: formik/* CustomInput */.t7
  }))), /*#__PURE__*/react.createElement("div", {
    className: "checkout-fieldset"
  }, /*#__PURE__*/react.createElement("div", {
    className: "d-block checkout-field"
  }, /*#__PURE__*/react.createElement(formik_esm/* Field */.gN, {
    name: "address",
    type: "text",
    label: "* Shipping Address",
    placeholder: "Enter full shipping address",
    component: formik/* CustomInput */.t7
  })), /*#__PURE__*/react.createElement("div", {
    className: "d-block checkout-field"
  }, /*#__PURE__*/react.createElement(formik/* CustomMobileInput */.Dp, {
    name: "mobile",
    defaultValue: values.mobile
  }))), /*#__PURE__*/react.createElement("div", {
    className: "checkout-fieldset"
  }, /*#__PURE__*/react.createElement(formik_esm/* Field */.gN, {
    name: "isInternational"
  }, function (_ref) {
    var field = _ref.field,
        form = _ref.form,
        meta = _ref.meta;
    return /*#__PURE__*/react.createElement("div", {
      className: "checkout-field"
    }, meta.touched && meta.error ? /*#__PURE__*/react.createElement("span", {
      className: "label-input label-error"
    }, meta.error) :
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    react.createElement("label", {
      className: "label-input",
      htmlFor: field.name
    }, "Shipping Option"), /*#__PURE__*/react.createElement("div", {
      className: "checkout-checkbox-field"
    }, /*#__PURE__*/react.createElement("input", {
      checked: field.value,
      id: field.name,
      onChange: function onChange(e) {
        form.setValues(ShippingForm_objectSpread(ShippingForm_objectSpread({}, form.values), {}, ShippingForm_defineProperty({}, field.name, e.target.checked)));
      },
      value: meta.value,
      type: "checkbox"
    }), /*#__PURE__*/react.createElement("label", {
      className: "d-flex w-100",
      htmlFor: field.name
    }, /*#__PURE__*/react.createElement("h5", {
      className: "d-flex-grow-1 margin-0"
    }, "\xA0 International Shipping \xA0", /*#__PURE__*/react.createElement("span", {
      className: "text-subtle"
    }, "7-14 days")), /*#__PURE__*/react.createElement("h4", {
      className: "margin-0"
    }, "$50.00"))));
  }))));
};

/* harmony default export */ const step2_ShippingForm = (ShippingForm);
;// CONCATENATED MODULE: ./src/views/checkout/step2/ShippingTotal.jsx





var ShippingTotal = function ShippingTotal(_ref) {
  var subtotal = _ref.subtotal;

  var _useFormikContext = (0,formik_esm/* useFormikContext */.u6)(),
      values = _useFormikContext.values;

  return /*#__PURE__*/react.createElement("div", {
    className: "checkout-total d-flex-end padding-right-m"
  }, /*#__PURE__*/react.createElement("table", null, /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("span", {
    className: "d-block margin-0 padding-right-s text-right"
  }, "International Shipping: \xA0")), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("h4", {
    className: "basket-total-amount text-subtle text-right margin-0 "
  }, values.isInternational ? '$50.00' : '$0.00'))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("span", {
    className: "d-block margin-0 padding-right-s text-right"
  }, "Subtotal: \xA0")), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("h4", {
    className: "basket-total-amount text-subtle text-right margin-0"
  }, (0,utils/* displayMoney */.ik)(subtotal)))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("span", {
    className: "d-block margin-0 padding-right-s text-right"
  }, "Total: \xA0")), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("h2", {
    className: "basket-total-amount text-right"
  }, (0,utils/* displayMoney */.ik)(Number(subtotal) + (values.isInternational ? 50 : 0))))))));
};

ShippingTotal.propTypes = {
  subtotal: (prop_types_default()).number.isRequired
};
/* harmony default export */ const step2_ShippingTotal = (ShippingTotal);
;// CONCATENATED MODULE: ./src/views/checkout/step2/index.jsx
/* eslint-disable react/forbid-prop-types */

/* eslint-disable no-nested-ternary */















var step2_FormSchema = yup_es/* object */.Ry().shape({
  fullname: yup_es/* string */.Z_().required('Full name is required.').min(2, 'Full name must be at least 2 characters long.').max(60, 'Full name must only be less than 60 characters.'),
  email: yup_es/* string */.Z_().email('Email is not valid.').required('Email is required.'),
  address: yup_es/* string */.Z_().required('Shipping address is required.'),
  mobile: yup_es/* object */.Ry().shape({
    country: yup_es/* string */.Z_(),
    countryCode: yup_es/* string */.Z_(),
    dialCode: yup_es/* string */.Z_().required('Mobile number is required'),
    value: yup_es/* string */.Z_().required('Mobile number is required')
  }).required('Mobile number is required.'),
  isInternational: yup_es/* boolean */.O7(),
  isDone: yup_es/* boolean */.O7()
});

var ShippingDetails = function ShippingDetails(_ref) {
  var profile = _ref.profile,
      shipping = _ref.shipping,
      subtotal = _ref.subtotal;
  (0,hooks/* useDocumentTitle */.jr)('Check Out Step 2 | Salinaka');
  (0,hooks/* useScrollTop */.j)();
  var dispatch = (0,react_redux_es/* useDispatch */.I0)();
  var history = (0,react_router/* useHistory */.k6)();
  var initFormikValues = {
    fullname: shipping.fullname || profile.fullname || '',
    email: shipping.email || profile.email || '',
    address: shipping.address || profile.address || '',
    mobile: shipping.mobile || profile.mobile || {},
    isInternational: shipping.isInternational || false,
    isDone: shipping.isDone || false
  };

  var onSubmitForm = function onSubmitForm(form) {
    dispatch(setShippingDetails({
      fullname: form.fullname,
      email: form.email,
      address: form.address,
      mobile: form.mobile,
      isInternational: form.isInternational,
      isDone: true
    }));
    history.push(routes/* CHECKOUT_STEP_3 */.PU);
  };

  return /*#__PURE__*/react.createElement(common/* Boundary */.EW, null, /*#__PURE__*/react.createElement("div", {
    className: "checkout"
  }, /*#__PURE__*/react.createElement(components_StepTracker, {
    current: 2
  }), /*#__PURE__*/react.createElement("div", {
    className: "checkout-step-2"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "text-center"
  }, "Shipping Details"), /*#__PURE__*/react.createElement(formik_esm/* Formik */.J9, {
    initialValues: initFormikValues,
    validateOnChange: true,
    validationSchema: step2_FormSchema,
    onSubmit: onSubmitForm
  }, function () {
    return /*#__PURE__*/react.createElement(formik_esm/* Form */.l0, null, /*#__PURE__*/react.createElement(step2_ShippingForm, null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(step2_ShippingTotal, {
      subtotal: subtotal
    }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
      className: "checkout-shipping-action"
    }, /*#__PURE__*/react.createElement("button", {
      className: "button button-muted",
      onClick: function onClick() {
        return history.push(routes/* CHECKOUT_STEP_1 */.Fr);
      },
      type: "button"
    }, /*#__PURE__*/react.createElement(ArrowLeftOutlined/* default */.Z, null), "\xA0 Go Back"), /*#__PURE__*/react.createElement("button", {
      className: "button button-icon",
      type: "submit"
    }, "Next Step \xA0", /*#__PURE__*/react.createElement(ArrowRightOutlined/* default */.Z, null))));
  }))));
};

ShippingDetails.propTypes = {
  subtotal: (prop_types_default()).number.isRequired,
  profile: prop_types_default().shape({
    fullname: (prop_types_default()).string,
    email: (prop_types_default()).string,
    address: (prop_types_default()).string,
    mobile: (prop_types_default()).object
  }).isRequired,
  shipping: prop_types_default().shape({
    fullname: (prop_types_default()).string,
    email: (prop_types_default()).string,
    address: (prop_types_default()).string,
    mobile: (prop_types_default()).object,
    isInternational: (prop_types_default()).bool,
    isDone: (prop_types_default()).bool
  }).isRequired
};
/* harmony default export */ const step2 = (hoc_withCheckout(ShippingDetails));
;// CONCATENATED MODULE: ./src/views/checkout/step3/CreditPayment.jsx
function CreditPayment_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function CreditPayment_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? CreditPayment_ownKeys(Object(source), !0).forEach(function (key) { CreditPayment_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : CreditPayment_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function CreditPayment_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable no-else-return */




var CreditPayment = function CreditPayment() {
  var _useFormikContext = (0,formik_esm/* useFormikContext */.u6)(),
      values = _useFormikContext.values,
      setValues = _useFormikContext.setValues;

  var collapseContainerRef = (0,react.useRef)(null);
  var cardInputRef = (0,react.useRef)(null);
  var containerRef = (0,react.useRef)(null);
  var checkboxContainerRef = (0,react.useRef)(null);

  var toggleCollapse = function toggleCollapse() {
    var cn = containerRef.current;
    var cb = checkboxContainerRef.current;
    var cl = collapseContainerRef.current;

    if (cb && cn && cl) {
      if (values.type === 'credit') {
        cardInputRef.current.focus();
        cn.style.height = "".concat(cb.offsetHeight + cl.offsetHeight, "px");
      } else {
        cardInputRef.current.blur();
        cn.style.height = "".concat(cb.offsetHeight, "px");
      }
    }
  };

  (0,react.useEffect)(function () {
    toggleCollapse();
  }, [values.type]);

  var onCreditModeChange = function onCreditModeChange(e) {
    if (e.target.checked) {
      setValues(CreditPayment_objectSpread(CreditPayment_objectSpread({}, values), {}, {
        type: 'credit'
      }));
      toggleCollapse();
    }
  };

  var handleOnlyNumberInput = function handleOnlyNumberInput(e) {
    var key = e.nativeEvent.key;

    if (/\D/.test(key) && key !== 'Backspace') {
      e.preventDefault();
    }
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", {
    className: "text-center"
  }, "Payment"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
    className: "d-block padding-s"
  }, "Payment Option"), /*#__PURE__*/react.createElement("div", {
    ref: containerRef,
    className: "checkout-fieldset-collapse ".concat(values.type === 'credit' ? 'is-selected-payment' : '')
  }, /*#__PURE__*/react.createElement("div", {
    className: "checkout-field margin-0"
  }, /*#__PURE__*/react.createElement("div", {
    className: "checkout-checkbox-field",
    ref: checkboxContainerRef
  }, /*#__PURE__*/react.createElement("input", {
    checked: values.type === 'credit',
    id: "modeCredit",
    name: "type" // the field name in formik I used is type
    ,
    onChange: onCreditModeChange,
    type: "radio"
  }), /*#__PURE__*/react.createElement("label", {
    className: "d-flex w-100",
    htmlFor: "modeCredit"
  }, /*#__PURE__*/react.createElement("div", {
    className: "d-flex-grow-1 margin-left-s"
  }, /*#__PURE__*/react.createElement("h4", {
    className: "margin-0"
  }, "Credit Card"), /*#__PURE__*/react.createElement("span", {
    className: "text-subtle d-block margin-top-s"
  }, "Pay with Visa, Master Card and other debit or credit card")), /*#__PURE__*/react.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "payment-img payment-img-visa"
  }), "\xA0", /*#__PURE__*/react.createElement("div", {
    className: "payment-img payment-img-mastercard"
  }))))), /*#__PURE__*/react.createElement("div", {
    className: "checkout-collapse-sub",
    ref: collapseContainerRef
  }, /*#__PURE__*/react.createElement("span", {
    className: "d-block padding-s text-center"
  }, "Accepted Cards"), /*#__PURE__*/react.createElement("div", {
    className: "checkout-cards-accepted d-flex-center"
  }, /*#__PURE__*/react.createElement("div", {
    className: "payment-img payment-img-visa",
    title: "Visa"
  }), /*#__PURE__*/react.createElement("div", {
    className: "payment-img payment-img-express",
    title: "American Express"
  }), /*#__PURE__*/react.createElement("div", {
    className: "payment-img payment-img-mastercard",
    title: "Master Card"
  }), /*#__PURE__*/react.createElement("div", {
    className: "payment-img payment-img-maestro",
    title: "Maestro"
  }), /*#__PURE__*/react.createElement("div", {
    className: "payment-img payment-img-discover",
    title: "Discover"
  })), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    className: "checkout-field margin-0"
  }, /*#__PURE__*/react.createElement("div", {
    className: "checkout-fieldset"
  }, /*#__PURE__*/react.createElement("div", {
    className: "checkout-field"
  }, /*#__PURE__*/react.createElement(formik_esm/* Field */.gN, {
    name: "name",
    type: "text",
    label: "* Name on Card",
    placeholder: "Jane Doe",
    component: formik/* CustomInput */.t7,
    style: {
      textTransform: 'capitalize'
    },
    inputRef: cardInputRef
  })), /*#__PURE__*/react.createElement("div", {
    className: "checkout-field"
  }, /*#__PURE__*/react.createElement(formik_esm/* Field */.gN, {
    name: "cardnumber",
    type: "text",
    maxLength: 19,
    onKeyDown: handleOnlyNumberInput,
    label: "* Card Number",
    placeholder: "Enter your card number",
    component: formik/* CustomInput */.t7
  }))), /*#__PURE__*/react.createElement("div", {
    className: "checkout-fieldset"
  }, /*#__PURE__*/react.createElement("div", {
    className: "checkout-field"
  }, /*#__PURE__*/react.createElement(formik_esm/* Field */.gN, {
    name: "expiry",
    type: "date",
    label: "* Expiry Date",
    placeholder: "Enter your expiry date",
    component: formik/* CustomInput */.t7
  })), /*#__PURE__*/react.createElement("div", {
    className: "checkout-field"
  }, /*#__PURE__*/react.createElement(formik_esm/* Field */.gN, {
    name: "ccv",
    type: "text",
    maxLength: 4,
    onKeyDown: handleOnlyNumberInput,
    label: "* CCV",
    placeholder: "****",
    component: formik/* CustomInput */.t7
  })))))));
};

/* harmony default export */ const step3_CreditPayment = (CreditPayment);
;// CONCATENATED MODULE: ./src/views/checkout/step3/PayPalPayment.jsx
function PayPalPayment_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function PayPalPayment_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PayPalPayment_ownKeys(Object(source), !0).forEach(function (key) { PayPalPayment_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PayPalPayment_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function PayPalPayment_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable jsx-a11y/label-has-associated-control */



var PayPalPayment = function PayPalPayment() {
  var _useFormikContext = (0,formik_esm/* useFormikContext */.u6)(),
      values = _useFormikContext.values,
      setValues = _useFormikContext.setValues;

  return /*#__PURE__*/react.createElement("div", {
    className: "checkout-fieldset-collapse ".concat(values.type === 'paypal' ? 'is-selected-payment' : '')
  }, /*#__PURE__*/react.createElement("div", {
    className: "checkout-field margin-0"
  }, /*#__PURE__*/react.createElement("div", {
    className: "checkout-checkbox-field"
  }, /*#__PURE__*/react.createElement("input", {
    checked: values.type === 'paypal',
    id: "modePayPal",
    name: "type",
    onChange: function onChange(e) {
      if (e.target.checked) {
        setValues(PayPalPayment_objectSpread(PayPalPayment_objectSpread({}, values), {}, {
          type: 'paypal'
        }));
      }
    },
    type: "radio"
  }), /*#__PURE__*/react.createElement("label", {
    className: "d-flex w-100",
    htmlFor: "modePayPal"
  }, /*#__PURE__*/react.createElement("div", {
    className: "d-flex-grow-1 margin-left-s"
  }, /*#__PURE__*/react.createElement("h4", {
    className: "margin-0"
  }, "PayPal"), /*#__PURE__*/react.createElement("span", {
    className: "text-subtle d-block margin-top-s"
  }, "Pay easily, fast and secure with PayPal.")), /*#__PURE__*/react.createElement("div", {
    className: "payment-img payment-img-paypal"
  })))));
};

/* harmony default export */ const step3_PayPalPayment = (PayPalPayment);
;// CONCATENATED MODULE: ./src/views/checkout/step3/Total.jsx
var _excluded = ["cardnumber", "ccv"];

function Total_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Total_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Total_ownKeys(Object(source), !0).forEach(function (key) { Total_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Total_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Total_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











var Total = function Total(_ref) {
  var isInternational = _ref.isInternational,
      subtotal = _ref.subtotal;

  var _useFormikContext = (0,formik_esm/* useFormikContext */.u6)(),
      values = _useFormikContext.values,
      submitForm = _useFormikContext.submitForm;

  var history = (0,react_router/* useHistory */.k6)();
  var dispatch = (0,react_redux_es/* useDispatch */.I0)();

  var onClickBack = function onClickBack() {
    // destructure to only select left fields omitting cardnumber and ccv
    var cardnumber = values.cardnumber,
        ccv = values.ccv,
        rest = _objectWithoutProperties(values, _excluded);

    dispatch(setPaymentDetails(Total_objectSpread({}, rest))); // save payment details

    history.push(routes/* CHECKOUT_STEP_2 */.ee);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "basket-total text-right"
  }, /*#__PURE__*/react.createElement("p", {
    className: "basket-total-title"
  }, "Total:"), /*#__PURE__*/react.createElement("h2", {
    className: "basket-total-amount"
  }, (0,utils/* displayMoney */.ik)(subtotal + (isInternational ? 50 : 0)))), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    className: "checkout-shipping-action"
  }, /*#__PURE__*/react.createElement("button", {
    className: "button button-muted",
    onClick: function onClick() {
      return onClickBack(values);
    },
    type: "button"
  }, /*#__PURE__*/react.createElement(ArrowLeftOutlined/* default */.Z, null), "\xA0 Go Back"), /*#__PURE__*/react.createElement("button", {
    className: "button",
    disabled: false,
    onClick: submitForm,
    type: "button"
  }, /*#__PURE__*/react.createElement(CheckOutlined/* default */.Z, null), "\xA0 Confirm")));
};

Total.propTypes = {
  isInternational: (prop_types_default()).bool.isRequired,
  subtotal: (prop_types_default()).number.isRequired
};
/* harmony default export */ const step3_Total = (Total);
;// CONCATENATED MODULE: ./src/views/checkout/step3/index.jsx













var step3_FormSchema = yup_es/* object */.Ry().shape({
  name: yup_es/* string */.Z_().min(4, 'Name should be at least 4 characters.').required('Name is required'),
  cardnumber: yup_es/* string */.Z_().min(13, 'Card number should be 13-19 digits long').max(19, 'Card number should only be 13-19 digits long').required('Card number is required.'),
  expiry: yup_es/* date */.hT().required('Credit card expiry is required.'),
  ccv: yup_es/* string */.Z_().min(3, 'CCV length should be 3-4 digit').max(4, 'CCV length should only be 3-4 digit').required('CCV is required.'),
  type: yup_es/* string */.Z_().required('Please select paymend mode')
});

var Payment = function Payment(_ref) {
  var shipping = _ref.shipping,
      payment = _ref.payment,
      subtotal = _ref.subtotal;
  (0,hooks/* useDocumentTitle */.jr)('Check Out Final Step | Salinaka');
  (0,hooks/* useScrollTop */.j)();
  var initFormikValues = {
    name: payment.name || '',
    cardnumber: payment.cardnumber || '',
    expiry: payment.expiry || '',
    ccv: payment.ccv || '',
    type: payment.type || 'paypal'
  };

  var onConfirm = function onConfirm() {
    (0,utils/* displayActionMessage */.aZ)('Feature not ready yet :)', 'info');
  };

  if (!shipping || !shipping.isDone) {
    return /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
      to: routes/* CHECKOUT_STEP_1 */.Fr
    });
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "checkout"
  }, /*#__PURE__*/react.createElement(components_StepTracker, {
    current: 3
  }), /*#__PURE__*/react.createElement(formik_esm/* Formik */.J9, {
    initialValues: initFormikValues,
    validateOnChange: true,
    validationSchema: step3_FormSchema,
    validate: function validate(form) {
      if (form.type === 'paypal') {
        (0,utils/* displayActionMessage */.aZ)('Feature not ready yet :)', 'info');
      }
    },
    onSubmit: onConfirm
  }, function () {
    return /*#__PURE__*/react.createElement(formik_esm/* Form */.l0, {
      className: "checkout-step-3"
    }, /*#__PURE__*/react.createElement(step3_CreditPayment, null), /*#__PURE__*/react.createElement(step3_PayPalPayment, null), /*#__PURE__*/react.createElement(step3_Total, {
      isInternational: shipping.isInternational,
      subtotal: subtotal
    }));
  }));
};

Payment.propTypes = {
  shipping: prop_types_default().shape({
    isDone: (prop_types_default()).bool,
    isInternational: (prop_types_default()).bool
  }).isRequired,
  payment: prop_types_default().shape({
    name: (prop_types_default()).string,
    cardnumber: (prop_types_default()).string,
    expiry: (prop_types_default()).string,
    ccv: (prop_types_default()).string,
    type: (prop_types_default()).string
  }).isRequired,
  subtotal: (prop_types_default()).number.isRequired
};
/* harmony default export */ const step3 = (hoc_withCheckout(Payment));
;// CONCATENATED MODULE: ./src/views/error/PageNotFound.jsx




var PageNotFound = function PageNotFound(_ref) {
  var history = _ref.history;
  (0,hooks/* useScrollTop */.j)();
  return /*#__PURE__*/react.createElement("div", {
    className: "page-not-found"
  }, /*#__PURE__*/react.createElement("h1", null, ":( Page you are looking for doesn't exists."), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("button", {
    className: "button",
    onClick: history.goBack,
    type: "button"
  }, "Go back"));
};

PageNotFound.propTypes = {
  history: prop_types_default().shape({
    goBack: (prop_types_default()).func
  }).isRequired
};
/* harmony default export */ const error_PageNotFound = (PageNotFound);
;// CONCATENATED MODULE: ./src/images/banner-guy.png
/* harmony default export */ const banner_guy = (__webpack_require__.p + "images/banner-guy.fbf4f0f7396fe31ca288dc1dd9822342.png");
;// CONCATENATED MODULE: ./src/views/featured/index.jsx






var FeaturedProducts = function FeaturedProducts() {
  (0,hooks/* useDocumentTitle */.jr)('Featured Products | Salinaka');
  (0,hooks/* useScrollTop */.j)();

  var _useFeaturedProducts = (0,hooks/* useFeaturedProducts */.ym)(),
      featuredProducts = _useFeaturedProducts.featuredProducts,
      fetchFeaturedProducts = _useFeaturedProducts.fetchFeaturedProducts,
      isLoading = _useFeaturedProducts.isLoading,
      error = _useFeaturedProducts.error;

  return /*#__PURE__*/react.createElement("main", {
    className: "content"
  }, /*#__PURE__*/react.createElement("div", {
    className: "featured"
  }, /*#__PURE__*/react.createElement("div", {
    className: "banner"
  }, /*#__PURE__*/react.createElement("div", {
    className: "banner-desc"
  }, /*#__PURE__*/react.createElement("h1", null, "Featured Products")), /*#__PURE__*/react.createElement("div", {
    className: "banner-img"
  }, /*#__PURE__*/react.createElement("img", {
    src: banner_guy,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "display"
  }, /*#__PURE__*/react.createElement("div", {
    className: "product-display-grid"
  }, error && !isLoading ? /*#__PURE__*/react.createElement(common/* MessageDisplay */.t0, {
    message: error,
    action: fetchFeaturedProducts,
    buttonLabel: "Try Again"
  }) : /*#__PURE__*/react.createElement(ProductShowcaseGrid, {
    products: featuredProducts,
    skeletonCount: 6
  })))));
};

/* harmony default export */ const featured = (FeaturedProducts);
;// CONCATENATED MODULE: ./src/images/banner-girl.png
/* harmony default export */ const banner_girl = (__webpack_require__.p + "images/banner-girl.789f1fa6f451ad26c5039fcbc049ace7.png");
;// CONCATENATED MODULE: ./src/views/home/index.jsx









var Home = function Home() {
  (0,hooks/* useDocumentTitle */.jr)('Salinaka | Home');
  (0,hooks/* useScrollTop */.j)();

  var _useFeaturedProducts = (0,hooks/* useFeaturedProducts */.ym)(6),
      featuredProducts = _useFeaturedProducts.featuredProducts,
      fetchFeaturedProducts = _useFeaturedProducts.fetchFeaturedProducts,
      isLoadingFeatured = _useFeaturedProducts.isLoading,
      errorFeatured = _useFeaturedProducts.error;

  var _useRecommendedProduc = (0,hooks/* useRecommendedProducts */.Kw)(6),
      recommendedProducts = _useRecommendedProduc.recommendedProducts,
      fetchRecommendedProducts = _useRecommendedProduc.fetchRecommendedProducts,
      isLoadingRecommended = _useRecommendedProduc.isLoading,
      errorRecommended = _useRecommendedProduc.error;

  return /*#__PURE__*/react.createElement("main", {
    className: "content"
  }, /*#__PURE__*/react.createElement("div", {
    className: "home"
  }, /*#__PURE__*/react.createElement("div", {
    className: "banner"
  }, /*#__PURE__*/react.createElement("div", {
    className: "banner-desc"
  }, /*#__PURE__*/react.createElement("h1", {
    className: "text-thin"
  }, /*#__PURE__*/react.createElement("strong", null, "See"), "\xA0everything with\xA0", /*#__PURE__*/react.createElement("strong", null, "Clarity")), /*#__PURE__*/react.createElement("p", null, "Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts\u2014we\u2019ve got your eyes covered."), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: routes/* SHOP */.kd,
    className: "button"
  }, "Shop Now \xA0", /*#__PURE__*/react.createElement(ArrowRightOutlined/* default */.Z, null))), /*#__PURE__*/react.createElement("div", {
    className: "banner-img"
  }, /*#__PURE__*/react.createElement("img", {
    src: banner_girl,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "display"
  }, /*#__PURE__*/react.createElement("div", {
    className: "display-header"
  }, /*#__PURE__*/react.createElement("h1", null, "Featured Products"), /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: routes/* FEATURED_PRODUCTS */.Mh
  }, "See All")), errorFeatured && !isLoadingFeatured ? /*#__PURE__*/react.createElement(common/* MessageDisplay */.t0, {
    message: errorFeatured,
    action: fetchFeaturedProducts,
    buttonLabel: "Try Again"
  }) : /*#__PURE__*/react.createElement(ProductShowcaseGrid, {
    products: featuredProducts,
    skeletonCount: 6
  })), /*#__PURE__*/react.createElement("div", {
    className: "display"
  }, /*#__PURE__*/react.createElement("div", {
    className: "display-header"
  }, /*#__PURE__*/react.createElement("h1", null, "Recommended Products"), /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: routes/* RECOMMENDED_PRODUCTS */.DG
  }, "See All")), errorRecommended && !isLoadingRecommended ? /*#__PURE__*/react.createElement(common/* MessageDisplay */.t0, {
    message: errorRecommended,
    action: fetchRecommendedProducts,
    buttonLabel: "Try Again"
  }) : /*#__PURE__*/react.createElement(ProductShowcaseGrid, {
    products: recommendedProducts,
    skeletonCount: 6
  }))));
};

/* harmony default export */ const home = (Home);
;// CONCATENATED MODULE: ./src/images/banner-girl-1.png
/* harmony default export */ const banner_girl_1 = (__webpack_require__.p + "images/banner-girl-1.24e9b8f48d5a0ac32680edd194503695.png");
;// CONCATENATED MODULE: ./src/views/recommended/index.jsx






var RecommendedProducts = function RecommendedProducts() {
  (0,hooks/* useDocumentTitle */.jr)('Recommended Products | Salinaka');
  (0,hooks/* useScrollTop */.j)();

  var _useRecommendedProduc = (0,hooks/* useRecommendedProducts */.Kw)(),
      recommendedProducts = _useRecommendedProduc.recommendedProducts,
      fetchRecommendedProducts = _useRecommendedProduc.fetchRecommendedProducts,
      isLoading = _useRecommendedProduc.isLoading,
      error = _useRecommendedProduc.error;

  return /*#__PURE__*/react.createElement("main", {
    className: "content"
  }, /*#__PURE__*/react.createElement("div", {
    className: "featured"
  }, /*#__PURE__*/react.createElement("div", {
    className: "banner"
  }, /*#__PURE__*/react.createElement("div", {
    className: "banner-desc"
  }, /*#__PURE__*/react.createElement("h1", null, "Recommended Products")), /*#__PURE__*/react.createElement("div", {
    className: "banner-img"
  }, /*#__PURE__*/react.createElement("img", {
    src: banner_girl_1,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "display"
  }, /*#__PURE__*/react.createElement("div", {
    className: "product-display-grid"
  }, error && !isLoading ? /*#__PURE__*/react.createElement(common/* MessageDisplay */.t0, {
    message: error,
    action: fetchRecommendedProducts,
    buttonLabel: "Try Again"
  }) : /*#__PURE__*/react.createElement(ProductShowcaseGrid, {
    products: recommendedProducts,
    skeletonCount: 6
  })))));
};

/* harmony default export */ const recommended = (RecommendedProducts);
;// CONCATENATED MODULE: ./src/views/search/index.jsx
/* eslint-disable react/jsx-props-no-spreading */










var Search = function Search(_ref) {
  var match = _ref.match;
  var searchKey = match.params.searchKey;
  var dispatch = (0,react_redux_es/* useDispatch */.I0)();
  var didMount = (0,hooks/* useDidMount */.Hd)(true);
  var store = (0,react_redux_es/* useSelector */.v9)(function (state) {
    return {
      isLoading: state.app.loading,
      products: state.products.searchedProducts.items,
      basket: state.basket,
      requestStatus: state.app.requestStatus
    };
  });
  (0,react.useEffect)(function () {
    if (didMount && !store.isLoading) {
      dispatch(searchProduct(searchKey));
    }
  }, [searchKey]);
  (0,react.useEffect)(function () {
    return function () {
      dispatch(setRequestStatus(''));
    };
  }, []);

  if (store.requestStatus && !store.isLoading) {
    return /*#__PURE__*/react.createElement("main", {
      className: "content"
    }, /*#__PURE__*/react.createElement(common/* MessageDisplay */.t0, {
      message: store.requestStatus,
      desc: "Try using correct filters or keyword."
    }));
  }

  if (!store.requestStatus && !store.isLoading) {
    return /*#__PURE__*/react.createElement(common/* Boundary */.EW, null, /*#__PURE__*/react.createElement("main", {
      className: "content"
    }, /*#__PURE__*/react.createElement("section", {
      className: "product-list-wrapper product-list-search"
    }, !store.requestStatus && /*#__PURE__*/react.createElement("div", {
      className: "product-list-header"
    }, /*#__PURE__*/react.createElement("div", {
      className: "product-list-header-title"
    }, /*#__PURE__*/react.createElement("h5", null, "Found ".concat(store.products.length, " ").concat(store.products.length > 1 ? 'products' : 'product', " with keyword ").concat(searchKey)))), /*#__PURE__*/react.createElement(product_ProductGrid, {
      products: store.products
    }))));
  }

  return /*#__PURE__*/react.createElement("main", {
    className: "content"
  }, /*#__PURE__*/react.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react.createElement("h4", null, "Searching Product..."), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, {
    style: {
      fontSize: '3rem'
    }
  })));
};

Search.propTypes = {
  match: prop_types_default().shape({
    params: prop_types_default().shape({
      searchKey: (prop_types_default()).string
    })
  }).isRequired
};
/* harmony default export */ const search = (Search);
;// CONCATENATED MODULE: ./src/views/shop/index.jsx
/* eslint-disable react/jsx-props-no-spreading */






var Shop = function Shop() {
  (0,hooks/* useDocumentTitle */.jr)('Shop | Salinaka');
  (0,hooks/* useScrollTop */.j)();
  var store = (0,react_redux_es/* useSelector */.v9)(function (state) {
    return {
      filteredProducts: (0,selector/* selectFilter */.AD)(state.products.items, state.filter),
      products: state.products,
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading
    };
  }, react_redux_es/* shallowEqual */.wU);
  return /*#__PURE__*/react.createElement("main", {
    className: "content"
  }, /*#__PURE__*/react.createElement("section", {
    className: "product-list-wrapper"
  }, /*#__PURE__*/react.createElement(product_ProductAppliedFilters, {
    filteredProductsCount: store.filteredProducts.length
  }), /*#__PURE__*/react.createElement(product_ProductList, store, /*#__PURE__*/react.createElement(product_ProductGrid, {
    products: store.filteredProducts
  }))));
};

/* harmony default export */ const shop = (Shop);
// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.esm.js
var react_select_esm = __webpack_require__(23157);
;// CONCATENATED MODULE: ./src/views/view_product/index.jsx
function view_product_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function view_product_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? view_product_ownKeys(Object(source), !0).forEach(function (key) { view_product_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : view_product_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function view_product_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function view_product_slicedToArray(arr, i) { return view_product_arrayWithHoles(arr) || view_product_iterableToArrayLimit(arr, i) || view_product_unsupportedIterableToArray(arr, i) || view_product_nonIterableRest(); }

function view_product_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function view_product_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return view_product_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return view_product_arrayLikeToArray(o, minLen); }

function view_product_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function view_product_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function view_product_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var ViewProduct = function ViewProduct() {
  var _useParams = (0,react_router/* useParams */.UO)(),
      id = _useParams.id;

  var _useProduct = (0,hooks/* useProduct */.iB)(id),
      product = _useProduct.product,
      isLoading = _useProduct.isLoading,
      error = _useProduct.error;

  var _useBasket = (0,hooks/* useBasket */.Kc)(id),
      addToBasket = _useBasket.addToBasket,
      isItemOnBasket = _useBasket.isItemOnBasket;

  (0,hooks/* useScrollTop */.j)();
  (0,hooks/* useDocumentTitle */.jr)("View ".concat((product === null || product === void 0 ? void 0 : product.name) || 'Item'));

  var _useState = (0,react.useState)((product === null || product === void 0 ? void 0 : product.image) || ''),
      _useState2 = view_product_slicedToArray(_useState, 2),
      selectedImage = _useState2[0],
      setSelectedImage = _useState2[1];

  var _useState3 = (0,react.useState)(''),
      _useState4 = view_product_slicedToArray(_useState3, 2),
      selectedSize = _useState4[0],
      setSelectedSize = _useState4[1];

  var _useState5 = (0,react.useState)(''),
      _useState6 = view_product_slicedToArray(_useState5, 2),
      selectedColor = _useState6[0],
      setSelectedColor = _useState6[1];

  var _useRecommendedProduc = (0,hooks/* useRecommendedProducts */.Kw)(6),
      recommendedProducts = _useRecommendedProduc.recommendedProducts,
      fetchRecommendedProducts = _useRecommendedProduc.fetchRecommendedProducts,
      isLoadingFeatured = _useRecommendedProduc.isLoading,
      errorFeatured = _useRecommendedProduc.error;

  var colorOverlay = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    setSelectedImage(product === null || product === void 0 ? void 0 : product.image);
  }, [product]);

  var onSelectedSizeChange = function onSelectedSizeChange(newValue) {
    setSelectedSize(newValue.value);
  };

  var onSelectedColorChange = function onSelectedColorChange(color) {
    setSelectedColor(color);

    if (colorOverlay.current) {
      colorOverlay.current.value = color;
    }
  };

  var handleAddToBasket = function handleAddToBasket() {
    addToBasket(view_product_objectSpread(view_product_objectSpread({}, product), {}, {
      selectedColor: selectedColor,
      selectedSize: selectedSize || product.sizes[0]
    }));
  };

  return /*#__PURE__*/react.createElement("main", {
    className: "content"
  }, isLoading && /*#__PURE__*/react.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react.createElement("h4", null, "Loading Product..."), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, {
    style: {
      fontSize: '3rem'
    }
  })), error && /*#__PURE__*/react.createElement(common/* MessageDisplay */.t0, {
    message: error
  }), product && !isLoading && /*#__PURE__*/react.createElement("div", {
    className: "product-view"
  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: routes/* SHOP */.kd
  }, /*#__PURE__*/react.createElement("h3", {
    className: "button-link d-inline-flex"
  }, /*#__PURE__*/react.createElement(ArrowLeftOutlined/* default */.Z, null), "\xA0 Back to shop")), /*#__PURE__*/react.createElement("div", {
    className: "product-modal"
  }, product.imageCollection.length !== 0 && /*#__PURE__*/react.createElement("div", {
    className: "product-modal-image-collection"
  }, product.imageCollection.map(function (image) {
    return /*#__PURE__*/react.createElement("div", {
      className: "product-modal-image-collection-wrapper",
      key: image.id,
      onClick: function onClick() {
        return setSelectedImage(image.url);
      },
      role: "presentation"
    }, /*#__PURE__*/react.createElement(common/* ImageLoader */.S3, {
      className: "product-modal-image-collection-img",
      src: image.url
    }));
  })), /*#__PURE__*/react.createElement("div", {
    className: "product-modal-image-wrapper"
  }, selectedColor && /*#__PURE__*/react.createElement("input", {
    type: "color",
    disabled: true,
    ref: colorOverlay,
    id: "color-overlay"
  }), /*#__PURE__*/react.createElement(common/* ImageLoader */.S3, {
    alt: product.name,
    className: "product-modal-image",
    src: selectedImage
  })), /*#__PURE__*/react.createElement("div", {
    className: "product-modal-details"
  }, /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
    className: "text-subtle"
  }, product.brand), /*#__PURE__*/react.createElement("h1", {
    className: "margin-top-0"
  }, product.name), /*#__PURE__*/react.createElement("span", null, product.description), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
    className: "text-subtle"
  }, "Lens Width and Frame Size"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(react_select_esm/* default */.ZP, {
    placeholder: "--Select Size--",
    onChange: onSelectedSizeChange,
    options: product.sizes.sort(function (a, b) {
      return a < b ? -1 : 1;
    }).map(function (size) {
      return {
        label: "".concat(size, " mm"),
        value: size
      };
    }),
    styles: {
      menu: function menu(provided) {
        return view_product_objectSpread(view_product_objectSpread({}, provided), {}, {
          zIndex: 10
        });
      }
    }
  })), /*#__PURE__*/react.createElement("br", null), product.availableColors.length >= 1 && /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
    className: "text-subtle"
  }, "Choose Color"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(common/* ColorChooser */.PT, {
    availableColors: product.availableColors,
    onSelectedColorChange: onSelectedColorChange
  })), /*#__PURE__*/react.createElement("h1", null, (0,utils/* displayMoney */.ik)(product.price)), /*#__PURE__*/react.createElement("div", {
    className: "product-modal-action"
  }, /*#__PURE__*/react.createElement("button", {
    className: "button button-small ".concat(isItemOnBasket(product.id) ? 'button-border button-border-gray' : ''),
    onClick: handleAddToBasket,
    type: "button"
  }, isItemOnBasket(product.id) ? 'Remove From Basket' : 'Add To Basket')))), /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: '10rem'
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "display-header"
  }, /*#__PURE__*/react.createElement("h1", null, "Recommended"), /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: routes/* RECOMMENDED_PRODUCTS */.DG
  }, "See All")), errorFeatured && !isLoadingFeatured ? /*#__PURE__*/react.createElement(common/* MessageDisplay */.t0, {
    message: error,
    action: fetchRecommendedProducts,
    buttonLabel: "Try Again"
  }) : /*#__PURE__*/react.createElement(ProductShowcaseGrid, {
    products: recommendedProducts,
    skeletonCount: 3
  }))));
};

/* harmony default export */ const view_product = (ViewProduct);
;// CONCATENATED MODULE: ./src/views/index.js



















;// CONCATENATED MODULE: ./src/routers/AdminRoute.jsx
var AdminRoute_excluded = ["isAuth", "role", "component"];

function AdminRoute_extends() { AdminRoute_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AdminRoute_extends.apply(this, arguments); }

function AdminRoute_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = AdminRoute_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AdminRoute_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/forbid-prop-types */

/* eslint-disable react/jsx-props-no-spreading */






var AdminRoute = function AdminRoute(_ref) {
  var isAuth = _ref.isAuth,
      role = _ref.role,
      Component = _ref.component,
      rest = AdminRoute_objectWithoutProperties(_ref, AdminRoute_excluded);

  return /*#__PURE__*/react.createElement(react_router/* Route */.AW, AdminRoute_extends({}, rest, {
    component: function component(props) {
      return isAuth && role === 'ADMIN' ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(common/* AdminNavigation */.ws, null), /*#__PURE__*/react.createElement("main", {
        className: "content-admin"
      }, /*#__PURE__*/react.createElement(common/* AdminSideBar */.MQ, null), /*#__PURE__*/react.createElement("div", {
        className: "content-admin-wrapper"
      }, /*#__PURE__*/react.createElement(Component, props)))) : /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
        to: "/"
      });
    }
  }));
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return {
    isAuth: !!auth,
    role: (auth === null || auth === void 0 ? void 0 : auth.role) || ''
  };
};

AdminRoute.defaultProps = {
  isAuth: false,
  role: 'USER'
};
AdminRoute.propTypes = {
  isAuth: (prop_types_default()).bool,
  role: (prop_types_default()).string,
  component: (prop_types_default()).func.isRequired,
  // eslint-disable-next-line react/require-default-props
  rest: (prop_types_default()).any
};
/* harmony default export */ const routers_AdminRoute = ((0,react_redux_es/* connect */.$j)(mapStateToProps)(AdminRoute));
;// CONCATENATED MODULE: ./src/routers/ClientRoute.jsx
var ClientRoute_excluded = ["isAuth", "role", "component"];

function ClientRoute_extends() { ClientRoute_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ClientRoute_extends.apply(this, arguments); }

function ClientRoute_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ClientRoute_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ClientRoute_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/forbid-prop-types */

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable no-nested-ternary */






var PrivateRoute = function PrivateRoute(_ref) {
  var isAuth = _ref.isAuth,
      role = _ref.role,
      Component = _ref.component,
      rest = ClientRoute_objectWithoutProperties(_ref, ClientRoute_excluded);

  return /*#__PURE__*/react.createElement(react_router/* Route */.AW, ClientRoute_extends({}, rest, {
    component: function component(props) {
      if (isAuth && role === 'USER') {
        return /*#__PURE__*/react.createElement("main", {
          className: "content"
        }, /*#__PURE__*/react.createElement(Component, props));
      }

      if (isAuth && role === 'ADMIN') {
        return /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
          to: routes/* ADMIN_DASHBOARD */.o3
        });
      }

      return /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
        to: {
          pathname: routes/* SIGNIN */.OT,
          // eslint-disable-next-line react/prop-types
          state: {
            from: props.location
          }
        }
      });
    }
  }));
};

PrivateRoute.defaultProps = {
  isAuth: false,
  role: 'USER'
};
PrivateRoute.propTypes = {
  isAuth: (prop_types_default()).bool,
  role: (prop_types_default()).string,
  component: (prop_types_default()).func.isRequired,
  // eslint-disable-next-line react/require-default-props
  rest: (prop_types_default()).any
};

var ClientRoute_mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return {
    isAuth: !!auth,
    role: (auth === null || auth === void 0 ? void 0 : auth.role) || ''
  };
};

/* harmony default export */ const ClientRoute = ((0,react_redux_es/* connect */.$j)(ClientRoute_mapStateToProps)(PrivateRoute));
;// CONCATENATED MODULE: ./src/routers/PublicRoute.jsx
var PublicRoute_excluded = ["isAuth", "role", "component", "path"];

function PublicRoute_extends() { PublicRoute_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PublicRoute_extends.apply(this, arguments); }

function PublicRoute_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PublicRoute_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PublicRoute_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/forbid-prop-types */

/* eslint-disable react/jsx-props-no-spreading */






var PublicRoute = function PublicRoute(_ref) {
  var isAuth = _ref.isAuth,
      role = _ref.role,
      Component = _ref.component,
      path = _ref.path,
      rest = PublicRoute_objectWithoutProperties(_ref, PublicRoute_excluded);

  return /*#__PURE__*/react.createElement(react_router/* Route */.AW, PublicRoute_extends({}, rest, {
    // eslint-disable-next-line consistent-return
    render: function render(props) {
      // eslint-disable-next-line react/prop-types
      var _ref2 = props.location.state || {
        from: {
          pathname: '/'
        }
      },
          from = _ref2.from;

      if (isAuth && role === 'ADMIN') {
        return /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
          to: routes/* ADMIN_DASHBOARD */.o3
        });
      }

      if (isAuth && role === 'USER' && (path === routes/* SIGNIN */.OT || path === routes/* SIGNUP */.kp)) {
        return /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
          to: from
        });
      }

      return /*#__PURE__*/react.createElement("main", {
        className: "content"
      }, /*#__PURE__*/react.createElement(Component, props));
    }
  }));
};

PublicRoute.defaultProps = {
  isAuth: false,
  role: 'USER',
  path: '/'
};
PublicRoute.propTypes = {
  isAuth: (prop_types_default()).bool,
  role: (prop_types_default()).string,
  component: (prop_types_default()).func.isRequired,
  path: (prop_types_default()).string,
  // eslint-disable-next-line react/require-default-props
  rest: (prop_types_default()).any
};

var PublicRoute_mapStateToProps = function mapStateToProps(_ref3) {
  var auth = _ref3.auth;
  return {
    isAuth: !!auth,
    role: (auth === null || auth === void 0 ? void 0 : auth.role) || ''
  };
};

/* harmony default export */ const routers_PublicRoute = ((0,react_redux_es/* connect */.$j)(PublicRoute_mapStateToProps)(PublicRoute));
;// CONCATENATED MODULE: ./src/routers/AppRouter.jsx









 // Revert back to history v4.10.0 because
// v5.0 breaks navigation

var AppRouter_history = (0,esm_history/* createBrowserHistory */.lX)();

var AppRouter = function AppRouter() {
  return /*#__PURE__*/react.createElement(react_router/* Router */.F0, {
    history: AppRouter_history
  }, /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(common/* Navigation */.W_, null), /*#__PURE__*/react.createElement(components_basket/* Basket */.LX, null), /*#__PURE__*/react.createElement(react_router/* Switch */.rs, null, /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    component: search,
    exact: true,
    path: routes/* SEARCH */.mo
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    component: home,
    exact: true,
    path: routes/* HOME */.Sd
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    component: shop,
    exact: true,
    path: routes/* SHOP */.kd
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    component: featured,
    exact: true,
    path: routes/* FEATURED_PRODUCTS */.Mh
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    component: recommended,
    exact: true,
    path: routes/* RECOMMENDED_PRODUCTS */.DG
  }), /*#__PURE__*/react.createElement(routers_PublicRoute, {
    component: signup,
    path: routes/* SIGNUP */.kp
  }), /*#__PURE__*/react.createElement(routers_PublicRoute, {
    component: signin,
    exact: true,
    path: routes/* SIGNIN */.OT
  }), /*#__PURE__*/react.createElement(routers_PublicRoute, {
    component: forgot_password,
    path: routes/* FORGOT_PASSWORD */.lP
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    component: view_product,
    path: routes/* VIEW_PRODUCT */.AX
  }), /*#__PURE__*/react.createElement(ClientRoute, {
    component: user_account,
    exact: true,
    path: routes/* ACCOUNT */.yV
  }), /*#__PURE__*/react.createElement(ClientRoute, {
    component: edit_account,
    exact: true,
    path: routes/* ACCOUNT_EDIT */.EO
  }), /*#__PURE__*/react.createElement(ClientRoute, {
    component: step1,
    path: routes/* CHECKOUT_STEP_1 */.Fr
  }), /*#__PURE__*/react.createElement(ClientRoute, {
    component: step2,
    path: routes/* CHECKOUT_STEP_2 */.ee
  }), /*#__PURE__*/react.createElement(ClientRoute, {
    component: step3,
    path: routes/* CHECKOUT_STEP_3 */.PU
  }), /*#__PURE__*/react.createElement(routers_AdminRoute, {
    component: dashboard,
    exact: true,
    path: routes/* ADMIN_DASHBOARD */.o3
  }), /*#__PURE__*/react.createElement(routers_AdminRoute, {
    component: products,
    path: routes/* ADMIN_PRODUCTS */.Ow
  }), /*#__PURE__*/react.createElement(routers_AdminRoute, {
    component: add_product,
    path: routes/* ADD_PRODUCT */.zN
  }), /*#__PURE__*/react.createElement(routers_AdminRoute, {
    component: edit_product,
    path: "".concat(routes/* EDIT_PRODUCT */.U4, "/:id")
  }), /*#__PURE__*/react.createElement(routers_PublicRoute, {
    component: error_PageNotFound
  })), /*#__PURE__*/react.createElement(common/* Footer */.$_, null)));
};

/* harmony default export */ const routers_AppRouter = (AppRouter);
// EXTERNAL MODULE: ./src/services/firebase.js + 1 modules
var firebase = __webpack_require__(73879);
;// CONCATENATED MODULE: ./src/redux/sagas/authSaga.js
var _marked = /*#__PURE__*/regeneratorRuntime.mark(handleError),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(initRequest),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(authSaga);

function authSaga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function authSaga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? authSaga_ownKeys(Object(source), !0).forEach(function (key) { authSaga_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : authSaga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function authSaga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function handleError(e) {
  var obj;
  return regeneratorRuntime.wrap(function handleError$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          obj = {
            success: false,
            type: 'auth',
            isError: true
          };
          _context.next = 3;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setAuthenticating(false));

        case 3:
          _context.t0 = e.code;
          _context.next = _context.t0 === 'auth/network-request-failed' ? 6 : _context.t0 === 'auth/email-already-in-use' ? 9 : _context.t0 === 'auth/wrong-password' ? 12 : _context.t0 === 'auth/user-not-found' ? 15 : _context.t0 === 'auth/reset-password-error' ? 18 : 21;
          break;

        case 6:
          _context.next = 8;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: 'Network error has occured. Please try again.'
          })));

        case 8:
          return _context.abrupt("break", 24);

        case 9:
          _context.next = 11;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: 'Email is already in use. Please use another email'
          })));

        case 11:
          return _context.abrupt("break", 24);

        case 12:
          _context.next = 14;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: 'Incorrect email or password'
          })));

        case 14:
          return _context.abrupt("break", 24);

        case 15:
          _context.next = 17;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: 'Incorrect email or password'
          })));

        case 17:
          return _context.abrupt("break", 24);

        case 18:
          _context.next = 20;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: 'Failed to send password reset email. Did you type your email correctly?'
          })));

        case 20:
          return _context.abrupt("break", 24);

        case 21:
          _context.next = 23;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: e.message
          })));

        case 23:
          return _context.abrupt("break", 24);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function initRequest() {
  return regeneratorRuntime.wrap(function initRequest$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setAuthenticating());

        case 2:
          _context2.next = 4;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setAuthStatus({}));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function authSaga(_ref) {
  var type, payload, ref, fullname, user, snapshot, _user, _user2;

  return regeneratorRuntime.wrap(function authSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          type = _ref.type, payload = _ref.payload;
          _context3.t0 = type;
          _context3.next = _context3.t0 === constants/* SIGNIN */.OT ? 4 : _context3.t0 === constants/* SIGNIN_WITH_GOOGLE */.oV ? 16 : _context3.t0 === constants/* SIGNIN_WITH_FACEBOOK */.C5 ? 28 : _context3.t0 === constants/* SIGNIN_WITH_GITHUB */.Oh ? 40 : _context3.t0 === constants/* SIGNUP */.kp ? 52 : _context3.t0 === constants/* SIGNOUT */.PM ? 73 : _context3.t0 === constants/* RESET_PASSWORD */.bk ? 98 : _context3.t0 === constants/* ON_AUTHSTATE_SUCCESS */.$z ? 113 : _context3.t0 === constants/* ON_AUTHSTATE_FAIL */.tI ? 141 : _context3.t0 === constants/* SET_AUTH_PERSISTENCE */.Rf ? 146 : 155;
          break;

        case 4:
          _context3.prev = 4;
          _context3.next = 7;
          return initRequest();

        case 7:
          _context3.next = 9;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.signIn */.Z.signIn, payload.email, payload.password);

        case 9:
          _context3.next = 15;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t1 = _context3["catch"](4);
          _context3.next = 15;
          return handleError(_context3.t1);

        case 15:
          return _context3.abrupt("break", 156);

        case 16:
          _context3.prev = 16;
          _context3.next = 19;
          return initRequest();

        case 19:
          _context3.next = 21;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.signInWithGoogle */.Z.signInWithGoogle);

        case 21:
          _context3.next = 27;
          break;

        case 23:
          _context3.prev = 23;
          _context3.t2 = _context3["catch"](16);
          _context3.next = 27;
          return handleError(_context3.t2);

        case 27:
          return _context3.abrupt("break", 156);

        case 28:
          _context3.prev = 28;
          _context3.next = 31;
          return initRequest();

        case 31:
          _context3.next = 33;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.signInWithFacebook */.Z.signInWithFacebook);

        case 33:
          _context3.next = 39;
          break;

        case 35:
          _context3.prev = 35;
          _context3.t3 = _context3["catch"](28);
          _context3.next = 39;
          return handleError(_context3.t3);

        case 39:
          return _context3.abrupt("break", 156);

        case 40:
          _context3.prev = 40;
          _context3.next = 43;
          return initRequest();

        case 43:
          _context3.next = 45;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.signInWithGithub */.Z.signInWithGithub);

        case 45:
          _context3.next = 51;
          break;

        case 47:
          _context3.prev = 47;
          _context3.t4 = _context3["catch"](40);
          _context3.next = 51;
          return handleError(_context3.t4);

        case 51:
          return _context3.abrupt("break", 156);

        case 52:
          _context3.prev = 52;
          _context3.next = 55;
          return initRequest();

        case 55:
          _context3.next = 57;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.createAccount */.Z.createAccount, payload.email, payload.password);

        case 57:
          ref = _context3.sent;
          fullname = payload.fullname.split(' ').map(function (name) {
            return name[0].toUpperCase().concat(name.substring(1));
          }).join(' ');
          user = {
            fullname: fullname,
            avatar: defaultAvatar,
            banner: defaultBanner,
            email: payload.email,
            address: '',
            basket: [],
            mobile: {
              data: {}
            },
            role: 'USER',
            dateJoined: ref.user.metadata.creationTime || new Date().getTime()
          };
          _context3.next = 62;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.addUser */.Z.addUser, ref.user.uid, user);

        case 62:
          _context3.next = 64;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setProfile(user));

        case 64:
          _context3.next = 66;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setAuthenticating(false));

        case 66:
          _context3.next = 72;
          break;

        case 68:
          _context3.prev = 68;
          _context3.t5 = _context3["catch"](52);
          _context3.next = 72;
          return handleError(_context3.t5);

        case 72:
          return _context3.abrupt("break", 156);

        case 73:
          _context3.prev = 73;
          _context3.next = 76;
          return initRequest();

        case 76:
          _context3.next = 78;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.signOut */.Z.signOut);

        case 78:
          _context3.next = 80;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)((0,basketActions/* clearBasket */.RT)());

        case 80:
          _context3.next = 82;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(clearProfile());

        case 82:
          _context3.next = 84;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)((0,filterActions/* resetFilter */.sx)());

        case 84:
          _context3.next = 86;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(resetCheckout());

        case 86:
          _context3.next = 88;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)((0,authActions/* signOutSuccess */.P_)());

        case 88:
          _context3.next = 90;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setAuthenticating(false));

        case 90:
          _context3.next = 92;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(AppRouter_history.push, routes/* SIGNIN */.OT);

        case 92:
          _context3.next = 97;
          break;

        case 94:
          _context3.prev = 94;
          _context3.t6 = _context3["catch"](73);
          console.log(_context3.t6);

        case 97:
          return _context3.abrupt("break", 156);

        case 98:
          _context3.prev = 98;
          _context3.next = 101;
          return initRequest();

        case 101:
          _context3.next = 103;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.passwordReset */.Z.passwordReset, payload);

        case 103:
          _context3.next = 105;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setAuthStatus({
            success: true,
            type: 'reset',
            message: 'Password reset email has been sent to your provided email.'
          }));

        case 105:
          _context3.next = 107;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setAuthenticating(false));

        case 107:
          _context3.next = 112;
          break;

        case 109:
          _context3.prev = 109;
          _context3.t7 = _context3["catch"](98);
          handleError({
            code: 'auth/reset-password-error'
          });

        case 112:
          return _context3.abrupt("break", 156);

        case 113:
          _context3.next = 115;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.getUser */.Z.getUser, payload.uid);

        case 115:
          snapshot = _context3.sent;

          if (!snapshot.data()) {
            _context3.next = 128;
            break;
          }

          // if user exists in database
          _user = snapshot.data();
          _context3.next = 120;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setProfile(_user));

        case 120:
          _context3.next = 122;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)((0,basketActions/* setBasketItems */.qI)(_user.basket));

        case 122:
          _context3.next = 124;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)((0,basketActions/* setBasketItems */.qI)(_user.basket));

        case 124:
          _context3.next = 126;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)((0,authActions/* signInSuccess */.Vh)({
            id: payload.uid,
            role: _user.role,
            provider: payload.providerData[0].providerId
          }));

        case 126:
          _context3.next = 136;
          break;

        case 128:
          if (!(payload.providerData[0].providerId !== 'password' && !snapshot.data())) {
            _context3.next = 136;
            break;
          }

          // add the user if auth provider is not password
          _user2 = {
            fullname: payload.displayName ? payload.displayName : 'User',
            avatar: payload.photoURL ? payload.photoURL : defaultAvatar,
            banner: defaultBanner,
            email: payload.email,
            address: '',
            basket: [],
            mobile: {
              data: {}
            },
            role: 'USER',
            dateJoined: payload.metadata.creationTime
          };
          _context3.next = 132;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.addUser */.Z.addUser, payload.uid, _user2);

        case 132:
          _context3.next = 134;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setProfile(_user2));

        case 134:
          _context3.next = 136;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)((0,authActions/* signInSuccess */.Vh)({
            id: payload.uid,
            role: _user2.role,
            provider: payload.providerData[0].providerId
          }));

        case 136:
          _context3.next = 138;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setAuthStatus({
            success: true,
            type: 'auth',
            isError: false,
            message: 'Successfully signed in. Redirecting...'
          }));

        case 138:
          _context3.next = 140;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setAuthenticating(false));

        case 140:
          return _context3.abrupt("break", 156);

        case 141:
          _context3.next = 143;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(clearProfile());

        case 143:
          _context3.next = 145;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)((0,authActions/* signOutSuccess */.P_)());

        case 145:
          return _context3.abrupt("break", 156);

        case 146:
          _context3.prev = 146;
          _context3.next = 149;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.setAuthPersistence */.Z.setAuthPersistence);

        case 149:
          _context3.next = 154;
          break;

        case 151:
          _context3.prev = 151;
          _context3.t8 = _context3["catch"](146);
          console.log(_context3.t8);

        case 154:
          return _context3.abrupt("break", 156);

        case 155:
          throw new Error('Unexpected Action Type.');

        case 156:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[4, 11], [16, 23], [28, 35], [40, 47], [52, 68], [73, 94], [98, 109], [146, 151]]);
}

/* harmony default export */ const sagas_authSaga = (authSaga);
;// CONCATENATED MODULE: ./src/redux/sagas/productSaga.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function productSaga_toConsumableArray(arr) { return productSaga_arrayWithoutHoles(arr) || productSaga_iterableToArray(arr) || productSaga_unsupportedIterableToArray(arr) || productSaga_nonIterableSpread(); }

function productSaga_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function productSaga_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return productSaga_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return productSaga_arrayLikeToArray(o, minLen); }

function productSaga_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function productSaga_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return productSaga_arrayLikeToArray(arr); }

function productSaga_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function productSaga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function productSaga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? productSaga_ownKeys(Object(source), !0).forEach(function (key) { productSaga_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : productSaga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function productSaga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var productSaga_marked = /*#__PURE__*/regeneratorRuntime.mark(productSaga_initRequest),
    productSaga_marked2 = /*#__PURE__*/regeneratorRuntime.mark(productSaga_handleError),
    productSaga_marked3 = /*#__PURE__*/regeneratorRuntime.mark(handleAction),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(productSaga);

/* eslint-disable indent */









function productSaga_initRequest() {
  return regeneratorRuntime.wrap(function initRequest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setLoading(true));

        case 2:
          _context.next = 4;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setRequestStatus(null));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, productSaga_marked);
}

function productSaga_handleError(e) {
  return regeneratorRuntime.wrap(function handleError$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setLoading(false));

        case 2:
          _context2.next = 4;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setRequestStatus((e === null || e === void 0 ? void 0 : e.message) || 'Failed to fetch products'));

        case 4:
          console.log('ERROR: ', e);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, productSaga_marked2);
}

function handleAction(location, message, status) {
  return regeneratorRuntime.wrap(function handleAction$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!location) {
            _context3.next = 3;
            break;
          }

          _context3.next = 3;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(AppRouter_history.push, location);

        case 3:
          _context3.next = 5;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(utils/* displayActionMessage */.aZ, message, status);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  }, productSaga_marked3);
}

function productSaga(_ref) {
  var type, payload, state, result, imageCollection, key, downloadURL, image, images, imageKeys, imageUrls, product, _payload$updates, _image, _imageCollection, newUpdates, url, existingUploads, newUploads, _imageKeys, _imageUrls, _images, _state, _result;

  return regeneratorRuntime.wrap(function productSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          type = _ref.type, payload = _ref.payload;
          _context4.t0 = type;
          _context4.next = _context4.t0 === constants/* GET_PRODUCTS */.tT ? 4 : _context4.t0 === constants/* ADD_PRODUCT */.zN ? 31 : _context4.t0 === constants/* EDIT_PRODUCT */.U4 ? 69 : _context4.t0 === constants/* REMOVE_PRODUCT */.eI ? 119 : _context4.t0 === constants/* SEARCH_PRODUCT */.F ? 139 : 170;
          break;

        case 4:
          _context4.prev = 4;
          _context4.next = 7;
          return productSaga_initRequest();

        case 7:
          _context4.next = 9;
          return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)();

        case 9:
          state = _context4.sent;
          _context4.next = 12;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.getProducts */.Z.getProducts, payload);

        case 12:
          result = _context4.sent;

          if (!(result.products.length === 0)) {
            _context4.next = 17;
            break;
          }

          productSaga_handleError('No items found.');
          _context4.next = 21;
          break;

        case 17:
          _context4.next = 19;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(getProductsSuccess({
            products: result.products,
            lastKey: result.lastKey ? result.lastKey : state.products.lastRefKey,
            total: result.total ? result.total : state.products.total
          }));

        case 19:
          _context4.next = 21;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setRequestStatus(''));

        case 21:
          _context4.next = 23;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setLoading(false));

        case 23:
          _context4.next = 30;
          break;

        case 25:
          _context4.prev = 25;
          _context4.t1 = _context4["catch"](4);
          console.log(_context4.t1);
          _context4.next = 30;
          return productSaga_handleError(_context4.t1);

        case 30:
          return _context4.abrupt("break", 171);

        case 31:
          _context4.prev = 31;
          _context4.next = 34;
          return productSaga_initRequest();

        case 34:
          imageCollection = payload.imageCollection;
          _context4.next = 37;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.generateKey */.Z.generateKey);

        case 37:
          key = _context4.sent;
          _context4.next = 40;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.storeImage */.Z.storeImage, key, 'products', payload.image);

        case 40:
          downloadURL = _context4.sent;
          image = {
            id: key,
            url: downloadURL
          };
          images = [];

          if (!(imageCollection.length !== 0)) {
            _context4.next = 51;
            break;
          }

          _context4.next = 46;
          return (0,redux_saga_effects_npm_proxy_esm/* all */.$6)(imageCollection.map(function () {
            return firebase/* default.generateKey */.Z.generateKey;
          }));

        case 46:
          imageKeys = _context4.sent;
          _context4.next = 49;
          return (0,redux_saga_effects_npm_proxy_esm/* all */.$6)(imageCollection.map(function (img, i) {
            return firebase/* default.storeImage */.Z.storeImage(imageKeys[i](), 'products', img.file);
          }));

        case 49:
          imageUrls = _context4.sent;
          images = imageUrls.map(function (url, i) {
            return {
              id: imageKeys[i](),
              url: url
            };
          });

        case 51:
          product = productSaga_objectSpread(productSaga_objectSpread({}, payload), {}, {
            image: downloadURL,
            imageCollection: [image].concat(productSaga_toConsumableArray(images))
          });
          _context4.next = 54;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.addProduct */.Z.addProduct, key, product);

        case 54:
          _context4.next = 56;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(addProductSuccess(productSaga_objectSpread({
            id: key
          }, product)));

        case 56:
          _context4.next = 58;
          return handleAction(routes/* ADMIN_PRODUCTS */.Ow, 'Item succesfully added', 'success');

        case 58:
          _context4.next = 60;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setLoading(false));

        case 60:
          _context4.next = 68;
          break;

        case 62:
          _context4.prev = 62;
          _context4.t2 = _context4["catch"](31);
          _context4.next = 66;
          return productSaga_handleError(_context4.t2);

        case 66:
          _context4.next = 68;
          return handleAction(undefined, "Item failed to add: ".concat(_context4.t2 === null || _context4.t2 === void 0 ? void 0 : _context4.t2.message), 'error');

        case 68:
          return _context4.abrupt("break", 171);

        case 69:
          _context4.prev = 69;
          _context4.next = 72;
          return productSaga_initRequest();

        case 72:
          _payload$updates = payload.updates, _image = _payload$updates.image, _imageCollection = _payload$updates.imageCollection;
          newUpdates = productSaga_objectSpread({}, payload.updates);

          if (!(_image.constructor === File && _typeof(_image) === 'object')) {
            _context4.next = 87;
            break;
          }

          _context4.prev = 75;
          _context4.next = 78;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.deleteImage */.Z.deleteImage, payload.id);

        case 78:
          _context4.next = 83;
          break;

        case 80:
          _context4.prev = 80;
          _context4.t3 = _context4["catch"](75);
          console.error('Failed to delete image ', _context4.t3);

        case 83:
          _context4.next = 85;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.storeImage */.Z.storeImage, payload.id, 'products', _image);

        case 85:
          url = _context4.sent;
          newUpdates = productSaga_objectSpread(productSaga_objectSpread({}, newUpdates), {}, {
            image: url
          });

        case 87:
          if (!(_imageCollection.length > 1)) {
            _context4.next = 101;
            break;
          }

          existingUploads = [];
          newUploads = [];

          _imageCollection.forEach(function (img) {
            if (img.file) {
              newUploads.push(img);
            } else {
              existingUploads.push(img);
            }
          });

          _context4.next = 93;
          return (0,redux_saga_effects_npm_proxy_esm/* all */.$6)(newUploads.map(function () {
            return firebase/* default.generateKey */.Z.generateKey;
          }));

        case 93:
          _imageKeys = _context4.sent;
          _context4.next = 96;
          return (0,redux_saga_effects_npm_proxy_esm/* all */.$6)(newUploads.map(function (img, i) {
            return firebase/* default.storeImage */.Z.storeImage(_imageKeys[i](), 'products', img.file);
          }));

        case 96:
          _imageUrls = _context4.sent;
          _images = _imageUrls.map(function (url, i) {
            return {
              id: _imageKeys[i](),
              url: url
            };
          });
          newUpdates = productSaga_objectSpread(productSaga_objectSpread({}, newUpdates), {}, {
            imageCollection: [].concat(existingUploads, productSaga_toConsumableArray(_images))
          });
          _context4.next = 102;
          break;

        case 101:
          newUpdates = productSaga_objectSpread(productSaga_objectSpread({}, newUpdates), {}, {
            imageCollection: [{
              id: new Date().getTime(),
              url: newUpdates.image
            }]
          }); // add image thumbnail to image collection from newUpdates to
          // make sure you're adding the url not the file object.

        case 102:
          _context4.next = 104;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.editProduct */.Z.editProduct, payload.id, newUpdates);

        case 104:
          _context4.next = 106;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(editProductSuccess({
            id: payload.id,
            updates: newUpdates
          }));

        case 106:
          _context4.next = 108;
          return handleAction(routes/* ADMIN_PRODUCTS */.Ow, 'Item succesfully edited', 'success');

        case 108:
          _context4.next = 110;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setLoading(false));

        case 110:
          _context4.next = 118;
          break;

        case 112:
          _context4.prev = 112;
          _context4.t4 = _context4["catch"](69);
          _context4.next = 116;
          return productSaga_handleError(_context4.t4);

        case 116:
          _context4.next = 118;
          return handleAction(undefined, "Item failed to edit: ".concat(_context4.t4.message), 'error');

        case 118:
          return _context4.abrupt("break", 171);

        case 119:
          _context4.prev = 119;
          _context4.next = 122;
          return productSaga_initRequest();

        case 122:
          _context4.next = 124;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.removeProduct */.Z.removeProduct, payload);

        case 124:
          _context4.next = 126;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(removeProductSuccess(payload));

        case 126:
          _context4.next = 128;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setLoading(false));

        case 128:
          _context4.next = 130;
          return handleAction(routes/* ADMIN_PRODUCTS */.Ow, 'Item succesfully removed', 'success');

        case 130:
          _context4.next = 138;
          break;

        case 132:
          _context4.prev = 132;
          _context4.t5 = _context4["catch"](119);
          _context4.next = 136;
          return productSaga_handleError(_context4.t5);

        case 136:
          _context4.next = 138;
          return handleAction(undefined, "Item failed to remove: ".concat(_context4.t5.message), 'error');

        case 138:
          return _context4.abrupt("break", 171);

        case 139:
          _context4.prev = 139;
          _context4.next = 142;
          return productSaga_initRequest();

        case 142:
          _context4.next = 144;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(clearSearchState());

        case 144:
          _context4.next = 146;
          return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)();

        case 146:
          _state = _context4.sent;
          _context4.next = 149;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.searchProducts */.Z.searchProducts, payload.searchKey);

        case 149:
          _result = _context4.sent;

          if (!(_result.products.length === 0)) {
            _context4.next = 157;
            break;
          }

          _context4.next = 153;
          return productSaga_handleError({
            message: 'No product found.'
          });

        case 153:
          _context4.next = 155;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(clearSearchState());

        case 155:
          _context4.next = 161;
          break;

        case 157:
          _context4.next = 159;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(searchProductSuccess({
            products: _result.products,
            lastKey: _result.lastKey ? _result.lastKey : _state.products.searchedProducts.lastRefKey,
            total: _result.total ? _result.total : _state.products.searchedProducts.total
          }));

        case 159:
          _context4.next = 161;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setRequestStatus(''));

        case 161:
          _context4.next = 163;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setLoading(false));

        case 163:
          _context4.next = 169;
          break;

        case 165:
          _context4.prev = 165;
          _context4.t6 = _context4["catch"](139);
          _context4.next = 169;
          return productSaga_handleError(_context4.t6);

        case 169:
          return _context4.abrupt("break", 171);

        case 170:
          throw new Error("Unexpected action type ".concat(type));

        case 171:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[4, 25], [31, 62], [69, 112], [75, 80], [119, 132], [139, 165]]);
}

/* harmony default export */ const sagas_productSaga = (productSaga);
;// CONCATENATED MODULE: ./src/redux/sagas/profileSaga.js
var profileSaga_marked = /*#__PURE__*/regeneratorRuntime.mark(profileSaga);

function profileSaga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function profileSaga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? profileSaga_ownKeys(Object(source), !0).forEach(function (key) { profileSaga_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : profileSaga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function profileSaga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function profileSaga(_ref) {
  var type, payload, state, _payload$credentials, email, password, _payload$files, avatarFile, bannerFile, bannerURL, avatarURL, updates;

  return regeneratorRuntime.wrap(function profileSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          type = _ref.type, payload = _ref.payload;
          _context.t0 = type;
          _context.next = _context.t0 === constants/* UPDATE_EMAIL */.Hq ? 4 : _context.t0 === constants/* UPDATE_PROFILE */.r0 ? 21 : 81;
          break;

        case 4:
          _context.prev = 4;
          _context.next = 7;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setLoading(false));

        case 7:
          _context.next = 9;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.updateEmail */.Z.updateEmail, payload.password, payload.newEmail);

        case 9:
          _context.next = 11;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setLoading(false));

        case 11:
          _context.next = 13;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(AppRouter_history.push, '/profile');

        case 13:
          _context.next = 15;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(utils/* displayActionMessage */.aZ, 'Email Updated Successfully!', 'success');

        case 15:
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t1 = _context["catch"](4);
          console.log(_context.t1.message);

        case 20:
          return _context.abrupt("break", 82);

        case 21:
          _context.prev = 21;
          _context.next = 24;
          return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)();

        case 24:
          state = _context.sent;
          _payload$credentials = payload.credentials, email = _payload$credentials.email, password = _payload$credentials.password;
          _payload$files = payload.files, avatarFile = _payload$files.avatarFile, bannerFile = _payload$files.bannerFile;
          _context.next = 29;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setLoading(true));

        case 29:
          if (!(email && password && email !== state.profile.email)) {
            _context.next = 32;
            break;
          }

          _context.next = 32;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.updateEmail */.Z.updateEmail, password, email);

        case 32:
          if (!(avatarFile || bannerFile)) {
            _context.next = 56;
            break;
          }

          if (!bannerFile) {
            _context.next = 39;
            break;
          }

          _context.next = 36;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.storeImage */.Z.storeImage, state.auth.id, 'banner', bannerFile);

        case 36:
          _context.t2 = _context.sent;
          _context.next = 40;
          break;

        case 39:
          _context.t2 = payload.updates.banner;

        case 40:
          bannerURL = _context.t2;

          if (!avatarFile) {
            _context.next = 47;
            break;
          }

          _context.next = 44;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.storeImage */.Z.storeImage, state.auth.id, 'avatar', avatarFile);

        case 44:
          _context.t3 = _context.sent;
          _context.next = 48;
          break;

        case 47:
          _context.t3 = payload.updates.avatar;

        case 48:
          avatarURL = _context.t3;
          updates = profileSaga_objectSpread(profileSaga_objectSpread({}, payload.updates), {}, {
            avatar: avatarURL,
            banner: bannerURL
          });
          _context.next = 52;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.updateProfile */.Z.updateProfile, state.auth.id, updates);

        case 52:
          _context.next = 54;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateProfileSuccess(updates));

        case 54:
          _context.next = 60;
          break;

        case 56:
          _context.next = 58;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(firebase/* default.updateProfile */.Z.updateProfile, state.auth.id, payload.updates);

        case 58:
          _context.next = 60;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateProfileSuccess(payload.updates));

        case 60:
          _context.next = 62;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setLoading(false));

        case 62:
          _context.next = 64;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(AppRouter_history.push, routes/* ACCOUNT */.yV);

        case 64:
          _context.next = 66;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(utils/* displayActionMessage */.aZ, 'Profile Updated Successfully!', 'success');

        case 66:
          _context.next = 80;
          break;

        case 68:
          _context.prev = 68;
          _context.t4 = _context["catch"](21);
          console.log(_context.t4);
          _context.next = 73;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(setLoading(false));

        case 73:
          if (!(_context.t4.code === 'auth/wrong-password')) {
            _context.next = 78;
            break;
          }

          _context.next = 76;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(utils/* displayActionMessage */.aZ, 'Wrong password, profile update failed :(', 'error');

        case 76:
          _context.next = 80;
          break;

        case 78:
          _context.next = 80;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(utils/* displayActionMessage */.aZ, ":( Failed to update profile. ".concat(_context.t4.message ? _context.t4.message : ''), 'error');

        case 80:
          return _context.abrupt("break", 82);

        case 81:
          throw new Error('Unexpected action type.');

        case 82:
        case "end":
          return _context.stop();
      }
    }
  }, profileSaga_marked, null, [[4, 17], [21, 68]]);
}

/* harmony default export */ const sagas_profileSaga = (profileSaga);
;// CONCATENATED MODULE: ./src/redux/sagas/rootSaga.js
var rootSaga_marked = /*#__PURE__*/regeneratorRuntime.mark(rootSaga);







function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,redux_saga_effects_npm_proxy_esm/* takeLatest */.Fm)([constants/* SIGNIN */.OT, constants/* SIGNUP */.kp, constants/* SIGNOUT */.PM, constants/* SIGNIN_WITH_GOOGLE */.oV, constants/* SIGNIN_WITH_FACEBOOK */.C5, constants/* SIGNIN_WITH_GITHUB */.Oh, constants/* ON_AUTHSTATE_CHANGED */.Gm, constants/* ON_AUTHSTATE_SUCCESS */.$z, constants/* ON_AUTHSTATE_FAIL */.tI, constants/* SET_AUTH_PERSISTENCE */.Rf, constants/* RESET_PASSWORD */.bk], sagas_authSaga);

        case 2:
          _context.next = 4;
          return (0,redux_saga_effects_npm_proxy_esm/* takeLatest */.Fm)([constants/* ADD_PRODUCT */.zN, constants/* SEARCH_PRODUCT */.F, constants/* REMOVE_PRODUCT */.eI, constants/* EDIT_PRODUCT */.U4, constants/* GET_PRODUCTS */.tT], sagas_productSaga);

        case 4:
          _context.next = 6;
          return (0,redux_saga_effects_npm_proxy_esm/* takeLatest */.Fm)([constants/* UPDATE_EMAIL */.Hq, constants/* UPDATE_PROFILE */.r0], sagas_profileSaga);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, rootSaga_marked);
}

/* harmony default export */ const sagas_rootSaga = (rootSaga);
;// CONCATENATED MODULE: ./src/redux/store/store.js






var sagaMiddleware = (0,redux_saga_core_npm_proxy_esm/* default */.ZP)();
var composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux/* compose */.qC;
var authPersistConfig = {
  key: 'root',
  storage: storage/* default */.Z,
  whitelist: ['auth', 'profile', 'basket', 'checkout']
};
/* harmony default export */ const store = (function () {
  var store = (0,redux/* createStore */.MT)((0,es/* persistCombineReducers */.Wq)(authPersistConfig, reducers), composeEnhancer((0,redux/* applyMiddleware */.md)(sagaMiddleware)));
  var persistor = (0,es/* persistStore */.p5)(store);
  sagaMiddleware.run(sagas_rootSaga);
  return {
    store: store,
    persistor: persistor
  };
});
// EXTERNAL MODULE: ./node_modules/webfontloader/webfontloader.js
var webfontloader = __webpack_require__(75933);
var webfontloader_default = /*#__PURE__*/__webpack_require__.n(webfontloader);
// EXTERNAL MODULE: ./node_modules/redux-persist/es/integration/react.js
var integration_react = __webpack_require__(78603);
;// CONCATENATED MODULE: ./src/App.jsx
/* eslint-disable react/forbid-prop-types */







var App = function App(_ref) {
  var store = _ref.store,
      persistor = _ref.persistor;
  return /*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(react_redux_es/* Provider */.zt, {
    store: store
  }, /*#__PURE__*/react.createElement(integration_react/* PersistGate */.r, {
    loading: /*#__PURE__*/react.createElement(common/* Preloader */.p9, null),
    persistor: persistor
  }, /*#__PURE__*/react.createElement(routers_AppRouter, null))));
};

App.propTypes = {
  store: (prop_types_default()).any.isRequired,
  persistor: (prop_types_default()).any.isRequired
};
/* harmony default export */ const src_App = (App);
;// CONCATENATED MODULE: ./src/index.jsx











webfontloader_default().load({
  google: {
    families: ['Tajawal']
  }
});

var _configureStore = store(),
    src_store = _configureStore.store,
    persistor = _configureStore.persistor;

var root = document.getElementById('app'); // Render the preloader on initial load

(0,react_dom.render)( /*#__PURE__*/react.createElement(common/* Preloader */.p9, null), root);
firebase/* default.auth.onAuthStateChanged */.Z.auth.onAuthStateChanged(function (user) {
  if (user) {
    src_store.dispatch((0,authActions/* onAuthStateSuccess */.lg)(user));
  } else {
    src_store.dispatch((0,authActions/* onAuthStateFail */.vl)('Failed to authenticate'));
  } // then render the app after checking the auth state


  (0,react_dom.render)( /*#__PURE__*/react.createElement(src_App, {
    store: src_store,
    persistor: persistor
  }), root);
});

if ( true && 'serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      console.log('SW registered: ', registration);
    })["catch"](function (registrationError) {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

/***/ }),

/***/ 67865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DY": () => (/* binding */ signInWithFacebook),
/* harmony export */   "P_": () => (/* binding */ signOutSuccess),
/* harmony export */   "Vh": () => (/* binding */ signInSuccess),
/* harmony export */   "c0": () => (/* binding */ resetPassword),
/* harmony export */   "gU": () => (/* binding */ signInWithGithub),
/* harmony export */   "lg": () => (/* binding */ onAuthStateSuccess),
/* harmony export */   "qj": () => (/* binding */ signInWithGoogle),
/* harmony export */   "vl": () => (/* binding */ onAuthStateFail),
/* harmony export */   "w7": () => (/* binding */ signOut),
/* harmony export */   "y1": () => (/* binding */ signUp),
/* harmony export */   "zB": () => (/* binding */ signIn)
/* harmony export */ });
/* unused harmony exports setAuthPersistence, onAuthStateChanged */
/* harmony import */ var constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95985);

var signIn = function signIn(email, password) {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .SIGNIN */ .OT,
    payload: {
      email: email,
      password: password
    }
  };
};
var signInWithGoogle = function signInWithGoogle() {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .SIGNIN_WITH_GOOGLE */ .oV
  };
};
var signInWithFacebook = function signInWithFacebook() {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .SIGNIN_WITH_FACEBOOK */ .C5
  };
};
var signInWithGithub = function signInWithGithub() {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .SIGNIN_WITH_GITHUB */ .Oh
  };
};
var signUp = function signUp(user) {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .SIGNUP */ .kp,
    payload: user
  };
};
var signInSuccess = function signInSuccess(auth) {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .SIGNIN_SUCCESS */ .OD,
    payload: auth
  };
};
var setAuthPersistence = function setAuthPersistence() {
  return {
    type: type.SET_AUTH_PERSISTENCE
  };
};
var signOut = function signOut() {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .SIGNOUT */ .PM
  };
};
var signOutSuccess = function signOutSuccess() {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .SIGNOUT_SUCCESS */ .D$
  };
};
var onAuthStateChanged = function onAuthStateChanged() {
  return {
    type: type.ON_AUTHSTATE_CHANGED
  };
};
var onAuthStateSuccess = function onAuthStateSuccess(user) {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .ON_AUTHSTATE_SUCCESS */ .$z,
    payload: user
  };
};
var onAuthStateFail = function onAuthStateFail(error) {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .ON_AUTHSTATE_FAIL */ .tI,
    payload: error
  };
};
var resetPassword = function resetPassword(email) {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .RESET_PASSWORD */ .bk,
    payload: email
  };
};

/***/ }),

/***/ 14548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Er": () => (/* binding */ removeFromBasket),
/* harmony export */   "H": () => (/* binding */ addToBasket),
/* harmony export */   "Mq": () => (/* binding */ minusQtyItem),
/* harmony export */   "RT": () => (/* binding */ clearBasket),
/* harmony export */   "qI": () => (/* binding */ setBasketItems),
/* harmony export */   "xj": () => (/* binding */ addQtyItem)
/* harmony export */ });
/* harmony import */ var constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95985);

var setBasketItems = function setBasketItems() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .SET_BASKET_ITEMS */ .RI,
    payload: items
  };
};
var addToBasket = function addToBasket(product) {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .ADD_TO_BASKET */ .TR,
    payload: product
  };
};
var removeFromBasket = function removeFromBasket(id) {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .REMOVE_FROM_BASKET */ .b1,
    payload: id
  };
};
var clearBasket = function clearBasket() {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .CLEAR_BASKET */ .DC
  };
};
var addQtyItem = function addQtyItem(id) {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .ADD_QTY_ITEM */ .K2,
    payload: id
  };
};
var minusQtyItem = function minusQtyItem(id) {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .MINUS_QTY_ITEM */ .TS,
    payload: id
  };
};

/***/ }),

/***/ 13266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IT": () => (/* binding */ clearRecentSearch),
/* harmony export */   "Q_": () => (/* binding */ removeSelectedRecent),
/* harmony export */   "Rb": () => (/* binding */ applyFilter),
/* harmony export */   "sx": () => (/* binding */ resetFilter)
/* harmony export */ });
/* unused harmony exports setTextFilter, setBrandFilter, setMinPriceFilter, setMaxPriceFilter */
/* harmony import */ var constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95985);

var setTextFilter = function setTextFilter(keyword) {
  return {
    type: SET_TEXT_FILTER,
    payload: keyword
  };
};
var setBrandFilter = function setBrandFilter(brand) {
  return {
    type: SET_BRAND_FILTER,
    payload: brand
  };
};
var setMinPriceFilter = function setMinPriceFilter(min) {
  return {
    type: SET_MIN_PRICE_FILTER,
    payload: min
  };
};
var setMaxPriceFilter = function setMaxPriceFilter(max) {
  return {
    type: SET_MAX_PRICE_FILTER,
    payload: max
  };
};
var resetFilter = function resetFilter() {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .RESET_FILTER */ .Xm
  };
};
var clearRecentSearch = function clearRecentSearch() {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .CLEAR_RECENT_SEARCH */ .xV
  };
};
var removeSelectedRecent = function removeSelectedRecent(keyword) {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .REMOVE_SELECTED_RECENT */ .vQ,
    payload: keyword
  };
};
var applyFilter = function applyFilter(filters) {
  return {
    type: constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .APPLY_FILTER */ .MY,
    payload: filters
  };
};

/***/ }),

/***/ 30874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AD": () => (/* binding */ selectFilter),
/* harmony export */   "aB": () => (/* binding */ selectMax),
/* harmony export */   "fJ": () => (/* binding */ selectMin)
/* harmony export */ });
/* eslint-disable no-plusplus */

/* eslint-disable no-else-return */
var selectFilter = function selectFilter(products, filter) {
  if (!products || products.length === 0) return [];
  var keyword = filter.keyword.toLowerCase();
  return products.filter(function (product) {
    var isInRange = filter.maxPrice ? product.price >= filter.minPrice && product.price <= filter.maxPrice : true;
    var matchKeyword = product.keywords ? product.keywords.includes(keyword) : true; // const matchName = product.name ? product.name.toLowerCase().includes(keyword) : true;

    var matchDescription = product.description ? product.description.toLowerCase().includes(keyword) : true;
    var matchBrand = product.brand ? product.brand.toLowerCase().includes(filter.brand) : true;
    return (matchKeyword || matchDescription) && matchBrand && isInRange;
  }).sort(function (a, b) {
    if (filter.sortBy === 'name-desc') {
      return a.name < b.name ? 1 : -1;
    } else if (filter.sortBy === 'name-asc') {
      return a.name > b.name ? 1 : -1;
    } else if (filter.sortBy === 'price-desc') {
      return a.price < b.price ? 1 : -1;
    }

    return a.price > b.price ? 1 : -1;
  });
}; // Select product with highest price

var selectMax = function selectMax(products) {
  if (!products || products.length === 0) return 0;
  var high = products[0];

  for (var i = 0; i < products.length; i++) {
    if (products[i].price > high.price) {
      high = products[i];
    }
  }

  return Math.floor(high.price);
}; // Select product with lowest price

var selectMin = function selectMin(products) {
  if (!products || products.length === 0) return 0;
  var low = products[0];

  for (var i = 0; i < products.length; i++) {
    if (products[i].price < low.price) {
      low = products[i];
    }
  }

  return Math.floor(low.price);
};

/***/ }),

/***/ 73879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ firebase)
});

// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.esm.js
var index_esm = __webpack_require__(15503);
// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.esm.js + 1 modules
var dist_index_esm = __webpack_require__(77397);
// EXTERNAL MODULE: ./node_modules/firebase/firestore/dist/index.esm.js + 3 modules
var firestore_dist_index_esm = __webpack_require__(65766);
// EXTERNAL MODULE: ./node_modules/firebase/storage/dist/index.esm.js + 1 modules
var storage_dist_index_esm = __webpack_require__(30332);
;// CONCATENATED MODULE: ./src/services/config.js
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DB_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID
// };
var firebaseConfig = {
  apiKey: "AIzaSyAaKF4Wm_ErNVELPv7brkM_3BSCbALsjbs",
  authDomain: "e-commerce-ac0a1.firebaseapp.com",
  databaseURL: "https://e-commerce-ac0a1-default-rtdb.firebaseio.com",
  projectId: "e-commerce-ac0a1",
  storageBucket: "e-commerce-ac0a1.appspot.com",
  messagingSenderId: "915830104140",
  appId: "1:915830104140:web:11d9ec76d5ef33d8ed14e9",
  measurementId: "G-5712EB3L5H"
};
/* harmony default export */ const config = (firebaseConfig);
;// CONCATENATED MODULE: ./src/services/firebase.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Firebase = /*#__PURE__*/_createClass(function Firebase() {
  var _this = this;

  _classCallCheck(this, Firebase);

  _defineProperty(this, "createAccount", function (email, password) {
    return _this.auth.createUserWithEmailAndPassword(email, password);
  });

  _defineProperty(this, "signIn", function (email, password) {
    return _this.auth.signInWithEmailAndPassword(email, password);
  });

  _defineProperty(this, "signInWithGoogle", function () {
    return _this.auth.signInWithPopup(new index_esm/* default.auth.GoogleAuthProvider */.Z.auth.GoogleAuthProvider());
  });

  _defineProperty(this, "signInWithFacebook", function () {
    return _this.auth.signInWithPopup(new index_esm/* default.auth.FacebookAuthProvider */.Z.auth.FacebookAuthProvider());
  });

  _defineProperty(this, "signInWithGithub", function () {
    return _this.auth.signInWithPopup(new index_esm/* default.auth.GithubAuthProvider */.Z.auth.GithubAuthProvider());
  });

  _defineProperty(this, "signOut", function () {
    return _this.auth.signOut();
  });

  _defineProperty(this, "passwordReset", function (email) {
    return _this.auth.sendPasswordResetEmail(email);
  });

  _defineProperty(this, "addUser", function (id, user) {
    return _this.db.collection("users").doc(id).set(user);
  });

  _defineProperty(this, "getUser", function (id) {
    return _this.db.collection("users").doc(id).get();
  });

  _defineProperty(this, "passwordUpdate", function (password) {
    return _this.auth.currentUser.updatePassword(password);
  });

  _defineProperty(this, "changePassword", function (currentPassword, newPassword) {
    return new Promise(function (resolve, reject) {
      _this.reauthenticate(currentPassword).then(function () {
        var user = _this.auth.currentUser;
        user.updatePassword(newPassword).then(function () {
          resolve("Password updated successfully!");
        })["catch"](function (error) {
          return reject(error);
        });
      })["catch"](function (error) {
        return reject(error);
      });
    });
  });

  _defineProperty(this, "reauthenticate", function (currentPassword) {
    var user = _this.auth.currentUser;
    var cred = index_esm/* default.auth.EmailAuthProvider.credential */.Z.auth.EmailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  });

  _defineProperty(this, "updateEmail", function (currentPassword, newEmail) {
    return new Promise(function (resolve, reject) {
      _this.reauthenticate(currentPassword).then(function () {
        var user = _this.auth.currentUser;
        user.updateEmail(newEmail).then(function () {
          resolve("Email Successfully updated");
        })["catch"](function (error) {
          return reject(error);
        });
      })["catch"](function (error) {
        return reject(error);
      });
    });
  });

  _defineProperty(this, "updateProfile", function (id, updates) {
    return _this.db.collection("users").doc(id).update(updates);
  });

  _defineProperty(this, "onAuthStateChanged", function () {
    return new Promise(function (resolve, reject) {
      _this.auth.onAuthStateChanged(function (user) {
        if (user) {
          resolve(user);
        } else {
          reject(new Error("Auth State Changed failed"));
        }
      });
    });
  });

  _defineProperty(this, "saveBasketItems", function (items, userId) {
    return _this.db.collection("users").doc(userId).update({
      basket: items
    });
  });

  _defineProperty(this, "setAuthPersistence", function () {
    return _this.auth.setPersistence(index_esm/* default.auth.Auth.Persistence.LOCAL */.Z.auth.Auth.Persistence.LOCAL);
  });

  _defineProperty(this, "getSingleProduct", function (id) {
    return _this.db.collection("products").doc(id).get();
  });

  _defineProperty(this, "getProducts", function (lastRefKey) {
    var didTimeout = false;
    return new Promise(function (resolve, reject) {
      _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var query, snapshot, products, lastKey, timeout, totalQuery, total, _query, _snapshot, _products, _lastKey;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!lastRefKey) {
                  _context.next = 17;
                  break;
                }

                _context.prev = 1;
                query = _this.db.collection("products").orderBy(index_esm/* default.firestore.FieldPath.documentId */.Z.firestore.FieldPath.documentId()).startAfter(lastRefKey).limit(12);
                _context.next = 5;
                return query.get();

              case 5:
                snapshot = _context.sent;
                products = [];
                snapshot.forEach(function (doc) {
                  return products.push(_objectSpread({
                    id: doc.id
                  }, doc.data()));
                });
                lastKey = snapshot.docs[snapshot.docs.length - 1];
                resolve({
                  products: products,
                  lastKey: lastKey
                });
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                reject((_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) || ":( Failed to fetch products.");

              case 15:
                _context.next = 36;
                break;

              case 17:
                timeout = setTimeout(function () {
                  didTimeout = true;
                  reject(new Error("Request timeout, please try again"));
                }, 15000);
                _context.prev = 18;
                _context.next = 21;
                return _this.db.collection("products").get();

              case 21:
                totalQuery = _context.sent;
                total = totalQuery.docs.length;
                _query = _this.db.collection("products").orderBy(index_esm/* default.firestore.FieldPath.documentId */.Z.firestore.FieldPath.documentId()).limit(12);
                _context.next = 26;
                return _query.get();

              case 26:
                _snapshot = _context.sent;
                clearTimeout(timeout);

                if (!didTimeout) {
                  _products = [];

                  _snapshot.forEach(function (doc) {
                    return _products.push(_objectSpread({
                      id: doc.id
                    }, doc.data()));
                  });

                  _lastKey = _snapshot.docs[_snapshot.docs.length - 1];
                  resolve({
                    products: _products,
                    lastKey: _lastKey,
                    total: total
                  });
                }

                _context.next = 36;
                break;

              case 31:
                _context.prev = 31;
                _context.t1 = _context["catch"](18);

                if (!didTimeout) {
                  _context.next = 35;
                  break;
                }

                return _context.abrupt("return");

              case 35:
                reject((_context.t1 === null || _context.t1 === void 0 ? void 0 : _context.t1.message) || ":( Failed to fetch products.");

              case 36:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 12], [18, 31]]);
      }))();
    });
  });

  _defineProperty(this, "searchProducts", function (searchKey) {
    var didTimeout = false;
    return new Promise(function (resolve, reject) {
      _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var productsRef, timeout, searchedNameRef, searchedKeywordsRef, nameSnaps, keywordsSnaps, searchedNameProducts, searchedKeywordsProducts, lastKey, mergedProducts, hash;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                productsRef = _this.db.collection("products");
                timeout = setTimeout(function () {
                  didTimeout = true;
                  reject(new Error("Request timeout, please try again"));
                }, 15000);
                _context2.prev = 2;
                searchedNameRef = productsRef.orderBy("name_lower").where("name_lower", ">=", searchKey).where("name_lower", "<=", "".concat(searchKey, "\uF8FF")).limit(12);
                searchedKeywordsRef = productsRef.orderBy("dateAdded", "desc").where("keywords", "array-contains-any", searchKey.split(" ")).limit(12); // const totalResult = await totalQueryRef.get();

                _context2.next = 7;
                return searchedNameRef.get();

              case 7:
                nameSnaps = _context2.sent;
                _context2.next = 10;
                return searchedKeywordsRef.get();

              case 10:
                keywordsSnaps = _context2.sent;
                // const total = totalResult.docs.length;
                clearTimeout(timeout);

                if (!didTimeout) {
                  searchedNameProducts = [];
                  searchedKeywordsProducts = [];
                  lastKey = null;

                  if (!nameSnaps.empty) {
                    nameSnaps.forEach(function (doc) {
                      searchedNameProducts.push(_objectSpread({
                        id: doc.id
                      }, doc.data()));
                    });
                    lastKey = nameSnaps.docs[nameSnaps.docs.length - 1];
                  }

                  if (!keywordsSnaps.empty) {
                    keywordsSnaps.forEach(function (doc) {
                      searchedKeywordsProducts.push(_objectSpread({
                        id: doc.id
                      }, doc.data()));
                    });
                  } // MERGE PRODUCTS


                  mergedProducts = [].concat(searchedNameProducts, searchedKeywordsProducts);
                  hash = {};
                  mergedProducts.forEach(function (product) {
                    hash[product.id] = product;
                  });
                  resolve({
                    products: Object.values(hash),
                    lastKey: lastKey
                  });
                }

                _context2.next = 20;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](2);

                if (!didTimeout) {
                  _context2.next = 19;
                  break;
                }

                return _context2.abrupt("return");

              case 19:
                reject(_context2.t0);

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 15]]);
      }))();
    });
  });

  _defineProperty(this, "getFeaturedProducts", function () {
    var itemsCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
    return _this.db.collection("products").where("isFeatured", "==", true).limit(itemsCount).get();
  });

  _defineProperty(this, "getRecommendedProducts", function () {
    var itemsCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
    return _this.db.collection("products").where("isRecommended", "==", true).limit(itemsCount).get();
  });

  _defineProperty(this, "addProduct", function (id, product) {
    return _this.db.collection("products").doc(id).set(product);
  });

  _defineProperty(this, "generateKey", function () {
    return _this.db.collection("products").doc().id;
  });

  _defineProperty(this, "storeImage", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id, folder, imageFile) {
      var snapshot, downloadURL;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this.storage.ref(folder).child(id).put(imageFile);

            case 2:
              snapshot = _context3.sent;
              _context3.next = 5;
              return snapshot.ref.getDownloadURL();

            case 5:
              downloadURL = _context3.sent;
              return _context3.abrupt("return", downloadURL);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x, _x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }());

  _defineProperty(this, "deleteImage", function (id) {
    return _this.storage.ref("products").child(id)["delete"]();
  });

  _defineProperty(this, "editProduct", function (id, updates) {
    return _this.db.collection("products").doc(id).update(updates);
  });

  _defineProperty(this, "removeProduct", function (id) {
    return _this.db.collection("products").doc(id)["delete"]();
  });

  index_esm/* default.initializeApp */.Z.initializeApp(config);
  this.storage = index_esm/* default.storage */.Z.storage();
  this.db = index_esm/* default.firestore */.Z.firestore();
  this.auth = index_esm/* default.auth */.Z.auth();
} // AUTH ACTIONS ------------
);

var firebaseInstance = new Firebase();
/* harmony default export */ const firebase = (firebaseInstance);

/***/ }),

/***/ 43585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7085);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79508);
/* harmony import */ var components_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10090);
/* harmony import */ var components_formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79895);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41054);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56311);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19501);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable jsx-a11y/label-has-associated-control */







 // Default brand names that I used. You can use what you want

var brandOptions = [{
  value: 'Salt Maalat',
  label: 'Salt Maalat'
}, {
  value: 'Betsin Maalat',
  label: 'Betsin Maalat'
}, {
  value: 'Sexbomb',
  label: 'Sexbomb'
}, {
  value: 'Black Kibal',
  label: 'Black Kibal'
}];
var FormSchema = yup__WEBPACK_IMPORTED_MODULE_5__/* .object */ .Ry().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_5__/* .string */ .Z_().required('Product name is required.').max(60, 'Product name must only be less than 60 characters.'),
  brand: yup__WEBPACK_IMPORTED_MODULE_5__/* .string */ .Z_().required('Brand name is required.'),
  price: yup__WEBPACK_IMPORTED_MODULE_5__/* .number */ .Rx().positive('Price is invalid.').integer('Price should be an integer.').required('Price is required.'),
  description: yup__WEBPACK_IMPORTED_MODULE_5__/* .string */ .Z_().required('Description is required.'),
  maxQuantity: yup__WEBPACK_IMPORTED_MODULE_5__/* .number */ .Rx().positive('Max quantity is invalid.').integer('Max quantity should be an integer.').required('Max quantity is required.'),
  keywords: yup__WEBPACK_IMPORTED_MODULE_5__/* .array */ .IX().of(yup__WEBPACK_IMPORTED_MODULE_5__/* .string */ .Z_()).min(1, 'Please enter at least 1 keyword for this product.'),
  sizes: yup__WEBPACK_IMPORTED_MODULE_5__/* .array */ .IX().of(yup__WEBPACK_IMPORTED_MODULE_5__/* .number */ .Rx()).min(1, 'Please enter a size for this product.'),
  isFeatured: yup__WEBPACK_IMPORTED_MODULE_5__/* .boolean */ .O7(),
  isRecommended: yup__WEBPACK_IMPORTED_MODULE_5__/* .boolean */ .O7(),
  availableColors: yup__WEBPACK_IMPORTED_MODULE_5__/* .array */ .IX().of(yup__WEBPACK_IMPORTED_MODULE_5__/* .string */ .Z_().required()).min(1, 'Please add a default color for this product.')
});

var ProductForm = function ProductForm(_ref) {
  var product = _ref.product,
      onSubmit = _ref.onSubmit,
      isLoading = _ref.isLoading;
  var initFormikValues = {
    name: (product === null || product === void 0 ? void 0 : product.name) || '',
    brand: (product === null || product === void 0 ? void 0 : product.brand) || '',
    price: (product === null || product === void 0 ? void 0 : product.price) || 0,
    maxQuantity: (product === null || product === void 0 ? void 0 : product.maxQuantity) || 0,
    description: (product === null || product === void 0 ? void 0 : product.description) || '',
    keywords: (product === null || product === void 0 ? void 0 : product.keywords) || [],
    sizes: (product === null || product === void 0 ? void 0 : product.sizes) || [],
    isFeatured: (product === null || product === void 0 ? void 0 : product.isFeatured) || false,
    isRecommended: (product === null || product === void 0 ? void 0 : product.isRecommended) || false,
    availableColors: (product === null || product === void 0 ? void 0 : product.availableColors) || []
  };

  var _useFileHandler = (0,hooks__WEBPACK_IMPORTED_MODULE_3__/* .useFileHandler */ .bE)({
    image: {},
    imageCollection: (product === null || product === void 0 ? void 0 : product.imageCollection) || []
  }),
      imageFile = _useFileHandler.imageFile,
      isFileLoading = _useFileHandler.isFileLoading,
      onFileChange = _useFileHandler.onFileChange,
      removeImage = _useFileHandler.removeImage;

  var onSubmitForm = function onSubmitForm(form) {
    if (imageFile.image.file || product.imageUrl) {
      var _imageFile$image;

      onSubmit(_objectSpread(_objectSpread({}, form), {}, {
        quantity: 1,
        // due to firebase function billing policy, let's add lowercase version
        // of name here instead in firebase functions
        name_lower: form.name.toLowerCase(),
        dateAdded: new Date().getTime(),
        image: (imageFile === null || imageFile === void 0 ? void 0 : (_imageFile$image = imageFile.image) === null || _imageFile$image === void 0 ? void 0 : _imageFile$image.file) || product.imageUrl,
        imageCollection: imageFile.imageCollection
      }));
    } else {
      // eslint-disable-next-line no-alert
      alert('Product thumbnail image is required.');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(formik__WEBPACK_IMPORTED_MODULE_2__/* .Formik */ .J9, {
    initialValues: initFormikValues,
    validateOnChange: true,
    validationSchema: FormSchema,
    onSubmit: onSubmitForm
  }, function (_ref2) {
    var values = _ref2.values,
        setValues = _ref2.setValues;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(formik__WEBPACK_IMPORTED_MODULE_2__/* .Form */ .l0, {
      className: "product-form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "product-form-inputs"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(formik__WEBPACK_IMPORTED_MODULE_2__/* .Field */ .gN, {
      disabled: isLoading,
      name: "name",
      type: "text",
      label: "* Product Name",
      placeholder: "Gago",
      style: {
        textTransform: 'capitalize'
      },
      component: components_formik__WEBPACK_IMPORTED_MODULE_1__/* .CustomInput */ .t7
    })), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(components_formik__WEBPACK_IMPORTED_MODULE_1__/* .CustomCreatableSelect */ .VT, {
      defaultValue: {
        label: values.brand,
        value: values.brand
      },
      name: "brand",
      iid: "brand",
      options: brandOptions,
      disabled: isLoading,
      placeholder: "Select/Create Brand",
      label: "* Brand"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(formik__WEBPACK_IMPORTED_MODULE_2__/* .Field */ .gN, {
      disabled: isLoading,
      name: "description",
      id: "description",
      rows: 3,
      label: "* Product Description",
      component: components_formik__WEBPACK_IMPORTED_MODULE_1__/* .CustomTextarea */ .iJ
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(formik__WEBPACK_IMPORTED_MODULE_2__/* .Field */ .gN, {
      disabled: isLoading,
      name: "price",
      id: "price",
      type: "number",
      label: "* Price",
      component: components_formik__WEBPACK_IMPORTED_MODULE_1__/* .CustomInput */ .t7
    })), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(formik__WEBPACK_IMPORTED_MODULE_2__/* .Field */ .gN, {
      disabled: isLoading,
      name: "maxQuantity",
      type: "number",
      id: "maxQuantity",
      label: "* Max Quantity",
      component: components_formik__WEBPACK_IMPORTED_MODULE_1__/* .CustomInput */ .t7
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(components_formik__WEBPACK_IMPORTED_MODULE_1__/* .CustomCreatableSelect */ .VT, {
      defaultValue: values.keywords.map(function (key) {
        return {
          value: key,
          label: key
        };
      }),
      name: "keywords",
      iid: "keywords",
      isMulti: true,
      disabled: isLoading,
      placeholder: "Create/Select Keywords",
      label: "* Keywords"
    })), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(components_formik__WEBPACK_IMPORTED_MODULE_1__/* .CustomCreatableSelect */ .VT, {
      defaultValue: values.keywords.map(function (key) {
        return {
          value: key,
          label: key
        };
      }),
      name: "sizes",
      iid: "sizes",
      type: "number",
      isMulti: true,
      disabled: isLoading,
      placeholder: "Create/Select Sizes",
      label: "* Sizes (Millimeter)"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(formik__WEBPACK_IMPORTED_MODULE_2__/* .FieldArray */ .F2, {
      name: "availableColors",
      disabled: isLoading,
      component: components_formik__WEBPACK_IMPORTED_MODULE_1__/* .CustomColorInput */ .Gk
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      className: "d-block padding-s"
    }, "Image Collection"), !isFileLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("label", {
      htmlFor: "product-input-file-collection"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("input", {
      disabled: isLoading,
      hidden: true,
      id: "product-input-file-collection",
      multiple: true,
      onChange: function onChange(e) {
        return onFileChange(e, {
          name: 'imageCollection',
          type: 'multiple'
        });
      },
      readOnly: isLoading,
      type: "file"
    }), "Choose Images")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "product-form-collection"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, imageFile.imageCollection.length >= 1 && imageFile.imageCollection.map(function (image) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        className: "product-form-collection-image",
        key: image.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(components_common__WEBPACK_IMPORTED_MODULE_0__/* .ImageLoader */ .S3, {
        alt: "",
        src: image.url
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("button", {
        className: "product-form-delete-image",
        onClick: function onClick() {
          return removeImage({
            id: image.id,
            name: 'imageCollection'
          });
        },
        title: "Delete Image",
        type: "button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("i", {
        className: "fa fa-times-circle"
      })));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("input", {
      checked: values.isFeatured,
      className: "",
      id: "featured",
      onChange: function onChange(e) {
        return setValues(_objectSpread(_objectSpread({}, values), {}, {
          isFeatured: e.target.checked
        }));
      },
      type: "checkbox"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("label", {
      htmlFor: "featured"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h5", {
      className: "d-flex-grow-1 margin-0"
    }, "\xA0 Add to Featured \xA0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("input", {
      checked: values.isRecommended,
      className: "",
      id: "recommended",
      onChange: function onChange(e) {
        return setValues(_objectSpread(_objectSpread({}, values), {}, {
          isRecommended: e.target.checked
        }));
      },
      type: "checkbox"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("label", {
      htmlFor: "recommended"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h5", {
      className: "d-flex-grow-1 margin-0"
    }, "\xA0 Add to Recommended \xA0")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "product-form-field product-form-submit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("button", {
      className: "button",
      disabled: isLoading,
      type: "submit"
    }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null), "\xA0", isLoading ? 'Saving Product' : 'Save Product'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "product-form-file"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      className: "d-block padding-s"
    }, "* Thumbnail"), !isFileLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("label", {
      htmlFor: "product-input-file"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("input", {
      disabled: isLoading,
      hidden: true,
      id: "product-input-file",
      onChange: function onChange(e) {
        return onFileChange(e, {
          name: 'image',
          type: 'single'
        });
      },
      readOnly: isLoading,
      type: "file"
    }), "Choose Image")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "product-form-image-wrapper"
    }, (imageFile.image.url || product.image) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(components_common__WEBPACK_IMPORTED_MODULE_0__/* .ImageLoader */ .S3, {
      alt: "",
      className: "product-form-image-preview",
      src: imageFile.image.url || product.image
    }))));
  }));
};

ProductForm.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_8___default().shape({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    brand: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    price: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),
    maxQuantity: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    keywords: prop_types__WEBPACK_IMPORTED_MODULE_8___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_8___default().string)),
    imageCollection: prop_types__WEBPACK_IMPORTED_MODULE_8___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)),
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_8___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_8___default().string)),
    image: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    imageUrl: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    isFeatured: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
    isRecommended: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
    availableColors: prop_types__WEBPACK_IMPORTED_MODULE_8___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_8___default().string))
  }).isRequired,
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func.isRequired),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductForm);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + "." + {"99":"c807deead9588fbebcb1","404":"8a30534906d73f6102c4","503":"f1a9d55ac294fbd389ce"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + {"179":"main","736":"vendor"}[chunkId] + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "ecommerce-react:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkecommerce_react"] = self["webpackChunkecommerce_react"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [736], () => (__webpack_require__(26981)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(14898)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.749f9919929b8fded174.js.map