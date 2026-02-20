import { Box, Paper, Typography } from "@mui/material"
import type { ReactNode } from "react"


interface DashboardStatsProps {
    icon: ReactNode,
    title: string,
    value: string,
    iconBg:string
}
const DashboardStatsCard = ({ icon, title, value,iconBg }: DashboardStatsProps) => {
    return (
        <Paper className="p-2 w-full" elevation={6}> 
            <Box
                sx={{
                    width: 38,
                    height: 38,
                    borderRadius: 2,
                    backgroundColor: iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    '& svg': {
                        fontSize: '1.5rem'
                    }
                }}
            >
                {icon}
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: 'center',
              
            }}>
                <Typography color="inherit">{title}</Typography>
                <Typography variant="h6" fontWeight={"bold"}>{value}</Typography>
            </Box>
        </Paper>
    )
}

export default DashboardStatsCard
