import React from 'react';

import PayButton from './PayButton';

const Checkout = (basket) => {

console.log(basket)



  return (
    <div className="sr-root">
      <div className="sr-main">
        <section className="container">
          <div>
            <h1>Single photo</h1>
            <h4>Purchase a Pasha original photo</h4>
            <div className="pasha-image">
              <img
                alt="Random asset from Picsum"
                src="https://picsum.photos/280/320?random=4"
                width="140"
                height="160"
              />
            </div>
          </div>

          <form action="/api/create-checkout-session" method="POST">
            {/* <PayButton
            basket={basket}
            id="submit" role="link">Buy1</PayButton> */}
            <button id="submit" role="link">Buy1</button>
          </form>


          <form action="/api/create-checkout-session" method="POST">
            {/* <PayButton
            basket={basket}
            id="submit" role="link">Buy1</PayButton> */}
            <PayButton id="submit" role="link">Buy2</PayButton>
          </form>


        </section>
      </div>
    </div>
  );
};

export default Checkout;
