React component design system.

# Usage

## Components

```bash
import '@johnpittman/react-design-system/lib/components/<group/<name>
```

## Styles

### Importing through JavaScript

#### Full

```bash
import '@johnpittman/react-design-system/lib/styles
```

### Import through CSS(recommended)

NOTE: Some modern bundler will inject CSS into the JavaScript payload which nullifies
this benefit.

- Importing through CSS allows the bundle to bundle all the CSS into a single file.
- Network optimization since importing through JavaScript will generate separate CSS files that will require multiple network requests to load all critical CSS.

#### Full

```bash
import '@johnpittman/react-design-system/lib/styles/index.css
```

#### Selective

```bash
import '@johnpittman/react-design-system/lib/styles/<path>.css
```

## Plugins

### PostCSS

# Lastest Preview

Storybook

- https://master--606bdd92af73c20021d007f6.chromatic.com

Chromatic

- https://chromatic.com/library?appId=606bdd92af73c20021d007f6&branch=master

# Development

## Storybook

```bash
npm run storybook
```

## Live updates as a linked package

- Open a terminal in the project directory
-

```bash
npm run build:watch
```

## Guidelines

### Components

## Stack

### Chromatic

### Storybook

### Typescript

### Eslint

- Linting/formatting to utilize caching and avoid an extra code style process.
- Uses prettier rules to apply prettier formatting.

### Stylelint

### Prettier

- Used as a eslint plugin to support formatting

### Jest

- Configured to run typescript with transform paths.
