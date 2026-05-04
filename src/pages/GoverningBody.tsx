"use client";

import React, { useState, useRef } from "react";
import { Plus, Trash2, Upload, User } from "lucide-react";

interface Member {
  id: number;
  name: string;
  customRole: string;
  content: string;
  photo: string | null;
  photoFile: File | null;
}

let idCounter = 0;

const createMember = (): Member => ({
  id: ++idCounter,
  name: "",
  customRole: "",
  content: "",
  photo: null,
  photoFile: null,
});

const GovtBody: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([createMember()]);
  const [saved, setSaved] = useState(false);

  const fileRefs = useRef<Record<number, HTMLInputElement | null>>({});
  const principalPhotoRef = useRef<HTMLInputElement | null>(null);

  const [principalPhoto, setPrincipalPhoto] = useState<string | null>(null);
  const [principalSaved, setPrincipalSaved] = useState(false);

  const [principalForm, setPrincipalForm] = useState({
    name: "",
    quote: "",
    content: "",
  });

  // ---------------- MEMBER LOGIC ----------------
  const addMember = () => {
    setMembers((prev) => [...prev, createMember()]);
    setSaved(false);
  };

  const removeMember = (id: number) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
    setSaved(false);
  };

  const updateField = (id: number, field: keyof Member, value: string) => {
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
    console.log("Members:", members);
    setSaved(true);
  };

  // ---------------- PRINCIPAL LOGIC ----------------
  const updatePrincipalField = (
    field: keyof typeof principalForm,
    value: string
  ) => {
    setPrincipalForm((prev) => ({ ...prev, [field]: value }));
    setPrincipalSaved(false);
  };

  const handlePrincipalPhotoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPrincipalPhoto(URL.createObjectURL(file));
  };

  const handlePrincipalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Principal:", principalForm);
    setPrincipalSaved(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-6 lg:px-8 py-6 space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Governing Body
          </h1>
          <p className="text-sm text-gray-500">
            Add and manage members of the governing body.
          </p>
        </div>

        {/* ================= MEMBERS ================= */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {members.map((member, index) => (
            <div
              key={member.id}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex justify-between mb-4">
                <span className="text-xs text-gray-400">
                  Member {index + 1}
                </span>

                {members.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeMember(member.id)}
                    className="text-red-500 text-xs flex gap-1"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </button>
                )}
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {/* Photo */}
                <div className="flex flex-col items-center">
                  <div
                    onClick={() => fileRefs.current[member.id]?.click()}
                    className="h-32 w-32 rounded-full border-2 border-dashed flex items-center justify-center cursor-pointer overflow-hidden bg-gray-50"
                  >
                    {member.photo ? (
                      <img
                        src={member.photo}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="text-gray-300" />
                    )}
                  </div>

                  {/* FIXED REF */}
                  <input
                    ref={(el) => {
                      fileRefs.current[member.id] = el;
                    }}
                    type="file"
                    hidden
                    onChange={(e) =>
                      handlePhotoChange(member.id, e)
                    }
                  />

                  <button
                    type="button"
                    onClick={() => fileRefs.current[member.id]?.click()}
                    className="mt-2 text-xs flex gap-1 text-gray-600"
                  >
                    <Upload className="h-4 w-4" />
                    Upload
                  </button>
                </div>

                {/* Fields */}
                <div className="col-span-2 space-y-4">
                  <input
                    placeholder="Name"
                    value={member.name}
                    onChange={(e) =>
                      updateField(member.id, "name", e.target.value)
                    }
                    className="w-full border border-gray-200 p-2.5 rounded-lg text-sm"
                  />

                  <input
                    placeholder="Role"
                    value={member.customRole}
                    onChange={(e) =>
                      updateField(member.id, "customRole", e.target.value)
                    }
                    className="w-full border border-gray-200 p-2.5 rounded-lg text-sm"
                  />

                  <textarea
                    placeholder="Content"
                    value={member.content}
                    onChange={(e) =>
                      updateField(member.id, "content", e.target.value)
                    }
                    className="w-full border border-gray-200 p-2.5 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addMember}
            className="w-full border-2 border-dashed py-4 flex justify-center gap-2 text-sm text-gray-500 rounded-xl"
          >
            <Plus /> Add Member
          </button>

          <div className="flex justify-end bg-white border rounded-xl px-6 py-4">
            <div className="flex items-center gap-3">
              {saved && (
                <span className="text-green-600 text-sm">
                  Saved successfully
                </span>
              )}
              <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm">
                Save Members
              </button>
            </div>
          </div>
        </form>

        {/* ================= PRINCIPAL SECTION ================= */}
        <form onSubmit={handlePrincipalSubmit} className="space-y-4">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">
              Principal's Message
            </h2>

            <div className="grid sm:grid-cols-3 gap-6">
              {/* Photo */}
              <div className="flex flex-col items-center">
                <div
                  onClick={() => principalPhotoRef.current?.click()}
                  className="h-32 w-32 rounded-full border-2 border-dashed flex items-center justify-center cursor-pointer overflow-hidden bg-gray-50"
                >
                  {principalPhoto ? (
                    <img
                      src={principalPhoto}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="text-gray-300" />
                  )}
                </div>

                <input
                  ref={principalPhotoRef}
                  type="file"
                  hidden
                  onChange={handlePrincipalPhotoChange}
                />
              </div>

              {/* Fields */}
              <div className="col-span-2 space-y-4">
                <input
                  placeholder="Principal Name"
                  value={principalForm.name}
                  onChange={(e) =>
                    updatePrincipalField("name", e.target.value)
                  }
                  className="w-full border p-2.5 rounded-lg text-sm"
                />

                <input
                  placeholder="Quote"
                  value={principalForm.quote}
                  onChange={(e) =>
                    updatePrincipalField("quote", e.target.value)
                  }
                  className="w-full border p-2.5 rounded-lg text-sm"
                />

                <textarea
                  placeholder="Message"
                  value={principalForm.content}
                  onChange={(e) =>
                    updatePrincipalField("content", e.target.value)
                  }
                  className="w-full border p-2.5 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end bg-white border rounded-xl px-6 py-4">
            {principalSaved && (
              <span className="text-green-600 text-sm mr-3">
                Saved successfully
              </span>
            )}
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm">
              Save Principal
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default GovtBody;