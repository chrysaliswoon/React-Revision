import NavBar from "../components/Navbar";

export default function MainPage() {
    return (
      <div className="MainPage">
          <h1>Main Page</h1>
          <NavBar />
        <table border="">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><img src="" alt="Bear" /></td>
            <td>Bear</td>
          </tr>
          <tr>
            <td><img src="" alt="Angel" /></td>
            <td>Angel</td>
          </tr>
        </tbody>
        </table>
      </div>
    );
  }
  
  