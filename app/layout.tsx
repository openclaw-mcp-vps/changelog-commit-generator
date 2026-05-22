import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChangelogAI – Generate Changelogs from Git Commits Automatically",
  description:
    "Connect GitHub or GitLab, analyze commits and PRs, and publish beautiful customer-facing changelogs in minutes. Built for product managers and engineering leads."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="0735d258-d17b-4a3a-a848-6ee1c14191da"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
