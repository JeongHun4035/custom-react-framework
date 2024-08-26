import CustomTable from "@/components/CustomTable"
import { IColumn } from "@/components/CustomTable"
import "@/examples/examples.scss"

const TablePage = () => {
  const mockColumns: IColumn[] = [
    {
      id: "col1",
      name: "COLUMN1",
    },
    {
      id: "col2",
      name: "COLUMN2",
    },
    {
      id: "col3",
      name: "COLUMN3",
    },
    {
      id: "col4",
      name: "COLUMN4",
    },
    {
      id: "col5",
      name: "COLUMN5",
    },
    {
      id: "col6",
      name: "COLUMN6",
    },
  ]
  const mockRows = [
    {
      number: 1,
      id: "row-1",
      col1: "ROW1-1",
      col2: "ROW1-2",
      col3: "ROW1-3",
      col4: "ROW1-4",
      col5: "ROW1-5",
      col6: "ROW1-6",
    },
    {
      number: 2,
      id: "row-2",
      col1: "ROW2-1",
      col2: "ROW2-2",
      col3: "ROW2-3",
      col4: "ROW2-4",
      col5: "ROW2-5",
      col6: "ROW2-6",
    },
    {
      number: 3,
      id: "row-3",
      col1: "ROW3-1",
      col2: "ROW3-2",
      col3: "ROW3-3",
      col4: "ROW3-4",
      col5: "ROW3-5",
      col6: "ROW3-6",
    },
    {
      number: 4,
      id: "row-4",
      col1: "ROW4-1",
      col2: "ROW4-2",
      col3: "ROW4-3",
      col4: "ROW4-4",
      col5: "ROW4-5",
      col6: "ROW4-6",
    },
    {
      number: 5,
      id: "row-5",
      col1: "ROW5-1",
      col2: "ROW5-2",
      col3: "ROW5-3",
      col4: "ROW5-4",
      col5: "ROW5-5",
      col6: "ROW5-6",
    },
    {
      number: 6,
      id: "row-6",
      col1: "ROW6-1",
      col2: "ROW6-2",
      col3: "ROW6-3",
      col4: "ROW6-4",
      col5: "ROW6-5",
      col6: "ROW6-6",
    },
  ]

  const columnClickEvent = (column: IColumn) => {
    console.log(column)
    window.alert(`column.id: ${column.id}\ncolumn.name: ${column.name}`)
  }

  const rowClickEvent = (row: any) => {
    console.log(row)
    window.alert(`row.id: ${row.id}\nrow.number: ${row.number}`)
  }

  const cellClickEvent = (cell: any) => {
    console.log(cell)
    window.alert(`cell: ${cell}`)
  }

  return (
    <div>
      <div className="examples-wrapper">
        <div>
          <h2>1. Standard</h2>
          <div className="example-area">
            <div className="example-item">
              <CustomTable
                tableId="examples"
                columns={mockColumns}
                rows={mockRows}
                onColumnClick={columnClickEvent}
                onRowClick={rowClickEvent}
                onCellClick={cellClickEvent}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TablePage
