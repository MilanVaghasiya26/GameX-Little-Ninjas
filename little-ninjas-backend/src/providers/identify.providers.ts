import { Identify } from '../entities/identify.entity';

/**
 * Identify provider
 */
export const identifyProviders = [
  {
    provide: 'IDENTIFY_REPOSITORY',
    useValue: Identify,
  },
];
