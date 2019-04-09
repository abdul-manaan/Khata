import * as React from 'react';
import {Drawer} from 'react-native-paper';

export default class DrawerMenu extends React.Component {

    render() {
        return (
            <Drawer.Section>
                <Drawer.Item label="Fuck You"/>
                <Drawer.Item label="Fuck your Mother"/>
                <Drawer.Item label="Fuck your grand mother"/>
            </Drawer.Section>
        );
    }
}
