
import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('Utils', () => {
    it('should merge class names correctly', () => {
        const result = cn('c-red', 'c-bold');
        expect(result).toBe('c-red c-bold');
    });

    it('should resolve tailwind conflicts', () => {
        // p-4 should override p-2
        const result = cn('p-2', 'p-4');
        expect(result).toBe('p-4');
    });

    it('should handle conditional classes', () => {
        const result = cn('base', true && 'active', false && 'hidden');
        expect(result).toBe('base active');
    });
});
