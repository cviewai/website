import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "End-User License Agreement (EULA)",
  description: "Read the CrystalView End-User License Agreement.",
};

// This is a Server Component, so we can read files directly
export default function EulaPage() {
  const contentPath = path.join(process.cwd(), "eula.md");
  const content = fs.readFileSync(contentPath, "utf8");

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <article className="prose lg:prose-xl mx-auto">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
