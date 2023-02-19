import styles from "./ItemsPage.module.css";
import { Card, Item } from "../../../../common";
import { useSelector } from "react-redux";
import { useState } from "react";

export const ItemsPage = () => {
  const { cartItemIds, products, categories, currency } = useSelector(
    (store) => store
  );
  const [category, setCategory] = useState(categories[0]);
  const filteredProducts = products.filter((e) => e.category === category);

  return (
    <main className={styles.content}>
      <Card className={styles["items-container"]}>
        <select
          value={category}
          name='category-select'
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        >
          {categories.map((c) => (
            <option
              key={c}
              value={c}
            >
              {c}
            </option>
          ))}
        </select>
        <div>
          <span>Total: {products.length}</span>
          <br />
          <span>Filtered: {filteredProducts.length}</span>
        </div>
        {filteredProducts.map((e) => (
          <Item
            key={`item ${e.id}`}
            itemId={e.id}
            category={e.category}
            title={e.title}
            shortDescription={e.shortDescription}
            price={`${e.price}${currency === "USD" ? "$" : "₴"}`}
            isInCart={cartItemIds.some((i) => i === e.id)}
            detailsLink={`${e.id}`}
          />
        ))}
      </Card>
    </main>
  );
};
