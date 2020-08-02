export enum Routes {
  HOME = 'Home',
  TAB1 = 'Tab1',
  TAB2 = 'Tab2',
}

export const linking = {
  prefixes: ['https://ui-kitten.template', 'ui-kitten://'],
  config: {
    screens: {
      [Routes.HOME]: {
        screens: {
          [Routes.TAB1]: {
            path: 'tab1',
          },
          [Routes.TAB2]: {
            path: 'tab2',
          },
        },
      },
    },
  },
}
