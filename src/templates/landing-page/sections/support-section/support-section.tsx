import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";
// import Image from "next/image";

export function SupportSection() {
  return (
    <section className="relative pb-8 md:py-10 bg-gray-800">
      <div className='absolute inset-0 hidden md:block bg-[url("/support-section.svg")] bg-cover bg-center bg-no-repeat opacity-90'/>

      <div className="container flex flex-col items-center gap-12 relative">
        <h2 className="font-heading text-balance text-center text-heading-xl text-gray-100">
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>
          

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Primeiro Card */}
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400 ">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <PaintbrushVertical className="h-6 w-6 text-white" />
            </div>
            <strong className="text-gray-100 text-heading-sm ">
              Personalize seu site
            </strong>
            <p className="text-gray-200 text-body-sm">
              Adicione sua logo, favicon, cores no seu catalago e tenha tudo com
              a sua cara.
            </p>
          </div>

          {/* Segundo Card */}
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-cyan-300 ">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-200 mb-4">
              <Store className="h-6 w-6 text-white" />
            </div>
            <strong className="text-gray-100 text-heading-sm ">
              Venda de qualquer loja
            </strong>
            <p className="text-gray-200 text-body-sm">
              Não importa a loja, o Site.Set permite que você insera qualquer
              link de afiliado.
            </p>
          </div>

          {/* Terceiro Card */}
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400 ">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <HeartHandshake className="h-6 w-6 text-white" />
            </div>
            <strong className="text-gray-100 text-heading-sm ">
              Receba suporte amigável
            </strong>
            <p className="text-gray-200 text-body-sm">
              Nossa equipe estará sempre pronta para te atender para ajudar no
              que for preciso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
