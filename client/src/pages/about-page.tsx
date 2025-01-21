import { useParams } from "react-router";
import { capitalise } from "@sean14/utils";

export default function AboutPage() {
  const { topic } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">
        Croatian {capitalise(topic || "")}
      </h1>
      <div></div>
    </div>
  );
}
