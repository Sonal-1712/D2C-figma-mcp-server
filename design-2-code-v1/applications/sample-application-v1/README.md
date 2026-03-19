# Wimbledon Sample Application

This is a sample application that demonstrates the use of the Wimbledon React component library in a real-world context. It implements user flows from the Figma designs, specifically focusing on the registration and authentication processes.

## Project Structure

The project follows a standard Next.js structure with TypeScript integration:

```
sample-application-v1/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   └── pages/
│   │       ├── Home/
│   │       └── Registration/
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   └── register.tsx
│   ├── styles/
│   │   ├── globals.scss
│   │   └── variables.scss
│   ├── hooks/
│   │   └── useForm.ts
│   ├── utils/
│   │   ├── validation.ts
│   │   └── formatters.ts
│   └── types/
│       └── index.ts
├── .eslintrc.js
├── .prettierrc
├── next.config.js
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
# Build the application
pnpm build
```

### Linting and Formatting

```bash
# Run ESLint
pnpm lint

# Fix ESLint issues
pnpm lint:fix

# Format code with Prettier
pnpm format

# Check formatting with Prettier
pnpm format:check
```

## Features

- Home page with a link to the registration form
- Registration form with validation
- Integration with the Wimbledon React component library

## Technologies Used

- Next.js
- React
- TypeScript
- SASS
- ESLint
- Prettier
- Wimbledon React Component Library

## Component Library Integration

This application uses components from the Wimbledon React component library:

- Atoms: Basic UI elements like Button, Input, Select, Checkbox
- Molecules: Composite components like Modal, Tooltip
- Organisms: Complex components including form components
- Layouts: Page layout structures

## Path Aliases

The application uses path aliases for easier imports:

- `@/*`: Points to the `src` directory
- `@atoms/*`: Points to the atoms package
- `@molecules/*`: Points to the molecules package
- `@organisms/*`: Points to the organisms package
- `@layouts/*`: Points to the layouts package
- `@tokens/*`: Points to the Tokens package

## License

This project is private and not licensed for public use.
