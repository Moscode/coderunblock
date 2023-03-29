import { createContext, useState, useEffect, useContext } from 'react'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

import { userType } from '../types/user'
import { AuthUserProviderChildrenType } from '../types/user'


const DefaultAuthUser: userType = {
    authUser: null,
    isLoading: false
}

const AuthUserContext = createContext<userType>(DefaultAuthUser)

const useFirebaseAuth = () =>{
    const [authUser, setAuthUser] = useState<userType['authUser']>(null)
    const [isLoading, setIsLoading] = useState<userType['isLoading']>(true)
    
    const authStateChanged = async (user: any) =>{
        setIsLoading(true)
        if(!user){
            setAuthUser(null)
            setIsLoading(false)
            return;
        }
        setAuthUser({
            uid: user.uid,
            email: user.email
        })
        setIsLoading(false)
    }

    useEffect(() => {
       const unsubscribed = onAuthStateChanged(auth, authStateChanged)
       return () => unsubscribed()
    }, [])

    return({
        authUser,
        isLoading
})
}


export const AuthUserProvider = ({ children }:AuthUserProviderChildrenType) => {
        const auth = useFirebaseAuth()
        return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
}

export const useAuth = useContext(AuthUserContext)