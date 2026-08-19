import { PostGridCard } from "./post-grid-cart";
import { SearchInput } from "@/components/search";
import { PostCard } from "./post-card";
import { useRouter } from "next/router";
import { allPosts} from "contentlayer/generated";
import { Inbox } from "lucide-react";

export function BlogList() {
  const router = useRouter();
  const query = router.query.q as string;
  const pageTitle = query
    ? `Resultados da busca para "${query}" `
    : "Dicas e estratégias para impulsionar seu negócio";

  const posts = query
    ? allPosts.filter((post) =>
        post.title.toLocaleLowerCase()?.includes(query.toLocaleLowerCase()),
      )
    : allPosts;

  const hasPosts = posts.length > 0;

  return (
    <div className="flex flex-col py-24 grow h-full">
      <header className="pb-14">
        <div className="container flex flex-col space-y-6 md:space-y-0 items-start md:flex-row md:py-20 md:items-end justify-between">
          <div className="flex flex-col items-start gap-4 md:px-0">
            {/* Tag */}
            <span className="w-fit py-2 px-4 bg-cyan-300 text-body-tag text-cyan-100 text-center rounded-md uppercase">
              Blog
            </span>

            {/* Titulo */}
            <h1 className="text-heading-lg md:text-heading-xl text-balance text-gray-100 max-w-2xl">
              {pageTitle}
            </h1>
          </div>

          {/* Search */}
          <SearchInput />
        </div>
      </header>

      {/* Listagem de Posts */}
      {hasPosts && (
        <PostGridCard>
          {posts.map((post) => (
            <PostCard
              key={post._id}
              title={post.title}
              description={post.description}
              image={post.image}
              date={new Date(post.date).toLocaleDateString("pt-BR")}
              slug={post.slug}
              author={{
                name: post.author.name,
                avatar: post.author.avatar,
              }}
            />
          ))}
        </PostGridCard>
      )}

      {!hasPosts && (
        <div className="container px-8">
          <div className="flex flex-col gap-8 items-center justify-center  border-dashed border-2 p-8 md:p-12 border-gray-300 rounded-lg">
            <Inbox className="h-12 w-12 text-cyan-100" />
            <p className="text-gray-100  text-center">
              Nenhum post encontrado!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
