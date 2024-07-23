import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import g92 from "../../public/assets/g92-2-500x500 1.png";

const RelatedItem = () => {
  const datas = [
    {
      img: g92,
      newPrice: "$160",
      name: "Havic HV G-92 Gamepad",
      rating: 2,
      price: "$192",
      sale: "40%",
    },
    {
      img: "../../public/assets/image 57.png",
      newPrice: "$160",
      name: "Havic HV G-92 Gamepad",
      rating: 5,
      price: "$192",
      sale: "40%",
    },
    {
      img: "../../public/assets/g27cq4-500x500 1.png",
      newPrice: "$160",
      name: "Havic HV G-92 Gamepad",
      rating: 3,
      price: "$192",
      sale: "40%",
    },
    {
      img: "../../public/assets/ak-900-01-500x500 1.png",
      newPrice: "$160",
      name: "Havic HV G-92 Gamepad",
      rating: 4,
      price: "$192",
      sale: "40%",
    },
    {
      img: "../../public/assets/g27cq4-500x500 1.png",
      newPrice: "$160",
      name: "Havic HV G-92 Gamepad",
      rating: 1,
      price: "$192",
      sale: "40%",
    },
  ];
  interface ProductsProps {
    img: string;
    name: string;
    rating: number;
    price: string;
    sale: string;
    newPrice: string;
  }

  const [products, setProducts] = useState<ProductsProps[]>(datas);
  return (
    <section className="flex flex-col gap-10 py-10 mx-auto w-5/6 text-start">
      <div className="flex gap-2">
        <span className="w-5 h-10 bg-red-500 rounded-md"></span>
        <h1 className="text-3xl font-bold text-red-500">Related Item</h1>
      </div>{" "}
      <div className="flex flex-wrap gap-5 justify-center md:justify-between">
        {products.map((e, i) => {
          return (
            <div className="rounded-md" key={i}>
              <div className="bg-[#eee] rounded-md p-2">
                <img className="w-[172px] h-[152px]" src={e.img} alt="" />
              </div>
              <p>{e.name}</p>
              <div className="flex gap-3">
                <p className="text-red-500">{e.price} </p>
                <p className="text-gray-500 line-through">{e.newPrice}</p>
              </div>
              <div>
                <Rating
                  style={{ maxWidth: 150 }}
                  value={e.rating}
                  onChange={(newRating: number) => {
                    setProducts((prevProducts) =>
                      prevProducts.map((product, index) =>
                        index === i ? { ...product, rating: newRating } : product
                      )
                    );
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedItem;
