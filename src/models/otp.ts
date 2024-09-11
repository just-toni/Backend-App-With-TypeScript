export interface OTP {
    email: string
    code: string
    readonly created_at: Date
    expires_at: Date
}