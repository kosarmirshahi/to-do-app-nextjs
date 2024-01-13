import {
  Container,
  Flex,
  Section,
  Button,
  TextField,
  Dialog,
} from "@radix-ui/themes";
export default function Navbar() {
  return (
    <div>
      <Section size="2" mt="1">
        <Flex justify="between" gap="6">
          <Flex gap="4">
            <Button size="3" variant="solid" highContrast>
              Sign up
            </Button>
            <Button size="3" variant="outline" highContrast>
              Login
            </Button>
          </Flex>
          <Flex gap="4">
            <Button size="3" variant="outline" highContrast>
              Contact Us
            </Button>
            <Button size="3" variant="outline" highContrast>
              Product
            </Button>
            <Button size="3" variant="outline" highContrast>
              Home
            </Button>
          </Flex>
        </Flex>
      </Section>
    </div>
  );
}
