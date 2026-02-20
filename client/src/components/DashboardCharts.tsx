import { BarChart } from '@mui/x-charts/BarChart'

const chartSetting = {
    yAxis: [
        {
            label: 'Internships',
            width: 60,
        },
    ],
    height: 300,
}

interface Dataset {
    month: string,
    internships: number
}

interface DashboardChartProps {
    dataset: Dataset[]
}

export default function BarsDataset({ dataset }: DashboardChartProps) {


    if (!dataset) {
        return <div>No dataset provided</div>
    }

    if (!Array.isArray(dataset)) {
        return <div>Dataset is not an array</div>
    }

    if (dataset.length === 0) {
        return <div>No monthly data available</div>
    }

    // Transform months to proper case if needed
    const transformedDataset = dataset.map(item => ({
        ...item,
        month: item.month.charAt(0).toUpperCase() + item.month.slice(1) // Capitalize first letter
    }))

    return (
        <BarChart
            dataset={transformedDataset}
            xAxis={[{ dataKey: 'month', scaleType: 'band' }]}
            series={[
                { dataKey: 'internships', label: 'Internships Posted' },
            ]}
            {...chartSetting}
        />
    )
}