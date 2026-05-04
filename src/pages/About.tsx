"use client";

import React, { useState, useRef } from "react";
import { Upload, Building2 } from "lucide-react";

const About: React.FC = () => {
  const [saved, setSaved] = useState(false);
  const photoRef = useRef<HTMLInputElement | null>(null);
  const [collegePhoto, setCollegePhoto] = useState<string | null>(null);

  const [form, setForm] = useState({
    collegeName: "",
    quote: "",
    content: "",
  });

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCollegePhoto(URL.createObjectURL(file));
    setSaved(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("About saved:", form);
    setSaved(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-6 lg:px-8 py-6 space-y-6">

        {/* Page header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">About</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage the "Who We Are" section displayed on the college website.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

            <div className="mb-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                College Details
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">

              {/* College Photo Upload */}
              <div className="flex flex-col items-center">
                <div
                  className="relative mb-3 flex h-36 w-36 cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-gray-400 hover:bg-gray-100"
                  onClick={() => photoRef.current?.click()}
                >
                  {collegePhoto ? (
                    <img
                      src={collegePhoto}
                      alt="College"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-1 text-center px-2">
                      <Building2 className="h-8 w-8 text-gray-300" />
                      <span className="text-xs text-gray-400">Upload photo</span>
                    </div>
                  )}
                </div>

                <input
                  ref={photoRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoChange}
                />

                <button
                  type="button"
                  onClick={() => photoRef.current?.click()}
                  className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:bg-gray-50"
                >
                  <Upload className="h-3.5 w-3.5" />
                  {collegePhoto ? "Change photo" : "Choose photo"}
                </button>
                <p className="mt-1.5 text-xs text-gray-400">
                  College building photo
                </p>
              </div>

              {/* Fields */}
              <div className="flex flex-col gap-4 sm:col-span-2">

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    College name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.collegeName}
                    onChange={(e) => updateField("collegeName", e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Tagline / quote <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.quote}
                    onChange={(e) => updateField("quote", e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    About content
                  </label>
                  <textarea
                    rows={5}
                    value={form.content}
                    onChange={(e) => updateField("content", e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm"
                  />
                </div>

              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between rounded-xl border bg-white px-6 py-4">
            <span className="text-sm text-gray-500">
              "Who We Are" section
            </span>

            <div className="flex items-center gap-3">
              {saved && (
                <span className="text-sm text-green-600">
                  Saved successfully
                </span>
              )}
              <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg">
                Save about section
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default About;