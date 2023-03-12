import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const { categories } = useSelector((store) => store);
  return (
    <>
      <h1>Home page</h1>
      <Link to={`items/${categories[0]}`}>
        <p>Catalog</p>
      </Link>
    </>
  );
};
