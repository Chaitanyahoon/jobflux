import similarity from 'compute-cosine-similarity';

// Mock embedding dimension (e.g. 1536 for OpenAI, but we can use smaller for mock)
const EMBEDDING_DIM = 50;

/**
 * Generates a purely deterministic "fake" embedding based on the input text.
 * This ensures that the same text always produces the same vector.
 * 
 * Logic: Hash the text and seed a pseudo-random generator to create a vector.
 */
export async function generateEmbedding(text: string): Promise<number[]> {
    const vector: number[] = [];
    let hash = 0;

    // Simple hash function
    for (let i = 0; i < text.length; i++) {
        hash = ((hash << 5) - hash) + text.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }

    // Use hash to generate deterministic semi-random numbers
    // This looks like "random noise" but is constant for a given string
    for (let i = 0; i < EMBEDDING_DIM; i++) {
        const value = Math.sin(hash * (i + 1)) * Math.cos(hash / (i + 1));
        vector.push(value);
    }

    return vector;
}

/**
 * Computes the Cosine Similarity between two vectors.
 * Returns a number between -1 and 1.
 */
export function computeSimilarity(vecA: number[], vecB: number[]): number {
    const score = similarity(vecA, vecB);
    return score ?? 0; // Handle null/undefined from library
}
