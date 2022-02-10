import ProductDescription from "./ProductDesc";
import ProductIcon from "./ProductIcon";

function ProductList() {
  const Product = [
    {
    icon: "fas fa-heart fa-2x",
    title: "Wedding Vision",
    description: "Define your wedding vendors",
    color: "#c7758f"
    },
    {
    icon: "fas fa-money-check-alt fa-2x",
    title: "Budgeter",
    description: "Get a personalized spending plan based on your unique budget.",
    color: "#c7758f"
  }
]

    return (
      <div className="ProductList">
        {Product.map((el, index) => (
          <ProductIcon 
          icon={el.icon}
          />
        ))}
        {Product.map((el, index) =>(
          <ProductDescription 
          title={el.title}
          description={el.description}
          />
        ))}
      </div>
    );
  }
  
  export default ProductList;