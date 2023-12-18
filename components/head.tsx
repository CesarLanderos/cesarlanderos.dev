import DocumentHead from "next/head";
import "bulma/css/bulma.css";
import "../styles/global.css";

export default function Head() {
  return (
    <DocumentHead>
      <title>César Landeros</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Righteous"
        rel="stylesheet"
      />
    </DocumentHead>
  );
}
