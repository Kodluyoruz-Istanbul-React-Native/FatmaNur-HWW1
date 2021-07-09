import { StyleSheet } from 'react-native';
import Metrics from './Metrics';

export default StyleSheet.create({

    profile: {
        flexDirection: 'column',
        height: Metrics.width * 1,

    },
    textName: {
        paddingLeft: Metrics.width * 0.05,
        flexDirection: 'row',
        fontSize: Metrics.width * 0.05,
        justifyContent: 'flex-start',
        fontWeight: 'bold'
    },
    texticon: {
        paddingHorizontal: Metrics.width * 0.03,
        flexDirection: 'row',
        fontSize: Metrics.width * 0.05,
        justifyContent: 'flex-end',
        fontWeight: 'bold',

    },
    textInfo: {
        fontSize: Metrics.width * 0.05,
        fontWeight: 'bold',
    },
    photos: {
        flex: 0.5,

    },
    highProfile: {
        flex: 0.6,
        // height: 30,
        flexDirection: 'column',

    },
    profileNameBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 0.25,
    },
    profileInfo: {
        flexDirection: 'column',
        flexGrow: 1
    },
    İmageContainer: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',

    },
    imageView: {
        borderWidth: 1,
        borderRadius: 1000,
        height: Metrics.width * 0.25,
        width: Metrics.width * 0.25,
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageCirle: {
        width: Metrics.width * 0.3,
        height: Metrics.width * 0.3
    },
    followersInfo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexGrow: 0.7,
    },
    linkinBio: {
        paddingHorizontal: Metrics.width * 0.1,
        paddingBottom: Metrics.width * 0.01,
    },
    textBio: {
        fontSize: Metrics.width * 0.04,
    },
    edit: {
        flex: 0.2,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: Metrics.width * 0.04,
        
    },
    editButton: {
        borderWidth: 1,
        height: Metrics.width * 0.09,
        justifyContent: 'center',
        flex: 0.8,
        alignItems: 'center',
        borderRadius: Metrics.width * 0.02,

    },
    dummyButton: {
        borderWidth: 1,
        height: Metrics.width * 0.09,
        justifyContent: 'center',
        flex: 0.1,
        alignItems: 'center',
        borderRadius: Metrics.width * 0.02
    },
    textEdit: {
        fontSize: Metrics.width * 0.04,
        fontWeight: '900'
    },
    modalContainer: {
        width: Metrics.width * 0.9,
        height: Metrics.width * 0.4,
        justifyContent: 'space-evenly',

    },
    modalRow: {
        flex: 0.2,
        flexDirection: 'row',
        marginVertical: Metrics.width * 0.01,
        paddingHorizontal: Metrics.width * 0.03
    },
    textModal: {
        fontSize: Metrics.width * 0.05,
        flex: 0.4
    },
    textClose: {
        fontSize: Metrics.width * 0.04,
    },
    textInputModal: {
        borderWidth: 1,
        width: Metrics.width * 0.4,
        height: Metrics.width * 0.1,
        flex: 0.6, alignSelf: 'center',
        borderRadius: Metrics.width * 0.02
    },
    closeButton: {
        width: Metrics.width * 0.52,
        borderWidth: 1,
        height: Metrics.width * 0.1,
        alignSelf: 'flex-end',
        marginRight: Metrics.width * 0.03,
        borderRadius: Metrics.width * 0.02,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3f0d1',
    },
    ScrollViewH:{
    marginTop: Metrics.width * 0.03,
    marginHorizontal: Metrics.width * 0.03
    },
    lowProfile: {
        flex: 0.4,

    }


});
