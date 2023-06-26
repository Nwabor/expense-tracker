import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  function handleText(e) {
    setText(e.target.value);
  }

  function handleAmount(e) {
    setAmount(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h3>Add new Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={handleText}
            placeholder="Enter text ..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={handleAmount}
            placeholder="Enter amount ..."
          />
        </div>
      </form>
    </>
  );
};

export default AddTransaction;
