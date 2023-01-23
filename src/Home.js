import React from "react";
import Data from "./Data";
import Itemcard from "./Itemcard";


const Home = () => {
  return (
    <>
      <h1 className="text-center mt-3">Natural Basket</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {Data.productData.map((item, index) => {
            return (
              <Itemcard
                key={index}
                img={item.img}
                title={item.title}
                item={item}
                desc={item.desc}
                price={item.price}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
