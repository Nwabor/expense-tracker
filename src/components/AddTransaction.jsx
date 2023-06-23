import React, { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function handleText(e) {
    setText(e.target.value);
  }

  function handleAmount(e) {
    setAmount(e.target.value);
  }
  return (
    <>
      <h3>Add new Transaction</h3>
      <form>
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
