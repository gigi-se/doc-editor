
import { usePDF } from "@react-pdf/renderer";
import { useDocumentStore } from "../store/documentStore";
import { DocumentPdf } from "../pdf/DocumentPdf";
import { useMemo } from "react";

export function ExportButton() {
  const doc = useDocumentStore((s) => s.doc);

  const pdfDoc = useMemo(() => <DocumentPdf doc={doc} />, [doc]);
  const [instance, updatePdf] = usePDF({ document: pdfDoc });


  
  const handleExport = () => {
  updatePdf(<DocumentPdf doc={doc} />);
  };
  
  return (
    
    <div>

      <button onClick={handleExport} disabled={instance.loading}>
        {instance.loading ? "Generando..." : "Exportar a PDF"}
      </button>

      {instance.url && (
        <a href={instance.url} download="documento.pdf">Descargar</a>
      )}
    </div>
  );
}

