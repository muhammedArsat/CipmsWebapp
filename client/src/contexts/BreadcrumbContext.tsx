import React, { createContext, useContext, useState, type ReactNode } from 'react'

export interface BreadcrumbItem {
    label: string
    href?: string
    isActive?: boolean
}

interface BreadcrumbContextType {
    breadcrumbs: BreadcrumbItem[]
    setBreadcrumbs: (breadcrumbs: BreadcrumbItem[]) => void
    addBreadcrumb: (item: BreadcrumbItem) => void
    resetBreadcrumbs: () => void
}

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined)

export const useBreadcrumbs = () => {
    const context = useContext(BreadcrumbContext)
    if (!context) {
        throw new Error('useBreadcrumbs must be used within a BreadcrumbProvider')
    }
    return context
}

interface BreadcrumbProviderProps {
    children: ReactNode
}

export const BreadcrumbProvider: React.FC<BreadcrumbProviderProps> = ({ children }) => {
    const [breadcrumbs, setBreadcrumbsState] = useState<BreadcrumbItem[]>([
        { label: 'Internships', href: '/internships' }
    ])

    const setBreadcrumbs = (newBreadcrumbs: BreadcrumbItem[]) => {
        setBreadcrumbsState(newBreadcrumbs)
    }

    const addBreadcrumb = (item: BreadcrumbItem) => {
        setBreadcrumbsState(prev => [...prev, item])
    }

    const resetBreadcrumbs = () => {
        setBreadcrumbsState([{ label: 'Internships', href: '/internships' }])
    }

    return (
        <BreadcrumbContext.Provider value={{
            breadcrumbs,
            setBreadcrumbs,
            addBreadcrumb,
            resetBreadcrumbs
        }}>
            {children}
        </BreadcrumbContext.Provider>
    )
}