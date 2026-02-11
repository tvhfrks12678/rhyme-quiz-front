
import { Highlighter } from "@/components/ui/highlighter"

export default function QuizQuestionCard() {
    return (
        <div>
            <h1>QuizQuestionCard</h1>
            <HighlighterDemo />
            <br></br>
        </div>
    );
}



export function HighlighterDemo() {
  return (
    <div className="text-center">
      <p className="leading-relaxed">
        The{" "}
        <Highlighter action="underline" color="#FF9800">
          Magic UI Highlighter
        </Highlighter>{" "}
        makes important{" "}
        <Highlighter action="highlight" color="#87CEFA">
          text stand out
        </Highlighter>{" "}
        effortlessly.
      </p>
    </div>
  )
}