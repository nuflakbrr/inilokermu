import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { AntDesign, Feather } from "@expo/vector-icons";

interface IconProps {
  [key: string]: any;
}

const TabBar = ({ state, descriptors, navigation }: any) => {
  const primaryColor = '#0891b2';
  const greyColor = '#737373';

  const icons = {
    index: (props: IconProps): JSX.Element => <AntDesign name="home" size={26} {...props} />,
    search: (props: IconProps): JSX.Element => <Feather name="compass" size={26} {...props} />, // Updated to match 'search'
    appInfo: (props: IconProps): JSX.Element => <AntDesign name="infocirlce" size={26} {...props} />
  }

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        if (['_sitemap', '+not-found'].includes(route.name)) return null; // Ensure 'search' is included here

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        if (route.name === 'search/index') {
          return (
            <TouchableOpacity
              key={route.name}
              style={styles.tabbarItem}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              {icons.search({ color: isFocused ? primaryColor : greyColor })}
              <Text style={{
                color: isFocused ? primaryColor : greyColor,
                fontSize: 11
              }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabbarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {
              icons[route.name as keyof typeof icons] ? (
                icons[route.name as keyof typeof icons]({
                  color: isFocused ? primaryColor : greyColor
                })
              ) : (
                <AntDesign name="questioncircleo" size={26} color={isFocused ? primaryColor : greyColor} />
              )
            }
            <Text style={{
              color: isFocused ? primaryColor : greyColor,
              fontSize: 11
            }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1
  },
  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default TabBar