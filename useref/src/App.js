import './App.css';
import React, { useRef, useState } from 'react'

// useRef&useStateをつかった場合
function App() {
  const inputEl = useRef(null);
  const [text, setText] = useState("");

  const handleClick = () => {
    // inputEl.current.focus();
    // console.log("inputEl.current:", inputEl.current);
    setText(inputEl.current.value)
  }
  console.log("描画");

  return (
    <div className="App">
      <input ref={inputEl} type='text' />
      {/* <button onClick={handleClick}>入力エリアをフォーカスする</button> */}
      <button onClick={handleClick}>set text</button>
      <p>テキスト：{text}</p>
    </div>
  );
}

export default App;

// useStateのみの場合
// inputElのvalueを変えた時にとtextの値を変えた時両方で
// コンポーネントが再描画されるため無駄がある
const App = () => {
  const [inputElement, setInputElement] = useState("");
  const [text, setText] = useState("");
  const handleClick = () => {
    setText(inputElement);
  };
  console.log("描画！！");
  return (
    <>
      <input
        value={inputElement}
        onChange={(e) => setInputElement(e.target.value)}
        type="text"
      />
      <button onClick={handleClick}>setText</button>
      <p>テキスト : {text}</p>
    </>
  );
};

export default App;