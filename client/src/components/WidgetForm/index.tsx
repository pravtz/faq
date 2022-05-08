import { CloseButton } from '../CloseButton'

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: '',
      alt: 'imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: '',
      alt: 'imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: '',
      alt: 'imagem de um balão de pensamento'
    }
  }
}

export const WidgetForm = () => {
  return (
    <div className=" bg-zinc-900 relative p-4 rounded-2xl flex flex-col mb-4 items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe o seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full"></div>

      <footer className=" text-xs text-neutral-400">
        ₢2022 -{' '}
        <a href="#" className="underline underline-offset-2">
          @pravtz
        </a>
      </footer>
    </div>
  )
}
