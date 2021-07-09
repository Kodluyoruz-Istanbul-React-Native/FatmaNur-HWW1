import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import Metrics from './constant/Metrics';
import styles from './constant/styles'
import Item from './constant/Item';
const App = props => {
    const [isVisible, setVisible] = useState(false);
    const [name, setName] = useState('');
    const [city, setCityName] = useState('');
    const [nameDisplay, setNameDisplay] = useState('');
    const [cityDisplay, setCityNameDisplay] = useState('');

    const _onPress_ModalBackdrop = () => {
        setVisible(false);
    }
    const _ok = (city, name) => {
        setNameDisplay(name)
        setCityNameDisplay(city)
        setVisible(false)
    }
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
                            <Text style={styles.textBio}>{nameDisplay}</Text>
                            <Text style={styles.textBio}>{cityDisplay}</Text>
                        </View>
                        <View style={styles.edit}>
                            <TouchableOpacity style={styles.editButton}
                                onPress={() => setVisible(true)}>
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
                isVisible={isVisible}
                onBackdropPress={_onPress_ModalBackdrop}
                animationIn='zoomIn'
                animationOut='zoomOut'
            >
                <View
                    style={{
                        height: Metrics.width*0.55,
                        backgroundColor: 'white'
                    }}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalRow}>
                            <Text style={styles.textModal}>Kullanıcı Adı:</Text>
                            <TextInput style={styles.textInputModal}
                                value={name}
                                onChangeText={setName}>
                            </TextInput>
                        </View>
                        <View style={styles.modalRow}>
                            <Text style={styles.textModal}>Şehir:</Text>
                            <TextInput style={styles.textInputModal}
                                value={city}
                                onChangeText={setCityName}>

                            </TextInput>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => {
                            _ok(city, name);
                        }}>
                        <Text style={styles.textClose}>Tamam</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </ScrollView >
    );
};

export default App;

