import "@/styles/DashBaord.css"

const DashBoard = () => {
  return (
    <>
      <div className="dashboard-wrapper">
        <div className="dashboard-display-board">
          <div>
            <img
              src="/public/dash-board.gif"
              alt="baseImage"
              className="dashboard-image"
            />
          </div>
          <div>
            <h2>IntroDuction</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard
