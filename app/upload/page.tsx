"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Upload, X, FileText, Video, Plus, Check } from "lucide-react"

export default function UploadPage() {
  const [resourceType, setResourceType] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const categories = [
    "Technology",
    "Business",
    "Creative Arts",
    "Agriculture",
    "Healthcare",
    "Skilled Trades",
    "Education",
    "Finance",
  ]

  const levels = ["Beginner", "Intermediate", "Advanced"]

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setUploadedFiles([...uploadedFiles, ...files])
  }

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission here
    setShowSuccessModal(true)
  }

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase()
    switch (extension) {
      case "mp4":
      case "avi":
      case "mov":
        return <Video className="h-5 w-5 text-red-500" />
      case "pdf":
        return <FileText className="h-5 w-5 text-yellow-500" />
      default:
        return <FileText className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upload Educational Resources</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your knowledge with the A19 Trade School community. Upload courses, videos, documents, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Resource Details</CardTitle>
                <CardDescription>Fill in the information about your educational resource</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Resource Type */}
                  <div className="space-y-2">
                    <Label htmlFor="resourceType">Resource Type *</Label>
                    <Select value={resourceType} onValueChange={setResourceType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select resource type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">Video Course</SelectItem>
                        <SelectItem value="pdf">PDF Document</SelectItem>
                        <SelectItem value="course">Multi-lesson Course</SelectItem>
                        <SelectItem value="article">Article/Blog Post</SelectItem>
                        <SelectItem value="presentation">Presentation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input id="title" placeholder="Enter a descriptive title for your resource" required />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide a detailed description of what learners will gain from this resource"
                      rows={4}
                      required
                    />
                  </div>

                  {/* Category and Level */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category.toLowerCase()}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="level">Difficulty Level *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          {levels.map((level) => (
                            <SelectItem key={level} value={level.toLowerCase()}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label>Upload Files *</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-400 transition-colors">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <div className="space-y-2">
                        <p className="text-lg font-medium">Drop files here or click to browse</p>
                        <p className="text-sm text-gray-500">
                          Supported formats: MP4, PDF, DOCX, PPTX (Max 500MB per file)
                        </p>
                        <input
                          type="file"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                          accept=".mp4,.pdf,.docx,.pptx,.mov,.avi"
                        />
                        <Label htmlFor="file-upload" className="cursor-pointer">
                          <Button type="button" variant="outline">
                            Choose Files
                          </Button>
                        </Label>
                      </div>
                    </div>

                    {/* Uploaded Files */}
                    {uploadedFiles.length > 0 && (
                      <div className="space-y-2 mt-4">
                        <Label>Uploaded Files</Label>
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              {getFileIcon(file.name)}
                              <div>
                                <div className="font-medium">{file.name}</div>
                                <div className="text-sm text-gray-500">{(file.size / (1024 * 1024)).toFixed(2)} MB</div>
                              </div>
                            </div>
                            <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(index)}>
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* External Link Option */}
                  <div className="space-y-2">
                    <Label htmlFor="externalLink">External Link (Optional)</Label>
                    <Input id="externalLink" placeholder="https://example.com/your-resource" type="url" />
                    <p className="text-sm text-gray-500">If your resource is hosted elsewhere, provide the link here</p>
                  </div>

                  {/* Tags */}
                  <div className="space-y-2">
                    <Label>Tags</Label>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Add a tag"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                      />
                      <Button type="button" onClick={addTag} variant="outline">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                            {tag}
                            <button type="button" onClick={() => removeTag(tag)} className="ml-1 hover:text-red-500">
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Course-specific fields */}
                  {resourceType === "course" && (
                    <div className="space-y-4 p-4 bg-yellow-50 rounded-lg">
                      <h3 className="font-semibold text-yellow-900">Course Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="duration">Estimated Duration</Label>
                          <Input id="duration" placeholder="e.g., 10 hours, 6 weeks" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lessons">Number of Lessons</Label>
                          <Input id="lessons" type="number" placeholder="e.g., 25" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="prerequisites">Prerequisites</Label>
                        <Textarea
                          id="prerequisites"
                          placeholder="What should learners know before taking this course?"
                          rows={2}
                        />
                      </div>
                    </div>
                  )}

                  <Separator />

                  {/* Submit Button */}
                  <div className="flex justify-end space-x-4">
                    <Button type="button" variant="outline">
                      Save as Draft
                    </Button>
                    <Button type="submit">Upload Resource</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upload Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Upload Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Quality Content
                  </h4>
                  <p className="text-sm text-gray-600">
                    Ensure your content is educational, well-structured, and provides clear value to learners.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Original Work
                  </h4>
                  <p className="text-sm text-gray-600">Only upload content you own or have permission to share.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Clear Descriptions
                  </h4>
                  <p className="text-sm text-gray-600">
                    Write detailed descriptions to help learners understand what they'll gain.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Appropriate Tags
                  </h4>
                  <p className="text-sm text-gray-600">Use relevant tags to help learners discover your content.</p>
                </div>
              </CardContent>
            </Card>

            {/* File Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>File Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="font-semibold mb-1">Video Files:</div>
                  <p className="text-gray-600">MP4, MOV, AVI (Max 500MB)</p>
                </div>

                <div className="text-sm">
                  <div className="font-semibold mb-1">Documents:</div>
                  <p className="text-gray-600">PDF, DOCX (Max 100MB)</p>
                </div>

                <div className="text-sm">
                  <div className="font-semibold mb-1">Presentations:</div>
                  <p className="text-gray-600">PPTX, PDF (Max 50MB)</p>
                </div>

                <div className="text-sm">
                  <div className="font-semibold mb-1">Quality:</div>
                  <p className="text-gray-600">HD video (1080p recommended)</p>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Having trouble uploading your resource? Our team is here to help.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Success Modal */}
        <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Check className="h-6 w-6 text-green-500 mr-2" />
                Resource Uploaded Successfully!
              </DialogTitle>
              <DialogDescription>
                Your educational resource has been submitted for review. We'll notify you once it's approved and live on
                the platform.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" onClick={() => setShowSuccessModal(false)}>
                Upload Another
              </Button>
              <Button onClick={() => setShowSuccessModal(false)}>View My Uploads</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
