// src/pdf/DocumentPdf.tsx
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import type { AppDocument } from "../types/document";

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 11 },
  title: { fontSize: 20, marginBottom: 4 },
  author: { fontSize: 11, color: "#666", marginBottom: 16 },
  sectionTitle: { fontSize: 14, marginTop: 12, marginBottom: 4 },
});

export function DocumentPdf({ doc }: { doc: AppDocument }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{doc.title}</Text>
        <Text style={styles.author}>{doc.author}</Text>
        {doc.sections.map((s) => (
          <View key={s.id}>
            <Text style={styles.sectionTitle}>{s.title}</Text>
            <Text>{s.content}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}

