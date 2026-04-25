import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ProjectCard from "./components/ProjectCard";
import SectionTitle from "./components/SectionTitle";
import { Sun, Moon } from "lucide-react";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        <Sidebar />

        <main className="flex-1 px-6 py-12 lg:px-16 lg:py-16">
          {/* Theme Toggle */}
          <div className="flex justify-end mb-12">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-3 rounded-xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur border border-zinc-200 dark:border-zinc-800 hover:scale-105 transition"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <section className="mb-16">
            <SectionTitle title="Giới thiệu" />
            <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-3xl">
              Tôi là lập trình viên full-stack, tập trung vào backend scalable, hệ thống phân tán
              và ứng dụng AI. Gần đây tôi xây dựng các hệ thống RAG phục vụ truy vấn tài liệu
              và phân tích dữ liệu thực tế.
            </p>
          </section>

          <section className="mb-16">
            <SectionTitle title="Công nghệ sử dụng" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Backend", value: "Golang, Spring Boot, Python" },
                { label: "Frontend", value: "React, Vue.js, Tailwind CSS" },
                { label: "Database & Cache", value: "PostgreSQL, MySQL, Redis" },
                { label: "AI/ML", value: "RAG, LangChain, FAISS, Transformers" },
                { label: "DevOps", value: "Docker, Nginx, Linux" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="glass p-7 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:scale-[1.02]"
                >
                  <p className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2 text-lg">
                    {item.label}
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <SectionTitle title="Dự án nổi bật" />
            <div className="space-y-12">

              <ProjectCard
                title="Legal RAG Mini"
                subtitle="AI / NLP System"
                description="Hệ thống RAG phân tích hợp đồng và văn bản pháp lý tiếng Việt, hỗ trợ truy vấn điều khoản, so sánh luật và trích xuất thông tin chính xác."
                highlights={[
                  "Chunking theo cấu trúc pháp lý (Điều, Chương, Mục)",
                  "Semantic search với FAISS",
                  "Phân loại intent truy vấn",
                  "LLM integration (Groq - LLaMA 3)",
                  "Hiển thị nguồn trích dẫn rõ ràng",
                ]}
                tech="Python • LangChain • FAISS • Transformers • Streamlit"
                github="https://github.com/NDB512/RAG_Python"
              />

              <ProjectCard
                title="Hệ thống rút gọn URL"
                subtitle="Backend Service"
                description="Dịch vụ rút gọn link với JWT authentication, tracking và caching hiệu năng cao."
                highlights={[
                  "JWT Authentication",
                  "Redis caching",
                  "Tracking analytics",
                  "RESTful API",
                ]}
                tech="Golang • Gin • PostgreSQL • Redis"
                github="https://github.com/NDB512/golang_server"
              />

              <ProjectCard
                title="J2EE Authentication"
                subtitle="Security Module"
                description="Hệ thống xác thực và phân quyền theo module, thiết kế clean architecture."
                highlights={[
                  "JWT",
                  "Role-based access",
                  "Middleware security",
                ]}
                tech="Spring Boot • Java • MySQL"
                github="https://github.com/NDB512/J2EE-project"
              />
            </div>
          </section>

          <section className="mb-16">
            <SectionTitle title="Học vấn" />
            <p className="text-xl text-zinc-700 dark:text-zinc-300">
              Sinh viên Công nghệ Thông tin, tập trung vào backend engineering,
              hệ thống phân tán và ứng dụng AI thực tế.
            </p>
          </section>

          <section>
            <SectionTitle title="Liên hệ" />
            <div className="space-y-4 text-lg">
              <p>
                Email: 
                <a href="mailto:nguyenduybao312@gmail.com" className="hover:text-indigo-600">
                  nguyenduybao312@gmail.com
                </a>
              </p>
              <p>
                GitHub: 
                <a href="https://github.com/NDB512" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
                  github.com/NDB512
                </a>
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
