import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <h1>Home page</h1>
      <Link to='items'>
        <p>Catalog</p>
      </Link>
    </>
  );
};
