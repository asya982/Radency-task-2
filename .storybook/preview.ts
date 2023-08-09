import type { Preview, StoryFn } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { withRouter } from "storybook-addon-react-router-v6";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators: Array<Function> = [withRouter];
export default preview;
