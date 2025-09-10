type Props = {
  value?: string;
  onChange?: (value: string) => void;
};

const MOODS = ["😀", "🙂", "😐", "🙁", "😫"] as const;

export default function MoodSelector({ value, onChange }: Props) {
  return (
    <div role="radiogroup" aria-label="오늘의 기분">
      {MOODS.map((mood) => (
        <button
          key={mood}
          type="button"
          aria-pressed={value === mood}
          onClick={() => onChange?.(mood)}
          style={{ fontSize: 24, marginRight: 8 }}
        >
          {mood}
        </button>
      ))}
    </div>
  );
}


