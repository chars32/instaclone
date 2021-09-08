import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CreatePost, Home, Notifications, Profile, Search } from '../screens';
import { Ionicons } from '@expo/vector-icons';
import { Image, View, ViewBase } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route, navigation}) => {
        return {
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            switch (route.name) {
              case 'Home':
                return( 
                  <Ionicons 
                    name={`ios-home-${focused ? 'sharp' : 'outline'}`} 
                    size={27} 
                    color="black" />
                )
                case 'Search':
                return( 
                  <Ionicons 
                    name={`ios-search-${focused ? 'sharp' : 'outline'}`} 
                    size={27} 
                    color="black" />
                )
                case 'CreatePost':
                return( 
                  <Ionicons 
                    name={`ios-add-circle-${focused ? 'sharp' : 'outline'}`} 
                    size={27} 
                    color="black" />
                )
                case 'Notifications':
                return( 
                  <Ionicons 
                    name={`ios-heart-${focused ? 'sharp' : 'outline'}`} 
                    size={27} 
                    color="black" />
                )
                case 'Profile':
                  const IMAGE_SIZE = focused ? 23 : 27
                return( 
                  <View
                    style= {{
                    borderWidth: focused ? 1 : 0,
                    borderColor: 'black',
                    borderRadius: IMAGE_SIZE === 23 ? 27 : 23 /2,
                    padding: focused ? 2 : 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  >
                    <Image
                    style = {{
                      width: IMAGE_SIZE,
                      height: IMAGE_SIZE,
                      borderRadius: IMAGE_SIZE/2,
                    }}
                      source={{uri: 'https://animeshelter.com/wp-content/uploads/2020/12/jujutsu-kaisen-episode-9-1431.jpg'}} 
                    />
                  </View>
                )
                break;

                default:
                  break;
            }
          }
        }
      }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="CreatePost" component={CreatePost} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}