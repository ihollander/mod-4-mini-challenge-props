# React Mini Challenge: Props

## Instructions

Fork this repo, then run `git clone` to download it locally. Then `cd` into the downloaded directory and open it in your text editor with `code .`.

Run `npm install && npm start` to get started.

## Submitting

When you’re finished, run the following commands in your terminal to submit:

```
git add .
git commit -m 'Done'
git push
```

To get feedback on your code, make a [pull request from your forked repo](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).

## Assignment

Welcome to The Spice Store! We'll be building an application for displaying information about different spices. (If you're wondering where the ...interesting... spice descriptions came from - check out spicejungle.com) 

The finished app should look like this:

![Spice Store](demo.png)

In `/components/App.js`, there is a variable called `spices` that has an array of objects representing different spices.

You'll need to use that data to build out two features in our application:

- [ ] Use the `<Header>` component to display the correct number of spices in our store
- [ ] Use the `<SpiceList>` and `<SpiceItem>` components to display information about each spice

A few things to keep in mind as you are building out these deliverables:

- How can we use props to pass data from one component to another?
- If you're not sure what props you're getting, try adding a `console.log` or `debugger` in the component you're working on. 
    - For *class* components, it's usually helpful to debug inside the `render` method (before the return statement). 
    - For *function* components, try debugging inside the function body.
- Make sure to draw out the component hierarchy so you can see the relationship between components!
- Try to figure out what props to give our components by looking at code in the existing components.
- Some of these components are *class* components and some are *function* components - this is to give you practice with the syntax for both kinds of component. How does this change how you can access props?

## Extras

In our App component, the return statement looks like this:

```jsx
return (
  <>
    <Header />
    <SpiceList />
  </>
);
```

Do some research - what does having `<>` and `</>` wrapped around our components do? (Hint: look up `React.Fragment`!)