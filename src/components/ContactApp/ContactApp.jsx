import { StatusFilter } from "../StatusFilter/StatusFilter";
import css from "./ContactApp.module.css";

export const ContactBar = () => {
  return (
    <header>
      <section>
        <h2>Contacts</h2>
      </section>
      <section>
        <h2>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};