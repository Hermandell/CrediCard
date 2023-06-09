import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';


const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <Cards
        number={4130980110693817}
        expiry={"💹  💹"}
        cvc={state.cvc}
        name={"Pedro Eleazar Uribe Salazar"}
        focused={state.focus}
      />
      <br/>
      {/* <form>
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        
      </form> */}
    </div>
  );
}

export default PaymentForm;