import {Link, Outlet} from "react-router-dom"
import {getStocks} from '../stock-data'

export default function Stocks() {
    let stocks = getStocks();

    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
          {stocks.map(stock => (
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/stock-data/${stock.symbol}`}
              key={stock.symbol}
            >
              {stock.name}
            </Link>
          ))}
        </nav>
        <Outlet />
      </div>
    );
  }