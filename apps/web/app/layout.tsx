
export { metadata } from "./metadata";
import LayoutWrapper from "./layout-wrapper";
import '@mantine/core/styles.css'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
