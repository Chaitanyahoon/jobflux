"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface JobInputProps {
    onAnalyze: (jobDescription: string) => void
    isAnalyzing: boolean
}

export function JobInput({ onAnalyze, isAnalyzing }: JobInputProps) {
    const [jd, setJd] = useState("")

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Job Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <Textarea
                    placeholder="Paste the Job Description here..."
                    className="min-h-[200px]"
                    value={jd}
                    onChange={(e) => setJd(e.target.value)}
                />
                <Button
                    onClick={() => onAnalyze(jd)}
                    disabled={!jd.trim() || isAnalyzing}
                    className="w-full"
                >
                    {isAnalyzing ? "Analyzing..." : "Analyze & Generate Application"}
                </Button>
            </CardContent>
        </Card>
    )
}
