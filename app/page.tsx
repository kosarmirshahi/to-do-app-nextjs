import "@radix-ui/themes/styles.css";
import { Box, Container, Button, Flex, Text, Link } from "@radix-ui/themes";
export default function Home() {
  return (
    <Box>
      <Container size="2">
        <Flex direction="column" justify="center" mt="9" align="center">
          <Text>Manage Your Project</Text>
          <Link href="/main">
            <Button color="crimson" variant="soft" mt="7">
              Let's Go!
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
