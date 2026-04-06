export default function Sidebar() {
  return (
    <aside className="md:w-[320px] w-full border-r border-gray-200 px-8 py-10 bg-gray-50">
      <div className="sticky top-10">
        <h1 className="text-4xl font-bold mb-6">Nguyễn Duy Bảo</h1>

        <img
          src="/avatar.jpg"
          alt="Ảnh đại diện"
          className="w-52 h-52 rounded-full object-cover mb-6 border-4 border-white shadow"
        />

        <p className="text-lg text-gray-700 font-medium mb-2">
          Lập trình viên định fullstack với niềm đam mê về backend và hệ thống phân tán. Tôi tập trung vào việc xây dựng các API đáng tin cậy, hệ thống có khả năng mở rộng và kiến trúc phần mềm dễ bảo trì.
        </p>
        <p className="text-gray-600 mb-6 leading-7">
          Golang, Spring Boot, Laravel <br />
          Thiết kế API • Redis • PostgreSQL • Docker
          Thiết kế giao diện frontend với React, Vue.js, HTML/CSS/JS. Tối ưu hiệu năng backend với caching, database indexing, và tối ưu truy vấn.
        </p>

        <div className="space-y-2 text-blue-700">
          <p>
            <a href="mailto:nguyenduybao312@gmail.com">
              Email
            </a>
          </p>
          <p>
            <a href="https://github.com/NDB512" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
          {/* <p>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p> */}
          {/* <p>
            <a href="/cv.pdf" target="_blank" rel="noreferrer">
              Tải CV
            </a>
          </p> */}
        </div>

        <div className="mt-8 text-gray-600 leading-7">
          <p>
            Tôi xây dựng các hệ thống full-stack với trọng tâm là clean architecture,
            xác thực người dùng, caching và tối ưu hiệu năng.
          </p>
        </div>
      </div>
    </aside>
  );
}