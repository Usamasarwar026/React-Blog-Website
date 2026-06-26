import React from "react";
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";

function Topic(props) {
  return (
    <>
      <Link to="/" className="group flex items-stretch bg-bg-primary dark:bg-dark-bg-primary rounded-[10px] shadow-[0_5px_5px_rgba(0,0,0,0.05)] overflow-hidden mb-4 last:mb-0 text-decoration-none transition-colors duration-200">
        <div className="text-[22px] w-[70px] flex justify-center items-center bg-action-primary text-fg-secondary dark:bg-dark-action-primary dark:text-dark-fg-secondary group-hover:bg-accent group-hover:text-white transition-all duration-200">
          <IonIcon icon={props.icon} style={{ '--ionicon-stroke-width': '40px' }} />
        </div>

        <p className="p-[15px] text-fg-secondary dark:text-dark-fg-secondary font-bold">{props.title}</p>
      </Link>
    </>
  );
}

export default Topic;

