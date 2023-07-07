import PageHeader from "@/components/PageHeader";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader title={<p>About Me</p>} />
      {children}
    </>
  );
}
