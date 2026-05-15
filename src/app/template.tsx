// Next.js template.tsx — re-mounts on every route change, so the
// page-transition animation on .page-transition runs each navigation.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
