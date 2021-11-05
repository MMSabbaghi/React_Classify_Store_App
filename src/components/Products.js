import noDataImg from "../assets/images/no_data.jpg";

const Product = ({ onDelete, product }) => {
  return (
    <div className="product">
      <p> {product.title} </p>
      <button onClick={onDelete}>×</button>
    </div>
  );
};

const Products = ({ products, onDelete, currentGroupTitle }) => {
  const renderGroupTitle = () => {
    if (!currentGroupTitle) return null;
    return (
      <h2>
        group {" : "}
        <span style={{ color: "var(--secondary_color)" }}>
          {currentGroupTitle}
        </span>
      </h2>
    );
  };

  if (!products.length) {
    return (
      <div className="no_data">
        {renderGroupTitle()}
        <img src={noDataImg} alt="no data" />
      </div>
    );
  }

  return (
    <div className="products">
      {renderGroupTitle()}
      {products.map((p) => (
        <Product product={p} key={p.id} onDelete={() => onDelete(p.id)} />
      ))}
    </div>
  );
};

export default Products;
