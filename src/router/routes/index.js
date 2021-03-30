

// ** Routes Imports
import AdminRoutes from './admin-routes'
import managerRoutes from './manager-routes'
import OtherRoutes from './other-routes'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'


// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [  
  ...AdminRoutes,
  ...managerRoutes,
  ...OtherRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
