import { createFileRoute } from '@tanstack/react-router'
import QuizPage from '@/features/quiz/presentation/QuizPage';

export const Route = createFileRoute('/')({ component: App })


function App() {
  return (
    <div>
      <QuizPage />
    </div>
  );
}


