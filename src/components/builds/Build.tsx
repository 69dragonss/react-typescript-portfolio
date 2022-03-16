const Build = () => {
  return (
    <>
      <section className="flex justify-center items-center min-h-[76vh]">
        <div className="max-w-4xl grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16 h-full px-8 py-4">
          <div className="flex text-right items-center justify-end">
            <h1 className="max-w-[12rem] sm:max-w-[18rem] lg:max-w-[26rem] text-[4rem] sm:text-[6rem] lg:text-[7rem] leading-tight mb-20">
              we build <span className="font-bold">digital</span>
            </h1>
          </div>
          <div className="flex text-left items-start justify-center flex-col space-y-12">
            <p className="max-w-sm">
              Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor
              smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but
              wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led.
            </p>
            <button className="py-3 px-10 bg-orange-400 hover:opacity-90 text-white font-bold">READ MORE</button>
          </div>
        </div>
      </section>
      <div className="h-1 max-w-4xl rounded-full  mx-auto bg-slate-700"></div>
    </>
  );
};

export default Build;
