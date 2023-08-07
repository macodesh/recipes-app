import Image from 'next/image'
import React from 'react'

export default function Home(): JSX.Element {
  return (
    <>
      <h1 className="text-4xl text-green-500 text-center px-4">
        Planejamento de Cardápio
      </h1>
      <Image
        src="/assets/hamburguer_vegano.jpg"
        alt="uma foto linda de comida gostosa!"
        width={200}
        height={150}
        className="object-cover w-full h-72 my-4"
      />
    </>
  )
}
