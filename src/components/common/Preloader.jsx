import React from 'react';
import logoWordmark from '../../../static/logo-wordmark.png';
import dignlogo from '../../../static/dign-logo.png';


const Preloader = () => (
  <div className="preloaderNew">

    {/* Version 1 */}
    {/* <svg className="logo-symbol" viewBox="0 0 41.25 41.25">
      <circle cx="20.62" cy="20.62" r="20.62" />
      <circle className="fill-white" cx="29.97" cy="14.93" r="6.58" />
    </svg> */}


    {/* Version 2 */}

    {/* <svg width="500px" height="500px"
      viewBox="0 0 500 500" >
      <rect x="0" y="0" width="100" height="100" fill="#feac5e">

        <animate attributeName="x"
          from="0" to="500" dur="2s"
          repeatCount="indefinite"
        />

      </rect>


    </svg> */}


    {/* <svg version="1.1" id="L2" x="0px" y="0px"
      width="200"
      viewBox="0 0 100 100" enable-background="new 0 0 100 100" >
      <circle fill="none" stroke="black" stroke-width="4" stroke-miterlimit="10" cx="50" cy="50" r="48" />
      <line fill="black" stroke-linecap="round" stroke="black" stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
        <animateTransform
          attributeName="transform"
          dur="2s"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite" />
      </line>
      <line fill="black" stroke-linecap="round" stroke="black" stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
        <animateTransform
          attributeName="transform"
          dur="15s"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite" />
      </line>
    </svg> */}


    {/* Version 3 */}

    <svg version="1.1" id="L3" x="0px" y="0px"
    width="100"
      viewBox="0 0 100 100" enable-background="new 0 0 0 0">
      <circle fill="none" stroke="black" stroke-Width="4" cx="50" cy="50" r="44" 
      // style="opacity:0.5;" 
      opacity="0.3"
      />
      <circle fill="#fff" stroke="black" stroke-Width="3" cx="8" cy="54" r="6" >
        
        <animateTransform
          attributeName="transform"
          dur="2s"
          type="rotate"
          from="0 50 48"
          to="360 50 52"
          repeatCount="indefinite" />

      </circle>
    </svg>


    <img alt="Salinaka logo wordmark" src={dignlogo} />


  </div>
);

export default Preloader;
