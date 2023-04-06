
export interface LoginSchema {
    email: string;
    password: string;
    isLoading: boolean,
    error: ErrorFields,
}

export interface ErrorFields {
    email: string;
    password: string;
}

export interface UserData {
    email: string;
    password: string
}

export interface ErrorPayload {
    field: keyof ErrorFields;
    message: string
}

