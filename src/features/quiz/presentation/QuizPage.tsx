import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import QuizQuestionCard from "./parts/QuizQuestionCard";

export default function QuizPage() {
    return (
        <div>
            <QuizQuestionCard />
            <div className="flex justify-center mb-5">
                <AnimatedThemeToggler />
            </div>
        </div>
    );
}