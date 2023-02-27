import { Maths } from '../entities/maths.entity';

/**
 * Identify provider
 */
export const mathsProviders = [
  {
    provide: 'MATHS_REPOSITORY',
    useValue: Maths,
  },
];
