import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'

const Tab1 = (): React.ReactElement => (
  <Layout level="2" style={styles.container}>
    <Text>Tab 1</Text>
  </Layout>
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
  },
})
export default Tab1
