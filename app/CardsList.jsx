import { Card } from "./Card";

export function CardsList() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Card
            src="v1.svg"
            title="Record your performance"
            txt="Use our in-app recorder to capture your performance" />
          <Card
            src="v2.svg"
            title="Get instant feedback"
            txt="Get real-time comments and suggestions from our AI" />
          <Card
            src="v3.svg"
            title="AI-powered insights"
            txt="Receive detailed feedback on pacing, filler words, and more" />
        </div>
      </div>
    </section>
  );
}
