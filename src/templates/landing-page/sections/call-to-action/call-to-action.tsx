import { ArrowRight, Store } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="relative py-18 bg-linear-to-b from-cyan-950/20 to-gray-700">
      <div className=' absolute inset-0 bg-[url("/cta-section.svg")] bg-cover bg-center bg-no-repeat opacity-90' />

      <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-cyan-300 w-fit rounded-full">
        <Store className="text-cyan-100" />
      </div>

      <div className="container relative">
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-heading-xl text-gray-100 text-balance ">
            Crie uma loja online e inicie <br /> suas vendas ainda hoje
          </h2>

          <Button variant="primary" className="mt-6" asChild>
            <Link href="/criar-loja">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
