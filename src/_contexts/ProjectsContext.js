import React from 'react'

import axiosInstance from '../utils/axiosInstance'
import parseProjectData, { parseMDAName, parseContractorName } from '../utils/parseProjectData'
// import projectsData from '../data/projects'
// import MDA from '../data/mdas'
// import CONTRACTOR from '../data/contractors'


export const ProjectsContext = React.createContext()
ProjectsContext.displayName = "ProjectsContext"

export default function ProjectsProvider() {
    const [projects, setProjects] = React.useState([])
    const [rawProjectsData, setRawProjectData] = React.useState([])
    const [mdas, setMDAs] = React.useState()
    const [contractors, setContractors] = React.useState()

    React.useEffect(()=> {
        axiosInstance.get("/projects").then(({data}) =>
        {
            const minchika = data.data.filter(project => project.project_lga.lga_name === "Minchika")
            setProjects(parseProjectData(minchika))
            setRawProjectData(minchika)
        }, (err) => err.response)
        // const minchika = projectsData.data.filter(project => project.project_lga.lga_name === "Minchika")
        // setProjects(parseProjectData(minchika))
        // setRawProjectData(minchika)
    }, [])

    React.useEffect(()=> {
        axiosInstance.get("/mdas").then(({data}) => setMDAs(parseMDAName(data.data)))
        axiosInstance.get("/contractors").then(({data}) => setContractors(parseContractorName(data.data)))
        // setMDAs(parseMDAName(MDA.data))
        // setContractors(parseContractorName(CONTRACTOR.data))
      },[])
    
    return {
        projects,
        rawProjectsData,
        mdas,
        contractors

    }
}