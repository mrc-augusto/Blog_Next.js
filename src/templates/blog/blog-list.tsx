import { useRouter } from "next/router";
import { SearchInput } from "@/components/search";

export  function BlogList() {
  const router = useRouter();
  const query = router.query.q as string
  const pageTitle = query ? `Resultados da busca para "${query}" `: 'Dicas e estratégias para impulsionar seu negócio'

  return (
    <div className='flex flex-col py-24 grow h-full'>
      <header>
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
          <SearchInput/>
          
        </div>
      </header>

      {/* Listagem de Posts */}
    </div>
  );
}
