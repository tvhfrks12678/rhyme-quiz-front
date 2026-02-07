import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router'
import { Checkbox } from "@/components/ui/checkbox"
// import { Label } from '@/components/ui/label';
import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from '@/components/ui/field';
// import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card-shadcn';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


// import {
//   Zap,
//   Server,
//   Route as RouteIcon,
//   Shield,
//   Waves,
//   Sparkles,
// } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })


function App() {
  return (
    <div>
      {/* <CardImage /> */}
      <CardDemo />
      <QuizQuestionCard />
      <CardWithImage />
      <QuizQuestion />
    </div>
  );
}





export function CardDemo() {
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
            ケンタウロスで韻を踏んでいるのは？
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
            <FieldTitle>天才でなく</FieldTitle>
          </FieldContent>
        </Field>
      </FieldLabel>
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
          <FieldContent>
            <FieldTitle>けんけんぱです</FieldTitle>
          </FieldContent>
          </Field>
      </FieldLabel>
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
          <FieldContent>
            <FieldTitle>三角です</FieldTitle>
          </FieldContent>
          </Field>
      </FieldLabel>
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
          <FieldContent>
            <FieldTitle>ペーペーです</FieldTitle>
          </FieldContent>
          </Field>
      </FieldLabel>
    </div>
  )
}


export function QuizQuestionChoice() {
  return (
    <RadioGroup defaultValue="plus" className="max-w-sm">
      <FieldLabel htmlFor="plus-plan">
        <Field orientation="horizontal">
          <RadioGroupItem value="plus" id="plus-plan" />
          <FieldContent>
            <FieldTitle>天高く</FieldTitle>
          </FieldContent>
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="plus-plan1">
        <Field orientation="horizontal">
          <RadioGroupItem value="plus1" id="plus-plan1" />
          <FieldContent>
            <FieldTitle>明太子です</FieldTitle>
          </FieldContent>
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="plus-plan2">
        <Field orientation="horizontal">
          <RadioGroupItem value="plus2" id="plus-plan2" />
          <FieldContent>
            <FieldTitle>変態です</FieldTitle>
          </FieldContent>
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="plus-plan3">
        <Field orientation="horizontal">
          <RadioGroupItem value="plus3" id="plus-plan3" />
          <FieldContent>
            <FieldTitle>選択なく</FieldTitle>
          </FieldContent>
        </Field>
      </FieldLabel>
    </RadioGroup>
  )
}


export function QuizQuestionCard() {
  return (
    <div className='mx-auto max-w-md pt-0'>
      <Card className="w-full max-w-md overflow-hidden pt-0 ">
        <img
          src="https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg"
          alt="UI/UX Review"
          className="h-72 w-full object-cover"
        />
        <CardHeader>
          <CardTitle>ケンタウロスで韻を踏んでいるのは？</CardTitle>
        </CardHeader>
        <CardContent>
          <QuizQuestionChoice />
        </CardContent>
        <CardFooter>
          <Button>解答</Button>
        </CardFooter>
      </Card>
      <br></br>
    </div>
  )
}







export function CardWithImage() {
  return (
    <Card className="w-full max-w-xs overflow-hidden pt-0">
      <img
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-2.jpg"
        alt="UI/UX Review"
        className="h-48 w-full object-cover"
      />
      <CardHeader>
        <CardTitle>UI/UX Review Check</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  )
}



function QuizQuestion() {
  return (
    <div>
      <Card className="relative mx-auto w-full max-w-lg pt-0">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVNXsNAi5adG8cBxNtFCYy6LJiCLnjrbdS9sezxOGr_jYVMLvsrLKGMtDD80BqUi_P0z-0h4xdEYowtxV36nQQsx0iJ8Z5C8FwZTETVWHeRapAlQUzIX_L5hhxDYkKfX6VzkDeeNbBYhX3tir_GQgIrEWbVwdf5Pv80Tlapw-mYTNYSUY-RrPjP0Pwu19x/s771/eto_centaur_hagoita.png"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60"
        />
        <CardHeader>
          <CardTitle>ケンタウロスで韻を踏んでいるのは？</CardTitle>
          <br></br>

          <QuizQuestionChoice />

        </CardHeader>
        <CardFooter>
          <Button className="w-full">解答</Button>
        </CardFooter>
      </Card>
      <br></br>
    </div>
  )
}



