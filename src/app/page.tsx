import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main className="bg-gray-50 min-h-screen">
      <Container>
        {/* Intro Section */}
        <div className="py-12 text-center">
          <Intro />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4 text-gray-900">
            Kalispera oli mera
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Thoughts, stories, and ideas — welcome to my digital notebook.
          </p>
        </div>

        {/* Hero Post Section */}
        {heroPost && (
          <section className="mb-16">
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          </section>
        )}

        {/* More Posts Grid */}
        {morePosts.length > 0 && (
          <section className="border-t border-gray-200 pt-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              More Stories
            </h3>
            <MoreStories posts={morePosts} />
          </section>
        )}
      </Container>
    </main>
  );
}
