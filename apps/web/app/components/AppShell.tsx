"use client";

import {
  AppShell,
  Burger,
  Group,
  NavLink,
  ScrollArea,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { usePathname, useRouter } from "next/navigation";
import {
  IconHome2,
  IconLayoutDashboard,
  IconTableColumn,
} from "@tabler/icons-react";
import React from "react";


const navLinks = [
  { label: "Home", href: "/", icon: IconHome2 },
  { label: "Data Directory", href: "/dataset-directory", icon: IconTableColumn },
] as const;

type NavLinkItem = (typeof navLinks)[number];

export default function AppShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = navLinks.map((link: NavLinkItem) => (
    <NavLink
      key={link.href}
      label={link.label}
      leftSection={<link.icon size={16} stroke={1.5} />}
      active={pathname === link.href}
      onClick={() => {
        router.push(link.href);
        close();
      }}
    />
  ));

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      {/* Header */}
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text fw={700}>MyApp</Text>
        </Group>
      </AppShell.Header>

      {/* Navbar */}
      <AppShell.Navbar p="md">
        <ScrollArea offsetScrollbars h="calc(100vh - 120px)">{navItems}</ScrollArea>
      </AppShell.Navbar>

      {/* Main content */}
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
