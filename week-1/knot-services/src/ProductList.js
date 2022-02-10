import ProductDescription from "./ProductDesc";
import ProductIcon from "./ProductIcon";

function ProductList() {
    return (
      <div className="ProductList">
          <p>List of Products</p>
          <ProductDescription />
          <ProductIcon />
      </div>
    );
  }
  
  export default ProductList;