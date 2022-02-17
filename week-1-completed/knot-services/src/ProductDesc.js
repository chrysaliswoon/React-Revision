function ProductDescription(props) {
    return (
      <div>
          <h4 class="ItemHeader">{props.title}</h4>
          <p class="ItemHeading">{props.description}</p>
      </div>
    );
  }
  
  export default ProductDescription;