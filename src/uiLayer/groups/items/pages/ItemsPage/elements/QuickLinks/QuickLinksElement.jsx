import { Link } from "react-router-dom";

export const QuickLinksElement = (props) => {
  return (
    <ul>
      {props.links.map((l) => (
        <li key={l.label}>
          <Link
            to={l.href}
            relative='path'
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
