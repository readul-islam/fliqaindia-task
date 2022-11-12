import React from "react";
import { weddingCard } from "../../Utils/mockData";

const WeddingCard = () => {
  return (
    <div className="my-8 grid w-full grid-cols-1 gap-10 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:place-items-center">
      {weddingCard.map((d, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <div
            className="t card-compact card  mb-6   w-[300px] overflow-hidden
           bg-base-100 shadow-xl md:mb-0"
          >
            <figure>
              <img src={d.img} alt="Shoes" />
            </figure>
            <div className="flex">
              <img
                className="w-fit"
                src="https://i.ibb.co/T47B7Yt/image-56.png"
                alt=""
              />
              <img
                className="w-fit"
                src="https://i.ibb.co/whbXy1s/image-57.png"
                alt=""
              />
              <img
                className="w-fit"
                src="https://i.ibb.co/whbXy1s/image-57.png"
                alt=""
              />
            </div>
            <div className="card-body text-black">
              <h2 className="card-title">{d.title}</h2>
              <p>{d.des}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeddingCard;
