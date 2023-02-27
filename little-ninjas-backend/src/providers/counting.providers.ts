import { Counting } from '../entities/counting.entity';

/**
 * Identify provider
 */
export const countingProviders = [
  {
    provide: 'COUNTING_REPOSITORY',
    useValue: Counting,
  },
];
