import React, { useState, useEffect } from "react";

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // useEffect runs after the component renders
  useEffect(() => {
    console.log(`Count updated: ${count}`);

    // Cleanup function (optional)
    return () => {
      console.log("Component unmounted or count changed");
    };
  }, [count]); // Dependency array: runs only when `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default ExampleComponent;
