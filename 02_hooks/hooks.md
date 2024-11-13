# React Hooks: useState, useEffect, useRef, useMemo, and useCallback

This module dives into essential React Hooks that empower functional components with state, lifecycle methods, and performance optimizations. Understanding and applying these hooks will allow you to create efficient, interactive, and optimized React applications.

## Table of Contents
1. [What are Hooks?](#what-are-hooks)
2. [Hook Breakdown](#hook-breakdown)
    - [useState](#usestate)
    - [useEffect](#useeffect)
    - [useRef](#useref)
    - [useMemo](#usememo)
    - [useCallback](#usecallback)
3. [Exercises](#exercises)
4. [Summary](#summary)

---

## What are Hooks?

**Hooks** are functions that allow functional components to use React features, such as state and lifecycle methods, without needing to convert them into class components. Hooks are essential for managing the component lifecycle, keeping track of data, and optimizing performance.

---

## Hook Breakdown

### 1. `useState`

#### Purpose
`useState` allows you to add and manage local state in a functional component. It takes an initial state and returns an array with the current state and a function to update it.

#### Syntax
```jsx
const [state, setState] = useState(initialValue);
```

#### Example
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

---

### 2. `useEffect`

#### Purpose
`useEffect` is used to handle side effects in functional components. It runs after every render by default, but can be customized to run only on certain conditions by providing a dependency array.

#### Syntax
```jsx
useEffect(() => {
  // Side effect code here
}, [dependencies]);
```

#### Example
```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Seconds: {seconds}</p>;
}

export default Timer;
```

---

### 3. `useRef`

#### Purpose
`useRef` provides a way to access and interact with DOM elements directly and persist values between renders without triggering a re-render. It’s commonly used for focusing input elements and storing mutable values.

#### Syntax
```jsx
const ref = useRef(initialValue);
```

#### Example
```jsx
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
```

---

### 4. `useMemo`

#### Purpose
`useMemo` is used for **memoizing** values to optimize performance, recalculating a value only when its dependencies change. This is helpful for preventing expensive calculations on every render.

#### Syntax
```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

#### Example
```jsx
import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ num }) {
  const factorial = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }, [num]);

  return <p>Factorial of {num} is {factorial}</p>;
}

export default ExpensiveCalculation;
```

---

### 5. `useCallback`

#### Purpose
`useCallback` memoizes functions, ensuring that the same instance of a function is used across renders unless dependencies change. This is particularly useful for optimizing child components that depend on a function passed as a prop.

#### Syntax
```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

#### Example
```jsx
import React, { useState, useCallback } from 'react';

function Button({ handleClick }) {
  return <button onClick={handleClick}>Click Me</button>;
}

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <Button handleClick={increment} />
    </div>
  );
}

export default Counter;
```

---

## Exercises

### Exercise 1: Build a Stopwatch
1. Use `useState` to track the elapsed time.
2. Use `useEffect` to set up and clear the interval when starting and stopping the stopwatch.
3. Use buttons to start, stop, and reset the stopwatch.

### Exercise 2: Create a To-Do List with `useRef` for Input Focus
1. Create a to-do list with an input field for adding new tasks.
2. Use `useRef` to automatically focus on the input field when the page loads or after adding a new task.
3. Use `useState` to manage the list of tasks and display them dynamically.

---

## Summary

- **useState**: Adds state to functional components.
- **useEffect**: Handles side effects in components, like data fetching and timers.
- **useRef**: Maintains a reference to a DOM element or value without re-rendering.
- **useMemo**: Memoizes calculated values for performance optimization.
- **useCallback**: Memoizes functions to prevent unnecessary re-renders.


