export default function ProjectCard({
  title,
  subtitle,
  description,
  highlights,
  tech,
  github,
}) {
  return (
    <div className="project-card glass rounded-3xl p-8 border border-zinc-200 dark:border-zinc-700 hover:border-indigo-500 group">
      <div className="mb-6">
        <h3 className="text-3xl font-semibold tracking-tight mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="text-xl text-zinc-500 dark:text-zinc-400">{subtitle}</p>
      </div>

      <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8">
        {description}
      </p>

      <ul className="space-y-3 mb-8">
        {highlights.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
            <span className="text-indigo-500 mt-1.5 text-xl leading-none">•</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-700">
        <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400">{tech}</p>
        
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-indigo-600 dark:bg-white dark:text-zinc-900 dark:hover:bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-medium transition-all active:scale-95"
        >
          Xem trên GitHub →
        </a>
      </div>
    </div>
  );
}