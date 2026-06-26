import heroImage from "../../assets/images/hero.png";
import Button from "../button/Button";

function Hero() {
  return (
    <div className="bg-bg-primary dark:bg-dark-bg-primary pt-8 pb-20 lg:py-20 text-center lg:text-left transition-colors duration-200">
      <div className="mx-auto px-[15px] md:px-[30px] w-full max-w-full md:max-w-[800px] lg:max-w-[1150px] lg:grid lg:grid-cols-2 lg:items-center lg:gap-[50px]">
        <div className="flex flex-col">
          <h1 className="text-fs-1 font-black text-fg-primary dark:text-dark-fg-primary mb-4 leading-[1.6]">
            Hi, I'm <b className="text-accent font-inherit">Julia&nbsp;Walker</b>.
            <br />Web Developer
          </h1>
          <p className="text-fs-3 text-fg-secondary dark:text-dark-fg-secondary mb-8 font-bold">
            Specialized in <abbr title="Accessibility">a11y</abbr> and Core Web Vitals
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-[15px] lg:gap-[30px] text-center">
            <span><Button title="About Me" className='btn-primary' btn='btn' /></span>
            <span><Button title="Contact Me" className='btn-secondary' btn='btn' /></span>
          </div>
        </div>

        <div className="hidden lg:flex lg:relative lg:justify-center lg:items-center">
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-full h-[200px] bg-contain opacity-20 dark:opacity-10"
            style={{ backgroundImage: `url(${require("../../assets/images/pattern.png")})` }}
          ></div>
          <div className="relative z-10">
            <img src={heroImage} alt="Julia Walker" className="w-full h-full object-contain rounded-br-[280px] rounded-bl-[230px] translate-x-2.5 -translate-y-2.5" />
            <div className="absolute top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-[42%] -rotate-20 bg-accent w-[90%] h-[90%] -z-10"></div>
            <div className="absolute top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-[42%] -rotate-20 w-[92%] h-[92%] shadow-[inset_0_-30px_0_hsl(214,32%,91%)] dark:shadow-[inset_0_-30px_0_hsl(218,23%,25%)] z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

