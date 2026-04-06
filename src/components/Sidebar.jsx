export default function Sidebar() {
  return (
    <aside className="lg:w-96 w-full lg:border-r border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl lg:sticky lg:top-0 lg:h-screen p-8 lg:p-12 overflow-y-auto">
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold tracking-tighter">Nguyễn Duy Bảo</h1>
          <p className="text-indigo-600 dark:text-indigo-400 mt-2 text-xl font-medium">
            Full-Stack Developer
          </p>
        </div>

        <img
          src="/avatar.jpg"
          alt="Nguyễn Duy Bảo"
          className="w-56 h-56 rounded-3xl object-cover shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-700"
        />

        <div className="space-y-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            Lập trình viên full-stack với niềm đam mê về backend và hệ thống phân tán. 
            Tôi tập trung vào việc xây dựng API đáng tin cậy, scalable và kiến trúc dễ bảo trì.
          </p>
          <p className="text-sm font-medium">
            Golang • Spring Boot • Laravel • React • Redis • PostgreSQL • Docker
          </p>
        </div>

        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-700">
          <div className="flex flex-col gap-4 text-lg font-medium">
            <a href="mailto:nguyenduybao312@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Email
            </a>
            <a 
              href="https://github.com/NDB512" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}