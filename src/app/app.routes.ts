import { Routes } from '@angular/router';

// Import all feature components

import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Products } from './features/products/products';
import { Services } from './features/services/services';
import { Projects } from './features/projects/projects';

export const routes: Routes = [
  // Default route (Home page)
  { path: '', component: Home},
  
  // Feature routes
  { path: 'about', component: About },
  { path: 'products', component: Products },
  { path: 'services', component: Services },
  { path: 'projects', component: Projects },
  
  // Fallback route for unknown URLs (Redirects to Home)
  { path: '**', redirectTo: '' }
];