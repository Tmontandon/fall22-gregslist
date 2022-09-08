import { generateId } from "../Utils/generateId.js"

class Job {
  /**
     * The data needed to make a Job
     * @param {{company: string, jobTitle: string, hours: number, rate: number, description: string, id?:string}} data 
  */
  constructor(data) {
    this.id = data.id || generateId()
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description

  }
}