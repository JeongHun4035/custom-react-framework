import Editor from "@monaco-editor/react"

export interface EditorProps {
  width?: string
  height?: string
  language?: string
  theme?: string
  value?: string
}

const CodeEditor = ({
  width = "800px",
  height = "600px",
  language = "javascript",
  theme = "vs-dark",
  value = "empty",
}: EditorProps) => {
  return (
    <Editor
      width={width}
      height={height}
      language={language}
      theme={theme}
      value={value}
    />
  )
}

export default CodeEditor
