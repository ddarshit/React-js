import React, { useEffect, useLayoutEffect, useState } from "react";

const LayoutEffect = () => {
  const [text, setText] = useState("welcome");
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    if (!loading) {
      setText("go to hell");
    } else {
      setText("welcome");
    }
  });
  //   useEffect(()=> {
  //     console.log("useeffect")
  //   })
  //   useLayoutEffect(()=> {
  //     console.log("useLayoutEffect")
  //   })
  return (
    <>
      <div className="col-6"></div>
      <div className="col-6">
        <h1>LayoutEffect</h1>
        <p>{text}</p>
      </div>
    </>
  );
};

export default LayoutEffect;
