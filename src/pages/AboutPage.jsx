import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>
          Det här en en feedback-applikation där du ka lämna feedback på din
          kurs
        </h1>
        <Link to="/">Back</Link>
      </div>
    </Card>
  );
}
