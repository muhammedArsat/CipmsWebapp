import { useState } from "react"
import { fetchUserByUserType } from "../apis/adminApi"


interface User {
    id: string,
    name: string,
    email: string,
    role: 'STUDENT' | "MENTOR" | "PLACEMENTOFFICER"
}

interface useUserReturn {
    students: User[],
    mentors: User[],
    placementOfficers: User[]
    count: number,
    loading: boolean,
    error: string | null
    refetch: (userType?: string) => void
}


export const useUsers = (): useUserReturn => {
    const [students, setStudents] = useState<User[]>([])
    const [mentors, setMentors] = useState<User[]>([])
    const [placementOfficers, setPlacementOfficers] = useState<User[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [count, setCount] = useState(0)
    const fetchUsers = async (userType: string) => {
        try {
            setLoading(true)
            setError(null)

            const res = await fetchUserByUserType(userType)

            switch (userType) {
                case 'STUDENT':
                    setStudents(res.data.students || [])
                    setCount(res.data.count)
                    break

                case 'MENTOR':
                    setMentors(res.data.mentors || [])
                    setCount(res.data.count)
                    break

                case 'PLACEMENTOFFICER':
                    setPlacementOfficers(res.data.placementOfficer || [])
                    setCount(res.data.count)
                    break
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error')
        } finally {
            setLoading(false)
        }
    }



    const refetch = (userType?: string) => {
        if (userType) {
            fetchUsers(userType)
        }
    }



    return {
        students,
        mentors,
        placementOfficers,
        count,
        loading,
        error,

        refetch
    }

}