import React, { useState, useEffect } from "react";

const Countedup = () => {
  const Counter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (count < value) {
          setCount(prevCount => prevCount + 15);
        }
      }, 500 / value);

      return () => clearInterval(interval);
    }, [count, value]);

    return <span className="number">{count < value ? count : `${value}`}</span>;
  };

  return (
    <div className="mt-3">
      <div className="container overview pt-5 ">
        <div className="row">
          <div className="col-12">
            <h3 className="title">
              Empowering Businesses, Accelerating Growth:
              <br />
              Our Express Commitment
            </h3>
          </div>
          <div className="row counter">
            <div className="col-lg-3 col-md-6  border-end  px-5 py-2  ">
              <p>Reach over</p>
              <Counter value={19800} />
              <p>Pincodes</p>
            </div>
            <div className="col-lg-3 col-md-6  border-end  px-5 py-2 ">
              <p>over</p>
              <Counter value={600} />
              <p>Offices</p>
            </div>
            <div className="col-lg-3 col-md-6   border-end  px-3 py-2 ">
              <p>Direct Delivery to</p>
              <Counter value={5100} />
              <p>Pincodes</p>
            </div>
            <div className="col-lg-3 col-md-6  text-start  px-3 py-2 ">
              <p className="text-start">Fleet Size of</p>
              <Counter value={5000} />
              <p className="text-start">Trucks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countedup;
