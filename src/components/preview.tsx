
import { useDocumentStore } from "../store/documentStore";
import "./preview.css";

export function Preview() {
  const doc = useDocumentStore((s) => s.doc);

  return (
    <div className="page-a4-wrapper">
      <div className="page-a4">
        <h1>{doc.title}</h1>
        <p className="author">{doc.author}</p>
        {doc.sections.map((s) => (
          <section key={s.id}>
            <h2>{s.title}</h2>
            <p>{s.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}