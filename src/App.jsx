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
              Tôi là một lập trình viên full-stack, đam mê xây dựng các API ổn định, hệ thống có khả năng mở rộng 
              và kiến trúc phần mềm sạch sẽ, dễ bảo trì. Hiện tại tôi tập trung vào xác thực người dùng, caching, 
              thiết kế cơ sở dữ liệu, tối ưu hiệu năng backend và thiết kế frontend hiện đại.
            </p>
          </section>

          <section className="mb-16">
            <SectionTitle title="Công nghệ sử dụng" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Backend", value: "Golang, Spring Boot, Laravel" },
                  { label: "Frontend", value: "React, Vue.js, Tailwind CSS" },
                  { label: "Cơ sở dữ liệu & Cache", value: "PostgreSQL, MySQL, Redis" },
                  { label: "DevOps", value: "Docker, Nginx, Linux" },
                  { label: "Testing", value: "K6, Vitest, Postman" },
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
                title="Hệ thống rút gọn URL"
                subtitle="Backend Service"
                description="Dịch vụ rút gọn link hiện đại với JWT authentication, quản lý URL theo người dùng, theo dõi lượt click và Redis caching."
                highlights={[
                  "Xác thực JWT",
                  "Quản lý URL cá nhân hóa",
                  "Thống kê truy cập thời gian thực",
                  "Redis caching",
                  "RESTful API chuẩn",
                ]}
                tech="Golang • Gin • PostgreSQL • Redis • Docker"
                github="https://github.com/NDB512/golang_server"
              />

              <ProjectCard
                title="Hệ thống xử lý tài liệu OCR"
                subtitle="OCR Pipeline"
                description="Hệ thống trích xuất và xử lý văn bản từ hình ảnh, PDF thông qua quy trình OCR mạnh mẽ."
                highlights={[
                  "Tích hợp OCR engine",
                  "Xử lý file upload lớn",
                  "Backend processing pipeline",
                  "API-driven architecture",
                ]}
                tech="Python • OCR • Backend APIs"
                github="https://github.com/NDB512/ocr_system"
              />

              <ProjectCard
                title="Hệ thống J2EE Authentication"
                subtitle="Security Module"
                description="Hệ thống xác thực theo module với đăng ký, đăng nhập, kiểm tra token và phân quyền truy cập."
                highlights={[
                  "JWT Authentication",
                  "Middleware phân quyền",
                  "Protected routes",
                  "Clean modular design",
                ]}
                tech="Spring Boot • Java • JPA • MySQL"
                github="https://github.com/NDB512/J2EE-project"
              />
            </div>
          </section>

          <section className="mb-16">
            <SectionTitle title="Học vấn" />
            <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
              Sinh viên ngành Công nghệ Thông tin, tập trung mạnh vào phát triển full-stack, 
              quản trị cơ sở dữ liệu và kỹ thuật phần mềm thực tiễn.
            </p>
          </section>

          <section>
            <SectionTitle title="Liên hệ" />
            <div className="space-y-4 text-lg">
              <p>
                Email:{" "}
                <a
                  href="mailto:nguyenduybao312@gmail.com"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  nguyenduybao312@gmail.com
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  href="https://github.com/NDB512"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
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