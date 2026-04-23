import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { Save, Upload, Image as ImageIcon, Plus, Trash2 } from "lucide-react";

interface HeaderFormData {
  collegeName: string;
  location: string;
  logoPreview: string;
  marquee: string[];
}

const HeaderSettings: React.FC = () => {
  const [formData, setFormData] = useState<HeaderFormData>({
    collegeName: "Sri Rama First Grade College",
    location: "Hanuman Nagara, Kalladka",
    logoPreview: "/src/assets/logo 2026.jpeg",
    marquee: [
      "🎓 Admissions Open 2026",
      "📢 New Courses Available",
      "🏆 100% Placement Assistance",
      "📅 Apply Now for Scholarships",
    ],
  });

  const handleInputChange = (field: keyof HeaderFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setFormData((prev) => ({
      ...prev,
      logoPreview: imageUrl,
    }));
  };

  const handleMarqueeChange = (index: number, value: string) => {
    const updatedMarquee = [...formData.marquee];
    updatedMarquee[index] = value;

    setFormData((prev) => ({
      ...prev,
      marquee: updatedMarquee,
    }));
  };

  const addMarqueeItem = () => {
    setFormData((prev) => ({
      ...prev,
      marquee: [...prev.marquee, ""],
    }));
  };

  const removeMarqueeItem = (index: number) => {
    const updatedMarquee = formData.marquee.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      marquee: updatedMarquee,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Header Settings Saved:", formData);
  };

  return (
    <div className="w-full space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Header Settings
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage the website header logo, college details, and marquee updates.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* College Info */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">
            College Information
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Update the logo, college name, and location shown in the header.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Logo Upload */}
            <div className="lg:col-span-1">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                College Logo
              </label>

              <div className="flex flex-col items-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-5">
                <div className="mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border bg-white shadow-sm">
                  {formData.logoPreview ? (
                    <img
                      src={formData.logoPreview}
                      alt="Logo Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <ImageIcon className="h-8 w-8 text-gray-400" />
                  )}
                </div>

                <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600">
                  <Upload className="h-4 w-4" />
                  Upload Logo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Text Fields */}
            <div className="grid grid-cols-1 gap-5 lg:col-span-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  College Name
                </label>
                <input
                  type="text"
                  value={formData.collegeName}
                  onChange={(e) =>
                    handleInputChange("collegeName", e.target.value)
                  }
                  placeholder="Enter college name"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="Enter college location"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Marquee Updates
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Add or edit scrolling announcement texts shown below the header.
              </p>
            </div>

            <button
              type="button"
              onClick={addMarqueeItem}
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
            >
              <Plus className="h-4 w-4" />
              Add Text
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {formData.marquee.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3"
              >
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleMarqueeChange(index, e.target.value)}
                  placeholder={`Marquee text ${index + 1}`}
                  className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />

                <button
                  type="button"
                  onClick={() => removeMarqueeItem(index)}
                  className="inline-flex items-center justify-center rounded-lg border border-red-200 bg-red-50 p-2.5 text-red-500 transition hover:bg-red-100"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
          >
            <Save className="h-4 w-4" />
            Save Header Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeaderSettings;