import styled from "styled-components"

interface TableStyledProps {
  $width?: string
  $height?: string
  $columnBackground?: string
  $columnColor?: string
  $columnAlign?: string
  $columnHoverColor?: string
  $columnHoverBackground?: string
  $rowBackground?: string
  $rowAlign?: string
  $rowColor?: string
  $rowHoverColor?: string
  $rowHoverBackground?: string
  $cellHoverColor?: string
  $cellHoverBackground?: string
}

const TableWrapper = styled.div<TableStyledProps>`
  border: solid 1px;
  width: ${(props) => props.$width || "auto"};
  height: ${(props) => props.$height || "auto"};
`

const TableArea = styled.table`
  padding: 2px;
  width: 100%;
  height: 100%;
`

const TableHeader = styled.thead<TableStyledProps>`
  color: ${(props) => props.$columnColor || "#000000"};
  background-color: ${(props) => props.$columnBackground || "#bebade"};
  text-align: ${(props) => props.$columnAlign || "center"};
`

const TableColumnTr = styled.tr``

const TableColumnTh = styled.th<TableStyledProps>`
  padding: 10px;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.$columnHoverColor || "blue"};
    background-color: ${(props) => props.$columnHoverBackground || "white"};
  }
`
const TableBody = styled.tbody<TableStyledProps>`
  text-align: ${(props) => props.$rowAlign || "center"};
  background-color: ${(props) => props.$rowBackground || "#ffffff"};
  color: ${(props) => props.$rowColor || "#000000"};
`

const TableBodyTr = styled.tr<TableStyledProps>`
  border-radius: 5%;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.$rowHoverColor || "blue"};
    background-color: ${(props) => props.$rowHoverBackground || "white"};
  }
`

const TableBodyTd = styled.td`
  padding: 10px;
`

const TableBodyCell = styled.span<TableStyledProps>`
  &:hover {
    cursor: pointer;
    color: ${(props) => props.$cellHoverColor || "red"};
    background-color: ${(props) => props.$cellHoverBackground || "#bebade"};
  }
`

export interface IColumn {
  id: string
  name: string
}

export interface ICustomTable {
  tableId: string
  columns: IColumn[]
  rows: any
  onColumnClick: (column: IColumn) => void
  onRowClick: (row: any) => void
  onCellClick: (cell: any) => void
}

const CustomTable: React.FC<TableStyledProps & ICustomTable> = ({
  tableId,
  columns,
  rows,
  onColumnClick,
  onRowClick,
  onCellClick,
  $width,
  $height,
  $columnColor,
  $columnHoverColor,
  $columnHoverBackground,
  $columnBackground,
  $columnAlign,
  $rowBackground,
  $rowColor,
  $rowHoverColor,
  $rowHoverBackground,
  $rowAlign,
  $cellHoverColor,
  $cellHoverBackground,
}) => {
  return (
    <TableWrapper $height={$height} $width={$width}>
      <TableArea id={tableId}>
        <TableHeader
          $columnColor={$columnColor}
          $columnBackground={$columnBackground}
          $columnAlign={$columnAlign}
        >
          <TableColumnTr>
            {columns.map((column: IColumn) => (
              <TableColumnTh
                $columnHoverColor={$columnHoverColor}
                $columnHoverBackground={$columnHoverBackground}
                key={`column-id-${column.id}`}
                onClick={() => onColumnClick(column)}
              >
                {column.name}
              </TableColumnTh>
            ))}
          </TableColumnTr>
        </TableHeader>
        <TableBody
          $rowAlign={$rowAlign}
          $rowBackground={$rowBackground}
          $rowColor={$rowColor}
        >
          {rows.map((row: any) => (
            <TableBodyTr
              $rowHoverColor={$rowHoverColor}
              $rowHoverBackground={$rowHoverBackground}
              key={`row-id-${row.id}`}
              onClick={() => onRowClick(row)}
            >
              {columns.map((column: IColumn) => (
                <TableBodyTd key={`row-${row.id}-col-${column.id}`}>
                  <TableBodyCell
                    $cellHoverColor={$cellHoverColor}
                    $cellHoverBackground={$cellHoverBackground}
                    onClick={(event) => {
                      event.stopPropagation()
                      onCellClick(row[column.id])
                    }}
                  >
                    {row[column.id]}
                  </TableBodyCell>
                </TableBodyTd>
              ))}
            </TableBodyTr>
          ))}
        </TableBody>
      </TableArea>
    </TableWrapper>
  )
}

export default CustomTable
