export {}; // Ensures this file is treated as a module.

declare global {
  interface CustomError extends Error {
    status?: number;
  }
}
