import PageHeader from "@/components/PageHeader";

export default function AnimationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader title={<p>Animation Playground</p>} />
      {children}
    </>
  );
}
