// src/FishCalculator.js
import React, { useState } from "react";

const FishCalculator = () => {
  const [fishCount, setFishCount] = useState(0);
  const [fishWeight, setFishWeight] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);

  const handleCalculate = () => {
    setTotalWeight(fishCount * fishWeight);
  };

  return (
    <div>
      <h1>Perhitungan Perikanan</h1>
      <label>
        Jumlah Ikan:
        <input
          type="number"
          value={fishCount}
          onChange={e => setFishCount(e.target.value)}
        />
      </label>
      <br />
      <label>
        Berat Ikan per ekor (kg):
        <input
          type="number"
          value={fishWeight}
          onChange={e => setFishWeight(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleCalculate}>Hitung</button>
      <h2>Total Berat: {totalWeight} kg</h2>
    </div>
  );
};

export default FishCalculator;
