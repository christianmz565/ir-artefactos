import 'bootswatch/dist/sketchy/bootstrap.min.css';
import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    options: {
      storySort: (a, b) => {
        // 1. Docs always first within any component group
        if (a.name === 'Docs' && b.name !== 'Docs') return -1;
        if (a.name !== 'Docs' && b.name === 'Docs') return 1;

        // 2. Structural landing/overview pages
        if (a.title.includes('Overview') || a.title.includes('Introduction')) return -1;
        if (b.title.includes('Overview') || b.title.includes('Introduction')) return 1;

        // 3. Extract Base Screen IDs for chronological order
        const matchA = a.title.match(/IGU-(\d+)/);
        const matchB = b.title.match(/IGU-(\d+)/);

        if (matchA && matchB) {
          const numA = parseInt(matchA[1], 10);
          const numB = parseInt(matchB[1], 10);
          if (numA !== numB) {
            return numA - numB;
          }
        }

        // 4. High-level containers float above individual elements
        const priorityNames = ['Screen', 'Form', 'Overview'];
        const aIsPriority = priorityNames.some(name => a.name.includes(name));
        const bIsPriority = priorityNames.some(name => b.name.includes(name));

        if (aIsPriority && !bIsPriority) return -1;
        if (!aIsPriority && bIsPriority) return 1;

        // 5. Non-empty states before empty states
        const aIsEmpty = a.name.includes('Empty');
        const bIsEmpty = b.name.includes('Empty');
        if (aIsEmpty && !bIsEmpty) return 1;
        if (!aIsEmpty && bIsEmpty) return -1;

        // 6. Natural fallback sort for atomic child IDs
        return a.id.localeCompare(b.id, undefined, { numeric: true, sensitivity: 'base' });
      },
    },
  },
};

export default preview;