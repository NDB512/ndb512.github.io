import Sidebar from "./components/Sidebar";
import ProjectCard from "./components/ProjectCard";
import SectionTitle from "./components/SectionTitle";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <Sidebar />

        <main className="flex-1 px-8 py-10 md:px-14">
          <section className="mb-12">
            <SectionTitle title="Giới thiệu" />
            <p className="text-lg leading-8 text-gray-700">
              Tôi là một lập trình viên full-stack, quan tâm đến việc xây dựng
              các API ổn định, hệ thống có khả năng mở rộng và kiến trúc phần mềm dễ bảo trì.
              Hiện tại tôi tập trung vào xác thực người dùng, chiến lược caching,
              thiết kế cơ sở dữ liệu và tối ưu hiệu năng backend, thiết kế frontend.
            </p>
          </section>

          <section className="mb-12">
            <SectionTitle title="Công nghệ sử dụng" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-lg">
              <p><strong>Backend:</strong> Golang, Spring Boot, Laravel</p>
              <p><strong>Frontend:</strong> React, Vue.js, HTML/CSS/JS</p>
              <p><strong>Cơ sở dữ liệu:</strong> PostgreSQL, MySQL, Redis</p>
              <p><strong>DevOps:</strong> Docker, Nginx, Linux</p>
              <p><strong>Kiểm thử:</strong> K6, Vitest, Postman</p>
            </div>
          </section>

          <section className="mb-12">
            <SectionTitle title="Dự án nổi bật" />

            <ProjectCard
              title="Hệ thống rút gọn URL"
              subtitle="Hệ thống Backend"
              description="Một dịch vụ backend dùng để rút gọn đường dẫn, tích hợp JWT authentication, quản lý link theo người dùng, theo dõi lượt click và Redis caching."
              highlights={[
                "Xác thực JWT",
                "Quản lý URL theo từng người dùng",
                "Thống kê lượt truy cập",
                "Redis caching",
                "Thiết kế RESTful API",
              ]}
              tech="Golang, Gin, PostgreSQL, Redis, Docker"
              github="https://github.com/NDB512/golang_server"
            />

            <ProjectCard
              title="Hệ thống xử lý tài liệu OCR"
              subtitle="OCR / Xử lý Backend"
              description="Một hệ thống dùng để trích xuất và xử lý văn bản từ hình ảnh và tài liệu được tải lên thông qua quy trình OCR."
              highlights={[
                "Tích hợp OCR",
                "Trích xuất văn bản",
                "Xử lý upload tệp",
                "Luồng xử lý API backend",
              ]}
              tech="Python, OCR, Backend APIs"
              github="https://github.com/NDB512/ocr_system"
            />

            <ProjectCard
              title="Hệ thống J2ee"
              subtitle="Auth / Bảo mật"
              description="Một hệ thống xác thực theo hướng module, hỗ trợ đăng ký, đăng nhập, kiểm tra token, route bảo vệ và phân quyền truy cập tài nguyên theo người dùng."
              highlights={[
                "Đăng ký / Đăng nhập",
                "Xác thực JWT",
                "Middleware phân quyền",
                "Protected routes",
              ]}
              tech="Spring Boot, Java, JPA, MySQL"
              github="https://github.com/NDB512/J2EE-project"
            />
          </section>

          <section className="mb-12">
            <SectionTitle title="Học vấn" />
            <p className="text-lg text-gray-700 leading-8">
              Sinh viên ngành Công nghệ thông tin tập trung mạnh vào
              phát triển full-stack, hệ quản trị cơ sở dữ liệu và kỹ thuật phần mềm thực tiễn.
            </p>
          </section>

          <section>
            <SectionTitle title="Liên hệ" />
            <p className="text-lg text-gray-700">
              Email: nguyenduybao312@gmail.com
            </p>
            <p className="text-lg text-gray-700">
              GitHub: https://github.com/NDB512
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}