import { useRef } from "react"

const UseRef = ()=>{
    const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
        <h3>UseRef</h3>
      <input ref={inputRef} type="text" placeholder="Enter text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default UseRef;