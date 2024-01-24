import css from "./Options.module.css";

export const Options = ({ onUpdate, reset, feedbecks }) => {
  const options = ["good", "neutral", "bad"];
  return (
    <ul className={css.list}>
      {options.map((option) => (
        <li className={css.items} key={option}>
          <button className={`${css[option]} ${css["type1"]}`} onClick={() => onUpdate(option)}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
      {feedbecks > 0 && (
        <button className={css.reset} onClick={reset}>
          Reset❌
        </button>
      )}
    </ul>
  );
};
