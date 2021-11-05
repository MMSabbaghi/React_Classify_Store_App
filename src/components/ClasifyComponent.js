import { useEffect, useState } from "react";
import AddForm from "./AddForm";
import Products from "./Products";
import SelectGroup from "./SelectGroup";

const ClasifyComponent = () => {
  const [groups, setGroups] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(null);

  useEffect(() => {
    if (currentGroup) {
      const products = groups.find((g) => g.id === currentGroup.id).products;
      setFilteredProducts(products);
    }
  }, [currentGroup, groups]);

  const addGroupHandler = (inputValue) => {
    const newGroup = {
      id: Math.floor(Math.random() * 100000),
      title: inputValue,
      products: [],
    };
    setGroups([...groups, newGroup]);
    setCurrentGroup(newGroup);
  };

  const addProductHandler = (inputValue) => {
    if (currentGroup) {
      const newProduct = {
        groupId: currentGroup.id,
        id: Math.floor(Math.random() * 10000),
        title: inputValue,
      };
      const newState = [...groups];
      const groupindex = groups.findIndex((g) => g.id === currentGroup.id);
      const group = { ...newState[groupindex] };
      group.products = [...group.products, newProduct];
      newState[groupindex] = group;
      setGroups(newState);
    }
  };

  const changeGroupHandler = (id) => {
    setCurrentGroup(groups.find((group) => group.id === +id));
  };

  const deleteProductHandler = (id) => {
    const newState = [...groups];
    const groupIndex = newState.findIndex((g) =>
      g.products.some((p) => p.id === id)
    );
    const group = { ...newState[groupIndex] };
    group.products = group.products.filter((p) => p.id !== id);
    newState[groupIndex] = group;
    setGroups(newState);
  };

  const getSelectOptions = () => {
    return groups.map((g) => {
      return { label: g.title, value: g.id };
    });
  };

  return (
    <div className="clasify_component">
      <div className="manage_product">
        <h2>Add Product </h2>
        <AddForm placeholder="product name" onSubmit={addProductHandler} />
        <SelectGroup
          options={getSelectOptions()}
          onChange={changeGroupHandler}
          selectedGroupId={currentGroup?.id}
          onAddGroup={addGroupHandler}
        />
      </div>
      <Products
        currentGroupTitle={currentGroup?.title}
        products={filteredProducts}
        onDelete={deleteProductHandler}
      />
    </div>
  );
};

export default ClasifyComponent;
