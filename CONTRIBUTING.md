---
title: Contributing
sidebar:
  order: 4
---

We welcome contributions to Cardealer DP! This guide will help you get started.

## Prerequisites

- **Node 24+ (with pnpm)** - [How to Install](https://nodejs.org/en/download/current)
- **Python 3.12+ (with uv)** - [How to Install](https://docs.astral.sh/uv/getting-started/installation)

## Getting Started

1. **Fork the repository** on GitHub: https://github.com/datisthq/cardealerdp
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/cardealerdp.git
   cd cardealerdp
   ```
3. **Install dependencies** using pnpm:
   ```bash
   pnpm install
   ```

## Development Workflow

### Available Scripts

- **`pnpm configure`** - Configure extension metadata (slug, title, description, etc.)
- **`pnpm generate`** - Generate TypeScript and Python SDKs from schemas
- **`pnpm start`** - Start the documentation site in development mode
- **`pnpm build`** - Build all packages (extension, SDKs)
- **`pnpm test`** - Run linting and type checking
- **`pnpm format`** - Format code with Biome
- **`pnpm lint`** - Check code quality with Biome

### Making Changes

1. **Create a new branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** to the extension, schemas, or documentation

3. **Generate SDKs** if you modified schemas:
   ```bash
   pnpm generate
   ```

4. **Test your changes**:
   ```bash
   pnpm test
   ```

5. **Commit your changes** with a descriptive message:
   ```bash
   git add .
   git commit -m "Your feature description"
   ```

6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request** on GitHub from your fork to the main repository

## Questions?

Feel free to open an issue on GitHub if you have any questions or need help!
