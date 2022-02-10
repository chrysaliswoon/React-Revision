import ProductDescription from "./ProductDesc";
import ProductIcon from "./ProductIcon";

function ProductList(props) {
  const Product = [
    {
    icon: "fas fa-heart fa-2x",
    title: "Wedding Vision",
    description: "Define your wedding vendors",
    color: "#c7758f"
    },
    {
    icon: "fas fa-desktop fa-2x",
    title: "Wedding Websites",
    description: "Create your free custom website to share with family and friends.",
    color: "#c7758f"
  },
  {
    icon: "fas fa-money-check-alt fa-2x",
    title: "Budgeter",
    description: "Get a personalized spending plan based on your unique budget.",
    color: "#c7758f"
  },
  {
    icon: "far fa-list-alt fa-2x",
    title: "Checklist",
    description: "Always know what to do, when, with your 24/7 wedding planner.",
    color: "#c7758f"
  },
  {
    icon: "fas fa-user-check fa-2x",
    title: "Guest List",
    description: "Gather addresses, collect RSVPs, track thank-you notes and more.",
    color: "#c7758f"
  },
  {
    icon: "fas fa-concierge-bell fa-2x",
    title: "Vendor List",
    description: "Streamline your vendor contacts and get pro recommendations.",
    color: "#c7758f"
  },
  {
    icon: "fas fa-gift fa-2x",
    title: "Registry",
    description: "Your retail, cash, experience and charity registries, all in one place.",
    color: "#c7758f"
  },
  {
    icon: "far fa-clock fa-2x",
    title: "Wedding Day Timeline",
    description: "The who, what, when and where of your wedding day in one timeline.",
    color: "#c7758f"
  }
]
  
    return (
      <div className="ProductList">
            {Product.map((el, index) => (
              <ProductIcon icon={el.icon}/>
            ))}
            {Product.map((el, index) => (
              <ProductDescription 
              title={el.title}
              description={el.description}
              />
            ))}
          
      </div>
    );
  }
  
  export default ProductList;
