import React from "react";

export default function Button(props) {
  const baseClass = "min-w-[10rem] rounded-full transition-all duration-200 inline-block text-center text-decoration-none";
  let specificClass = "";

  if (props.className && props.className.includes("btn-primary")) {
    specificClass = "bg-accent text-white px-[1.1875rem] py-[0.6875rem] hover:bg-fg-secondary hover:text-action-primary";
  } else if (props.className && props.className.includes("btn-secondary")) {
    specificClass = "bg-action-secondary text-fg-secondary border-[3px] border-fg-tertiary px-4 py-2 hover:border-accent dark:bg-dark-action-secondary dark:text-dark-fg-secondary dark:border-dark-action-primary dark:hover:border-accent";
  } else {
    specificClass = props.className || "";
  }

  return (
    <>
      <a href="/" type={props?.type} className={`${baseClass} ${specificClass}`}>
        {props.title}
      </a>
    </>
  );
}
