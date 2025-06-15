import { Layout } from "@/components/layouts/layout";
import { useParams } from "react-router";

export function TaskDetail() {
  const params = useParams();

  return (
    <Layout>
      <h1>Task Detail: {params.id}</h1>
    </Layout>
  );
}
