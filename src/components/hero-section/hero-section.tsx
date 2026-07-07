import { ArrowRight, Clock, Store } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="container relative flex items-center  mt-16">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 min-h-80 md:h-144   items-center'>
        {/* div da esquerda */}
        <div className='flex flex-col items-center justify-center gap-4 md:items-start lg:items-start'>
          <h1 className="text-gray-100 text-heading-hg">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className='flex flex-col items-center justify-center gap-4 md:items-start lg:items-start'>
            <div className='flex flex-col gap-2'>
              
              <div className="flex items-center gap-2">
                <Clock className="text-cyan-100" size={20} />
                <span className="text-gray-200">
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Store className="text-cyan-100" size={20} />
                <span className="text-gray-200">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>

            <div className='text-white flex flex-col gap-4 mt-14 items-center md:items-start lg:items-start'>
              <Button className='rounded-full w-fit gap-2' asChild>
                <Link href="/criar-loja">
                  Criar loja grátis
                  <ArrowRight/>
                </Link>
              </Button>

              <p className='text-gray-300 text-body-xs'>Não precisa de cartão de crédito</p>
            </div>
          </div>
        </div>
        {/* div da direita */}
        <div className='relative h-80 hidden md:h-full order-first md:order-last items-center justify-center md:flex lg:flex'>
          <Image
            src='/hero-section.svg'
            alt='ilustração com ícones de store, tag e sacola'
            width={200}
            height={400}
            className='h-full w-auto object-contain' 
          />
        </div>
      </div>
    </section>
  );
}
