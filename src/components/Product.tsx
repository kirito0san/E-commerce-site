import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import MinusIcon from "@/components/icons/MinusIcon";
import PositiveIcon from "@/components/icons/PositiveIcon";
import { Button } from "@/components/ui/button";
import HeartIcon from "@/components/icons/heartIcon";
import TruckIcon from "@/components/icons/truckIcon";
import RefreshIcon from "@/components/icons/refreshIcon";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import image57 from "../../public/assets/image 57.png";
import image58 from "../../public/assets/image 58.png";
import image59 from "../../public/assets/image 59.png";
import image61 from "../../public/assets/image 61.png";
import image63 from "../../public/assets/image 63.png";
const Product = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [favorite, setFavorite] = useState<boolean>(false);
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [rating, setRating] = useState(4);
  return (
    <section className="flex flex-wrap gap-5 justify-center py-10 mx-auto w-5/6 md:justify-between">
      <div className="flex flex-col gap-3 justify-center items-center image">
        <button>
          <img src={image57} alt="image57" />
        </button>
        <button>
          <img src={image58} alt="image58" />
        </button>
        <button>
          <img src={image59} alt="image59" />
        </button>
        <button>
          <img src={image61} alt="image61" />
        </button>
      </div>
      <div>
        <button className="bg-[#eee] w-full flex-1 rounded-md p-5 h-full">
          <img className=" md:min-w-[446px] md:min-h-[313px]" src={image63} alt="image63" />
        </button>
      </div>
      <div className="flex flex-col md:w-[473px] gap-3 text-start">
        <h2>Havic HV G-92 Gamepad</h2>
        <div className="flex flex-wrap gap-2 items-center">
          <Rating style={{ maxWidth: 150 }} value={rating} onChange={setRating} />
          <span>(150 reviews) |</span>
          <span className="text-green-400">in stock</span>
        </div>
        <p className="text-3xl">$192.00</p>
        <p>
          PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble
          free install & mess free removal Pressure sensitive.
        </p>
        <hr />
        <div className="flex gap-2 items-center">
          <p className="flex items-center text-2xl">colours: </p>
          <RadioGroup className="flex gap-0 translate-y-[3px]" defaultValue="white">
            <div className="flex items-center space-x-2">
              <RadioGroupItem className="w-5 h-5" value="white" id="r1" />
              <Label htmlFor="r1"></Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem className="w-5 h-5 bg-red-500" value="red" id="r2" />
              <Label htmlFor="r2"> </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem className="w-5 h-5 bg-green-500" value="green" id="r3" />
              <Label htmlFor="r3"></Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex gap-2 items-center">
          <p className="flex items-center text-2xl">Size: </p>
          <div className="flex gap-2">
            {sizes.map((e, i) => {
              return (
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  key={e}
                  onClick={(elem) => {
                    const target = elem.target as HTMLElement;
                    document.querySelector(".ActiveBtn")?.classList.remove("ActiveBtn");
                    target.classList.add("ActiveBtn");
                  }}
                  className={
                    "w-10 h-10 text-center rounded-lg border hover:bg-red-400 hover:text-white " +
                    (i === 2 ? "ActiveBtn" : "")
                  }
                >
                  {e}
                </Button>
              );
            })}
          </div>
        </div>{" "}
        <div className="flex gap-3 items-center">
          <div className="flex items-center rounded-md   md:w-[180px] h-[42px]  text-center ">
            <button
              className="flex items-center px-2 h-full rounded-tl-md rounded-bl-md border border-black"
              onClick={() => {
                if (quantity === 1) return;
                setQuantity(quantity - 1);
              }}
            >
              <MinusIcon />
            </button>
            <span className="w-[40px] font-semibold flex-1 justify-center  flex items-center  h-full text-xl border-y border-black">
              {quantity}
            </span>
            <button
              className="flex items-center px-2 h-full bg-red-500 rounded-tr-md rounded-br-md"
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              <PositiveIcon />
            </button>
          </div>
          <Button variant={"destructive"} className="flex-1 h-full">
            buy now
          </Button>
          <button onClick={() => setFavorite(!favorite)}>
            <HeartIcon fill={favorite ? "#ef4444" : ""} stroke={favorite ? "#ef4444" : "black"} />
          </button>
        </div>
        <div className="py-2 rounded-md border border-black divide-y divide-black md:w-[475px]">
          <div className="flex gap-4 items-center p-2">
            <TruckIcon />
            <section>
              <h3>Free Delivery</h3>
              <p>Enter your postal code for Delivery Availability</p>
            </section>
          </div>
          <div className="flex gap-4 items-center p-2">
            <RefreshIcon />
            <section>
              <h3>Return Delivery</h3>
              <p>Free 30 Days Delivery Returns. Details</p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
