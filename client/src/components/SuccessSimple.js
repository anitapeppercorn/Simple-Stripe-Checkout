import React from "react";


function Success() {
    setTimeout(function(){window.location.assign('/')} , 3000);

    return (
      <div>

          <h1>Success!</h1>
          <h2>
            Thank you for your purchase!
          </h2>
          <h2>
            You will now be redirected to the homepage
          </h2>

      </div>
    );
  };

export default Success;  