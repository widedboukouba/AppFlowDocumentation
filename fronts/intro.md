---
title: 💡 Introduction
description: Create a doc page with rich content AppFlow Introduction.
sidebar_position: 1
---
# Front-end Guide

## Highlighting with metadata string

You can also specify `highlighted` line ranges within the language meta string (leave a space after the language).
```jsx {1,4-6,11} showLineNumbers
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
```








:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

```js
console.log('Every repo must come with a mascot.');
```
:::


## Code title

You can add a `title` to the code block by adding a title key after the language (leave a space between them).

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```