import { ThemeContext } from "./ContextApi/Context";
import { useContext } from "react";
import './Contact.css'

const Contact = () => {
    const { state } = useContext(ThemeContext);

  return (
    
    <>
      <main className="top" style={{ backgroundColor: state ? "orange" : null, display: 'flex', flexDirection: 'column' }}>
        <div className="title">
        <h1>Shopping Cart</h1>
        </div>
        <div className="cartConatiner">
          <div className="cartHead">
            <div className="prod"><h5>Product</h5></div>-
            <div className="PQSub">
              <h5>Price</h5>
              <h5>Quantity</h5>
              <h5>Subtotal</h5>
            </div>
          </div>
          <div className="bodypage">
            <div className="itempart1">
                frfe
                <br />gdgdb <br />b <br />
                Product 1
                Product 2
                Product 2
                Product 


            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
