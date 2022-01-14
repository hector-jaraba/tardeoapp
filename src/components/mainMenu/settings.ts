enum menuItems {
  HOME = 'HOME',
  PLANS = 'PLANS',
}

type MenuRecord = {
  [key in menuItems]: string
}

export const menuLabels: MenuRecord = {
  HOME: 'Home',
  PLANS: 'Plans',
}

export const menuIcons: MenuRecord = {
  HOME: 'house',
  PLANS: 'plan',
}

export const menuRoutes: MenuRecord = {
  HOME: '/',
  PLANS: '/plans',
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
