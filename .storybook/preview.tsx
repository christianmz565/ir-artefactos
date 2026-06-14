import "bootswatch/dist/sketchy/bootstrap.min.css";
import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },

    options: {
      // Storybook 10 evalúa `storySort` con `eval` en build, lo que impide
      // type annotations de TS en los parámetros. Tipos inferidos a través
      // de JSDoc en `Preview` no propagan al callback inline.
      storySort: (
        // @ts-expect-error -- ver comentario de options arriba
        a,
        // @ts-expect-error -- ver comentario de options arriba
        b,
      ) => {
        if (a.name === "Docs" && b.name !== "Docs") return -1;
        if (a.name !== "Docs" && b.name === "Docs") return 1;

        if (a.title.includes("Overview") || a.title.includes("Introduction"))
          return -1;
        if (b.title.includes("Overview") || b.title.includes("Introduction"))
          return 1;

        const matchA = a.title.match(/IGU-(\d+)/);
        const matchB = b.title.match(/IGU-(\d+)/);

        if (matchA && matchB) {
          const numA = parseInt(matchA[1], 10);
          const numB = parseInt(matchB[1], 10);
          if (numA !== numB) {
            return numA - numB;
          }
        }

        const priorityNames = ["Screen", "Form", "Overview"];
        const aIsPriority = priorityNames.some((name) => a.name.includes(name));
        const bIsPriority = priorityNames.some((name) => b.name.includes(name));

        if (aIsPriority && !bIsPriority) return -1;
        if (!aIsPriority && bIsPriority) return 1;

        const aIsEmpty = a.name.includes("Empty");
        const bIsEmpty = b.name.includes("Empty");
        if (aIsEmpty && !bIsEmpty) return 1;
        if (!aIsEmpty && bIsEmpty) return -1;

        return a.id.localeCompare(b.id, undefined, {
          numeric: true,
          sensitivity: "base",
        });
      },
    },
  },
};

export default preview;
