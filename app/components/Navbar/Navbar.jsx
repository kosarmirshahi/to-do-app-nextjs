"use client";
import {
  Container,
  Flex,
  Section,
  Button,
  TextField,
  Select,
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
            <Select.Root defaultValue="light" size="3">
              <Select.Trigger />
              <Select.Content position="popper">
                <Select.Item value="light">Light mode</Select.Item>
                <Select.Item value="dark">Dark mode</Select.Item>
              </Select.Content>
            </Select.Root>
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
