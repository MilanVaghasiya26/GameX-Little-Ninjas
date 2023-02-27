import { Users } from "../entities/user.entity";

/**
 * Users provider
 */
export const usersProviders = [
    {
        provide: 'USER_REPOSITORY',
        useValue: Users,
    },
];
