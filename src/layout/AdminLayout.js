import Header from "../components/Header";
import Aside from "../components/Aside";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <Aside />
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
