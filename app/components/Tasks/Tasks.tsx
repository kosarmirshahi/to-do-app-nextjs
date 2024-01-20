"use client";
import { Flex, Grid, Checkbox, Text } from "@radix-ui/themes";
export default function Tasks() {
  return (
    <Grid columns="5" mt="8" gapY="5">
      <Flex align="center" gap="1">
        <Checkbox defaultChecked size="3" />
        <Text>Reading</Text>
      </Flex>
      <Flex align="center" gap="1">
        <Checkbox size="3" />
        <Text>Cooking</Text>
      </Flex>
      <Flex align="center" gap="1">
        <Checkbox size="3" />
        <Text>Gym</Text>
      </Flex>
      <Flex align="center" gap="1">
        <Checkbox defaultChecked size="3" />
        <Text>Jogging</Text>
      </Flex>
      <Flex align="center" gap="1">
        <Checkbox defaultChecked size="3" />
        <Text>Studing</Text>
      </Flex>
      <Flex align="center" gap="1">
        <Checkbox size="3" />
        <Text>Writting</Text>
      </Flex>
      <Flex align="center" gap="1">
        <Checkbox defaultChecked size="3" />
        <Text>University</Text>
      </Flex>
      <Flex align="center" gap="1">
        <Checkbox size="3" />
        <Text>Exam</Text>
      </Flex>
      <Flex align="center" gap="1">
        <Checkbox size="3" />
        <Text>Final Test</Text>
      </Flex>
    </Grid>
  );
}
