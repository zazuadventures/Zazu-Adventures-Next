import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <main className="min-h-[60vh] py-20">
      <Container>
        <div className="mx-auto max-w-3xl animate-pulse" aria-label="Loading">
          <div className="h-5 w-32 rounded bg-surface-soft" />
          <div className="mt-6 h-12 max-w-xl rounded bg-surface-soft" />
          <div className="mt-4 h-5 max-w-2xl rounded bg-surface-soft" />
          <div className="mt-12 space-y-4">
            <div className="h-5 rounded bg-surface-soft" />
            <div className="h-5 rounded bg-surface-soft" />
            <div className="h-5 max-w-3xl rounded bg-surface-soft" />
          </div>
        </div>
      </Container>
    </main>
  );
}
