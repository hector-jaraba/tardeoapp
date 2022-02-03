enum menuItems {
  HOME = 'HOME',
  FAVORITES = 'FAVORITES',
  NEW_PLAN = 'NEW_PLAN',
  MESSAGES = 'MESSAGES',
  PROFILE = 'PROFILE',
}

type MenuRecord = {
  [key in menuItems]: string
}

export const menuLabels: MenuRecord = {
  HOME: 'Home',
  FAVORITES: 'Favorites',
  NEW_PLAN: 'New Plan',
  MESSAGES: 'Messages',
  PROFILE: 'Profile',
}

export const menuIcons: MenuRecord = {
  HOME: 'house',
  FAVORITES: 'heart',
  NEW_PLAN: 'add',
  MESSAGES: 'envelope',
  PROFILE: 'user',
}

export const menuRoutes: MenuRecord = {
  HOME: '/',
  FAVORITES: '/favorites',
  NEW_PLAN: '/new_plan',
  MESSAGES: '/messages',
  PROFILE: '/profile',
}

const createMenuItem = (index: menuItems) => ({
  id: `MENU_${index}}`,
  label: menuLabels[index],
  icon: menuIcons[index],
  route: menuRoutes[index],
})

export const menuListItems = Object.keys(menuItems).map((item) =>
  createMenuItem(item as menuItems)
)
