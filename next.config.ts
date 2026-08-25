import type { NextConfig } from "next";

const RESUME_PATH = "/Resume Sean Paul M. Monton.pdf";
const RESUME_DOWNLOAD = 'attachment; filename="Sean Paul Monton CV.pdf"';

const nextConfig: NextConfig = {
  // serve the CV as a download instead of an inline preview, so a shared link
  // saves the file even when the download attribute is not in play
  async headers() {
    // the literal path is matched url-encoded, a source with spaces never hits
    return ["/cv", encodeURI(RESUME_PATH)].map((source) => ({
      source,
      headers: [{ key: "Content-Disposition", value: RESUME_DOWNLOAD }],
    }));
  },
  async rewrites() {
    return [{ source: "/cv", destination: RESUME_PATH }];
  },
};

export default nextConfig;
