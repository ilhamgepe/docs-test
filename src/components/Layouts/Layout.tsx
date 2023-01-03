import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
  ScrollArea,
} from "@mantine/core";

import { BtnToggleColorScheme } from "../BtnToggleColorScheme/BtnToggleColorScheme";
import Image from "next/image";
import Link from "next/link";
import { NavbarContent } from "./Navbar";
import { useViewportSize } from "@mantine/hooks";

interface IProps {
  children: JSX.Element;
}
const navigation = [
  {
    title: "Introduction",
    links: [
      { title: "Getting started", href: "/" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Core concepts",
    links: [
      { title: "Understanding caching", href: "/docs/understanding-caching" },
      {
        title: "Predicting user behavior",
        href: "/docs/predicting-user-behavior",
      },
      { title: "Basics of time-travel", href: "/docs/basics-of-time-travel" },
      {
        title: "Introduction to string theory",
        href: "/docs/introduction-to-string-theory",
      },
      { title: "The butterfly effect", href: "/docs/the-butterfly-effect" },
    ],
  },
  {
    title: "Advanced guides",
    links: [
      { title: "Writing plugins", href: "/docs/writing-plugins" },
      { title: "Neuralink integration", href: "/docs/neuralink-integration" },
      { title: "Temporal paradoxes", href: "/docs/temporal-paradoxes" },
      { title: "Testing", href: "/docs/testing" },
      { title: "Compile-time caching", href: "/docs/compile-time-caching" },
      {
        title: "Predictive data generation",
        href: "/docs/predictive-data-generation",
      },
    ],
  },
  {
    title: "API reference",
    links: [
      { title: "CacheAdvance.predict()", href: "/docs/cacheadvance-predict" },
      { title: "CacheAdvance.flush()", href: "/docs/cacheadvance-flush" },
      { title: "CacheAdvance.revert()", href: "/docs/cacheadvance-revert" },
      { title: "CacheAdvance.regret()", href: "/docs/cacheadvance-regret" },
    ],
  },
  {
    title: "Contributing",
    links: [
      { title: "How to contribute", href: "/docs/how-to-contribute" },
      { title: "Architecture guide", href: "/docs/architecture-guide" },
      { title: "Design principles", href: "/docs/design-principles" },
    ],
  },
];

export default function Layout({ children }: IProps) {
  const { width, height } = useViewportSize();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <div className="relative">
      <AppShell
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="lg"
        navbar={
          <Navbar
            withBorder={false}
            p="xs"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ md: 250, xs: 250 }}
          >
            <ScrollArea w={250}>
              <NavbarContent
                navigation={navigation}
                theme={theme.colorScheme}
              />
            </ScrollArea>
          </Navbar>
        }
        aside={
          <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
            <Aside
              p="md"
              hiddenBreakpoint="md"
              width={{ md: 200 }}
              withBorder={false}
            >
              <Text>On this page</Text>
            </Aside>
          </MediaQuery>
        }
        header={
          <Header height={{ base: 50, md: 70 }} p="md" withBorder={false}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
              }}
            >
              <MediaQuery largerThan="md" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Box>
                <Link href={"/"} className="flex items-center">
                  <Image
                    src={"/img/iconppn-02.png"}
                    alt="logo"
                    height={35}
                    width={35}
                  />
                  <Text className="text-2xl font-bold">Purwantara</Text>
                </Link>
              </Box>
              <Box>
                <BtnToggleColorScheme />
              </Box>
            </div>
          </Header>
        }
        //   footer={
        //     <Footer height={60} p="md">
        //       Application footer
        //     </Footer>
        //   }
      >
        <div className="mx-auto main-content px-3">{children}</div>
      </AppShell>
    </div>
  );
}
