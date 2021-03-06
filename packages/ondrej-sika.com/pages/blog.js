import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import posts from "@app/ondrej-sika.com/data/blog-posts.yaml";
import Head from "next/head";
import Link from "next/link";

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Blog - Ondrej Sika</title>
        </Head>
        <MainBar header="Blog"></MainBar>

        <div className="container">
          {posts.map((post, i) => {
            return (
              <div key={i}>
                {(() => {
                  if (i > 0) {
                    return <hr className="hr-black" />;
                  }
                })()}
                <Link href={`/blog/${post.id}`}>
                  <a style={{ color: "black" }}>
                    <h3 className="pt-4 bold">{post.title}</h3>
                  </a>
                </Link>
                <p>{post.date}</p>
                <p className="pb-4">
                  {post.perex}{" "}
                  <Link href={`/blog/${post.id}`}>
                    <a>číst dále</a>
                  </Link>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Blog;