// export function CardImage() {
//   return (
//     <Card className="relative mx-auto w-full max-w-lg pt-0">
//       <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
//       <img
//         src="https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg"
//         alt="Event cover"
//         className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
//       />
//       <CardHeader>
//         <CardAction>
//           <Badge variant="secondary">Featured</Badge>
//         </CardAction>
//         <CardTitle>Design systems meetup</CardTitle>
//         <CardDescription>
//           A practical talk on component APIs, accessibility, and shipping
//           faster.
//         </CardDescription>

//         <FieldLabel>
//           <Field orientation="horizontal">
//             <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
//             <FieldContent>
//               <FieldTitle>Enable notifications</FieldTitle>
//             </FieldContent>
//           </Field>
//         </FieldLabel>
//         <br></br>

//         <RadioGroupChoiceCard />

//       </CardHeader>
//       <CardFooter>
//         <Button className="w-full">View Event</Button>
//       </CardFooter>
//     </Card>
//   )
// }


export function RadioGroupChoiceCard() {
  return (
    <RadioGroup defaultValue="plus" className="max-w-sm">
      <FieldLabel htmlFor="plus-plan">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Plus</FieldTitle>
            <FieldDescription>
              For individuals and small teams.
            </FieldDescription>
          </FieldContent>
          <RadioGroupItem value="plus" id="plus-plan" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="pro-plan">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Pro</FieldTitle>
            <FieldDescription>For growing businesses.</FieldDescription>
          </FieldContent>
          <RadioGroupItem value="pro" id="pro-plan" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="enterprise-plan">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Enterprise</FieldTitle>
            <FieldDescription>
              For large teams and enterprises.
            </FieldDescription>
          </FieldContent>
          <RadioGroupItem value="enterprise" id="enterprise-plan" />
        </Field>
      </FieldLabel>
    </RadioGroup>
  )
}




// function App() {
//   const features = [
//     {
//       icon: <Zap className="w-12 h-12 text-cyan-400" />,
//       title: 'Powerful Server Functions',
//       description:
//         'Write server-side code that seamlessly integrates with your client components. Type-safe, secure, and simple.',
//     },
//     {
//       icon: <Server className="w-12 h-12 text-cyan-400" />,
//       title: 'Flexible Server Side Rendering',
//       description:
//         'Full-document SSR, streaming, and progressive enhancement out of the box. Control exactly what renders where.',
//     },
//     {
//       icon: <RouteIcon className="w-12 h-12 text-cyan-400" />,
//       title: 'API Routes',
//       description:
//         'Build type-safe API endpoints alongside your application. No separate backend needed.',
//     },
//     {
//       icon: <Shield className="w-12 h-12 text-cyan-400" />,
//       title: 'Strongly Typed Everything',
//       description:
//         'End-to-end type safety from server to client. Catch errors before they reach production.',
//     },
//     {
//       icon: <Waves className="w-12 h-12 text-cyan-400" />,
//       title: 'Full Streaming Support',
//       description:
//         'Stream data from server to client progressively. Perfect for AI applications and real-time updates.',
//     },
//     {
//       icon: <Sparkles className="w-12 h-12 text-cyan-400" />,
//       title: 'Next Generation Ready',
//       description:
//         'Built from the ground up for modern web applications. Deploy anywhere JavaScript runs.',
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
//       <section className="relative py-20 px-6 text-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
//         <div className="relative max-w-5xl mx-auto">
//           <div className="flex items-center justify-center gap-6 mb-6">
//             <img
//               src="/tanstack-circle-logo.png"
//               alt="TanStack Logo"
//               className="w-24 h-24 md:w-32 md:h-32"
//             />
//             <h1 className="text-6xl md:text-7xl font-black text-white [letter-spacing:-0.08em]">
//               <span className="text-gray-300">TANSTACK</span>{' '}
//               <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 START
//               </span>
//             </h1>
//           </div>
//           <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
//             The framework for next generation AI applications
//           </p>
//           <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
//             Full-stack framework powered by TanStack Router for React and Solid.
//             Build modern applications with server functions, streaming, and type
//             safety.
//           </p>
//           <div className="flex flex-col items-center gap-4">
//             <a
//               href="https://tanstack.com/start"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50"
//             >
//               Documentation
//             </a>
//             <p className="text-gray-400 text-sm mt-2">
//               Begin your TanStack Start journey by editing{' '}
//               <code className="px-2 py-1 bg-slate-700 rounded text-cyan-400">
//                 /src/routes/index.tsx
//               </code>
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 px-6 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold text-white mb-3">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }
