
import { describe, it, expect } from 'vitest'
import { generateEmbedding, computeSimilarity } from './ai'

describe('AI Service (Mock)', () => {
    it('should generate a vector of correct dimension', async () => {
        const text = "Test string";
        const vector = await generateEmbedding(text);
        // Our mock uses 50 dimensions as defined in lib/ai.ts
        expect(vector).toHaveLength(50);
    });

    it('should be deterministic (same input = same vector)', async () => {
        const text = "Hello World";
        const vec1 = await generateEmbedding(text);
        const vec2 = await generateEmbedding(text);
        expect(vec1).toEqual(vec2);
    });

    it('should return different vectors for different inputs', async () => {
        const vec1 = await generateEmbedding("Java");
        const vec2 = await generateEmbedding("Python");
        expect(vec1).not.toEqual(vec2);
    });

    it('should compute similarity correctly', () => {
        const vecA = [1, 0, 0];
        const vecB = [1, 0, 0];
        const score = computeSimilarity(vecA, vecB);
        expect(score).toBeCloseTo(1);

        // Orthogonal vectors
        const vecC = [0, 1, 0];
        const scoreOrthogonal = computeSimilarity(vecA, vecC);
        // Depending on library precision, should be 0
        expect(scoreOrthogonal).toBeCloseTo(0);
    });
});
