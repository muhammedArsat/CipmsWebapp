import { Typography } from "@mui/material"
import InternshipCard from "../components/InternshipCard"


const Dashboard = () => {
  return (
    <div>
          <Typography variant="h3">
              Dashboard
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        <InternshipCard />
        <InternshipCard />
        <InternshipCard />
        <InternshipCard />
      </div>
      

    </div>
  )
}

export default Dashboard
