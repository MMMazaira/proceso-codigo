// En la vista previa, la ruta actual la fija render.tsx antes de renderizar cada página.
export function usePathname(): string {
  return ((globalThis as Record<string, unknown>).__PREVIEW_PATH__ as string) ?? "/";
}
