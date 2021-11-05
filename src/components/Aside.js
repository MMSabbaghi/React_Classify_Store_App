import {
  BiCollection,
  BiUser,
  BiBasket,
  BiCubeAlt,
  BiCategoryAlt,
} from "react-icons/bi";
const Aside = () => {
  return (
    <aside className="left_nav">
      <ul className="side_menu">
        <li>
          <a href="#top">
            <BiCollection /> <span>Dashboard </span>
          </a>
        </li>
        <li>
          <a href="#top">
            <BiUser /> <span>Customers </span>
          </a>
        </li>
        <li>
          <a href="#top">
            <BiBasket /> <span>Orders </span>
          </a>
        </li>
        <li>
          <a href="#top">
            <BiCubeAlt /> <span>Products </span>
          </a>
        </li>
        <li>
          <a href="#top">
            <BiCategoryAlt /> <span>Categories </span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
