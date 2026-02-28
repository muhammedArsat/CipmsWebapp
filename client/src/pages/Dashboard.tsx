import { Box, Paper, Typography } from "@mui/material"
import InternshipCard from "../components/InternshipCard"
import { useAuth } from "../contexts/AuthContext"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { PlacementOfficerApi } from "../apis/PlacementOfficerApi"
import type { InternshipProps } from "../types/internship.type"
import { DashboardApi } from "../apis/dashboard.Api"
import DashboardStatsCard from '../components/DashboardStatsCard'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined'
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'
import DashboardChart from '../components/DashboardCharts'

interface DashboardStats {
  activeInternships: string,
  expiredInternships: string,
  pendingApplications: string,
  recentApplications: string,
  totalApplications: string,
  totalInternships: string
}

interface ChartDataset {
  month: string,
  internships: number
}

const Dashboard = () => {
  const { user } = useAuth()
  const [chartDataset, setChartDataset] = useState<ChartDataset[]>([]) // Fixed: proper typing and initialization
  const [dashboardStats, setDashboardStats] = useState<DashboardStats>()


  const fetchDashboardStats = async () => {
    try {
      const response = await DashboardApi.getDashboardStats(user?.id as string)
      setDashboardStats(response.data)
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Internal server error")
    }
  }

  const fetchChartData = async () => {
    try {
      const response = await DashboardApi.getChartData(user?.id as string)
      // console.log("API Response:", response.data) // Debug log
      setChartDataset(response.data) // This should be the array of chart data
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Internal server error")
    }
  }



  useEffect(() => {
    if (["PLACEMENT_OFFICER", "ADMIN", "MENTOR"].includes(user?.role as string))
      fetchDashboardStats()
  }, [])

  useEffect(() => {
    fetchChartData()
  }, [])
  const [internships, setInternships] = useState<InternshipProps[]>([])

  const fetchInternships = async () => {
    try {
      const id = user?.id
      const response = await PlacementOfficerApi.getAllPostedInternshipByPO(id)
      setInternships(response.data.internships)
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Internal server error")
    }
  }

  useEffect(() => {
    if (user?.role === "PLACEMENT_OFFICER")
      fetchInternships()
  }, [])

  return (
    <div className="space-y-4 ">
      <Typography variant="h3" className="">
        Dashboard
      </Typography>

      {["PLACEMENT_OFFICER", "ADMIN", "MENTOR"].includes(user?.role as string) && <>
        <Paper className="p-4">
          <Typography variant="h6" className="" fontWeight="semibold" color="inherit">
            Internship Stats
          </Typography>

          <Box sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(6, 1fr)',
            },
            gap: { xs: 2, sm: 3, md: 4 },
            mb: 2,
            mt: 2
          }}>
            <DashboardStatsCard
              icon={<WorkOutlineIcon />}
              title="Active Internships"
              value={dashboardStats?.activeInternships ?? "0"}
              iconBg="#4caf50"
            />
            <DashboardStatsCard
              icon={<EventBusyOutlinedIcon />}
              title="Expired Internships"
              value={dashboardStats?.expiredInternships ?? "0"}
              iconBg="#f44336"
            />
            <DashboardStatsCard
              icon={<HourglassEmptyOutlinedIcon />}
              title="Pending Applications"
              value={dashboardStats?.pendingApplications ?? "0"}
              iconBg="#ff9800"
            />
            <DashboardStatsCard
              icon={<NotificationsOutlinedIcon />}
              title="Recent Applications"
              value={dashboardStats?.recentApplications ?? "0"}
              iconBg="#2196f3"
            />
            <DashboardStatsCard
              icon={<AssignmentOutlinedIcon />}
              title="Total Applications"
              value={dashboardStats?.totalApplications ?? "0"}
              iconBg="#9c27b0"
            />
            <DashboardStatsCard
              icon={<BusinessCenterOutlinedIcon />}
              title="Total Internships"
              value={dashboardStats?.totalInternships ?? "0"}
              iconBg="#607d8b"
            />
          </Box>
        </Paper>
      </>}


      {/* Chart Section */}
      <Paper className="p-4">
        <Typography variant="h6" fontWeight="semibold" color="inherit" className="mb-3">
          Monthly Analytics
        </Typography>
        <DashboardChart dataset={chartDataset} />
      </Paper>


      {user?.role === "PLACEMENT_OFFICER" && <>
        <Box>
          <Typography variant="h6" fontWeight="semibold">Your posted internships</Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {internships.length <= 0 ? (
              <Typography className="text-center col-span-4">No Internship posted yet</Typography>
            ) : (
              internships.map((internship, idx) => (
                <InternshipCard
                  key={internship.id || idx}
                  id={internship.id}
                  title={internship.title}
                  location={internship.location}
                  duration={internship.duration}
                  companyName={internship.companyName}
                  companyLogo={internship.companyLogo}
                  salaryPackage={internship.salaryPackage}
                  deadline={internship.deadline}
                  status={internship.status}
                />
              ))
            )}
          </div>
        </Box>
      </>}

    </div>
  )
}

export default Dashboard
