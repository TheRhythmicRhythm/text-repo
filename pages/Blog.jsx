import Head from "next/head";
import { Header } from "../components";
import PostCard from "../components/PostCard";
import { getPosts } from "../services/index";

export default function Blog({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Rhythmic Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
      gap-3 md:gap-6 p-2 md:p-6">
          {posts.map((post, index) => (
            <PostCard key={post.title} post={post.node} />
          ))}
        </div>

        
      </div>
    
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  }
}
