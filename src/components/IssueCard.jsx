export default function IssueCard({ title, text }) {
  return (
    <div className="issue-card" data-aos="fade-up">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
