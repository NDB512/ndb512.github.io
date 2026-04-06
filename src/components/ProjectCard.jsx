export default function ProjectCard({
  title,
  subtitle,
  description,
  highlights,
  tech,
  github,
}) {
  return (
    <div className="mb-12">
      <h3 className="text-3xl font-semibold mb-2">{title}</h3>
      <p className="text-xl text-gray-700 font-medium mb-4">{subtitle}</p>

      <p className="text-lg text-gray-700 leading-8 mb-4">{description}</p>

      <ul className="list-disc list-inside text-gray-700 leading-8 mb-4">
        {highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p className="text-gray-700 mb-3">
        <strong>Công nghệ:</strong> {tech}
      </p>

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Xem trên GitHub
      </a>
    </div>
  );
}