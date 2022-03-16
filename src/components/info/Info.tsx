const Info = () => {
  return (
    <section className="mt-12 mb-20 p-8">
      <div className=" max-w-6xl  mx-auto grid grid-cols-1 sm:grid-cols-2  sm:gap-12">
        <div className="space-y-20 mt-12">
          <h1 className="text-4xl sm:text-7xl ">
            i am <span className="font-bold">designer</span>
          </h1>
          <img src="/laptop.jpg" alt="laptop" />
        </div>
        <div className="flex flex-col justify-between">
          <img src="/person.jpg" alt="person" className="mb-2" />
          <div>
            <button className="font-thin py-2  border-2 my-4 px-10 border-slate-700 hover:border-none">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
