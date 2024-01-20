"use client";
import {
  Container,
  Flex,
  Section,
  Button,
  TextField,
  Select,
  Dialog,
  Card,
  Box,
  Avatar,
  Text,
  Heading,
  TextArea,
  Grid,
} from "@radix-ui/themes";
export default function Comments() {
  return (
    <>
      <Heading color="indigo" mb="4" mt="5" size="4">
        Comments:
      </Heading>
      <Flex gap="5" mb="5">
        <Card style={{ maxWidth: 240 }}>
          <Flex gap="3" align="center">
            <Avatar
              size="3"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="K"
            />
            <Box>
              <Text as="div" size="2" weight="bold">
                Kimia
              </Text>
              <Text as="div" size="2" color="gray">
                - That was fun!!
              </Text>
            </Box>
          </Flex>
        </Card>
        <Card style={{ maxWidth: 240 }}>
          <Flex gap="3" align="center">
            <Avatar
              size="3"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="R"
            />
            <Box>
              <Text as="div" size="2" weight="bold">
                Reza
              </Text>
              <Text as="div" size="2" color="gray">
                - That was good!!
              </Text>
            </Box>
          </Flex>
        </Card>
      </Flex>
      <Text color="indigo">Leave a comment...</Text>
      <Grid columns="3" mt="3" mb="5">
        <Flex direction="column">
          <TextArea size="3" placeholder="Type your comment…" />
          <Button
            style={{ maxWidth: 80 }}
            size="3"
            variant="outline"
            highContrast
            mt="2"
          >
            Send
          </Button>
        </Flex>
      </Grid>
    </>
  );
}
