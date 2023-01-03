// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { sync } from "glob";

const DOCS_PATHS = path.join(process.cwd(), "docs");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const md = fs.readFileSync(`${DOCS_PATHS}\\swr.mdx`, {
    encoding: "utf-8",
  });

  res.status(200).json({ data: md });
}
