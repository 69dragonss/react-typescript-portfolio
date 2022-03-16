const Hero = () => {
  return (
    <section className="flex flex-col relative items-center space-y-12 min-h-screen justify-center">
      <div className="bg-[#f2f2f2] pt-16 w-full flex justify-center overflow-y-visible">
        <img src="/heroimage.jpg" alt="hero" className="rounded-full h-[20rem] w-[20rem] sm:h-[24rem] sm:w-[24rem]" />
      </div>
      <div className="flex justify-center flex-col items-center space-y-8 text-center p-4">
        <h1 className="max-w-xl tracking-widest text-5xl">
          CREATIVE <span className="font-bold">PORTFOLIO</span>
        </h1>
        <p className="max-w-lg">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="underline hover:no-underline font-semibold tracking-widest  text-lg">READ MORE</button>
      </div>
    </section>
  );
};

export default Hero;
