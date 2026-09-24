import Image from 'next/image'
export default function ModelPage(){
  return (
    <div className="container max-w-6xl px-4 py-8 mx-auto">
      <article className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <figure className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
          <Image
            width={500}
            height={500}
            src="/img/placeholder.png"
            alt="3D model of MODEL NAME"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </figure>

        <section className="flex flex-col justify-center h-full">
          <div
            className="flex items-center mb-2 text-2xl text-gray-600"
            role="status"
            aria-label="Likes count"
          >
            <span className="font-light" aria-label="model likes">&hearts; 1847</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold">Articulated Dragon</h1>
          <span
            className="inline-block bg-transparent border border-gray-400 rounded-full px-3 py-1 text-sm text-gray-800 mb-6 w-fit"
            role="status"
            aria-label="Category"
          >
            Toys & Games
          </span>

          <div className="mb-6 prose prose-lg max-w-none">
            <p className="leading-relaxed text-gray-700">
              A detailed dragon model with movable joints and wings
            </p>
          </div>

          <footer className="text-sm text-gray-500">
            <time dateTime="2023-03-16">
              Added on 3/16/2023
            </time>
          </footer>
        </section>
      </article>
    </div>
  )
}