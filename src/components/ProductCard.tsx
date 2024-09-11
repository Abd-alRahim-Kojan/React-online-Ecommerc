import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface Iprops {
  product: IProduct;
}

const ProductCard = ({ product }: Iprops) => {
  const { title, description, imageURL, price, category } = product;

  return (
    <div className="border rounded-md mx-auto md:mx-0 p-2 flex flex-col gap-2">
      <Image
        src={imageURL}
        alt="product-image"
        className="w-full h-52 lg:h-96 object-cover rounded-md mb-2"
      />

      <h3>{title}</h3>
      <p>{textSlicer(description)}</p>

      <div className="flex items-center gap-2">
        <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-green-500 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-pink-500 rounded-full cursor-pointer"></span>
      </div>

      <div className="flex justify-between items-center">
        <span>{price}</span>
        <Image
          src={category.imageURL}
          alt="product-image"
          className="w-10 h-10 object-cover rounded-full"
        />
      </div>

      <div className="flex justify-between items-center gap-2 mt-5">
        <Button className="bg-blue-500" onClick={() => alert("click")}>
          Edit
        </Button>
        <Button className="bg-red-500">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
