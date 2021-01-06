export default function Home() {
  return (
    <main>
      <h1>Quirrel x Cypress Showcase</h1>

      <p>
        Press the button below to schedule an email to{" "}
        <code>sandy.cheeks@quirrel.dev</code>. It will be delayed by a minute.
      </p>

      <button
        id="send-email"
        onClick={async () => {
          await fetch("/api/sendEmail", {
            method: "POST",
            body: "sandy.cheeks@quirrel.dev",
          });
        }}
      >
        Send!
      </button>
    </main>
  );
}
