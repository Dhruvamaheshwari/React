/** @format */

import ComponenetC from "./ComponentC";

function ComponenetB() {
  return (
    <div className="border-2 m-5 p-3 ">
      <h1 className="text-2xl">ComponenetB</h1>
      <ComponenetC/>
    </div>
  );
}

export default ComponenetB;
