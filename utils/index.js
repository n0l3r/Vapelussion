const Colors = {
    bgDark: '#303841',
    bgHeader: '#3B4651',
    danger: '#F35D5D',
    success: '#11CA6D',
    info: '#43BFE5',
    primary: '#5671F0',
    warning: '#FCC644',
    secondary: '#6C757D',
    pink: '#F672A7',
    blue: '#4A81D4',
    dark: '#323A46',
    foreground: '#37424C',
    light: '#ffffff',
};

const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: '#fff',
    tabBarInactiveTintColor: '#94A0AD',
    tabBarStyle: {
        paddingVertical: 5,
        height: 70,
        backgroundColor: Colors.bgHeader,
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 0,
    }

};

export { Colors, screenOptions }