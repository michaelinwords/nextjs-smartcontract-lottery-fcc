# NextJS Smart Contract Lottery - Full Stack / Front End (Free Code Camp)
We will build a decentralised lottery, with a front end (using NextJS in the React framework), ability to switch between networks (validating and notifying which networks/chain ids will work), where users can click to enter the lottery (and sign the tx), then displaying the most recent winner; both the backend and frontend will be hosted via a decentralised technology
-   

## Project process:
(1) Run "yarn create next-app ." to build out the main boilerplate files for the project (then deleted .eslintrc.json)
(2) Remove everything from the default index.js except the head, start preparing the page for our needed parts
(3) Create a connect button - make it detect when we change networks, users, etc
-   When creating components, make them some_name.jsx (see Header.jsx), then make sure to add them to _app.js or index.js (which one?)
-   If using moralis, run "yarn add react react-dom moralis react-moralis moralis-v1" (this is not --dev because we will actually need moralis for the live project to run properly)
-   If using web3uikit, make sure to "yarn add web3uikit"

## Other notes:
-   For more info on NextJS, study from the (Next.js crash course)[https://www.youtube.com/watch?v=mTz0GXj8NN0]
-   React:
    > everything is (component-based)[https://www.w3schools.com/react/react_components.asp]; components are independent and reusable bits of code, like functions that return HTML elements
    > (hooks)[https://reactjs.org/docs/hooks-overview.html#:~:text=Hooks%20are%20functions%20that%20let,if%20you%27d%20like.)]: "Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed."
        - This is useful in that we want our app to re-render if the state changes, to show different buttons/components depending on what's happening (which will not happen with raw JS)
-   pages: the different pages on our site; files in here are .js; this is where we'll mostly be working and creating folders
-   index.js: our default page
-   react syntax: used inside our files, jsx, code looks something between javascript and html
-   _app.js: our entry point for everything; basically contains/runs our whole application; <Component {...pageProbs} /> becomes index.js
-   api: what we would use for http post requests (not used in this project)
-   public: public images
-   styles: css for our project, which is a way of styling our html
-   next.config.js: configuration file for NextJS  
-   versions of JS: backend JS is a little different than frontend JS; imports work with front end, while require statements do not
-   moralis: a library, has additional plugins, can hook into backend to provide even more functionality
-   JS inside HTML: to write Javascript inside of HTML, just use {} and place JS inside

## Commands:
-   yarn dev OR yarn run dev -- starts a server and runs our app; click on the provided url (example: localhost:3000) to see site

## Fixing errors:
-   If there is an error from module not found, just yarn add it by name

## vv DEFAULT NOTES vv

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.