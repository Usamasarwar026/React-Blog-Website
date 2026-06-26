import React from 'react'

const newsletterdata = [
    {
        heading: "Newsletter",
        text: "Subscribe to our newsletter to be among the first to keep up with the latest updates."
    }
]

function Newslettercard() {
    return (
        <>
            <div className="lg:sticky lg:top-12 mb-[98px]">
                <h2 className="text-fg-secondary dark:text-dark-fg-secondary mb-12 text-center text-fs-2 font-bold leading-[1.3]">
                    {newsletterdata[0]?.heading}
                </h2>

                <div className="bg-bg-primary dark:bg-dark-bg-primary rounded-[10px] p-10 shadow-[0_5px_5px_rgba(0,0,0,0.05)] transition-colors duration-200">
                    <p className="text-fg-secondary dark:text-dark-fg-secondary mb-4">
                        {newsletterdata[0]?.text}
                    </p>

                    <form action="#">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email Address" 
                            required 
                            className="w-full block bg-action-primary dark:bg-dark-action-primary text-fg-secondary dark:text-dark-fg-secondary px-4 py-2 rounded-[5px] mb-4 border-none placeholder-inherit focus:outline-2 focus:outline-accent focus:outline-offset-0 font-inherit"
                        />

                        <button 
                            type="submit" 
                            className="mx-auto block min-w-[10rem] rounded-full bg-accent text-white px-[1.1875rem] py-[0.6875rem] hover:bg-fg-secondary hover:text-action-primary transition-all duration-200"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Newslettercard

