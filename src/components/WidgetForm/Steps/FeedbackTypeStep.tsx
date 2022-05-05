import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedBackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

//* <> representa o fragment, um conceito criado no react pois ele não aceita um elemento abaixo de outro sem algo em volta, porém para manter a semântica utiliza-se o fragment já que não aparece no html final
export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedBackTypeStepProps){
    return(
    <>
        <header>
            <span className="text-xl leading-6">Deixe seu feedback</span>

            <CloseButton />
        </header>

        <div className="flex py-8 gap-2 w-full">
                    { Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                            type="button"
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                        </button>
                    )
                }) }
        </div>
    </>
    )
}