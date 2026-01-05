"use client"

import { useState } from "react"
import { JobInput } from "./job-input"
import { generateEmailAction, analyzeJobAction } from "@/app/actions/agent"
import { type JobAnalysis } from "@/lib/llm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export function AgentInterface() {
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [result, setResult] = useState<{
        email: string,
        analysis: JobAnalysis
    } | null>(null)

    // TODO: Fetch real user data from profile
    const mockUser = {
        name: "Alex Developer",
        resume: "Senior Frontend Engineer with 5 years experience in React, Next.js, and TypeScript. Delivered 3 enterprise apps."
    }

    const handleAnalyze = async (jd: string) => {
        setIsAnalyzing(true)
        try {
            // Run parallel AI tasks using Server Actions
            const [email, analysis] = await Promise.all([
                generateEmailAction(jd, mockUser.resume, mockUser.name),
                analyzeJobAction(jd, mockUser.resume)
            ])
            setResult({ email, analysis })
        } catch (error) {
            console.error(error)
            alert("AI Failed to respond. Check console.")
        } finally {
            setIsAnalyzing(false)
        }
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8 p-4">
            <div className="text-center space-y-2">
                <h1 className="text-4xl font-bold tracking-tight">JobFlux Agent</h1>
                <p className="text-muted-foreground">
                    Your AI-powered career assistant. Paste a job description to get started.
                </p>
            </div>

            <JobInput onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />

            {result && (
                <div className="space-y-6">
                    {/* Compatibility Score */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Match Analysis ({result.analysis.matchScore}%)</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">{result.analysis.reasoning}</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-semibold text-green-600">Matching Skills</h4>
                                    <ul className="list-disc pl-4 text-sm">
                                        {result.analysis.matchingSkills.map(s => <li key={s}>{s}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-red-600">Missing / To Learn</h4>
                                    <ul className="list-disc pl-4 text-sm">
                                        {result.analysis.missingSkills.map(s => <li key={s}>{s}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Generated Assets */}
                    <Tabs defaultValue="email">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="email">Cold Email</TabsTrigger>
                            <TabsTrigger value="cover">Cover Letter (Coming Soon)</TabsTrigger>
                        </TabsList>
                        <TabsContent value="email">
                            <Card>
                                <CardContent className="pt-6">
                                    <pre className="whitespace-pre-wrap font-sans text-sm bg-muted p-4 rounded-md">
                                        {result.email}
                                    </pre>
                                    <Button
                                        className="mt-4 w-full"
                                        onClick={() => window.open(`mailto:?body=${encodeURIComponent(result.email)}`)}
                                    >
                                        Open in Mail App
                                    </Button>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            )}
        </div>
    )
}
