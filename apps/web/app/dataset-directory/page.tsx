"use client";
import { AppShell, Group, Title, Box } from "@mantine/core";
import DatasetTable from "../components/DatasetTable";

export default function DatasetDirectoryPage() {
  return (
    <>
    <Box mt="lg" m='md'>
        <Group h="100%" px="md" align="center">
          <Title order={2} size="h3" mb={10}>Dataset Directory</Title>
        </Group>
          <DatasetTable />
        </Box>
    </>
  );
} 