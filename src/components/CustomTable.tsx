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
  border: solid 1px #444;
  width: ${(props) => props.$width || "auto"};
  height: ${(props) => props.$height || "auto"};
  background-color: #2f3136;
`

const TableArea = styled.table`
  padding: 2px;
  width: 100%;
  height: 100%;
  color: #ffffff;
`

const TableHeader = styled.thead<TableStyledProps>`
  color: ${(props) => props.$columnColor || "#ffffff"};
  background-color: ${(props) => props.$columnBackground || "#3a3b3c"};
  text-align: ${(props) => props.$columnAlign || "center"};
`

const TableColumnTr = styled.tr``

const TableColumnTh = styled.th<TableStyledProps>`
  padding: 10px;
  border-bottom: 1px solid #555;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.$columnHoverColor || "#bfff00"};
    background-color: ${(props) => props.$columnHoverBackground || "#444"};
  }
`
const TableBody = styled.tbody<TableStyledProps>`
  text-align: ${(props) => props.$rowAlign || "center"};
  background-color: ${(props) => props.$rowBackground || "#2f3136"};
  color: ${(props) => props.$rowColor || "#ffffff"};
`

const TableBodyTr = styled.tr<TableStyledProps>`
  border-radius: 5%;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.$rowHoverColor || "#bfff00"};
    background-color: ${(props) => props.$rowHoverBackground || "#3a3b3c"};
  }
`

const TableBodyTd = styled.td`
  padding: 10px;
  border-bottom: 1px solid #444;
`

const TableBodyCell = styled.span<TableStyledProps>`
  &:hover {
    cursor: pointer;
    color: ${(props) => props.$cellHoverColor || "#ff4081"};
    background-color: ${(props) => props.$cellHoverBackground || "#555"};
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
