import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { RootLayout } from '@/components/layout/RootLayout'
import { HomePage } from '@/routes/HomePage'

export interface HomeSearch {
  /** Hero id whose Loadout Showdown modal is open, if any. Shareable via URL. */
  hero?: string
}

const rootRoute = createRootRoute({
  component: RootLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  validateSearch: (search: Record<string, unknown>): HomeSearch => ({
    hero: typeof search.hero === 'string' ? search.hero : undefined,
  }),
  component: HomePage,
})

// Adding a new page later (e.g. a dedicated /patch-notes route) means
// creating a route here and adding it to addChildren below.
const routeTree = rootRoute.addChildren([indexRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
