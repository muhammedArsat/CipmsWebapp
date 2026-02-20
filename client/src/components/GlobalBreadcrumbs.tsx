import React from 'react'
import { Breadcrumbs, Typography, Link, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { useBreadcrumbs } from '../contexts/BreadcrumbContext'

const GlobalBreadcrumbs: React.FC = () => {
    const { breadcrumbs } = useBreadcrumbs()
    const navigate = useNavigate()

    const handleClick = (href?: string) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        if (href) {
            navigate(href)
        }
    }

    return (
        <Stack spacing={2} className='pt-4 pb-2'>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs.map((breadcrumb, index) => {
                    const isLast = index === breadcrumbs.length - 1

                    if (isLast || !breadcrumb.href) {
                        return (
                            <Typography key={index} sx={{ color: 'text.primary' }}>
                                {breadcrumb.label}
                            </Typography>
                        )
                    }

                    return (
                        <Link
                            key={index}
                            underline="hover"
                            color="inherit"
                            href={breadcrumb.href}
                            onClick={handleClick(breadcrumb.href)}
                            sx={{ cursor: 'pointer' }}
                        >
                            {breadcrumb.label}
                        </Link>
                    )
                })}
            </Breadcrumbs>
        </Stack>
    )
}

export default GlobalBreadcrumbs