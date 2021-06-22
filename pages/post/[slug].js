import React from "react";
import { NextSeo } from "next-seo";
import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL);

export async function getStaticProps({ params }) {
  const { post } = await graphcms.request(
    `query PostsPage($slug: String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        slug
        content {
          html
        }
      }
    }`,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(`{
    posts {
      slug
    }
  }`);

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

// Main UI

export default function Post({ post }) {
  const SEO = {
    title: `TheIceJI Blog | ${post.post_title}`,
    description: post.description,

    openGraph: {
      title: `TheIceJI | ${post.post_title}`,
      description: post.title,
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
      <div>{post.content.html}</div>
    </>
  );
}
