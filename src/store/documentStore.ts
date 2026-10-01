//estado global 

import { create } from "zustand";
import type { AppDocument } from "../types/document";

interface DocumentState {
  doc: AppDocument;
  updateSection: (id: string, content: string) => void;
}

export const useDocumentStore = create<DocumentState>((set) => ({
  doc: {
    title: "titulo",
    author: "",
    sections: [{ id: "s1", title: "texto", content: "" }],
  },
  updateSection: (id, content) =>
    set((state) => ({
      doc: {
        ...state.doc,
        sections: state.doc.sections.map((s) =>
          s.id === id ? { ...s, content } : s
        ),
      },
    })),
}));