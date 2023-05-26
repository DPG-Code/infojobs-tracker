export default function getSalary(data) {
  // Array de salarios
  const eachSalaryMin = [...data.items.map((job) => job.salaryMin.value)]
    .filter((salary) => salary !== '')
    .map((item) =>
      Number(
        item
          .slice(0, item.length - 2)
          .split('')
          .filter((i) => i !== '.')
          .join('')
      )
    )

  const eachSalaryMax = [...data.items.map((job) => job.salaryMax.value)]
    .filter((salary) => salary !== '')
    .map((item) =>
      Number(
        item
          .slice(0, item.length - 2)
          .split('')
          .filter((i) => i !== '.')
          .join('')
      )
    )

  // Valores totales de salarios
  const totalSalaryMin = Math.trunc(
    eachSalaryMin.reduce((a, b) => a + b, 0) / eachSalaryMin.length
  )
  const totalSalaryMax = Math.trunc(
    eachSalaryMax.reduce((a, b) => a + b, 0) / eachSalaryMax.length
  )
  const salaryAverage = Math.trunc((totalSalaryMin + totalSalaryMax) / 2)

  return {
    totalSalaryMin,
    totalSalaryMax,
    salaryAverage
  }
}
