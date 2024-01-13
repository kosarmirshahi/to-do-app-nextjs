import { Container, Section } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Navbar from "../components/Navbar/Navbar";
import AddForm from "../components/AddForm/AddForm";
export default function Home() {
  return (
    <Container>
      <Navbar />
      <AddForm />
    </Container>
  );
}
