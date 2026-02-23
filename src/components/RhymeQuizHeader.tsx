import { ComicText } from "@/components/ui/comic-text"
import { GradientHeading } from "@/components/ui/gradient-heading"


export default function RhymeQuizHeader() {
  return (
    <div>
      <ComicText>Rhyme Quiz</ComicText>
      {/* <GradientHeadingExample /> */}
    </div>
  );
}


function GradientHeadingExample() {
  return (
    <GradientHeading variant="default" size="xs" weight="bold">
      Rhyme Quiz
    </GradientHeading>
  )
}