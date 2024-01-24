import css from "./Description.module.css";

export const Description = () => {
  return (
    <div className={css.wrapperDescription}>
      <h1 className={css.title}>
        Sip Hap
        <span className={css.flicker}>p</span>ens {""}
        Café
      </h1>
      <p className={css.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};