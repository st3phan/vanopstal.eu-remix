import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Stephan van Opstal — Freelance Front-end Web Developer" },
    { name: "description", content: "Your not so average front-end engineer. Specializes in React and Typescript." },
  ];
};

export default function Index() {
  return (
    <article>
      <p>Hi, I am your not so average front-end engineer. Besides my coding skills, I am that experienced senior developer that asks questions, motivates the team and tries to improve the process.</p>
      <p>I love building complex web applications with <strong>React</strong> en <strong>TypeScript</strong>. I&apos;m also very comfortable with <strong>Next.js</strong>, <strong>GraphQL</strong>, <strong>Jest</strong> and <strong>Testing Library</strong>.</p>
      <p>Feeding on as much information as I can I like to zoom in and look at all possible solutions from as many angles as possible. When adding value to a project I do not shy away from complex situations. I flourish when translating business to user to code and I love refining the process along the way. Helping other developers is something I value highly. I try to lead by example by keeping everyone sharp and maintaining a safe place for all involved. I&apos;m passionate about my craft and I will do everything in my ability to transfer that feeling to others. I am easy to connect with and I never put myself or my opinions first.</p>
    </article>
  );
}
