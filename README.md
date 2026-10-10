<div align="center">
  <a href="https://github.com/himanshu010/onlineide">
    <img width="200" height="auto" src="./public/assets/images/logo-main.gif">
  </a>
  <br>
  <br>

[![Website][website-badge]](https://online-ide.himanshuaswal.com)
[![Codacy Badge][codacy-badge]][codacy]

  <h1 style>Online Ide</h1>
  <p>
    <strong>Online Ide is a place to compile, debug, run and share your code.</strong><br>
    Available languages are C, C++, Java, Python, PHP and Ruby<br>
    Syntax highlighting is supported for all of them.
  </p>
</div>

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Run it locally](#run-it-locally)
4. [Deploying](#deploying)

<h2 align="center">Introduction</h2>

Online Ide is created to provide a reliable online platform for developers to debug, run and share their code. It has features to make it easier to import and share code, like [Github's Compiler][githubs-compiler], where you can open any file of a GitHub repository and run it in a single click.

<h2 align="center">Technologies Used</h2>

### Backend

|                                                        Name                                                        |                                                                Description                                                                 |
| :----------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: |
|   <a href="https://nodejs.org/en/"><img width="200" src="https://cdn.worldvectorlogo.com/logos/nodejs.svg"></a>    |                                  Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine                                   |
| <a href="https://expressjs.com/"><img width="200" src="https://cdn.worldvectorlogo.com/logos/express-109.svg"></a> | Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications |

### Frontend

| Name | Description |
| :--: | :---------: |
| [React](https://react.dev) | The pages are React components; Express renders one shell and passes each page its data |
| [Vite](https://vite.dev) | Builds the client (`client/`) into `public/build` |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [Framer Motion](https://motion.dev) | Page, panel and dialog animations (respecting reduced-motion settings) |
| [Magic UI](https://magicui.design) and [Motion Primitives](https://motion-primitives.com) | Animated components (border beams, flickering grid, terminal, theme toggle…), copied in from their MIT registries |
| [CodeMirror 6](https://codemirror.net) | The code editor, with syntax highlighting and seven themes |

### Database Management

|                                                          Name                                                           |                                                                Description                                                                |
| :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: |
| <a href="https://www.mongodb.com/"><img width="200" src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"></a> |                     MongoDB is a document database used to build highly available and scalable internet applications                      |
|         <a href="https://mongoosejs.com/"><img width="200" src="./public/assets/images/mongoose-logo.png"></a>          | Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks |

### APIs and Services Used

|                                                            Name                                                            |                                                                             Description                                                                             |
| :------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <a href="https://www.jdoodle.com/compiler-api"><img width="55" src="https://www.jdoodle.com/img/jdoodle.113077a7.png"></a> | JDoodle Compiler is an online API service to compile and execute Programs online via APIs, it supports Java, C/C++, PHP, Perl, Python, Ruby and many more languages |
|      <a href="https://sendgrid.com/"><img width="300" src="https://cdn.worldvectorlogo.com/logos/sendgrid-2.svg"></a>      |                           SendGrid is a cloud-based SMTP provider that allows you to send email without having to maintain email servers                            |

<h2 align="center">Run it locally</h2>

Node.js 20.19 or newer (`.node-version` pins 22). `npm install` also builds the client.

```sh
npm install
npm start          # http://localhost:3000
npm run dev:client # rebuilds the client on change; run `npm run dev` beside it for the server
npm run typecheck  # TypeScript check of the client
```

Settings come from the environment, or from `config/dev.env` (not committed):

| Variable | Used for |
| :-- | :-- |
| `MONGOURI` | MongoDB connection string |
| `JWTSECRET` | Signs login cookies and the short-lived tokens of the email-code steps |
| `CLIENT_ID`, `CLIENT_SECRET` | JDoodle API credentials (running code) |
| `CLIENT_G_ID`, `CLIENT_G_SECRET` | GitHub OAuth app (signing in to GitHub's Compiler) |
| `SENDGRID_API_KEY`, `SENDERMAIL` | Sign-up and password-reset codes. The key needs the Mail Send permission and `SENDERMAIL` must be a verified sender in SendGrid; the server log says at start whether SendGrid accepts the key |
| `PORT`, `HOST` | Where the server listens (default port 3000, every interface) |
| `JDOODLE_URL`, `GITHUB_API_URL`, `SENDGRID_API_URL` | Test stand-ins for JDoodle, GitHub's API and SendGrid; leave unset in production |

<h2 align="center">Deploying</h2>

The site runs on [Render](https://render.com). The client must be built before `npm start`: `npm install` does it through the `postinstall` script, so a build command of `npm install` (or `npm install && npm run build`) works. If the build fails, Render keeps the previous deploy live.

### License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fhimanshu010%2FonlineIDE.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fhimanshu010%2FonlineIDE?ref=badge_large)

[website-badge]: https://img.shields.io/website?down_message=offline&up_message=online&url=https%3A%2F%2Fonline-ide.himanshuaswal.com
[issues-badge]: https://img.shields.io/github/issues/himanshu010/onlineIDE
[issues]: https://img.shields.io/github/issues/himanshu010/onlineIDE
[fork-badge]: https://img.shields.io/github/forks/himanshu010/onlineIDE
[license-badge]: https://img.shields.io/github/license/himanshu010/onlineIDE
[license]: https://img.shields.io/github/license/himanshu010/onlineIDE
[stars-badge]: https://img.shields.io/github/stars/himanshu010/onlineIDE
[codacy-badge]: https://app.codacy.com/project/badge/Grade/70be2fa36c604050b40343b5bbf6ad7c
[codacy]: https://www.codacy.com/gh/himanshu010/onlineIDE/dashboard?utm_source=github.com&utm_medium=referral&utm_content=himanshu010/onlineIDE&utm_campaign=Badge_Grade
[githubs-compiler]: https://online-ide.himanshuaswal.com/github
