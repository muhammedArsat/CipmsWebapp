import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab  from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import type { ApplicationType } from '../pages/MyApplications'
import ApplicationGrid from '../components/ApplicationGrid'

interface ApplicationTabProps {
    ongoingCount: number,
    completedCount: number,
    appliedCount: number,
    rejectedCount: number,
    ongoingApplications?: ApplicationType[] ,
    completedApplications?: ApplicationType[],
    appliedApplications?: ApplicationType[],
    rejectedApplications?:ApplicationType[]
    
}

interface TabPanelProps {
    children?: React.ReactNode,
    index: string,
    value: string
}

const TabPanel = ({ children, value, index }: TabPanelProps) => {
    return (
        <div hidden={value !== index}>
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    )
}

export default function ApplicationTab({ ongoingCount, completedCount, appliedCount, rejectedCount,ongoingApplications,completedApplications,appliedApplications, rejectedApplications }: ApplicationTabProps) {
    const [value, setValue] = React.useState('one')



    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)

    }

  
    return (
        <Box>
            <Box sx={{ width: '100%', display: "flex", justifyContent: "center" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="primary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="one" label={`Applied (${appliedCount})`} />
                    <Tab value="two" label={`Ongoing (${ongoingCount})`} />
                    <Tab value="three" label={`Completed (${completedCount})`} color='green' />
                    <Tab value="four" label={`Rejected (${rejectedCount})`} />

                </Tabs>

            </Box>

            <TabPanel value={value} index={"one"}>
                {appliedApplications?.length === 0 ? <Typography className='text-center' color='inherit'>No applied applications</Typography> : <><ApplicationGrid data={appliedApplications ?? []} /></>

                }
                

            </TabPanel>

            <TabPanel value={value} index={"two"}>
                {ongoingApplications?.length === 0 ? <Typography className='text-center' color='inherit'>No ongoing applications</Typography>:<><ApplicationGrid data={ongoingApplications ?? []}/></>
                   
                }

            </TabPanel>

            <TabPanel value={value} index={"three"}>
                {completedApplications?.length === 0 ? <Typography className='text-center' color='inherit'>No completed applications</Typography> : <>
                <ApplicationGrid data={completedApplications ?? []}/>
                </>

                }

            </TabPanel>

            <TabPanel value={value} index={"four"}>
                {rejectedApplications?.length === 0 ? <Typography className='text-center' color='inherit'>No rejected applications</Typography> : <><ApplicationGrid data={rejectedApplications ?? []}/></>

                }

            </TabPanel>

        </Box>

    )
}
