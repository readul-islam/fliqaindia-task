import React from "react";

const WeddingCard = () => {
  //
  //

  const data = [
    // {id: 1, img:'https://i.ibb.co/T47B7Yt/image-56.png'},
    {
      id: 1,
      title: "Danielle & Ronnie",
      des: "38 photos. Kittery,Polland",
      img: "https://i.ibb.co/Fn2Vb0q/image-59.png",
    },
    {
      id: 2,
      title: "Danielle & Ronnie",
      des: "38 photos. Kittery,Polland",
      img: "https://i.ibb.co/JrRXkvf/image-59-1.png",
    },
    {
      id: 3,
      title: "Danielle & Ronnie",
      des: "38 photos. Kittery,Polland",
      img: "https://i.ibb.co/qntBX63/image-59-2.png",
    },
    {
      id: 4,
      title: "Danielle & Ronnie",
      des: "38 photos. Kittery,Polland",
      img: "https://i.ibb.co/qntBX63/image-59-2.png",
    },
  ];
  return (
    <div className="md:grid md:grid-cols-2 w-full xl:grid-cols-4 md:place-items-center  gap-6 px-2 py-8">
      {data.map((d) => (
        <>
          <div
            className="card mb-6 md:mb-0  card-compac   t overflow-hidden
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
        </>
      ))}
    </div>
  );
};

export default WeddingCard;
