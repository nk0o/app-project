type Props = {
  date?: string;
};

export default function RoutineCard({ date }: Props) {
  const label = date ?? new Date().toLocaleDateString();
  return (
    <section>
      <h2>오늘의 루틴</h2>
      <p>{label}</p>
    </section>
  );
}
