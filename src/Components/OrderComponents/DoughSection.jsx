import "./DoughSection.jsx";
import { useState } from "react";

export function DoughSection() {
  const [dough, setDough] = useState("");
  return (
    <>
      <h3>Hamur Seç</h3>
      <select value={dough} onChange={(e) => setDough(e.target.value)}>
        <option value="" disabled>
          Hamur Kalınlığı
        </option>
        <option>Ultra İnce</option>
        <option>İnce</option>
        <option>Orta</option>
        <option>Kalın</option>
      </select>
    </>
  );
}
