# react-debounce-effect
React use effect hook but with debounce

## Install

```bash
npm install react-debounce-effect
```

## Usage

```javascript
import React from "react"
import useDebounceEffect from 'react-debounce-effect'

const callback = React.useCallback(() => {
    // do something
}, [])

useDebounceEffect(callback, 600)
```

## API

### Parameters

#### callback

type `(...args: any[]) => void`

This is the function that will be called when the timeout occurs. Make sure you memoize the function declaration using `React.useCallback`

#### ms

type `number`

the number of milliseconds that the debounce will occurs