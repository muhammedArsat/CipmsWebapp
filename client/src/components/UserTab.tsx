import { useState, useEffect } from 'react'
import { Tabs, Tab, Box, CircularProgress, Alert, Typography } from '@mui/material'
import { useUsers } from '../hooks/useUsers'
import UserTable from './UserTable'


interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel = ({ children, value, index }: TabPanelProps) => (
  <div hidden={value !== index}>
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
)

export default function CenteredTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const { students, mentors, placementOfficers, loading, error, refetch } = useUsers()

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)

    switch (newValue) {
      case 0:
        if (students.length === 0) refetch('STUDENT')
        break

      case 1:
        if (mentors.length === 0) refetch('MENTOR')
        break

      case 2:
        if (placementOfficers.length === 0) refetch('PLACEMENTOFFICER')
        break
    }
  }

  // Fetch students data on initial load
  useEffect(() => {
    refetch('STUDENT')
  }, [])

  if (error) {
    return <Alert severity="error">{error}</Alert>
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label={`Students (${students.length})`} />
          <Tab label={`Mentors (${mentors.length})`} />
          <Tab label={`Placement Officers (${placementOfficers.length})`} />
        </Tabs>
      </Box>

      <TabPanel value={activeTab} index={0} >
        {loading ? (
          <CircularProgress />
        ) : students.length > 0 ? (
          <UserTable data={students} />
        ) : (
          <Typography color='inherit'>No students found</Typography>
        )}
      </TabPanel>

      <TabPanel value={activeTab} index={1}>
        {loading ? (
          <CircularProgress />
        ) : mentors.length > 0 ? (
          <UserTable data={mentors} />
        ) : (
              <Typography color='inherit'>No mentors found</Typography>
        )}
      </TabPanel>

      <TabPanel value={activeTab} index={2}>
        {loading ? (
          <CircularProgress />
        ) : placementOfficers.length > 0 ? (
          <UserTable data={placementOfficers} />
        ) : (
              <Typography color='inherit'>No placement officers found</Typography>
        )}
      </TabPanel>
    </Box>
  )
}
