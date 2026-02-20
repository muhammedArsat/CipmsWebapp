
export type MODE = "HYBRID" | "ONLINE" | "OFFLINE"

export interface InternshipProps{
    id: string,
    title: string,
    companyName: string,
    companyLogo: string,
    skills: string[],
    applicationCount: string,
    companyUrl: string,
    location: string,
    salaryPackage: string,
    mode: string,
    status: string
    duration: string,
    requirements: string,
    description: string
    deadline:string
}