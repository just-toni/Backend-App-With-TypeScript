export interface User {
    email: string
    username: string
    password: string
    otp?: number
}

export const users: User[] = []
