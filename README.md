React component design system.

# Usage

## Components

```bash
import '@johnpittman/react-design-system/lib/components/<group/<name>
```

## Styles

### Import by JavaScript

#### Full

```bash
import '@johnpittman/react-design-system/lib/styles
```

### Import by CSS

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
