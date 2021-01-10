import React, { useState } from "react";

const NotuseMemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // 引数に×２する関数
  const double = count => {
    let i = 0;
    while (i < 1000000000) i++;
    return count * 2;
  };

  const doubledCount = double(count2);

  // double(count2) はコンポーネントが再レンダリングされる度に実行されるため、
  // count1 を更新してコンポーネントが再レンダリングされた時にも実行されてしまう。
  // そのため、count1 を更新してコンポーネントを再レンダリングする時も時間がかかる。

  return (
    <>
      <h1>useMemoを使わない場合</h1>
      <h2>カウント１</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>カウント１</button>

      <h2>カウント２</h2>
      <p>
        Counter: {count2}, {doubledCount}
      </p>
      <button onClick={() => setCount2(count2 + 1)}>カウント２</button>
    </>
  );
}

export default NotuseMemo;