import App from './App'

const Furniture = (props) => {
    return (
        <ul>
            <li onClick={props.onClick}>{props.chair}</li>
        </ul>
    )
}

export default Furniture