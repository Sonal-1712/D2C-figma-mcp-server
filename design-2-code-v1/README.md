# Design-to-Code

A library of React components based on designs from Figma.

## Project Overview

This project aims to create a library of React components that are based on designs from Figma. By leveraging the mcp-figma-server, we can create a more efficient workflow between design and development.

## Project Structure

The project is organized as a monorepo using pnpm workspaces, with the following structure:

```
design-2-code-v1/
├── applications/
│   └── storybook-v1/      # Storybook application for showcasing components
├── packages/
│   ├── components-v1/     # Basic building blocks (buttons, inputs, etc.)
│   ├── screens-v1/        # Complex combinations of components (forms, navigation bars, etc.)
│   └── layouts-v1/        # Page layouts and templates
├── package.json           # Root package.json
└── pnpm-workspace.yaml    # pnpm workspace configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm (v8 or later)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

### Using Devbox

This project includes a `devbox.json` configuration file for creating an isolated development environment using [Devbox](https://www.jetpack.io/devbox/).

1. Install Devbox by following the instructions at [https://www.jetpack.io/devbox/docs/installing_devbox/](https://www.jetpack.io/devbox/docs/installing_devbox/)

2. Start a Devbox shell:

```bash
devbox shell
```

3. Once inside the Devbox shell, you can run the project scripts:

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm storybook

# Build all packages
pnpm build
```

The Devbox environment includes:
- Node.js 18 with corepack enabled (for pnpm support)

All project-specific dependencies will be installed via `pnpm install` within the Devbox shell.

### Development

To start the Storybook development server:

```bash
pnpm storybook
```

To build all packages:

```bash
pnpm build
```

To run linting:

```bash
pnpm lint
```

## Component Development

Components are organized as follows:

- **Components**: Basic building blocks (buttons, inputs, labels, form fields, etc.)
- **Screens**: Complex combinations of components (forms, navigation bars, etc.)
- **Layouts**: Page layouts and templates

Each component follows a consistent structure:

```
ComponentName/
├── ComponentName.tsx           # Component implementation
├── ComponentName.module.scss   # Component styles
├── ComponentName.stories.tsx   # Storybook stories
└── index.ts                    # Re-export component
```

## Future Plans

In the future, we plan to integrate with mcp-figma-server to streamline the design-to-code workflow. This will allow us to automatically retrieve design specifications from Figma and use them to inform the implementation of React components.
