import css from "./Feedbeck.module.css";

export const Feedbeck = ({ value, feedbecks, positiveClicks }) => {
  const options = Object.keys(value);

  return (
    <ul className={css.list}>
      {options.map((item) => (
        <li key={item}>
          <p>{`${item.charAt(0).toUpperCase() + item.slice(1)}: ${
            value[item]
          }`}</p>
        </li>
      ))}

      <div>
        <p>Total: {feedbecks}</p>
        <p>Positive:{positiveClicks}%</p>
      </div>
    </ul>
  );
};
