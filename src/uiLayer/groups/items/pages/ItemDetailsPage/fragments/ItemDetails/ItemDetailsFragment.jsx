import { useForm } from "react-hook-form";
import { Button } from "../../../../../../common";
import styles from "./ItemDetailsFragment.module.css";

export const ItemDetailsFragment = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data.reviewText);
    alert(`Ваш відгук ${data.reviewText} додано успішно!`);
  };

  return (
    <main>
      <h1>{props.name}</h1>
      <h3>Category: {props.category}</h3>
      <h5>Description: {props.description}</h5>
      <p>
        Price: {`${props.price} `}
        <Button onClick={props.onCurrencyChange}>Change currnecy</Button>
      </p>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles["form-container"]}>
          <textarea
            cols='30'
            rows='10'
            {...register("reviewText")}
          />
          <Button type='submit'>Submit review</Button>
        </div>
      </form>
    </main>
  );
};
