import Hero from "../components/Hero";
import IssueCard from "../components/IssueCard";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="issues-preview section">
        <h2>Building a Better Suna East</h2>
        <div className="issues-grid">
          <IssueCard title="Environment" text="Protecting our natural resources and promoting conservation." />
          <IssueCard title="Solar Energy" text="Expanding renewable energy access to homes and schools." />
          <IssueCard title="Youth Empowerment" text="Investing in skills, jobs, and education for young people." />
        </div>
      </section>
    </>
  );
}
