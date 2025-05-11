// User profile
export interface Resource {
    id: string,
    name: string,
    version: string[],
    additionDate: string,
    lastUpdate: string,
    editPermission: {
        type: string,
        authors: string[]
    }
}

export interface User{
    username: string,
    email: string,
    resources: Resource[],
    sharedResources: Resource[],
    is_superuser: boolean,
    requests_count: number
}


// User requests
export interface UserRequestData{
    type: string,
    completed: boolean,
    accepted: boolean,
    username: string,
    requestId: string
    resourceId: string

}
export interface UserRequests{
    requests: {
        received: UserRequestData[]
        sent: UserRequestData[]
    }
}