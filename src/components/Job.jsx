import React from 'react'

export default function Job({
  job: {
    logo,
    company,
    isNew,
    isFeatured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleTagClick,
}) {
  const tags = [role, level]

  if (languages) {
    tags.push(...languages)
  }

  if (tools) {
    tags.push(...tools)
  }

  return (
    <div
      className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded lg:flex-row lg:my-4 ${
        isFeatured && 'border-l-4 border-teal-500 border-solid'
      }`}
    >
      <img
        src={new URL(logo, import.meta.url).href}
        alt={company}
        className="-mt-16 mb-4 w-20 h-20 sm:h-24 sm:w-24 sm:my-0"
      />
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-teal-500">
          {company}
          {isNew && (
            <span className="bg-teal-500 text-teal-100 text-sm uppercase font-bold m-2 py-1 px-2 rounded-full">
              New
            </span>
          )}
          {isFeatured && (
            <span className="bg-gray-800 text-teal-100 text-sm uppercase font-bold m-2 py-1 px-2 rounded-full">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-lg my-2">{position}</h2>
        <p className="text-gray-700">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded md:mb-0 cursor-pointer"
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
