import * as React from 'react';
import {Drawer} from 'react-native-paper';

export default class DrawerMenu extends React.Component {

    render() {
        return (
            <Drawer.Section>
                <Drawer.Item label="one"/>
                <Drawer.Item label="two"/>
                <Drawer.Item label="three"/>
            </Drawer.Section>
        );
    }
}
