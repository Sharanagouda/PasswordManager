import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#455a64',
        flex: 1,
    },
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row',
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16,
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500',
    },
    button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
    },
    errorText: {
        color: '#ffffff',
        fontSize: 14,
        paddingHorizontal: 16,
        paddingBottom: 8,
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
    },
});


export default styles;