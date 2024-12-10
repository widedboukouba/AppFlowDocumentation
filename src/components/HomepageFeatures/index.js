import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

import Link from "@docusaurus/Link";
import UserStep from "./Steps/UserStep";

const FeatureList = [
  {
    title: "Quick Start Guide →",
    Svg: "img/quick-start.svg",
    description: <>Get the most out of the admin panel with our user guide</>,
    link: "/docs/intro",
  },
  {
    title: "Front-end Docs →",
    Svg: "img/front-developer.svg",
    description: <>All you need to get your project up-and-running</>,
    link: "/fronts/intro",
  },
  {
    title: "Back-end Docs →",
    Svg: "img/backend-developer.svg",
    description: <>Release notes on your AppFlow project</>,
    link: "/backends/intro",
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx("col col--4 cc")}>
      <Link to={link} className={styles.cardLink}>
        <div className="text--center">
          <img src={Svg} alt={title} className={styles.featureSvg} />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container ">
        <div className="row steps">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          <UserStep />
        </div>
      </div>
    </section>
  );
}
