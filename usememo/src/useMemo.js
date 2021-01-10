import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);


  const double = count => {
    let i = 0;
    while (i < 1000000000) i++;
    return count * 2;
  };


  const doubledCount = useMemo(() => double(count2), [count2]);

// useMemoを利用して値をメモ化したため、
// count1を更新した時はdouble(count2)が実行されないようになった。
// そのため、count1を更新した時のコンポーネントの再レンダリングが高速になった。

  return (
    <>
    　<h1>useMemoを使う場合</h1>
      <h2>Increment(fast)</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment(fast)</button>

      <h2>Increment(slow)</h2>
      <p>
        Counter: {count2}, {doubledCount}
      </p>
      <button onClick={() => setCount2(count2 + 1)}>Increment(slow)</button>
    </>
  );
}

export default UseMemo;