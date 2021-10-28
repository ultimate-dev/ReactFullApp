import { Link } from "react-router-dom";
// Components
import Header from "../../components/Header";
// Utils
import slugfiy from "../../utils/slugfiy";

export default () => {
  return (
    <div>
      <Header title="Blogs" />
      <ul className="p-4">
        <li>
          {"=> "}
          <Link to={`/blogs/${slugfiy.combine("first blog", 1)}`}>Blog 1</Link>
        </li>
        <li>
          {"=> "}
          <Link to={`/blogs/${slugfiy.combine("second blog", 2)}`}>Blog 2</Link>
        </li>
        <li>
          {"=> "}
          <Link to={`/blogs/${slugfiy.combine("last blog", 3)}`}>Blog 3</Link>
        </li>
      </ul>
    </div>
  );
};
