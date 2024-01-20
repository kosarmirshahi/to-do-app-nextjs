import { Container, Section } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Navbar from "../components/Navbar/Navbar";
import AddForm from "../components/AddForm/AddForm";
import Tasks from "../components/Tasks/Tasks";
import Done from "../components/Done/Done";
import Comments from "../components/Comments/Comments";
export default function Home() {
  return (
    <Container>
      <Navbar />
      <AddForm />
      <Tasks />
      <Done />
      <Comments />
    </Container>
  );
}
