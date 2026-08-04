import { StatusFilter } from "../StatusFilter/StatusFilter";
import css from "./ContactApp.module.css"

export const ContactBar = () => {
  return (
    <header>
      <section>
        <h2 className={css.H2}>Контакти</h2>
      </section>
      <section>
        <StatusFilter />
      </section>
    </header>
  );
};