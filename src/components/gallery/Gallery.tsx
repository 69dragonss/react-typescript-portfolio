import { useState } from "react";

const Gallery = () => {
  const [overlay1, setOverlay1] = useState(false);
  const [overlay2, setOverlay2] = useState(false);
  const [overlay3, setOverlay3] = useState(false);
  const [overlay4, setOverlay4] = useState(false);
  const [overlay5, setOverlay5] = useState(false);
  const [overlay6, setOverlay6] = useState(false);
  const [overlay7, setOverlay7] = useState(false);
  const [overlay8, setOverlay8] = useState(false);
  const [overlay9, setOverlay9] = useState(false);
  return (
    <div className="py-8">
      <h1 className="text-7xl font-bold text-black  text-center">Gallery</h1>
      <section className="my-16  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div
          className="relative h-80 overflow-hidden transition-all duration-200 delay-100 ease-in-out"
          onMouseEnter={() => setOverlay1(true)}
          onMouseLeave={() => setOverlay1(false)}
        >
          <img src="/first.jpg" alt="gallerypics" className="h-full w-full" />
          <div
            className={`${overlay1 && "absolute inset-0 bg-orange-400 flex justify-center items-center text-4xl "} `}
          >
            LOGO
          </div>
        </div>
        <div
          className="relative h-80 overflow-hidden transition-all duration-200 delay-100 ease-in-out"
          onMouseEnter={() => setOverlay2(true)}
          onMouseLeave={() => setOverlay2(false)}
        >
          <img src="/second.jpg" alt="gallerypics" className="h-full w-full" />
          <div
            className={`${overlay2 && "absolute inset-0 bg-orange-400 flex justify-center items-center text-4xl "} `}
          >
            LOGO
          </div>
        </div>
        <div
          className="relative h-80 overflow-hidden transition-all duration-200 delay-100 ease-in-out"
          onMouseEnter={() => setOverlay3(true)}
          onMouseLeave={() => setOverlay3(false)}
        >
          <img src="/third.jpg" alt="gallerypics" className="h-full w-full" />
          <div
            className={`${overlay3 && "absolute inset-0 bg-orange-400 flex justify-center items-center text-4xl "} `}
          >
            LOGO
          </div>
        </div>
        <div
          className="relative h-80 overflow-hidden transition-all duration-200 delay-100 ease-in-out"
          onMouseEnter={() => setOverlay4(true)}
          onMouseLeave={() => setOverlay4(false)}
        >
          <img src="/four.jpg" alt="gallerypics" className="h-full w-full" />
          <div
            className={`${overlay4 && "absolute inset-0 bg-orange-400 flex justify-center items-center text-4xl "} `}
          >
            LOGO
          </div>
        </div>
        <div
          className="relative h-80 overflow-hidden transition-all duration-200 delay-100 ease-in-out"
          onMouseEnter={() => setOverlay5(true)}
          onMouseLeave={() => setOverlay5(false)}
        >
          <img src="/five.jpg" alt="gallerypics" className="h-full w-full" />
          <div
            className={`${overlay5 && "absolute inset-0 bg-orange-400 flex justify-center items-center text-4xl "} `}
          >
            LOGO
          </div>
        </div>
        <div
          className="relative h-80 overflow-hidden transition-all duration-200 delay-100 ease-in-out"
          onMouseEnter={() => setOverlay6(true)}
          onMouseLeave={() => setOverlay6(false)}
        >
          <img src="/six.jpg" alt="gallerypics" className="h-full w-full" />
          <div
            className={`${overlay6 && "absolute inset-0 bg-orange-400 flex justify-center items-center text-4xl "} `}
          >
            LOGO
          </div>
        </div>
        <div
          className="relative h-80 overflow-hidden transition-all duration-200 delay-100 ease-in-out"
          onMouseEnter={() => setOverlay7(true)}
          onMouseLeave={() => setOverlay7(false)}
        >
          <img src="/seven.jpg" alt="gallerypics" className="h-full w-full" />
          <div
            className={`${overlay7 && "absolute inset-0 bg-orange-400 flex justify-center items-center text-4xl "} `}
          >
            LOGO
          </div>
        </div>
        <div
          className="relative h-80 overflow-hidden transition-all duration-200 delay-100 ease-in-out"
          onMouseEnter={() => setOverlay8(true)}
          onMouseLeave={() => setOverlay8(false)}
        >
          <img src="/eight.jpg" alt="gallerypics" className="h-full w-full" />
          <div
            className={`${overlay8 && "absolute inset-0 bg-orange-400 flex justify-center items-center text-4xl "} `}
          >
            LOGO
          </div>
        </div>
        <div
          className="relative h-80 overflow-hidden transition-all duration-200 delay-100 ease-in-out"
          onMouseEnter={() => setOverlay9(true)}
          onMouseLeave={() => setOverlay9(false)}
        >
          <img src="/nine.jpg" alt="gallerypics" className="h-full w-full" />
          <div
            className={`${overlay9 && "absolute inset-0 bg-orange-400 flex justify-center items-center text-4xl "} `}
          >
            LOGO
          </div>
        </div>
        {/* <div className="h-80 overflow-hidden">
          <img src="/second.jpg" alt="gallerypics" className="h-full w-full" />
        </div>
        <div className="h-80 overflow-hidden">
          <img src="/third.jpg" alt="gallerypics" className="h-full w-full" />
        </div>
        <div className="h-80 overflow-hidden">
          <img src="/four.jpg" alt="gallerypics" className="h-full w-full" />
        </div>
        <div className="h-80 overflow-hidden">
          <img src="/five.jpg" alt="gallerypics" className="h-full w-full" />
        </div>
        <div className="h-80 overflow-hidden">
          <img src="/six.jpg" alt="gallerypics" className="h-full w-full" />
        </div>
        <div className="h-80 overflow-hidden">
          <img src="/seven.jpg" alt="gallerypics" className="h-full w-full" />
        </div>
        <div className="h-80 overflow-hidden">
          <img src="/eight.jpg" alt="gallerypics" className="h-full w-full" />
        </div>
        <div className="h-80 overflow-hidden">
          <img src="/nine.jpg" alt="gallerypics" className="h-full w-full" />
        </div> */}
      </section>
    </div>
  );
};

export default Gallery;
