import a1 from './assets/a1.jpg'
import a2 from './assets/a2.jpg'
import a3 from './assets/a3.jpg'
import a4 from './assets/a4.jpg'
import a5 from './assets/a5.jpg'
import a6 from './assets/a6.jpg'
import a7 from './assets/a7.jpg'
import a8 from './assets/a8.jpg'
import a9 from './assets/a9.jpg'
import a10 from './assets/a10.jpg'
import a11 from './assets/a11.jpg'
import a12 from './assets/a12.jpg'

const products = [
    {
      id: 1,
      name: 'Kurczak tikka masala',
      href: '#',
      imageSrc: a1,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Makaron ryżowy z kurczakiem i warzywami',
      href: '#',
      imageSrc: a2,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Maślane ciasteczka z czekoladą',
      href: '#',
      imageSrc: a3,
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Pieczone bataty z sosem hummusowym',
      href: '#',
      imageSrc: a4,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Kremowa zupa czosnkowa',
        href: '#',
        imageSrc: a5,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 6,
        name: 'Mocno czekoladowe ciastka',
        href: '#',
        imageSrc: a6,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 7,
        name: 'Hiszpański gulasz z kurczakiem i chorizo',
        href: '#',
        imageSrc: a7,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 8,
        name: 'Tiramisu w pucharkach',
        href: '#',
        imageSrc: a8,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 9,
        name: 'Miodowy kurczak ze szpinakiem',
        href: '#',
        imageSrc: a9,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 10,
        name: 'Kuleczki ziemniaczane',
        href: '#',
        imageSrc: a10,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 11,
        name: 'Burrito z patelni',
        href: '#',
        imageSrc: a11,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 12,
        name: 'Ciasteczka twarogowe z cukrem',
        href: '#',
        imageSrc: a12,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    // More products...
  ]
  
  export default function Example1() {
    return (
      <div className="">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-1">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-900">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  