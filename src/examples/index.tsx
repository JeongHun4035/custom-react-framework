import { useParams } from "react-router-dom"
import "@/examples/index.css"

import ButtonPage from "@/examples/basic/ButtonPage"
import InputPage from "@/examples/form/InputPage"
import TablePage from "@/examples/grid/TablePage"
import ModalPage from "@/examples/modals/ModalPage"

const ExampleRenderer = (currentId: string) => {
  const examplePages: { [key: string]: JSX.Element } = {
    button: <ButtonPage />,
    input: <InputPage />,
    dialog: <ModalPage />,
    table: <TablePage />,
  }
  return examplePages[currentId] || <div>Empty</div>
}

const ExamplePage = () => {
  const params = useParams()
  return (
    <div className="example-page-wrapper">
      <div className="example-page-title">
        <h1>{params.id} page</h1>
      </div>
      <div className="example-contents">{ExampleRenderer(params.id || "")}</div>
    </div>
  )
}

export default ExamplePage
