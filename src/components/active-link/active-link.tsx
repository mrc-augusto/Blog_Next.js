import { cn } from "@/components/lib/utils";
import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/router";

type ActiveLinkProps ={
  children: React.ReactNode
} & LinkProps

export function ActiveLink({children, href, ...rest}: ActiveLinkProps) {
  const router = useRouter()
  const currentPath = router.asPath.split("?")[0].split("#")[0]
  const targetPath = typeof href === "string" ? href : href.pathname ?? ""
  const isCurrentPath = currentPath === targetPath

  return(
    <Link
      href={href}
      {...rest}
      className={cn(
        "text-action-sm transition-colors hover:text-blue-200",
        isCurrentPath ? "text-blue-200" : "text-gray-100",
      )}
    >
      {children}
    </Link>
)
}