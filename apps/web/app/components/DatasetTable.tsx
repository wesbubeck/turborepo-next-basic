"use client";
import { 
  Table, 
  Paper, 
  Title, 
  Badge, 
  Group, 
  Text, 
  ActionIcon, 
  Tooltip,
  ThemeIcon,
  Stack,
  Card,
  Grid
} from "@mantine/core";
import { 
  IconDatabase, 
  IconUsers, 
  IconCreditCard, 
  IconFileText,
  IconEye,
  IconDownload,
  IconCalendar
} from "@tabler/icons-react";

const mockData = [
  { 
    name: "Fintech Transactions", 
    records: 12000, 
    updated: "2024-06-01",
    type: "Transactions",
    icon: IconCreditCard,
    status: "Active",
    size: "2.4 GB"
  },
  { 
    name: "User Profiles", 
    records: 3400, 
    updated: "2024-05-28",
    type: "Users",
    icon: IconUsers,
    status: "Active", 
    size: "150 MB"
  },
  { 
    name: "Credit Scores", 
    records: 9800, 
    updated: "2024-05-30",
    type: "Analytics",
    icon: IconDatabase,
    status: "Processing",
    size: "890 MB"
  },
  { 
    name: "Loan Applications", 
    records: 2100, 
    updated: "2024-06-02",
    type: "Documents",
    icon: IconFileText,
    status: "Active",
    size: "320 MB"
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active": return "green";
    case "Processing": return "yellow";
    case "Inactive": return "red";
    default: return "gray";
  }
};

export default function DatasetTable() {
  return (
    <Stack gap="xl">
      {/* Stats Cards */}
      <Grid>
        <Grid.Col span={3}>
          <Card withBorder p="md" radius="md">
            <Group>
              <ThemeIcon size="lg" color="blue" variant="light">
                <IconDatabase size={20} />
              </ThemeIcon>
              <div>
                <Text size="xl" fw={700}>{mockData.length}</Text>
                <Text size="sm" c="dimmed">Total Datasets</Text>
              </div>
            </Group>
          </Card>
        </Grid.Col>
        
        <Grid.Col span={3}>
          <Card withBorder p="md" radius="md">
            <Group>
              <ThemeIcon size="lg" color="green" variant="light">
                <IconUsers size={20} />
              </ThemeIcon>
              <div>
                <Text size="xl" fw={700}>
                  {mockData.reduce((sum, item) => sum + item.records, 0).toLocaleString()}
                </Text>
                <Text size="sm" c="dimmed">Total Records</Text>
              </div>
            </Group>
          </Card>
        </Grid.Col>
        
        <Grid.Col span={3}>
          <Card withBorder p="md" radius="md">
            <Group>
              <ThemeIcon size="lg" color="orange" variant="light">
                <IconCreditCard size={20} />
              </ThemeIcon>
              <div>
                <Text size="xl" fw={700}>
                  {mockData.filter(item => item.status === "Active").length}
                </Text>
                <Text size="sm" c="dimmed">Active Datasets</Text>
              </div>
            </Group>
          </Card>
        </Grid.Col>
        
        <Grid.Col span={3}>
          <Card withBorder p="md" radius="md">
            <Group>
              <ThemeIcon size="lg" color="purple" variant="light">
                <IconCalendar size={20} />
              </ThemeIcon>
              <div>
                <Text size="xl" fw={700}>3.8GB</Text>
                <Text size="sm" c="dimmed">Total Storage</Text>
              </div>
            </Group>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Main Table */}
      <Paper p="xl" radius="lg" withBorder shadow="md">
        <Group justify="space-between" mb="xl">
          <Title order={3} c="blue.6">Dataset Directory</Title>
          <Badge variant="light" color="blue" size="lg">
            {mockData.length} datasets available
          </Badge>
        </Group>
        
        <Table striped highlightOnHover withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Dataset</Table.Th>
              <Table.Th>Records</Table.Th>
              <Table.Th>Size</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Last Updated</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {mockData.map((dataset) => {
              const IconComponent = dataset.icon;
              return (
                <Table.Tr key={dataset.name}>
                  <Table.Td>
                    <Group gap="sm">
                      <ThemeIcon 
                        size="md" 
                        color="blue" 
                        variant="light"
                        radius="md"
                      >
                        <IconComponent size={16} />
                      </ThemeIcon>
                      <div>
                        <Text fw={600}>{dataset.name}</Text>
                        <Text size="xs" c="dimmed">{dataset.type}</Text>
                      </div>
                    </Group>
                  </Table.Td>
                  <Table.Td>
                    <Text fw={500}>{dataset.records.toLocaleString()}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text c="dimmed">{dataset.size}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Badge 
                      color={getStatusColor(dataset.status)} 
                      variant="light"
                      size="sm"
                    >
                      {dataset.status}
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    <Text c="dimmed">{dataset.updated}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Group gap="xs">
                      <Tooltip label="View Dataset">
                        <ActionIcon variant="light" color="blue" size="sm">
                          <IconEye size={14} />
                        </ActionIcon>
                      </Tooltip>
                      <Tooltip label="Download">
                        <ActionIcon variant="light" color="green" size="sm">
                          <IconDownload size={14} />
                        </ActionIcon>
                      </Tooltip>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </Paper>
    </Stack>
  );
} 