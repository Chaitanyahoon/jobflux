"use server"

import { generateColdEmail, analyzeJobMatch, type JobAnalysis } from "@/lib/llm"

export async function generateEmailAction(jd: string, resume: string, name: string) {
    return await generateColdEmail(jd, resume, name)
}

export async function analyzeJobAction(jd: string, resume: string) {
    return await analyzeJobMatch(jd, resume)
}
