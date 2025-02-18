import { useEffect, useState } from "react";
import Style from "./Notfound.module.css";
export default function Notfound() {
  const [testString, setTestString] = useState("test");
  useEffect(() => {}, []);
  return (
    <div>
      <h2 className={`${Style["bg-reeeed"]}`}>Notfound compo </h2>
      <p>{testString} Lorem, ipsum dolor.</p>
    </div>
  );
}
