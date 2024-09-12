import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import { Button, Input } from "@headlessui/react";

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
  const renderFormInputList = formInputsList.map((input) => (
    <div key={input.label} className="flex flex-col gap-1">
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        className="border border-gray-300 p-2 rounded-md mb-4 focus:outline-green-500"
      />
    </div>
  ));

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
        <form className="flex justify-between items-center gap-2 mt-6">
          {renderFormInputList}
          <Button className="w-full h-14 text-white p-2 rounded-md bg-green-600">
            Submit
          </Button>
          <Button
            className="w-full h-14 text-white p-2 rounded-md bg-gray-400"
            onClick={close}
          >
            Cancel
          </Button>
        </form>
      </Modal>
    </main>
  );
};

export default App;
