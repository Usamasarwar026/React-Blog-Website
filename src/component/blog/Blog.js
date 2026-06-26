import React from 'react'
import Card from '../card/Card'
import { blogcarddata } from '../../constant/Blogdata'
import Topic from '../asidetopic/Topicbtn';
import { serverOutline, accessibilityOutline, rocketOutline } from 'ionicons/icons';
import Contactcards from '../asidetopic/Contactcard';
import Newslettercard from '../asidetopic/Newslettercard';
import Tags from '../asidetopic/Tags';

function Blog() {
    return (
        <div>
            <div className="bg-bg-secondary dark:bg-dark-bg-secondary py-20 transition-colors duration-200">
                <div className="mx-auto px-[15px] md:px-[30px] w-full max-w-full md:max-w-[800px] lg:max-w-[1150px] lg:grid lg:grid-cols-[5fr_2fr] lg:gap-[60px]">

                    {/* - BLOG SECTION */}
                    <div className="blog">
                        <h2 className="relative text-center sm:text-left sm:pl-8 mb-12 text-fs-2 font-bold text-fg-primary dark:text-dark-fg-primary leading-[1.3] before:content-[''] before:absolute before:top-0 before:left-0 before:bg-action-primary dark:before:bg-dark-action-primary before:w-[5px] before:h-full before:rounded-[5px] before:hidden sm:before:block">
                            Latest Blog Post
                        </h2>

                        <div className="mb-12">
                            {blogcarddata?.map((item, index) => {
                                return <Card key={index} data={item} />
                            })}
                        </div>

                        <button className="mx-auto block min-w-[10rem] rounded-full bg-fg-secondary text-bg-secondary px-[1.1875rem] py-[0.6875rem] hover:bg-accent dark:bg-dark-action-primary dark:text-dark-fg-secondary dark:hover:bg-accent dark:hover:text-white transition-all duration-200">
                            Load More
                        </button>
                    </div>

                    {/* ASIDE */}
                    <div className="hidden lg:block lg:self-stretch">
                        <div className="mb-12">
                            <h2 className="text-fg-secondary dark:text-dark-fg-secondary mb-12 text-center text-fs-2 font-bold leading-[1.3]">
                                Topics
                            </h2>

                            <Topic title='Database' icon={serverOutline}/>
                            <Topic title='Accessibility' icon={accessibilityOutline}/>
                            <Topic title='Web Performance' icon={rocketOutline}/>
                        </div>
                        
                        {/* ----------------Tags------------------ */}
                        <Tags/>

                        {/* ----------lets talk card---------- */}
                        <Contactcards />
                        <Newslettercard/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog

