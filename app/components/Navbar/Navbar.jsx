import "@radix-ui/themes/styles.css";
import { Container, Flex, Section, Button } from "@radix-ui/themes";

export default function Navbar() {
  return (
    <div>
      <Section size="2" mt="1">
        <Flex justify="between" gap="6">
          <Flex gap="4">
            <Button variant="solid" highContrast>
              Sign up
            </Button>
            <Button variant="outline" highContrast>
              Login
            </Button>
          </Flex>
          <Flex gap="4">
            <Button variant="outline" highContrast>
              Contact Us
            </Button>
            <Button variant="outline" highContrast>
              Product
            </Button>
            <Button variant="outline" highContrast>
              Home
            </Button>
          </Flex>
        </Flex>
      </Section>
    </div>
  );
}
