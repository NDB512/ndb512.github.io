export default function SectionTitle({ title }) {
  return (
    <div className="mb-6">
      <h2 className="text-4xl font-bold mb-3">{title}</h2>
      <div className="h-[1px] bg-gray-200 w-full"></div>
    </div>
  );
}