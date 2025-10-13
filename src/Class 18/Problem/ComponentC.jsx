/** @format */

import ComponenetD from "./ComponentD";

function ComponenetC(pr) {
  return (
    <div className="border-2 m-5 p-3 ">
      <h1 className="text-2xl">ComponenetC</h1>
      <ComponenetD user={pr.user} />
    </div>
  );
}

export default ComponenetC;
