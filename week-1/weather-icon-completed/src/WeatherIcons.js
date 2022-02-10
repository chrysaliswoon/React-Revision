
function WeatherIcons(props) {
    return (
      <div className="Icons">
          <img src={props.img} alt=""/>
          <p><b>conditions:</b> {props.conditions}</p>
          <p><b>time:</b> {props.time}</p>
      </div>
    );
  }
  
  export default WeatherIcons;