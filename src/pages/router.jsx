import Layout from 'LAYOUTS/layout'

import Home from 'PAGES/m/home/index'
import MRoute from 'PAGES/m/route'

export const createRoutes = {
  path: '/',
  component: Layout,
  childRoutes: [
    MRoute
  ]
}

console.log(createRoutes);


export default createRoutes
