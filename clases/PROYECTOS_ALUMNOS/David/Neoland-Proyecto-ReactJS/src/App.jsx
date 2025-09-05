import { Routes, Route } from "react-router";

import './index.css'

import { PageTemplate } from './components/PageTemplate'
import { HomePage } from './pages/home.page'
import { ProductsProvider } from "./context/products.context";
import { DashboardPage } from "./pages/dashboard.page";
import { ContactPage } from "./pages/contact.page";


function App() {

  return (
    <>
      <ProductsProvider>
        <PageTemplate>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageTemplate>
      </ProductsProvider>
    </>
  )
}

export default App
