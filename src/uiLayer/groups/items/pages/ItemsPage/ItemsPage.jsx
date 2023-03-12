import styles from "./ItemsPage.module.css";
import { Card, Item } from "../../../../common";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { QuickLinksElement } from "./elements";

export const ItemsPage = () => {
  const { cartItemIds, products, categories, currency } = useSelector(
    (store) => store
  );
  const { category } = useParams();
  const quickLinks = categories.map((c) => {
    return { label: c, href: `../${c}` };
  });
  if (category && categories.every((c) => c !== category)) {
    return (
      <>
        <QuickLinksElement links={quickLinks} />
        <p>Unknown category...</p>
      </>
    );
  }

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <main className={styles.content}>
      <QuickLinksElement links={quickLinks} />
      <Card className={styles["items-container"]}>
        <div>
          <h3>{category}</h3>
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
