import React from 'react'
import { IonIcon } from '@ionic/react';
import { logoDiscord, logoTwitter, logoFacebook } from 'ionicons/icons';
import { Link } from "react-router-dom";

const contactdata = [
    {
        heading: "Let's Talk",
        text: "Do you want to learn more about how I can help your company overcome problems? Let us have a conversation."
    }
]

function Contactcards(props) {
  return (
    <>
      <div className="mb-12">
        <h2 className="text-fg-secondary dark:text-dark-fg-secondary mb-12 text-center text-fs-2 font-bold leading-[1.3]">
          {contactdata[0]?.heading}
        </h2>

        <div className="bg-bg-primary dark:bg-dark-bg-primary rounded-[10px] p-10 shadow-[0_5px_5px_rgba(0,0,0,0.05)] transition-colors duration-200">
          <p className="text-fg-secondary dark:text-dark-fg-secondary mb-4">
            {contactdata[0]?.text}
          </p>

          <ul className="flex justify-center items-center gap-2.5">
            <li>
              <Link to="/" className="w-[45px] h-[45px] bg-action-secondary dark:bg-dark-action-secondary rounded-full flex justify-center items-center text-[22px] text-[#5865F2] hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-200">
                <IonIcon icon={logoDiscord} />
              </Link>
            </li>

            <li>
              <Link to="/" className="w-[45px] h-[45px] bg-action-secondary dark:bg-dark-action-secondary rounded-full flex justify-center items-center text-[22px] text-[#1DA1F2] hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-200">
                <IonIcon icon={logoTwitter} />
              </Link>
            </li>

            <li>
              <Link to="/" className="w-[45px] h-[45px] bg-action-secondary dark:bg-dark-action-secondary rounded-full flex justify-center items-center text-[22px] text-[#1877F2] hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-200">
                <IonIcon icon={logoFacebook} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contactcards

