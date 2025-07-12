/// <reference types="vite/client" />

declare module "remote_react/ReactCounter" {
  import * as React from "react";

  const components: {
    Counter : React.FC;
    // Add other components here if needed
  };

  export default components;
}

declare module "remote_react/reactComponents" {
  import * as React from "react";

  export interface ReactButtonProps {
    label?: string;
    onClick?: () => void;
    disabled?: boolean;
    // Add any other props your button supports
  }

  const components: {
    ReactButton: React.FC<ReactButtonProps>;
    Counter : React.FC;
    // Add other components here if needed
  };

  export default components;
}


declare module "remote_vue/vueComponents"{
  const components : {
    Counter : React.FC<{label?: string}>;
    HelloWorld : React.FC;
  }

  export default components
}