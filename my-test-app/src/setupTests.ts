import '@testing-library/jest-dom/vitest'; 

Object.defineProperty(globalThis, "global", {
  value: globalThis,
  writable: true,
});

// import { afterEach, expect } from 'vitest';
// import { cleanup } from '@testing-library/react';
// import * as matchers from '@testing-library/jest-dom/matchers';

// expect.extend(matchers);
// afterEach(() => cleanup());