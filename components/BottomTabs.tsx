import React from 'react'
import {
  BottomNavigation,
  BottomNavigationTab,
  BottomNavigationTabElement,
  Divider,
  Icon,
  Layout,
} from '@ui-kitten/components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Routes } from '../constants/AppRoutes'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import { StackScreenProps } from '@react-navigation/stack'
import {
  ParamListBase,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native'

const Tab1Icon = (props: any) => <Icon {...props} name="bulb" />
const Tab2Icon = (props: any) => <Icon {...props} name="star" />

const BottomTab = createBottomTabNavigator()

const BottomTabs = ({
  navigation,
  route,
}: StackScreenProps<ParamListBase, string>): React.ReactElement => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? Routes.TAB1

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: routeName,
    })
  }, [navigation, routeName])

  return (
    <BottomTab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <BottomTab.Screen
        name={Routes.TAB1}
        component={Tab1}
        options={{ title: 'TAB1', tabBarIcon: Tab1Icon }}
      />
      <BottomTab.Screen
        name={Routes.TAB2}
        component={Tab2}
        options={{ title: 'TAB2', tabBarIcon: Tab2Icon }}
      />
    </BottomTab.Navigator>
  )
}

const BottomTabBar = (props: any): React.ReactElement => {
  const onSelect = (index: number): void => {
    const selectedTabRoute: string = props.state.routeNames[index]
    props.navigation.navigate(selectedTabRoute)
  }

  const createNavigationTabForRoute = (
    route: any
  ): BottomNavigationTabElement => {
    const { options } = props.descriptors[route.key]
    return (
      <BottomNavigationTab
        key={route.key}
        title={options.title}
        icon={options.tabBarIcon}
      />
    )
  }

  return (
    <Layout level="2">
      <Divider />
      <BottomNavigation
        appearance="noIndicator"
        selectedIndex={props.state.index}
        onSelect={onSelect}
      >
        {props.state.routes.map(createNavigationTabForRoute)}
      </BottomNavigation>
    </Layout>
  )
}

export default BottomTabs
