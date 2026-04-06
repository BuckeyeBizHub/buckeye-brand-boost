/// <reference types="vite/client" />

interface Window {
  tidioChatApi?: {
    display: (show: boolean) => void;
    open: () => void;
    close: () => void;
  };
}
