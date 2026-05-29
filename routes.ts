import type { RouteDefinition } from 'pelelajs'
import { Conversor } from './src/conversor'

export const routes: RouteDefinition[] = [
  { path: '/', component: Conversor },
  { path: '*', component: Conversor },
]
