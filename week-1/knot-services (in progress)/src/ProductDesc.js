function ProductDescription(props) {
    return (
      <div className="ProductDescription">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
      </div>
    );
  }
  
  export default ProductDescription;