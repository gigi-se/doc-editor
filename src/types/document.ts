
// vista previa y pdf final
export interface DocSection {
  id: string;
  title: string;
  content: string;
}

export interface AppDocument {
  title: string;
  author: string;
  sections: DocSection[];
}