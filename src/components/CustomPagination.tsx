import { useEffect, useState } from 'react'

import {
  GrChapterPrevious,
  GrCaretPrevious,
  GrCaretNext,
  GrChapterNext
} from 'react-icons/gr'
import styled from 'styled-components'

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  color: #000000;
`

const IconButton = styled.div`
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`

const NumberButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const NumberButton = styled.button``

export interface IPageProps {
  totalCount: number
  listLimit: number
  buttonMax: number
}

const NumberButtons = ({ totalCount, listLimit, buttonMax }: IPageProps) => {
  const [pageCount, setPageCount] = useState(0)
  const [numberButtonArray, setNumberButtonArray] = useState<number[]>([])

  useEffect(() => {
    const count = Math.ceil(totalCount / listLimit)
    setPageCount(count)
    setNumberButtonArray(Array.from({ length: count }, (_, i) => i + 1))
  }, [totalCount, listLimit])

  useEffect(() => {
    console.log('Page count:', pageCount)
    console.log('Number button array:', numberButtonArray)
  }, [pageCount, numberButtonArray])

  return <NumberButtonArea></NumberButtonArea>
}

const CustomPagination = ({ totalCount, listLimit, buttonMax }: IPageProps) => {
  return (
    <PaginationWrapper>
      <IconButton>
        <GrChapterPrevious />
      </IconButton>
      <IconButton>
        <GrCaretPrevious />
      </IconButton>
      <NumberButtons
        totalCount={totalCount}
        listLimit={listLimit}
        buttonMax={buttonMax}
      />
      <IconButton>
        <GrCaretNext />
      </IconButton>
      <IconButton>
        <GrChapterNext />
      </IconButton>
    </PaginationWrapper>
  )
}

export default CustomPagination
