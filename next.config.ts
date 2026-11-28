import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Placeholder note removed from The Briefing (it was a template, not
      // an article). Permanent redirect so any indexed or shared link lands
      // on the Briefing index rather than a 404.
      {
        source: "/insights/better-decisions-under-pressure",
        destination: "/insights",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
