import type { Job } from "quirrel/next";

describe("When pressing the button", () => {
  it("Enqueues an email", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Send!").click();

    cy.wait(300);

    cy.task("getEmailQueueJob", "sandy.cheeks@quirrel.dev").then(
      (job: Job<string>) => {
        expect(job.body).to.eq("sandy.cheeks@quirrel.dev");
      }
    );

    cy.task("invokeEmailQueueJob", "sandy.cheeks@quirrel.dev");

    cy.request("http://localhost:8025/api/v2/messages").then((response) => {
      const {
        items: [newestMail],
      } = response.body;

      expect(newestMail.Content.Headers.Subject[0]).to.equal(
        "This is your email!"
      );
      expect(newestMail.Content.Headers.To[0]).to.equal(
        "sandy.cheeks@quirrel.dev"
      );
    });
  });
});
