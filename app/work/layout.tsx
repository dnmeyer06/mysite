import PageHeader from "@/components/PageHeader";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader title={<p>My Work</p>} />
      {children}
    </>
  );
}
