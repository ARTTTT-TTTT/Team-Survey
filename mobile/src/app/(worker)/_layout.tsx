import { Image, Text, View } from 'react-native';
import { Tabs } from 'expo-router';

import { icons } from '@constants/index';

interface TabIconProps {
    icon: any;
    color: string;
    name: string;
    focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
    return (
        <View className="top-9 flex items-center justify-center">
            <Image
                source={icon}
                resizeMode="contain"
                style={{ tintColor: color }}
                className="w-14 h-14"
            />
            <Text
                className={`${focused ? 'font-semibold' : 'font-regular'} text-center text-sm w-full`}
                style={{ color }}
            >
                {name}
            </Text>
        </View>
    );
};

export default function WorkerLayout() {
    return (
        <View className="bg-primary h-full">
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: '#463f3a',
                    tabBarInactiveTintColor: '#8a817c',
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#e0afa0',
                        height: 100,
                        borderTopWidth: 1,
                        borderTopColor: '#e0afa0',
                        borderTopRightRadius: 24,
                        borderTopLeftRadius: 24,
                    },
                }}
            >
                <Tabs.Screen
                    name="dashboard"
                    options={{
                        title: 'Dashboard',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="register"
                    options={{
                        title: 'Register',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.userScan}
                                color={color}
                                name="Register"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="status"
                    options={{
                        title: 'Status',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.userCheck}
                                color={color}
                                name="Status"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="setting"
                    options={{
                        title: 'Setting',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.setting}
                                color={color}
                                name="Setting"
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tabs>
        </View>
    );
}