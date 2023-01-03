import React from "react";
import economic from "../../asset/alexander-grey-8lnbXtxFGZw-unsplash.jpg";
const News3 = () => {
  return (
    <>
      <div className="bg-white flex flex-col">
        <h1 className="text-center font-bold text-xl p-2">Prod title </h1>
        <div className="w-[400px] mx-auto ">
          <img src={economic} alt="" className="w-full object-cover" />
        </div>

        <div className="p-3 leading-6"> 
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas optio
            in non dolores, dignissimos ut, sunt quam fuga sit suscipit quod
            recusandae eaque quia blanditiis sequi quasi maxime ea. Nemo!
          </p>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            aperiam cupiditate veniam optio iste temporibus! Laborum quae
            excepturi officia incidunt harum dolores impedit nemo, dolor
            cupiditate, placeat sequi, voluptatem ex!
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
            ullam inventore reprehenderit autem vero dolores molestiae
            cupiditate laborum accusantium quibusdam aliquam delectus voluptatem
            repellendus qui maxime architecto necessitatibus saepe consequuntur.
            Nisi deleniti esse, molestiae iste minus eum maiores hic
            perspiciatis tempore vitae. Quibusdam deleniti quas rem provident,
            nulla non labore.
          </p>
        </div>
      </div>
    </>
  );
};

export default News3;
  