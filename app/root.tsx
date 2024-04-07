import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import appStylesHref from "./styles/app.css?url";
import {LinksFunction} from '@remix-run/node';

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>Stephan van Opstal — Freelance Front-end Web Developer</title>
      <meta name="description" content="Your not so average front-end engineer. Specializes in React and Typescript."/>
      <link rel="stylesheet" href="https://unpkg.com/normalize.css"/>
      <link rel="stylesheet" href="https://unpkg.com/magick.css"/>
      <Meta/>
      <Links/>
    </head>
    <body>
      <header>
        <h1>Stephan van Opstal</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/hire-me">Hire&nbsp;me</Link></li>
          </ul>
        </nav>
      </header>
      {children}
      <ScrollRestoration/>
      <Scripts/>
    </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
