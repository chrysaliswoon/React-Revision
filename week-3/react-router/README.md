# BookStore Invoice using React Router

## Connect the URL
```
File: src/index.js

import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
```
We are using the BrowserRouter to handle the whole App. React only handles the UI while BrowerRouter handles the routing to create a Single Page App (SPA).

## Add Some Links

```
File: src/App.js

import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}
```
This gets the Components: Invoices & Expenses and renders it as a clickable link. This also changes the URL so it states /expenses. This is being controlled by the React Router.

In other words, the link is changing the URL without causing a full page reload. 

## Add Some Routes

```
File: src/routes/expenses.js

export default function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
    </main>
  );
}
```

```
File: src/routes/invoices.js

export default function Invoices() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
    </main>
  );
}
```
We create these two components in a Routes folder so it's easier to identify any issues. 

```
File: src/main.js

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
```

The Route path just indicates the routes, which in this case is "/", "expenses" and "invoices" to direct the user to. The element indicates what it will show. 

For example, in the example below:
```
<Route path="expenses" element={<Expenses />} />
```

This routes the user to the Expenses component when the user clicks on it.

## Nested Routes

```
File: src/index.js

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
```

This nests the Expenses and Invoices element under the App element so we can navigate between the homepage, expenses and invoices page.

## Listing the Invoices

```
File: src/routes/invoices.js

import { Link } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        {invoices.map(invoice => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
```

We create another component file called data which contains all of the invoices data. We will then map through the data component file to get the invoice number and make each invoice a clickable link that shows the details of the invoice.

## Adding a "No Match" Route

```
File: src/index.js

<Routes>
  <Route path="/" element={<App />}>
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />} />
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
</Routes>
```

If we were to click on the links as of now, the pages go blank. This is because none of the routes which we have created match a URL which we're linking to. 

So we create a route path for those that does not have match. In this case, if the routes doesn't match a URL which we're linking to, it will say, "There's nothing here!".

You will notice that path=*. The star means that it will match only when no other routes do.

## Reading a URL Params



## Index Routes

## Active Links

## Search Params