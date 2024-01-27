import css from "./Feedback.module.css";

export const Feedback = ({ value, feedbacks, positiveClicks }) => {
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
        <p>Total: {feedbacks}</p>
        <p>Positive:{positiveClicks}%</p>
      </div>
    </ul>
  );
};
