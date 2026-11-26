import NextLink from "next/link";

// Static export serves RSC prefetch files at a different path than Next requests,
// so viewport prefetching only produces 404s. Navigation itself is unaffected.
export default function AppLink({ prefetch = false, ...props }) {
  return <NextLink prefetch={prefetch} {...props} />;
}
