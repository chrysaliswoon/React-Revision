import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen() {
    return (
      <div className="Kitchen">
        <p>Kitchen</p>
        <Oven />
        <Sink />
      </div>
    );
  }
  
  export default Kitchen;