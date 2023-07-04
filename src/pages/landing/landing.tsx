import clsx from "clsx";

import { apartment, house, plusIcon, villa } from "assets/icons";
import { Card } from "components/cards/cards";
import { Header } from "components/header/header";
import { Sidebar } from "components/sidebar/sidebar";

import styles from "./landing.module.scss";

export const Landing = () => {
  return (
    <>
      <Header />
      <Sidebar>
        <section className={clsx(styles.section)}>
          <h3>Start New</h3>
          <div className={clsx(styles["cards-container"])}>
            <Card
              className={clsx(styles.card)}
              images={[house, villa, apartment]}
              description="Hello World"
            />
            <Card
              className={clsx(styles.card)}
              images={house}
              description="Hello World"
            />
            <Card
              className={clsx(styles.card)}
              images={plusIcon}
              description="From Scratch"
            />
          </div>
          <h2>Template Gallery</h2>
          <div className={clsx(styles["cards-second-container"])}>
              <Card
                className={clsx(styles.card)}
                images={[house, villa, apartment]}
                description="Hello World"
              />
              <Card
                className={clsx(styles.card)}
                images={house}
                description="Hello World"
              />
              <Card
                className={clsx(styles.card)}
                images={apartment}
                description="From Scratch"
              />
              <Card
                className={clsx(styles.card)}
                images={[house, villa, apartment]}
                description="Hello World"
              />
              <Card
                className={clsx(styles.card)}
                images={house}
                description="Hello World"
              />
              <Card
                className={clsx(styles.card)}
                images={apartment}
                description="From Scratch"
              />
          </div>
        </section>
      </Sidebar>
    </>
  );
};
