import React, { useState } from "react";

  
const Countedup = () => {
    const Counter = ({ value }) => {
        const [count, setCount] = useState(0);
      
        React.useEffect(() => {
          const interval = setInterval(() => {
            if (count < value) {
              setCount(prevCount => prevCount + 15);
            }
          }, 500 / value);
      
          return () => clearInterval(interval);
        }, [count, value]);
      
        return <span className="number">{count}</span>;
      };
  return (
    <div>
        <div className="container overview py-5 ">
        <div className="row">
          <div className="col-12">
            <h3 className="title">
              Empowering Businesses, Accelerating Growth:
              <br />
              Our Express Commitment
            </h3>
          </div>
          <div className="row counter">
            <div className="col-lg-3 col-md-6 border-top border-end border-bottom px-3 py-2 text-center ">
              <p>Reach over</p>
              <Counter value={19800} />
              <p>Pincodes</p>
            </div>
            <div className="col-lg-3 col-md-6 border-top border-end border-bottom px-3 py-2 text-center">
              <p>over</p>
              <Counter value={600} />
              <p>Offices</p>
            </div>
            <div className="col-lg-3 col-md-6  border-top border-end border-bottom px-3 py-2 text-center">
              <p>Direct Delivery to</p>
              <Counter value={5100} />
              <p>Pincodes</p>
            </div>
            <div className="col-lg-3 col-md-6  border-top border-bottom px-3 py-2 text-center">
              <p>Fleet Size of</p>
              <Counter value={5000} />
              <p>Trucks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countedup
