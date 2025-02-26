//need router to send user back to homepage when logout
import router from '../router'

import { firebaseApp } from './useFirebase'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

//boolean variable if user is still logged in system
import { useAuth as firebaseAuth } from '@vueuse/firebase/useAuth'

const auth = getAuth(firebaseApp)

const { isAuthenticated, user } = firebaseAuth(auth)

//export values so other files know the status of the user
export const useAuth = () => {
    const login = async (username, password) => {
        await signInWithEmailAndPassword(auth, username, password)
        return isAuthenticated.value
    }

    //redirect user to homepage when logout
    const logout = async () => {
        await signOut(auth)
        router.push({name: 'Home'})
    }

    return{isAuthenticated, user, login, logout}
}