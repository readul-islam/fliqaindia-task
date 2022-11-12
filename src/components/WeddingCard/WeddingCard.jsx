import React from "react";
import { weddingCard } from "../../Utils/mockData";

const WeddingCard = () => {
  //
  //

  
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full my-8 gap-10 md:gap-8 lg:place-items-center px-4">
      {weddingCard.map((d) => (
        <div  className="flex flex-col justify-center items-center">
          <div
            className="card mb-6 md:mb-0  card-compact   t overflow-hidden
           w-[300px] bg-base-100 shadow-xl"
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
