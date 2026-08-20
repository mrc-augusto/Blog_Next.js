import { allPosts } from ".contentlayer/generated";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { Avatar } from "@/components/avatar";
import { Markdown } from "@/components/markdown";

export default function PostPage() {
  const router = useRouter();

  // as tres consts a seguir são para pegar o slug da url e buscar o post correspondente.
  // elas foram corrigidas depois de um erro que estava ocorrendo ao tentar acessar a página de um post específico.
  const slugParam = router.query.slug;
  const slug = typeof slugParam === "string" ? slugParam : undefined;
  const post = slug
    ? allPosts.find((post) => post.slug.toLowerCase() === slug)
    : undefined;
  
  // Se o router não estiver pronto, retorna null para evitar renderizar a página antes de ter os dados necessários.
  if (!router.isReady) return null;
  if (!post) return <p className="mt-32 text-gray-100">Post não encontrado.</p>;

  const publishedAt = new Date(post?.date ?? '').toLocaleDateString('pt-BR')

  return (
    <main className="mt-32 text-gray-100">
      <div className='container space-y-12 px-4 md:px-8'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-action-sm">
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>
                <span className="text-blue-200 text-action-sm">
                  {post?.title}
                </span>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols[1fr_300px] gap-6 lg:gap-12 mt-8">
          <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border">
            <figure className="relative aspect-16/10 w-full overflow-hidden rounded-lg">
              <Image
                src={post?.image}
                alt={post?.title}
                fill
                className="object-cover"
              />
            </figure>

            <header className="p-4 md:p-6 lg:p-12 pb-0 mt-8 md:mt-12">
              <h1 className="mb-8 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
                {post?.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  src={post?.author.avatar}
                  alt={post?.title}
                  size="sm"
                />
                <Avatar.Content>
                  <Avatar.Title>{post?.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em: <time dateTime={post?.date}>{publishedAt}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className='prose prose-invert max-w-none p-4 mt-12 md:px-6 lg:px-12'>
              <Markdown content={post.body.raw}/>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
