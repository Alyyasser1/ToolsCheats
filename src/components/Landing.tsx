import ContributeSection from "./ContributeSection";
import "./Landing.css";
const Landing = () => {
  return (
    <section className="landing">
      <h1 className="landing-title">
        Stop googling
        <br />
        <span className="landing-title-accent">Start building</span>
      </h1>
      <p>
        Every tool you need, sorted, filtered, and one click away. Just the
        right tool for the job.
      </p>
      <div className="landing-stats">
        <span className="landing-stat">⚡ 50+ tools</span>
        <span className="landing-stat">📂 7 categories</span>
        <span className="landing-stat">🆓 Free & paid</span>
      </div>
      <ContributeSection />
    </section>
  );
};

export default Landing;
