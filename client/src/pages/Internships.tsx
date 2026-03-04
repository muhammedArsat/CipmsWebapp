import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { InternshipApi } from "../apis/internships.api"
import InternshipCard from "../components/InternshipCard"

interface InternshipType {
  id: string,
  companyName: string,
  companyLogo: string,
  title: string,
  location: string,
  duration: string,
  applicationDeadline: string,
  salaryPackage: string,
  status: string
}

const Internships = () => {

  const [internships, setInternships] = useState<InternshipType[]>([])
  const [totalInternships, setTotalInternships] = useState(0)

  const fetchInternship = async () => {
    try {
      const response = await InternshipApi.fetchAllInternships()
      setTotalInternships(response.data.totalInternships)
      setInternships(response.data.internships)
      // console.log(response)
    } catch (err: any) {
      toast.error(err.response.data.message || "Internal server error")
    }
  }
  useEffect(() => {
    fetchInternship()
  }, [])
  return (
    <div>

      <Typography variant="h3" className="mb-3">
        Internships
      </Typography>

      <Typography variant="body1" color="inherit" className="flex items-center gap-3 py-2 ">
        Total Internships posted <span className="font-bold" color="inherit">
          {totalInternships}
        </span>
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {internships.length === 0 ? (
          <div className="col-span-full">No internships yet</div>
        ) : (
          internships.map((internship, idx) => (
            <InternshipCard
              key={internship.id || idx}
              id={internship?.id}
              companyName={internship?.companyName}
              companyLogo={internship?.companyLogo}
              title={internship.title}
              location={internship.location}
              duration={internship.duration}
              deadline={internship?.applicationDeadline}
              salaryPackage={internship.salaryPackage}
              status={internship.status}
              match={null}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Internships
