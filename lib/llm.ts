import { HfInference } from "@huggingface/inference";

// Initialize HuggingFace Client
// Note: Users should ideally provide their own HF_TOKEN in .env for higher rate limits.
// We can default to a shared one or prompt the user.
// For now, if no token is present, it uses the public shared API (rate limited but free).
const hf = new HfInference(process.env.HF_TOKEN);

const MODEL = "mistralai/Mistral-7B-Instruct-v0.2";

export interface JobAnalysis {
    matchScore: number;
    matchingSkills: string[];
    missingSkills: string[];
    reasoning: string;
}

/**
 * Generates a tailored cold email for a specific job.
 */
export async function generateColdEmail(
    jobDescription: string,
    userResume: string,
    userName: string
): Promise<string> {
    const prompt = `
You are an expert career coach and professional copywriter.
Write a concise, high-converting cold email for a job application.

CONTEXT:
Candidate Name: ${userName}
Resume Summary: ${userResume}
Job Description: ${jobDescription}

INSTRUCTIONS:
- Subject Line: Catchy and professional.
- Body: roughly 150 words. Focus on value proposition.
- Tone: Professional, confident, but not arrogant.
- Call to Action: Request a brief chat.

OUTPUT FORMAT:
Subject: [Subject Line]

[Email Body]
  `.trim();

    try {
        const result = await hf.textGeneration({
            model: MODEL,
            inputs: prompt,
            parameters: {
                max_new_tokens: 500,
                temperature: 0.7,
                return_full_text: false,
            },
        });
        return result.generated_text;
    } catch (error) {
        console.error("AI Generation Error:", error);
        return "Error generating email. Please check your network or API token.";
    }
}

/**
 * Analyzes how well a candidate matches a job.
 */
export async function analyzeJobMatch(
    jobDescription: string,
    userResume: string
): Promise<JobAnalysis> {
    const prompt = `
Analyze the match between this candidate and the job.

JOB: ${jobDescription}
CANDIDATE: ${userResume}

Provide the output in strict JSON format:
{
  "matchScore": <number 0-100>,
  "matchingSkills": ["skill1", "skill2"],
  "missingSkills": ["skill3", "skill4"],
  "reasoning": "<short explanation>"
}
  `.trim();

    try {
        const result = await hf.textGeneration({
            model: MODEL,
            inputs: prompt,
            parameters: {
                max_new_tokens: 400,
                temperature: 0.1, // Low temp for structured output
                return_full_text: false,
            },
        });

        // Attempt to parse JSON from the potential markdown output
        const text = result.generated_text;
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("No JSON found in response");

        return JSON.parse(jsonMatch[0]);
    } catch (error) {
        console.error("AI Analysis Error:", error);
        return {
            matchScore: 0,
            matchingSkills: [],
            missingSkills: [],
            reasoning: "Failed to analyze match due to AI error.",
        };
    }
}
