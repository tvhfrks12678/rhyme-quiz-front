import { ComicText } from "@/components/ui/comic-text"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"


export default function RhymeQuizHeader() {
  return (
    <header className="relative flex items-center justify-center px-4 py-2">
      <ComicText fontSize={4.8}>Rhyme Quiz</ComicText>
      <AnimatedThemeToggler
        className="absolute right-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-black bg-yellow-300 text-black shadow-[4px_4px_0px_#000] transition-transform hover:scale-105 [&_svg]:h-10 [&_svg]:w-10"
      />
    </header>
  );
}
