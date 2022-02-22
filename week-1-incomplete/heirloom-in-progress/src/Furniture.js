import App from './App'

const Furniture = ({item, advice}) => {
    return (
        <ul>
            <li>{item} <button onClick={advice}>Restoration Advice</button></li>
        </ul>
    )
}

export default Furniture