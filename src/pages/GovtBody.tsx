import React, { useState, useRef } from "react";
import { Plus, Trash2, Upload, User } from "lucide-react";

interface Member {
  id: number;
  name: string;
  role: string;
  customRole: string;
  content: string;
  photo: string | null;
  photoFile: File | null;
}

const ROLES = [
  "Select role",
  "Principal / Director",
  "Vice Principal",
  "Dean",
  "Head of Department",
  "Professor",
  "Associate Professor",
  "Assistant Professor",
  "Administrative Officer",
  "Registrar",
  "Trustee",
  "Governor",
  "Other",
];

let idCounter = 0;

const createMember = (): Member => ({
  id: ++idCounter,
  name: "",
  role: "",
  customRole: "",
  content: "",
  photo: null,
  photoFile: null,
});

const GovtBody: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([createMember()]);
  const [saved, setSaved] = useState(false);
  const fileRefs = useRef<Record<number, HTMLInputElement | null>>({});

  const addMember = () => {
    setMembers((prev) => [...prev, createMember()]);
    setSaved(false);
  };

  const removeMember = (id: number) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
    setSaved(false);
  };

  const updateField = (
    id: number,
    field: keyof Member,
    value: string
  ) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, [field]: value } : m))
    );
    setSaved(false);
  };

  const handlePhotoChange = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setMembers((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, photo: url, photoFile: file } : m
      )
    );
    setSaved(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: replace with your actual API call, e.g.:
    // await axios.post("/api/government-body", buildFormData(members));
    console.log("Submitting members:", members);
    setSaved(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Government Body</h1>
          <p className="mt-1 text-sm text-gray-500">
            Add and manage members of the government body. You can add any number of persons.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Member cards */}
          <div className="space-y-6">
            {members.map((member, index) => (
              <div
                key={member.id}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                {/* Card header */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    Member {index + 1}
                  </span>
                  {members.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeMember(member.id)}
                      className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-red-500 transition hover:bg-red-50"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Remove
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {/* Photo upload */}
                  <div className="flex flex-col items-center">
                    <div
                      className="relative mb-3 flex h-32 w-32 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-gray-400 hover:bg-gray-100"
                      onClick={() => fileRefs.current[member.id]?.click()}
                    >
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt="member"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-1 text-center">
                          <User className="h-8 w-8 text-gray-300" />
                          <span className="text-xs text-gray-400">Upload photo</span>
                        </div>
                      )}
                    </div>

                    <input
                      ref={(el) => { fileRefs.current[member.id] = el; }}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handlePhotoChange(member.id, e)}
                    />

                    <button
                      type="button"
                      onClick={() => fileRefs.current[member.id]?.click()}
                      className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:bg-gray-50"
                    >
                      <Upload className="h-3.5 w-3.5" />
                      {member.photo ? "Change photo" : "Choose photo"}
                    </button>
                    <p className="mt-1.5 text-xs text-gray-400">JPG or PNG recommended</p>
                  </div>

                  {/* Fields */}
                  <div className="flex flex-col gap-4 sm:col-span-2">
                    {/* Name */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        Full name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Ramesh Kumar"
                        value={member.name}
                        onChange={(e) =>
                          updateField(member.id, "name", e.target.value)
                        }
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                      />
                    </div>

                    {/* Role */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        Role <span className="text-red-400">*</span>
                      </label>
                      <select
                        required={member.role !== "Other"}
                        value={member.role}
                        onChange={(e) =>
                          updateField(member.id, "role", e.target.value)
                        }
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                      >
                        {ROLES.map((r) => (
                          <option
                            key={r}
                            value={r === "Select role" ? "" : r}
                            disabled={r === "Select role"}
                          >
                            {r}
                          </option>
                        ))}
                      </select>
                      {member.role === "Other" && (
                        <input
                          type="text"
                          required
                          placeholder="Enter custom role..."
                          value={member.customRole}
                          onChange={(e) =>
                            updateField(member.id, "customRole", e.target.value)
                          }
                          className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        About / content
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Brief bio, responsibilities, or description..."
                        value={member.content}
                        onChange={(e) =>
                          updateField(member.id, "content", e.target.value)
                        }
                        className="w-full resize-y rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add member button */}
          <button
            type="button"
            onClick={addMember}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-200 py-4 text-sm font-medium text-gray-500 transition hover:border-gray-300 hover:bg-white hover:text-gray-700"
          >
            <Plus className="h-4 w-4" />
            Add another member
          </button>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-between rounded-xl border border-gray-200 bg-white px-6 py-4">
            <span className="text-sm text-gray-500">
              {members.length} {members.length === 1 ? "member" : "members"} added
            </span>
            <div className="flex items-center gap-3">
              {saved && (
                <span className="text-sm font-medium text-green-600">
                  Saved successfully
                </span>
              )}
              <button
                type="submit"
                className="rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 active:scale-95"
              >
                Save all members
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GovtBody;