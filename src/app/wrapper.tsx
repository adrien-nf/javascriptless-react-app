import { Toaster } from "sonner";

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster position="top-right" />

      {children}
    </>
  );
}
