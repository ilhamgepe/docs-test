import { Box, Button, Text, useMantineTheme } from "@mantine/core";
import { Inter } from "@next/font/google";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "../src/components/Layouts/Layout";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { MDXRemote } from "next-mdx-remote";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist";
import "highlight.js/styles/atom-one-dark.css";
import matter from "gray-matter";

const inter = Inter({ subsets: ["latin"] });

interface IProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}
export default function Home({ source }: IProps) {
  console.log({ ...source });

  return (
    <>
      <Head>
        <title>Purwantara Docs</title>
      </Head>
      <Layout>
        <MDXRemote {...source} />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const url =
    process.env.NODE_ENV === "production"
      ? "https://docs-test-tawny.vercel.app"
      : "http://localhost:3000";
  const datas = await fetch(`${url}/api/hello`)
    .then((e) => e.json())
    .catch((e) => console.log(e));
  const { content, data } = matter(datas.data);
  console.log({ data });

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
      development: false,
    },
  });

  return {
    props: {
      test: "test",
      source: mdxSource,
      // error: data.error ?? undefined,
    },
  };
};
