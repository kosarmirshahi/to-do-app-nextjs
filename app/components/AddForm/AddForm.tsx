"use client";
import { TextField, Button, Flex, Grid, Heading } from "@radix-ui/themes";
export default function AddForm() {
  return (
    <>
      <Heading color="indigo" mb="4">
        To Do List
      </Heading>
      <form>
        <Grid columns="2" gap="9">
          <Grid columns="2" gap="3">
            <TextField.Input
              size="3"
              radius="large"
              placeholder="Add a Task..."
            />
            <Grid columns="3">
              <Button size="3" variant="outline" highContrast>
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
