
import { useDocumentStore } from "../store/documentStore";

export function Editor() {
  const { doc, updateSection } = useDocumentStore();

  return (
    <div className="editor">
      {doc.sections.map((s) => (
        <textarea
          key={s.id}
          value={s.content}
          onChange={(e) => updateSection(s.id, e.target.value)}
          placeholder={s.title}
        />
      ))}
    </div>
  );
}