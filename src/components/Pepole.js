import React from "react";
import { useSelector } from "react-redux";

const Pepole = () => {
  const pepoleArr = useSelector((state) => state.usersReducer.pepole);
  console.log(pepoleArr);
  pepoleArr.map((item) => {
    return (
      <>
        <li li key={item.id}>
          {item.name} {item.surname} , wiek: {item.age}
        </li>
        <button>x</button>
      </>
    );
  });
};

export default Pepole;
