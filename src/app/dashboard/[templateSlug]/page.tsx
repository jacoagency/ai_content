"use client";

import { Button } from "@/components/ui/button";
import { contentTemplates } from "@/lib/content-template";
import React, { useState, useEffect } from "react";
import { Editor } from "./_components/editor";
import { getChatSession } from "@/lib/gemini-ai";
import { Loader } from "lucide-react";

interface TemplateSlugPageProps {
  templateSlug: string;
}

const TemplatePage = ({ params }: { params: TemplateSlugPageProps }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");

  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === params.templateSlug
  );

  const generateAIContent = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const dataSet = {
        title: formData.get("title"),
        description: formData.get("description"),
      };

      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAIPrompt = JSON.stringify(dataSet) + ", " + selectedPrompt;

      console.log("Sending prompt to AI:", finalAIPrompt);
      const chatSession = getChatSession(); // Get a new chat session for each request

      const result = await chatSession.sendMessage(finalAIPrompt);
      setAiOutput(result.response.text());
    } catch (error) {
      console.error("Error generating AI content:", error);
      if (error instanceof Error) {
        setAiOutput(
          `An error occurred while generating content. Error: ${error.message}`
        );
        console.error("Full error object:", JSON.stringify(error, null, 2));
      } else {
        setAiOutput("An unknown error occurred while generating content.");
        console.error("Unknown error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("Form data:", Object.fromEntries(formData)); // Add this line
    await generateAIContent(formData);
  };

  useEffect(() => {
    console.log("API Key available:", !!process.env.NEXT_PUBLIC_GEMINI_API_KEY);
  }, []);

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white rounded">
        <h2 className="font-medium">{selectedTemplate?.name}</h2>
        <p>{selectedTemplate?.desc}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 p-5 mt-5 bg-white">
          {selectedTemplate?.form?.map((form) => (
            <div key={form.name}>
              <label>{form.label}</label>
              {form.field === "input" ? (
                <div className="mt-5">
                  <input name="title" />
                </div>
              ) : (
                <div className="mt-5">
                  <textarea name="description" />
                </div>
              )}
            </div>
          ))}
          <Button className="mt-5" type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader className="animate-spin" />
            ) : (
              "Generate Content"
            )}
          </Button>
        </div>
      </form>
      <div className="my-10">
        <Editor value={aiOutput} />
      </div>
    </div>
  );
};

export default TemplatePage;
