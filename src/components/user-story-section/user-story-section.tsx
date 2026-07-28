import Image from "next/image";

const customerStories = [
  {
    content:
      "Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.",
    author: {
      name: "Maurício Augusto",
      role: "Desenvolvedor Web",
      avatarUrl: "https://github.com/mrc-augusto.png",
    },
  },
  {
    content:
      "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
    author: {
      name: "Diego Fernandes",
      role: "CEO da Rocketseat",
      avatarUrl: "https://github.com/diego3g.png",
    },
  },
];

export function UserStorySection() {
  return (
    <section className="container py-8 md:py-10 my-20">
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-heading-md md:text-heading-xl text-gray-100 font-heading">
          Quem utiliza, aprova!
        </h2>

        <div className='grid gap-8 md:grid-cols-2'>
          {customerStories.map((customerStory) => (
            <div key={customerStory.author.name} className='flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:9-12'>
              <p className='text-balance text-gray-200 italic'>
                {customerStory.content}
              </p>

              <div className='flex items-center gap-3'>
                <div className='relative h-10 w-10 overflow-hidden rounded-full'>
                  <Image
                    src={customerStory.author.avatarUrl}
                    alt={customerStory.author.name}
                    width={48}
                    height={48}
                    className="rounded-full border border-blue-200"
                  />
                </div>

                <div className='flex flex-col'>
                  <strong className='text-gray-200 text-sm'>
                    {customerStory.author.name}
                  </strong>
                  <span className='text-gray-300 text-xs'>
                    {customerStory.author.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
