import getFrequent from '@/utils/getFrequent'
import getSalary from '@/utils/getSalary'
import axios from 'axios'

export async function getJobData(query) {
  // LLamda a la api offers la cual llama a la api de infojobs
  const res = await axios
    .get(`/offers/api?q=${query}`, { cache: 'no-store' })
    .then((data) => data)

  const { response } = res.data

  const salary = getSalary(response) || ''
  const company = getFrequent(response, 'company') || ''
  const location = getFrequent(response, 'location') || ''
  const education = getFrequent(response, 'education', 3) || ''
  const experience = getFrequent(response, 'experience', 3) || ''
  const typeJob = getFrequent(response, 'typeJob', 1) || ''

  return {
    response,
    salary,
    company,
    location,
    education,
    experience,
    typeJob
  }
}
