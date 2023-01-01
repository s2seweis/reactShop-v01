import React, { useState } from "react";

const Parent = () => {
  const [someState, setSomeState] = useState("Initial Some State");

  const onChangeSomeState = (newSomeState) => {
    setSomeState(newSomeState);
  };

  return (
    <div>
      Parent:
      <Child
        someState={someState}
        onChangeSomeState={onChangeSomeState}
      ></Child>
    </div>
  );
};

const Child = ({ someState, onChangeSomeState }) => {
  const handleChangeStateClick = () => {
    onChangeSomeState("New Some State from Child");
  };
  return (
    <div>
      Child:{someState}
      <input
        type="button"
        onClick={handleChangeStateClick}
        value="Change state from Child"
      ></input>
    </div>
  );
};

export default Parent;