import { NavigatorConatiner } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from '../screens/cadastro';
import ListaUsuarios from '../screens/listaUsuarios';
import Login from '../screens/login';

const Stack = createNativeStackNavigator = ();

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Cadastro'
                    component={Cadastro}
                />

                <Stack.Screen
                    name='listarUsuarios'
                    component={ListaUsuarios}
                    options={{title: 'Usuários'}}
                />

                <Stack.Screen
                    name='Login'
                    component={Login}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}