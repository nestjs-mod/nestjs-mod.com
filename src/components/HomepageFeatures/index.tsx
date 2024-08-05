import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Problems",
    Img: require("@site/static/img/problems.jpg").default,
    description: (
      <>
        <a href="https://nestjs.com/" target="_blank">
          NestJS
        </a>{" "}
        is a great framework and you can do great things with it, but often when
        developing a large number of applications within the same organization,
        we end up with different application architectures, file structures, and
        a lot of duplicate code.
      </>
    ),
  },
  {
    title: "Solutions",
    Img: require("@site/static/img/solutions.jpg").default,
    description: (
      <>
        The NestJS-mod collection of utilities are designed to unify
        applications and modules, and also introduce new logical options for
        dividing responsibilities between modules (Core, Feature, Integration,
        System, Infrastructure).
      </>
    ),
  },
  {
    title: "Bonuses",
    Img: require("@site/static/img/bonuses.jpg").default,
    description: (
      <>
        Since all parts of the application are unified, you can create a report
        on the entire project infrastructure. Examples of reports:{" "}
        <a
          href="https://github.com/nestjs-mod/nestjs-mod-example/blob/master/apps/app-name/INFRASTRUCTURE.MD"
          target="_blank"
        >
          nestjs-mod-example
        </a>
        ,{" "}
        <a
          href="https://github.com/nestjs-mod/nestjs-mod-contrib/blob/master/apps/example-nats-microservice/INFRASTRUCTURE.MD"
          target="_blank"
        >
          example-nats-microservice
        </a>
        ,{" "}
        <a
          href="https://github.com/nestjs-mod/nestjs-mod-contrib/blob/master/apps/example-prisma/INFRASTRUCTURE.MD"
          target="_blank"
        >
          example-prisma
        </a>
      </>
    ),
  },
];

function Feature({ title, Img, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Img} style={{ height: "200px" }} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
