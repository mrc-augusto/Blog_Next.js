import { cn } from "@/lib/utils";
import { CircleX, Search } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export function SearchInput() {
  const router = useRouter();
  const query = (router.query.q as string) ?? '';

  const handleSearch = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("handleSearch, query:", query);

      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`);
      }
    },
    [query, router],
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  const resetSearch = () => {
    router.push("/blog", undefined, {
      shallow: true,
      scroll: false,
    });
  };

  return (
    <form onSubmit={handleSearch} className="relative group w-full md:w-60">
      <button type="submit">
        <Search
          width={16}
          height={16}
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-blue-300 focus:outline-none  transition-colors duration-200ms",
            query ? "text-blue-300" : "",
          )}
        />
      </button>
      <input
        type="text"
        placeholder="Buscar"
        value={query}
        onChange={handleQueryChange}
        className="w-full md:w-60 h-10 px-4 pl-10 text-body-sm text-gray-100 rounded-lg transparent-border outline-none border border-gray-400 transition-all duration-200 focus:outline-none  focus:border-blue-300  focus:ring-1 focus:ring-blue-300 placeholder:text-gray-300 placeholder:text-body-sm"
      />
      {query && (
        <CircleX
          className="absolute w-4 h-4 top-1/2 -translate-y-1/2 right-4 text-gray-300"
          onClick={resetSearch}
        />
      )}
    </form>
  );
}
