import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList } from "./data";
import { Button } from "@headlessui/react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const renderProductList = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return (
    <main className="container mx-auto">
      <Button
        className="w-full h-14 text-white p-2 rounded-md bg-green-600"
        onClick={open}
      >
        Add product
      </Button>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-5 p-2 rounded-md">
          {renderProductList}
        </div>
      </div>

      <Modal isOpen={isOpen} closeModal={close} title="Add New Product">
        <div className="flex justify-between items-center gap-2">
          <Button className="w-full h-14 text-white p-2 rounded-md bg-green-600">
            submit
          </Button>
          <Button
            className="w-full h-14 text-white p-2 rounded-md bg-gray-400"
            onClick={close}
          >
            Cancle
          </Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
