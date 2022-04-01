import React from 'react'
import { useRoute } from 'react-router5'

// layouts
import DefaultLayout from './layouts/default'
import SimpleLayout from './layouts/simple'
import CleanLayout from './layouts/clean'

// App pages
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ProfilePage from './pages/profile'
import GamePage from './pages/game'
import AuthPage from './pages/auth'
import NotFoundPage from './pages/not-found'

// App components
import Loader from './components/loader'
import ModalController from './components/modals/controller'

const SIMPLE_LAYOUT_PAGES = ['auth', '@@router5/UNKNOWN_ROUTE']
const CLEAN_LAYOUT_PAGES = ['game']

function App () {
  const { route } = useRoute()

  function PageSwitcher () {
    switch (route.name) {
      case 'home':
        return <HomePage />
      case 'about':
        return <AboutPage />
      case 'profile':
        return <ProfilePage />
      case 'game':
        return <GamePage />
      case 'auth':
        return <AuthPage />
      default:
        return <NotFoundPage />
    }
  }

  return (
    <>{route
      ? <div className="app">
        <ModalController/>

        {CLEAN_LAYOUT_PAGES.includes(route.name)
          ? <CleanLayout>
          <PageSwitcher/>
        </CleanLayout>
          : SIMPLE_LAYOUT_PAGES.includes(route.name)
            ? <SimpleLayout>
            <PageSwitcher/>
          </SimpleLayout>
            : <DefaultLayout>
            <PageSwitcher/>
          </DefaultLayout>}
      </div>
      : <Loader /> }</>
  )
}

export default App
