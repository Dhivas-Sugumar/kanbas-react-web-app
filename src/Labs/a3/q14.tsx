import React, { useState } from "react";

export function Q14() {
  const [a, b] = useState({ c: "q", d: 27 });

  const x = (e : any) => b({ ...a, c: e.target.value });
  const y = (s : any) => b({ ...a, d: parseInt(s.target.value) });

  return (
    <div>
      <input id="r" value={a.c} onChange={x} />
      <input id="t" value={a.d} onChange={y} />
      {JSON.stringify(a, null, 2)}
    </div>
  );
}