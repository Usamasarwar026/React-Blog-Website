import React from 'react'
import {tagdata} from '../../constant/Tagsdata'

function Tags() {
  return (
    <>
      <div className="mb-12">
        <h2 className="text-fg-secondary dark:text-dark-fg-secondary mb-12 text-center text-fs-2 font-bold leading-[1.3]">
          Tags
        </h2>

        <div className="bg-bg-primary dark:bg-dark-bg-primary rounded-[10px] p-10 shadow-[0_5px_5px_rgba(0,0,0,0.05)] flex flex-wrap gap-[0.2rem] transition-colors duration-200">
          {tagdata.map((item, index) => {
            return (
              <button 
                key={index} 
                className="bg-action-primary text-fg-secondary dark:bg-dark-action-primary dark:text-dark-fg-secondary px-2.5 py-1 text-fs-5 font-bold rounded-[5px] hover:bg-fg-secondary hover:text-action-primary dark:hover:bg-fg-secondary dark:hover:text-dark-action-primary transition-all duration-200"
              >
                {item}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Tags

