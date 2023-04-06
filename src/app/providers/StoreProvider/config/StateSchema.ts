import { LoginSchema } from 'features/AuthByEmail';
import { UserSchema } from 'entities/User';

export interface StateSchema {
    login: LoginSchema;
    user: UserSchema;
}