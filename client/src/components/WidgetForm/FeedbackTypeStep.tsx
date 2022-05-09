import { FeedbackType, feedbackTypes } from "."
import { CloseButton } from "../CloseButton"

interface setFeedbackTypeProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export const FeedbackTypeStep = ({ onFeedbackTypeChanged }: setFeedbackTypeProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe o seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (

            <button
              key={key}
              className='flex flex-1 flex-col bg-zinc-800 rounded-lg items-center py-5 w-24 gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type='button'
            >
              <img src={value.image.source} alt="value.image.alt" />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}