import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/userPages/home"
import Login from "./pages/userPages/login"
import Register from "./pages/userPages/register"
import Products from "./pages/userPages/products"
import Product from "./pages/userPages/product"
import Cart from "./pages/userPages/cart"
import Purchase from "./pages/userPages/purchase"

import AdminHome from "./pages/adminPanel/home"
import Inventory from "./pages/adminPanel/inventory"
import Admin from "./pages/adminPanel/admin"
import Clients from "./pages/adminPanel/clients"
import Commandes from "./pages/adminPanel/commandes"
import Sales from "./pages/adminPanel/sales"
import Stats from "./pages/adminPanel/stats"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" >

        <ColorModeSwitcher justifySelf="flex-end" />
        <Routes>
          {/*  user routes  */}
          <Route path='/' element={Home()}/>
          <Route path='/login' element={Login()}/>
          <Route path='/register' element={Register()} />
          <Route path='/products' element={Products()} />
          <Route path='/product:id' element={Product()} />
          <Route path='/cart' element={Cart()} />
          <Route path='/purchase' element={Purchase()} />


          <Route path='/admin' element={Admin()} />
          <Route path='/admin/welcome' element={AdminHome()} />
          <Route path='/admin/inventory' element={Inventory()} />
          <Route path='/admin/inventory' element={Clients()} />
          <Route path='/admin/commandes' element={Commandes()} />
          <Route path='/admin/sales' element={Sales()} />
          <Route path='/admin/stats' element={Stats()} />


          {/* protected routes */}
          

        </Routes>
      </Grid>
    </Box>
  </ChakraProvider>
)
