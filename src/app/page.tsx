"use client";
import { useState } from "react";

export default function Home() {
  const [mood, setMood] = useState("");
  const [done, setDone] = useState<string[]>([]);

  const routines = ["따뜻한 물 한 잔", "국수집 아이디어 한 줄", "코드 10줄 읽기"];

  const toggleRoutine = (item: string) => {
    setDone((prev) =>
      prev.includes(item) ? prev.filter((d) => d !== item) : [...prev, item]
    );
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">🌞 오늘 루틴</h1>

      <div className="space-y-2">
        {routines.map((r) => (
          <label key={r} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={done.includes(r)}
              onChange={() => toggleRoutine(r)}
            />
            <span>{r}</span>
          </label>
        ))}
      </div>

      <div className="space-y-2">
        <p>💬 오늘 마음은?</p>
        {["편안해", "무기력해", "복잡해", "아무 느낌 없음"].map((m) => (
          <label key={m} className="flex items-center space-x-2">
            <input
              type="radio"
              name="mood"
              value={m}
              checked={mood === m}
              onChange={() => setMood(m)}
            />
            <span>{m}</span>
          </label>
        ))}
      </div>

      <button className="w-full bg-indigo-500 text-white py-2 rounded-lg">
        저장하기
      </button>
    </div>
  );
}
