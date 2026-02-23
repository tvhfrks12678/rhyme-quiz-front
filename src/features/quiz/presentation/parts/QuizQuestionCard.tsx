import { Button } from '@/components/ui/button';
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from '@/components/ui/field';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Highlighter } from "@/components/ui/highlighter"

export default function QuizQuestionCard() {
    return (
        <div>
            {/* <HighlighterDemo /> */}
            <br></br>
            <QuizQuestion />
            <br></br>
        </div>
    );
}

export function QuizQuestion() {
  return (
    <div className="grid w-full mx-auto max-w-md">
      {/* Blog Card */}
      <Card className="overflow-hidden pt-0">
        <div className="aspect-video w-full">
          <img
            className="h-full w-full object-cover"
            src="https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg"
            alt="Blog 1"
          />
        </div>
        <CardContent className="flex flex-col gap-2">
          <div className="text-muted-foreground flex items-center gap-2 text-xs">
            {/* <Calendar className="h-3 w-3" /> */}
            <span>Mar 15, 2025</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
          <CardTitle className="text-xl font-semibold">
            攻殻機動隊で韻を踏んでいるのは？
          </CardTitle>
          {/* <CardDescription className="line-clamp-2">
            AI is changing the world and will continue to do so in the future.
            Check Creative Tim UI for more information.
          </CardDescription> */}
          <QuizQuestionChoiceCheckbox />
        </CardContent>
        <CardFooter>
          <Button variant="secondary" size="sm">
            解答
          </Button>
        </CardFooter>
      </Card>
      <br></br>
    </div>
  )
}


function QuizQuestionChoiceCheckbox() {
  return (
    <div className="flex flex-col gap-2">
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
          <FieldContent>
            <FieldTitle>どうなる問題</FieldTitle>
          </FieldContent>
        </Field>
      </FieldLabel>
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
          <FieldContent>
            <FieldTitle>ほうばりたい</FieldTitle>
          </FieldContent>
          </Field>
      </FieldLabel>
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
          <FieldContent>
            <FieldTitle>正直に生きて行きたい</FieldTitle>
          </FieldContent>
          </Field>
      </FieldLabel>
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
          <FieldContent>
            <FieldTitle>脳内で考えて、オーライ</FieldTitle>
          </FieldContent>
          </Field>
      </FieldLabel>
    </div>
  )
}


// function QuizQuestionChoiceCheckbox() {
//   return (
//     <div className="flex flex-col gap-2">
//       <FieldLabel>
//         <Field orientation="horizontal">
//           <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
//           <FieldContent>
//             <FieldTitle>天才でなく</FieldTitle>
//           </FieldContent>
//         </Field>
//       </FieldLabel>
//       <FieldLabel>
//         <Field orientation="horizontal">
//           <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
//           <FieldContent>
//             <FieldTitle>けんけんぱです</FieldTitle>
//           </FieldContent>
//           </Field>
//       </FieldLabel>
//       <FieldLabel>
//         <Field orientation="horizontal">
//           <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
//           <FieldContent>
//             <FieldTitle>三角です</FieldTitle>
//           </FieldContent>
//           </Field>
//       </FieldLabel>
//       <FieldLabel>
//         <Field orientation="horizontal">
//           <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
//           <FieldContent>
//             <FieldTitle>ペーペーです</FieldTitle>
//           </FieldContent>
//           </Field>
//       </FieldLabel>
//     </div>
//   )
// }





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