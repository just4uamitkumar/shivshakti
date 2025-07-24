import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ToDoList">Todo List</Link>
        </li>
        <li>
          <Link to="/Count">Count</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
