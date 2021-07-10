import React, { useState } from 'react';

const ControlledInputs = () => {
  const [tracker, setTracker] = useState({ amount: 0 });
  const [listTracker, setlistTracker] = useState([]);
  const [id, setId] = useState(0);
  const [balance, setBalance] = useState(0);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setId(id + 1);
    setTracker({ ...tracker, [name]: value });
  };
  const handleSubmitForAdd = (e) => {
    e.preventDefault();
    if (tracker.amount) {
      const date = new Date();
      const total = balance + parseInt(tracker.amount);
      const newTracker = { ...tracker, id: id, actionName: "Add", datetime: date.toLocaleString() };
      setBalance(total);
      setlistTracker([...listTracker, newTracker]);
      setTracker({  amount: 0 });
    }
  };
    const handleSubmitForRemove = (e) => {
    e.preventDefault();
    if (tracker.amount) {
      const date = new Date();
      const total = balance - parseInt(tracker.amount);
      const newTracker = { ...tracker, id: id, actionName: "Remove", datetime: date.toLocaleString() };
      setBalance(total);
      setlistTracker([...listTracker, newTracker]);
      setTracker({  amount: 0 });
    }
  };
  return (
    <>
      <h2>Balance : { balance}</h2>
      <article className='form'>
        <form>
          <div className='form-control'>
            <label>Amount :</label>
            <input
              type='number'
              id='amount'
              name='amount'
              value={tracker.amount}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn' onClick={handleSubmitForAdd}>
            Add
          </button>
          <button type='submit' className='btn' onClick={handleSubmitForRemove}>
            Remove
          </button>
        </form>
      </article>
      <article>
        {listTracker.map((tracker) => {
          const { id, amount, actionName ,datetime} = tracker;
          return (
            <div key={id} className='item'>
              <p>{datetime}</p>
              <p>{amount}</p>
              <p>{actionName}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
