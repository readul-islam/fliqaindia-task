import React from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AssociateCard from "../AssociateCard/AssociateCard";

const Associate = () => {
  return (
    <section className=" Associate   bg-primary">
     <div className="mx-8 py-8">
     <div className=" md:text-left text-center flex items-center justify-between flex-col md:flex-row gap-2">
       <div>
       <h2
          className="text-2xl md:text-3xl
           lg:text-4xl text-secondary font-bold font-serif  "
        >
       Find Trusted Associate
        </h2>
        <small className="text-gray-600 md:text-lg  ">
        Find the best Fliqa Associate for your special day.
        </small>
       </div>
       <p className="text-secondary">{'See more >>'}</p>
      </div>


<div className="card py-4">
<AssociateCard/>
</div>

     </div>
    
    </section>
  );
};

export default Associate;
