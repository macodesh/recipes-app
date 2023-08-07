import React from 'react'

export default function Navbar(): JSX.Element {
  return (
    <header className="absolute justify-between top-0 h-20 w-full flex items-center">
      <div className="px-4 gap-1 flex">
        <button type="button">◀</button>
        <span className="font-bold">Voltar</span>
      </div>
      <div className="gap-8 flex px-4">
        <button type="button">🏠</button>
        <button type="button">👤</button>
        <button type="button">🍔</button>
      </div>
    </header>
  )
}
