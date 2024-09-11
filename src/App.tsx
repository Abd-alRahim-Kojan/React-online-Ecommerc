import "./App.css";
import ProductCard from "./components/ProductCard";
import { productList } from "./data";

const App = () => {
  const renderProductList = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return (
    <main className="container mx-auto">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-5 p-2 rounded-md">
          {renderProductList}
        </div>
      </div>
    </main>
  );
};

export default App;
