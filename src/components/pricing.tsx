import styles from "./pricing.module.css";

const pricingPlans = [
  {
    id: 1,
    plan: "Basic Plan",
    price: "$ 29.00 USD",
    bg: styles.pinkCard,
    features: [
      "1 team",
      "Schedule meetings as a team",
      "Round-Robin, Fixed Round-Robin",
      "Collective Events",
      "Advanced Routing Forms",
    ],
  },
  {
    id: 2,
    plan: "Executive Pro",
    price: "$ 120.00 USD",
    bg: styles.blueCard,
    features: [
      "1 team",
      "Schedule meetings as a team",
      "Round-Robin, Fixed Round-Robin",
      "Collective Events",
      "Advanced Routing Forms",
    ],
  },
  {
    id: 3,
    plan: "Executive Plan",
    price: "$ 90.00 USD",
    bg: styles.pinkCard,
    features: [
      "1 team",
      "Schedule meetings as a team",
      "Round-Robin, Fixed Round-Robin",
      "Collective Events",
      "Advanced Routing Forms",
    ],
  },
];

export default function Pricing() {
  return (
    <section className={styles.pricingSection}>
      <div className={styles.header}>
        <h2>Our Best Pricing</h2>

        <p>
          Finos provides online payment solutions, including credit card
          processing, digital wallets, and banking services.
        </p>
      </div>

      <div className={styles.cards}>
        {pricingPlans.map((plan) => (
          <div key={plan.id} className={`${styles.card} ${plan.bg}`}>
            <div className={styles.planBadge}>{plan.plan}</div>

            <h3 className={styles.price}>{plan.price}</h3>

            <p className={styles.description}>
              flexible pricing for individuals featuring our exclusive Executive
              Plan
            </p>

            <ul className={styles.features}>
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <span>✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={styles.button}>Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}