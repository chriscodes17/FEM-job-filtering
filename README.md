# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- React-Redux
- Redux JS toolkit

### What I learned

To make filtering easier, I added a new key to each job object called tags whose value is an array. This array contains all the tags used for filtering the jobs state. See below:

```js
const initialState = jobData.map((job) => {
  return { ...job, tags: [job.role, job.level, ...job.languages, ...job.tools] };
});
```

To filter the job list based on the filter tags, where at least one tag from the filter should be present in the tags of each job object I used the following:

```js
const jobs = useSelector(({ jobs, filter }) => {
  if (!filter.length) return jobs; //IF filter is empty, then show all jobs
  return jobs.filter((job) => filter.every((tag) => job.tags.includes(tag))); //
});
```

This filtering uses the 'every' method to check if every tag in the filter state is present in the tags array of each object in the jobs state, if so then the 'filter' method will return the objects that are true and show the jobs.

### Continued development

I would like to use Redux in larger applications that contain a lot of data in state, I started learning Redux and decided to use in this project. I like how you can keep everything seperate in reducer files to manage state and thier actions.

