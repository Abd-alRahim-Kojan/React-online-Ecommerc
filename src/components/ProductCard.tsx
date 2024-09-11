import Image from "./Image";
import Button from "./ui/Button";

interface Iprops {}

const ProductCard = ({}: Iprops) => {
  return (
    <div className="border rounded-md p-2 flex flex-col gap-2">
      <Image
        src="https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
        alt="product-image"
        className="w-full h-96 object-cover rounded-md mb-2"
      />

      <h3>perfume CHANEL</h3>
      <p>
        Browse premium related images on iStock | Save 20% with code UNSPLASH20
      </p>

      <div className="flex items-center gap-2">
        <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-green-500 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-pink-500 rounded-full cursor-pointer"></span>
      </div>

      <div className="flex justify-between items-center">
        <span>$500,000</span>
        <Image
          src="https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
          alt="product-image"
          className="w-10 h-10 object-cover rounded-full"
        />
      </div>

      <div className="flex justify-between items-center gap-2 mt-5">
        <Button
          className="bg-blue-500"
          onClick={() => {
            alert("click");
          }}
        >
          Edit
        </Button>
        <Button className="bg-red-500">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
