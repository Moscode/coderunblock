interface authUserType{
    uid: string,
    email: string
}

export interface userType{
    authUser: authUserType | null,
    isLoading: boolean
}


export interface AuthUserProviderChildrenType {
    children?: React.ReactNode
    // any props that come into the component
}