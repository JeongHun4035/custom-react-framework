import CustomPagination from '@/components/CustomPagination'

const PaginationPage = () => {
  return (
    <div>
      <CustomPagination totalCount={100} listLimit={10} buttonMax={5} />
    </div>
  )
}
export default PaginationPage
