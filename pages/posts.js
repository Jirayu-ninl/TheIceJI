import React from "react";
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';

export async function getStaticProps() {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL);

  const { posts } = await graphcms.request(
    `{
      posts {
        slug
        title
      }
    }`
  );

  return {
    props: {
      posts,
    },
  };
}

export default ({ posts }) =>
  posts.map(({ slug, title }) => (
    <Link key={slug} href={`/post/${slug}`}>
      <a>{title}</a>
    </Link>
  ));