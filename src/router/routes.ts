export default [
  {
    name: 'home',
    path: '/',
    private: true,
    forGuests: false
  },

  {
    name: 'about',
    path: '/about'
  },

  {
    name: 'profile',
    path: '/profile',
    private: true
  },

  {
    name: 'game',
    path: '/game',
    private: true
  },

  {
    name: 'auth',
    path: '/auth',
    forGuests: true
  },

  {
    name: '@@router5/UNKNOWN_ROUTE',
    path: '/404'
  }
]
