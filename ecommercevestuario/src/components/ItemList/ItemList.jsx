import { products } from "../../utils/mockFetch";
import Filter from "../Filter/Filter";
import { Item } from "../Item/Item";

const handleProductFilter = ({ filterState, handleFilterChange }) => (
  <>
    <h2>Buscador</h2>
    <input type="text" value={filterState} onChange={handleFilterChange} />
    {filterState === ""
      ? products.map((product) => <Item key={product.id} product={product} />)
      : products
          .filter((product) =>
            product.Nombre.toLowerCase().includes(filterState.toLowerCase())
          )
          .map((product) => <Item key={product.id} product={product} />)}
  </>
);

export const ItemList = ({ products }) => {
  return (
    <>
      <Filter products={products}>
        {/* products.map((product) => (
          <Item key={product.id} product={product} />
        )) */}
        {handleProductFilter}
      </Filter>
      ;
    </>
  );
};

export default ItemList;