import {
  GrChapterPrevious,
  GrCaretPrevious,
  GrCaretNext,
  GrChapterNext,
} from "react-icons/gr"
import styled from "styled-components"

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

const NumberButtonArea = styled.div``

const NumberButton = styled.div``

const NumberButtons = () => {
  return (
    <NumberButtonArea>
      <NumberButton>1 2 3 4 5 6 7</NumberButton>
    </NumberButtonArea>
  )
}

const CustomPagination = () => {
  return (
    <PaginationWrapper>
      <IconButton>
        <GrChapterPrevious />
      </IconButton>
      <IconButton>
        <GrCaretPrevious />
      </IconButton>
      <NumberButtons />
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
