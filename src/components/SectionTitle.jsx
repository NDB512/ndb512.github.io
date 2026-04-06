export default function SectionTitle({ title }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
        {title}
      </h2>
      <div className="h-px w-24 bg-gradient-to-r from-indigo-500 to-transparent" />
    </div>
  );
}