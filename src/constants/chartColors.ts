/**
 * Recharts needs real color strings, not Tailwind classes — keep these in
 * sync by hand with the `@theme` tokens in `src/styles.css`.
 */
export const CHART_COLORS = {
  duelist: '#e1362e',
  gold: '#f0b23c',
  line: '#262b36',
  panel2: '#1b1f29',
  textDim: '#8a93a3',
} as const
