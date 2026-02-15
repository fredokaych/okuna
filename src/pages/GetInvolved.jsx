export default function GetInvolved() {
  return (
    <section className="section">
      <h1>Join the Movement</h1>
      <form className="form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Ward / Location" />
        <button type="submit">Volunteer</button>
      </form>
    </section>
  );
}
