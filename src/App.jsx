import React, { useState, useEffect } from 'react'
import Job from './components/Job'
import allJobs from './data/data.json'

function App() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState([])

  useEffect(() => {
    setLoading(false)
    setJobs(allJobs)
    setLoading(true)
  }, [])

  const filterFunc = ({ role, level, languages, tools }) => {
    const tags = [role, level]

    if (languages) {
      tags.push(...languages)
    }

    if (tools) {
      tags.push(...tools)
    }

    return filters.every((filter) => tags.includes(filter))
  }

  const handleTagClick = (tag) => {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag])
    }
  }

  const handleFilterClick = (filter) => {
    setFilters(filters.filter((f) => f !== filter))
  }

  const filteredJobs = jobs.filter(filterFunc)

  return (
    <div className="">
      <header className="bg-teal-100 mb-12">
        <svg
          id="visual"
          viewBox="0 0 1920 500"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            d="M0 131L45.7 135.8C91.3 140.7 182.7 150.3 274.2 158.5C365.7 166.7 457.3 173.3 548.8 169.8C640.3 166.3 731.7 152.7 823 148.2C914.3 143.7 1005.7 148.3 1097 141C1188.3 133.7 1279.7 114.3 1371.2 104.5C1462.7 94.7 1554.3 94.3 1645.8 102.2C1737.3 110 1828.7 126 1874.3 134L1920 142L1920 0L1874.3 0C1828.7 0 1737.3 0 1645.8 0C1554.3 0 1462.7 0 1371.2 0C1279.7 0 1188.3 0 1097 0C1005.7 0 914.3 0 823 0C731.7 0 640.3 0 548.8 0C457.3 0 365.7 0 274.2 0C182.7 0 91.3 0 45.7 0L0 0Z"
            fill="#0066FF"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>
      </header>
      <div className="container mx-auto lg:-my-60">
        {filters.length > 0 && (
          <div className="flex flex-col lg:flex-row bg-white shadow-md mb-16 mx-10 p-6 rounded z-10 relative">
            {filters.map((filter) => (
              <span
                key={filter}
                className="cursor-pointer mr-4 mb-4 rounded font-bold text-teal-500 bg-teal-100 p-2 lg:mb-0"
                onClick={() => handleFilterClick(filter)}
              >
                × {filter}
              </span>
            ))}
            <button
              type="reset"
              onClick={() => setFilters([])}
              className="font-bold text-gray-700 lg:ml-auto"
            >
              Clear
            </button>
          </div>
        )}
        {loading && filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Job key={job.id} job={job} handleTagClick={handleTagClick} />
          ))
        ) : (
          <div>Jobs are fetching ...</div>
        )}
      </div>
    </div>
  )
}

export default App
