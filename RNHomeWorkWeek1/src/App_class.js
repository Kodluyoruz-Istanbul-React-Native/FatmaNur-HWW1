import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import Metrics from './constant/Metrics';
import styles from './constant/styles'
import Item from './constant/Item';

class App extends Component {

    constructor(props) {
        super(props);
        // Burada this.setState()'i çağırmayınız!
        this.state = {
            isVisible: false,
            name: '',
            city: '',
            nameDisplay: '',
            cityDisplay: '',
        };
    }

    _onPress_ModalBackdrop = () => {
        this.setState({ isVisible: false })
    }
    _ok = (city, name) => {
        this.setState({ nameDisplay: name })
        this.setState({ cityDisplay: city })
        this.setState({ isVisible: false })
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
                <View style={styles.profile}>
                    <View style={styles.highProfile}>
                        <View style={styles.profileNameBar}>
                            <TouchableOpacity>
                                <Text style={styles.textName}>* FatmaNurAfyoncu</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Text style={styles.texticon}>icon</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.texticon}>icon</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.profileInfo}>
                            <View style={styles.İmageContainer}>
                                <View style={styles.imageView}>
                                    <Image style={styles.imageCirle}
                                        source={require('./user.png')} />
                                </View>
                                <View style={styles.followersInfo}>
                                    <Text style={styles.textInfo}>500</Text>
                                    <Text style={styles.textInfo}>500</Text>
                                    <Text style={styles.textInfo}>500</Text>
                                </View>

                            </View>
                            <View style={styles.linkinBio}>
                                <Text style={styles.textBio}>{this.state.nameDisplay}</Text>
                                <Text style={styles.textBio}>{this.state.cityDisplay}</Text>
                            </View>
                            <View style={styles.edit}>
                                <TouchableOpacity style={styles.editButton}
                                    onPress={() => this.setState({
                                        isVisible: true
                                    })}>
                                    <Text style={styles.textEdit} >Profili Düzenle</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.dummyButton}>
                                    <Text style={styles.textEdit}>&gt;</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.lowProfile}>
                        <ScrollView

                            horizontal={true}
                            contentContainerStyle={styles.ScrollViewH}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={200}
                            decelerationRate="fast"
                            pagingEnabled
                        >
                            <Item
                                name='öne '></Item>
                            <Item name=' çıkan'></Item>
                            <Item name='öne çıkan'></Item>
                            <Item name='öne çıkan'></Item>
                            <Item name='öne çıkan'></Item>
                            <Item name='öne çıkan'></Item>
                            <Item name='öne çıkan'></Item>
                            <Item name='öne çıkan'></Item>
                            <Item name='öne çıkan'></Item>
                        </ScrollView>

                    </View>
                </View>
                <View style={styles.photos}>
                    <Text style={{ alignSelf: 'center', fontSize: Metrics.width * 0.09 }}> Burası Yetişmedi :&#40;</Text>
                </View>

                <Modal
                    isVisible={this.state.isVisible}
                    onBackdropPress={this._onPress_ModalBackdrop}
                    animationIn='zoomIn'
                    animationOut='zoomOut'
                >
                    <View
                        style={{
                            height: Metrics.width * 0.55,
                            backgroundColor: 'white'
                        }}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalRow}>
                                <Text style={styles.textModal}>Kullanıcı Adı:</Text>
                                <TextInput style={styles.textInputModal}
                                value={this.state.name}
                                onChangeText={(name)=>this.setState({name})}
                                >
                                </TextInput>
                            </View>
                            <View style={styles.modalRow}>
                                <Text style={styles.textModal}>Şehir:</Text>
                                <TextInput style={styles.textInputModal}
                                value={this.state.city}
                                onChangeText={(city)=>this.setState({city})}
                                >

                                </TextInput>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => {
                               this._ok(this.state.city, this.state.name);
                            }}>
                            <Text style={styles.textClose}>Tamam</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </ScrollView >);
    };

};

export default App;

