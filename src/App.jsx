import { Outlet, useLocation } from 'react-router-dom'
import Nav from './components/nav'
import Footer from './components/footer'
import logoSVG from './assets/img/logo.svg'
import './assets/css/app.css'

export default function App() {
  const location = useLocation()

  return (
    <>
      <Nav logo={logoSVG} active={location.pathname}/>
      <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}