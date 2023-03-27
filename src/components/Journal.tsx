import React, { useRef } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Draggable } from "./Draggable";

export const Journal = () => {
  const journalRef = useRef<HTMLDivElement>(null);
  return (
    <div
      id="news"
      className="flex mt-24 overflow-hidden min-w-3xl will-change-auto hover:will-change-scroll"
    >
      <div className="flex flex-col mx-16 min-w-[25%] h-0">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold pb-3 ">
            Journal
          </h1>
          <Link to="/#" className="underline">
            All news
          </Link>
        </div>
      </div>
      <Draggable>
        <div
          className="flex snap-x overflow-x-auto scroll-smooth max-w-fit"
          ref={journalRef}
        >
          <div className="snap-start shrink-0 max-w-[25vw] mr-2 2xl:mr-3">
            <StaticImage
              src="../images/journal1.jpeg"
              alt="ohmycotton vogue cover"
              className="max-w-[25vw]"
              draggable={false}
            />
            <p className="font-light text-sm py-8 whitespace-normal">
              OHMYCOTTON on the cover of Vogue Thailand
            </p>
          </div>
          <div className="snap-start shrink-0 max-w-[25vw] mx-2 2xl:mx-3">
            <StaticImage
              src="../images/journal2.jpeg"
              alt="ohmycotton l'uomo cover"
              className="max-w-[25vw]"
              draggable={false}
            />
            <p className="font-light text-sm py-8 whitespace-normal">
              OHMYCOTTON on the cover of L'UOMO Vogue
            </p>
          </div>
          <div className="snap-start shrink-0 max-w-[25vw] mx-2 2xl:mx-3">
            <StaticImage
              src="../images/journal3.jpeg"
              alt="donate and win visit the atelier"
              className="max-w-[25vw]"
              draggable={false}
            />
            <p className="font-light text-sm py-8 whitespace-normal">
              Donate and win a day at journal atelier
            </p>
          </div>
          <div className="snap-start shrink-0 max-w-[25vw] mx-2 2xl:mx-3">
            <StaticImage
              src="../images/journal1.jpeg"
              alt="ohmycotton vogue cover"
              className="max-w-[25vw]"
              draggable={false}
            />
            <p className="font-light text-sm py-8 whitespace-normal">
              OHMYCOTTON on the cover of Vogue Thailand
            </p>
          </div>
          <div className="snap-start shrink-0 max-w-[25vw] mx-2 2xl:mx-3">
            <StaticImage
              src="../images/journal2.jpeg"
              alt="ohmycotton l'uomo cover"
              className="max-w-[25vw]"
              draggable={false}
            />
            <p className="font-light text-sm py-8 whitespace-normal">
              OHMYCOTTON on the cover of L'UOMO Vogue
            </p>
          </div>
          <div className="snap-start shrink-0 max-w-[25vw] mx-2 2xl:mx-3">
            <StaticImage
              src="../images/journal3.jpeg"
              alt="donate and win visit the atelier"
              className="max-w-[25vw]"
              draggable={false}
            />
            <p className="font-light text-sm py-8 whitespace-normal">
              Donate and win a day at journal atelier
            </p>
          </div>
          <div className="snap-end shrink-0 flex items-start justify-center w-1/3 whitespace-nowrap mt-2 mx-10">
            <a
              href="#"
              className="whitespace-normal underline"
              draggable={false}
            >
              View all News
            </a>
          </div>
        </div>
      </Draggable>
    </div>
  );
};
