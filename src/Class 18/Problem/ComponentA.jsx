/** @format */

import { useState } from "react";
import ComponenetB from "./ComponentB";


function ComponenetA() {
  const [user, setUser] = useState("BroCode");

  return (
    <div className="border-2 m-5 p-3 ">
      <h1 className="text-2xl">ComponenetA</h1>
      <h1 className="text-xl">{`Hello ${user}`}</h1>

        <ComponenetB user={user} />
    </div>
  );
}

export default ComponenetA;
