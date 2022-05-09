import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import {FeedbackTypeStep} from './FeedbackTypeStep'
import { useState } from 'react'
import { FeedbackContentStep } from './FeedbackContentStep'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'imagem de um balão de pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  
  const handleRestartFeedback= () => {
    setFeedbackType(null)
  }

  return (
    <div className=" bg-zinc-900 relative p-4 rounded-2xl flex flex-col mb-4 items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">


      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep 
          feedbackType={feedbackType}
          onFeedbackRestartRequested = {handleRestartFeedback}
        />
      )}
      

      <footer className=" text-xs text-neutral-400">
        ₢2022 -{' '}
        <a href="#" className="underline underline-offset-2">
          @pravtz
        </a>
      </footer>
    </div>
  )
}
