import { ArrowRight, Store } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className='py-24 bg-linear-to-b from-cyan-950/20 to-gray-700'>
      <div className='container'>
        <div className='relative flex flex-col items-center text-center gap-6'>
          <div className='absolute -top-30 p-4 bg-cyan-300 w-fit rounded-full'>
            <Store className='text-cyan-100'/>
          </div>
          <h2 className="text-heading-xl text-gray-100 text-balance ">
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button variant="primary" className='mt-6' asChild>
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
