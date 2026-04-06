import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock de window.__SISO_CONFIG para tests
window.__SISO_CONFIG = {
  sbUrl: "https://test.supabase.co",
  sbKey: "test-key-mock-longer-than-twenty-chars",
};

// Mock de localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, "localStorage", { value: localStorageMock });

// Mock de sessionStorage
const sessionStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, "sessionStorage", { value: sessionStorageMock });

// Silenciar console.error en tests (errores esperados de React)
const originalError = console.error;
console.error = (...args) => {
  if (typeof args[0] === "string" && args[0].includes("act(")) return;
  originalError.call(console, ...args);
};
