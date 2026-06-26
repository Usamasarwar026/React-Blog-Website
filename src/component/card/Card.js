import React from "react";

function Card(props) {
  return (
    <div>
      <div className="bg-bg-primary dark:bg-dark-bg-primary p-2.5 mb-4 rounded-[10px] shadow-[0_10px_10px_rgba(0,0,0,0.05)] transition-all duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_10px_10px_rgba(0,0,0,0.1)] sm:grid sm:grid-cols-[3fr_4fr] sm:gap-5 transition-colors duration-200">
        <div className="hidden sm:block sm:overflow-hidden sm:rounded-[5px]">
          <img
            src={props?.data?.image}
            alt={props?.data?.title}
            width="250"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-[10px_5px]">
          <button className="bg-action-secondary text-fg-secondary dark:bg-dark-action-secondary dark:text-dark-fg-secondary font-semibold px-4 py-1 rounded-[5px] mb-4 hover:bg-fg-secondary hover:text-action-secondary dark:hover:bg-fg-secondary dark:hover:text-dark-action-secondary transition-all duration-[250ms] text-fs-5">
            {props?.data?.topic}
          </button>

          <h3 className="text-fs-3 font-bold text-fg-primary dark:text-dark-fg-primary leading-[1.4] mb-4 hover:underline hover:decoration-2">
            <a
              href="#title"
              className="text-fg-primary dark:text-dark-fg-primary text-decoration-none"
            >
              {props?.data?.title}
            </a>
          </h3>

          <p className="hidden sm:line-clamp-3 sm:block text-fs-4 text-fg-secondary dark:text-dark-fg-secondary mb-4">
            {props?.data?.description}
          </p>

          <div className="sm:flex sm:justify-start sm:items-center sm:gap-2.5">
            <div className="hidden sm:block sm:w-14 sm:h-14 bg-action-primary dark:bg-dark-action-primary p-[3px] rounded-full">
              <img
                src={props?.data?.author?.image}
                alt={props?.data?.author?.name}
                width="50"
                className="rounded-full"
              />
            </div>

            <div className="flex justify-between items-center flex-wrap gap-[15px] sm:flex-col sm:items-start sm:gap-0 w-full">
              <a
                href="#author"
                className="text-fg-secondary dark:text-dark-fg-secondary hover:text-accent dark:hover:text-accent font-bold text-fs-4 text-decoration-none"
              >
                {props?.data?.author?.name}
              </a>

              <p className="flex items-center gap-[5px] text-fg-tertiary dark:text-dark-fg-tertiary text-fs-4">
                <time dateTime="2022-01-17">{props?.data?.author?.date}</time>
                <span className="bg-fg-tertiary dark:bg-dark-fg-tertiary mx-[3px] w-[3px] h-[3px] rounded-full"></span>
                <ion-icon
                  name="time-outline"
                  style={{ "--ionicon-stroke-width": "50px" }}
                ></ion-icon>
                <time dateTime="PT3M">{props?.data?.author?.time}</time>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
