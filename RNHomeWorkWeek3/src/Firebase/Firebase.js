import createFBAuth from "@react-native-firebase/auth";
import database from '@react-native-firebase/database';
import { useSelector } from "react-redux";
import { userSelector } from "../Redux/UserRedux";
import { convertedData } from "./ConvertedData";



const auth = createFBAuth();

export const signUp = async (email, password) => {
    // console.log('in signUp function')
    return await auth.createUserWithEmailAndPassword(email, password);
};

export const signIn = async (email, password) => {
    // console.log('in signIn function')

    return await auth.signInWithEmailAndPassword(email, password);
}

export const signOut = async () => {
    return await auth.signOut();
}


export const sendMessage = async (uid,{ name, message }) => {
console.log(uid,name,message)
    const newReference = database().ref(`/users/${uid}`).push();
    newReference
        .set({
            to: name,
            message: message
        })
        .then(() => console.log('Data set.'));
}

export const getMessages = async (uid) => {


    //  await database()
    //     .ref(`/users/${uid}/`)
    //     .on('value', snapshot => {
    //         console.log('User data: ', snapshot.val());
    //     });



}

