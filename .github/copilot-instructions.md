<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# UI Component Library Project Instructions

This is a React component library project with TypeScript, built using Vite. The project includes comprehensive code quality checks and CI/CD pipeline.

## Project Structure

- **Components**: Located in `src/components/` with individual folders for each component
- **Tests**: Co-located with components using `.test.tsx` extension
- **Configuration**: ESLint, Prettier, Jest, and Husky configurations in root
- **Docker**: Multi-stage build with nginx serving on port 8018

## Development Guidelines

1. All components should be written in TypeScript with proper interfaces
2. Follow the existing component structure with props interfaces
3. Include comprehensive tests for all components
4. Use Tailwind CSS for styling
5. Ensure all code passes Prettier, ESLint, and Jest checks before committing

## Code Quality Standards

- **Prettier**: Enforces consistent code formatting
- **ESLint**: Catches code quality issues and enforces best practices
- **Jest**: Unit tests with React Testing Library
- **Husky**: Pre-commit hooks prevent commits that fail quality checks

## Naming Conventions

- Container: `guangxin_dai_coding_assignment13`
- Working directory: `guangxin_dai_ui_garden_build_checks`
- Package: `guangxin-dai-ui-garden-build-checks`

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run prettier`: Check code formatting
- `npm test`: Run unit tests
- `npm run test:coverage`: Run tests with coverage report

When adding new components:

1. Create component folder in `src/components/`
2. Include `.tsx` file with TypeScript interfaces
3. Add `.test.tsx` file with comprehensive tests
4. Export from `src/index.ts`
5. Update documentation as needed
