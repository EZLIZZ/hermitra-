"use client";

import React, { useState } from "react";
import axios from "axios";
import {
  Upload,
  Camera,
  FileImage,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UltrasoundDetection() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    prediction: string;
    confidence: string;
    recommendations: string[];
  } | null>(null);
  const [error, setError] = useState<string>("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setUploadedFile(file);
        setAnalysisResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!uploadedFile) {
      alert("No image uploaded.");
      return;
    }

    setIsAnalyzing(true);
    setAnalysisResult(null);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", uploadedFile);

      const response = await axios.post(
        "http://localhost:4000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      let recommendations: string[] = [];

      if (response.data.prediction === "Cyst detected") {
        recommendations = [
          "Consult a gynecologist for further evaluation.",
          "Monitor ovarian health regularly.",
          "Maintain a balanced diet and exercise.",
        ];
      } else {
        recommendations = [
          "No immediate concerns, but maintain regular checkups.",
          "Maintain a healthy lifestyle.",
          "Track your menstrual cycle for any changes.",
        ];
      }

      setAnalysisResult({
        prediction: response.data.prediction,
        confidence: response.data.confidence,
        recommendations,
      });
    } catch (err: any) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          "An error occurred while analyzing the image."
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10"
    style={{
    backgroundImage: `url('/photos/bg2.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            AI Ultrasound Detection
          </h1>
          <p className="text-gray-600">
            Upload your ultrasound image for AI-powered PCOS detection analysis
          </p>
        </div>

        {!uploadedImage && (
          <div className="bg-white rounded-xl p-8 shadow mb-10">
            <div className="text-center">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 hover:border-pink-400 transition-colors">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-gray-100 rounded-full p-5">
                    <Upload className="w-10 h-10 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Upload Ultrasound Image
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Drag and drop your ultrasound image here, or click to
                      browse
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="bg-pink-600 text-white px-6 py-2 rounded-md cursor-pointer hover:bg-pink-700 transition-all inline-flex items-center space-x-2"
                    >
                      <Camera className="w-5 h-5" />
                      <span>Choose Image</span>
                    </label>
                  </div>
                  <p className="text-xs text-gray-400">
                    Supported formats: JPG, PNG, GIF (Max size: 10MB)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {uploadedImage && (
          <div className="bg-white rounded-xl p-8 shadow mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                  <FileImage className="w-5 h-5 text-pink-600" />
                  <span>Uploaded Image</span>
                </h3>
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <img
                    src={uploadedImage || "/placeholder.svg"}
                    alt="Uploaded ultrasound"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="mt-4 flex space-x-4">
                  <Button
                    onClick={() => {
                      setUploadedImage(null);
                      setUploadedFile(null);
                      setAnalysisResult(null);
                    }}
                    className="text-gray-700 border-gray-300 hover:bg-gray-100 transition-colors"
                    variant="outline"
                  >
                    Upload Different Image
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  AI Analysis
                </h3>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm mb-4">
                    {error}
                  </div>
                )}

                {!analysisResult && !isAnalyzing && (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-6">
                      Ready to analyze your ultrasound image for PCOS indicators
                    </p>
                    <button
                      onClick={analyzeImage}
                      className="bg-pink-600 text-white px-8 py-3 rounded-md hover:bg-pink-700 transition-all"
                    >
                      Start Analysis
                    </button>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Analyzing image...</p>
                    <p className="text-xs text-gray-400 mt-2">
                      This may take a few moments
                    </p>
                  </div>
                )}

                {analysisResult && (
                  <div className="space-y-6">
                    <div className="p-4 rounded-md bg-gray-50 border border-gray-200">
                      <div className="flex items-center space-x-2 mb-2">
                        {analysisResult.prediction === "Cyst detected" ? (
                          <AlertCircle className="w-5 h-5 text-yellow-600" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        )}
                        <h4 className="font-semibold text-gray-800">
                          {analysisResult.prediction}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-700">
                        Confidence: {analysisResult.confidence}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Recommendations:
                      </h4>
                      <ul className="space-y-2">
                        {analysisResult.recommendations.map((rec, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                            <span className="text-gray-700">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl p-8 shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            About Ultrasound Detection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                How It Works
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AI analyzes ultrasound images for PCOS markers</li>
                <li>• Detects polycystic ovary patterns</li>
                <li>• Provides confidence scores and recommendations</li>
                <li>• Helps identify when to seek medical consultation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Best Practices
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use clear, high-quality ultrasound images</li>
                <li>• Ensure proper lighting and contrast</li>
                <li>• Include relevant anatomical markers</li>
                <li>• Always follow up with healthcare providers</li>
              </ul>
            </div>
            <div className="col-span-2 bg-gray-50 border border-gray-200 p-4 rounded-md mt-4">
              <p className="text-gray-700 text-sm">
                <strong>Important:</strong> This AI analysis is for
                informational purposes only and should not replace professional
                medical diagnosis. Please consult with a healthcare provider for
                proper evaluation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
