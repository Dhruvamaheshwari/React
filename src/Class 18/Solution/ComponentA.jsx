/** @format */

import { useState , createContext, use} from "react";
import ComponenetB from "./ComponentB";

export const UserContext = createContext();


function ComponenetA() {

  const [user, setUser] = useState("BroCode");

  return (
    <div className="border-2 m-5 p-3 ">
      <h1 className="text-2xl">ComponenetA</h1>
      <h1 className="text-xl">{`Hello ${user}`}</h1>

    <UserContext.Provider value={user}>
        <ComponenetB user={user} />
    </UserContext.Provider>
    </div>
  );
}

export default ComponenetA;
