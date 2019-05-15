import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {Icon} from 'react-native-elements'
import {CurrentUser, profileName} from './data';


export default class HbMenu extends React.Component {
    navLink(nav, text) {
        return (
            <TouchableOpacity style={{height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroller}>
                    <View style={styles.topLinks}>
                        <View style={styles.profile}>
                            <View style={styles.imgView}>
                                <Image style={styles.img} source={require('../assets/profile.jpg')}/>
                            </View>
                            <View style={styles.profileText}>
                                <Text style={styles.name}>{CurrentUser['profile']['name']}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomLinks}>
                        <View style={styles.sideLink}>
                            <Icon name='home' color='#aa2200' size={35}/>
                            <Text style={{color: 'white'}}>ll</Text>
                            {this.navLink('Home', 'Home')}
                        </View>
                        <View style={styles.sideLink}>
                            <Icon name='notifications' color='#aa2200' size={35}/>
                            <Text style={{color: 'white'}}>ll</Text>
                            {this.navLink('Notification', 'Notifications')}
                        </View>
                        <View style={styles.sideLink}>
                            <Icon name='person' color='#aa2200' size={35}/>
                            <Text style={{color: 'white'}}>ll</Text>
                            {this.navLink('Profile', 'Profile')}
                        </View>
                        <View style={styles.sideLink}>
                            <Icon name='add-a-photo' color='#aa2200' size={35}/>
                            <Text style={{color: 'white'}}>ll</Text>
                            {this.navLink('ScanQR', 'Scan QR Code')}
                        </View>
                        <View style={styles.sideLink}>
                            <Icon name='ac-unit' color='#aa2200' size={35}/>
                            <Text style={{color: 'white'}}>ll</Text>
                            {this.navLink('QR', 'Generate QR Code')}
                        </View>
                        <View style={styles.sideLink}>
                            <Icon name='ac-unit' color='#aa2200' size={35}/>
                            <Text style={{color: 'white'}}>ll</Text>
                            {this.navLink('DebitCreditScreen', 'Debit/Credit')}
                        </View>

                        {/*<View style={styles.sideLink}>*/}
                        {/*    <Icon name='ac-unit' color='#aa2200' size={35}/>*/}
                        {/*    <Text style={{color: 'white'}}>ll</Text>*/}
                        {/*    {this.navLink('newTransactions', 'Create a Transaction')}*/}
                        {/*</View>*/}
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={styles.description}>Khata </Text>
                    <Text style={styles.version}>v1.0</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
    scroller: {
        flex: 1,
    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#777777',
    },
    profileText: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        paddingBottom: 5,
        marginLeft: 20,
        color: 'white',
        textAlign: 'left',
    },
    imgView: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    img: {
        height: 90,
        width: 90,
        borderRadius: 50,
    },
    topLinks: {
        height: 160,
        backgroundColor: '#aa2200',
    },
    bottomLinks: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 0,
        paddingBottom: 450,
    },
    link: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left',
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: 'lightgray'
    },
    version: {
        flex: 1,
        textAlign: 'right',
        marginRight: 20,
        color: 'gray'
    },
    description: {
        flex: 1,
        marginLeft: 20,
        fontSize: 16,
    },
    sideLink: {
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
    }
});
