

import './App.css'

import { Editor } from './components/Editor'
import { Preview } from './components/preview'
import { ExportButton } from './components/ExportButton'


export default function App() {
  return (
    <main className="workspace">
      <section className="workspace-editor">
        <Editor />
        <ExportButton />
      </section>
      <section className="workspace-preview">
        <Preview />
      </section>
    </main>
  );
}