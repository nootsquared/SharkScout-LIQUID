import { Link, Tabs } from 'expo-router'
import { Button, useTheme, H5 } from 'tamagui'
import { Home, TerminalSquare, ClipboardPenLine } from '@tamagui/lucide-icons'

export default function TabLayout() {
  const theme = useTheme()

  const fontFamily = H5.staticConfig?.defaultProps?.fontFamily || 'default-font-family'
  const fontSize = H5.staticConfig?.defaultProps?.fontSize || 16

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.red10.val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
        },
        headerStyle: {
          backgroundColor: theme.background.val,
          borderBottomColor: theme.borderColor.val,
        },
        headerTintColor: theme.color.val,
        headerTitleAlign: 'center', // Center the title on the X-axis
        headerTitleStyle: {
          fontFamily,
          fontSize,
          fontWeight: 'bold', // Make the font bold
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="match-scouting"
        options={{
          title: 'Match Scouting',
          tabBarIcon: ({ color }) => <ClipboardPenLine color={color} />,
        }}
      />
      <Tabs.Screen
        name="terminal-panel"
        options={{
          title: 'Terminal Panel',
          tabBarIcon: ({ color }) => <TerminalSquare color={color} />,
        }}
      />
      <Tabs.Screen
        name="match-scouting-auton"
        options={{
          title: 'Auton Scouting Screen',
          href: null,
        }}
      />
      <Tabs.Screen
        name="match-scouting-tele"
        options={{
          title: 'Teleop Scouting Screen',
          href: null,
        }}
      />
      <Tabs.Screen
        name="match-scouting-end"
        options={{
          title: 'Endgame Scouting Screen',
          href: null,
        }}
      />
    </Tabs>
  )
}