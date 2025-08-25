// EProfile.jsx
import React, { useEffect, useMemo, useState } from "react";

export default function EProfile({
  initialProfile = {
    fullName: "Abdulla Hasan",
    fatherName: "Mr. Hasan",
    motherName: "Mrs. Hasan",
    nid: "1234567890",
    dob: "2002-01-01",
    username: "",
  },
  onSubmit,
}) {
  const [form, setForm] = useState({
    fullName: initialProfile.fullName || "",
    fatherName: initialProfile.fatherName || "",
    motherName: initialProfile.motherName || "",
    nid: initialProfile.nid || "",
    dob: initialProfile.dob || "",
    username: initialProfile.username || "",
    password: "",
    photoFile: null,
  });

  const photoPreview = useMemo(() => {
    if (!form.photoFile) return null;
    return URL.createObjectURL(form.photoFile);
  }, [form.photoFile]);

  useEffect(() => {
    return () => {
      if (photoPreview) URL.revokeObjectURL(photoPreview);
    };
  }, [photoPreview]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photoFile") {
      setForm((p) => ({ ...p, photoFile: files?.[0] || null }));
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.fatherName || !form.motherName || !form.nid || !form.dob) {
      alert("Please fill all required (*) fields.");
      return;
    }
    const payload = { ...form };
    if (typeof onSubmit === "function") onSubmit(payload);
    else console.log("Submitted:", payload);
  };

  return (
    <div className="min-h-screen w-full bg-black/60 flex items-center justify-center p-4">
      {/* Form Card */}
      <div className="w-full max-w-3xl bg-black/30 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-lg p-6 text-white">
        <div className="border-b border-slate-600/50 pb-4 mb-4">
          <h1 className="text-2xl font-semibold tracking-tight">Employee Profile</h1>
         
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Read-only fields */}
          <div className="md:col-span-2">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Full Name" required>
                <input value={form.fullName} readOnly className="input-readonly" />
              </Field>
              <Field label="Father Name" required>
                <input value={form.fatherName} readOnly className="input-readonly" />
              </Field>
              <Field label="Mother Name" required>
                <input value={form.motherName} readOnly className="input-readonly" />
              </Field>
              <Field label="NID" required>
                <input value={form.nid} readOnly className="input-readonly" />
              </Field>
              <Field label="Date of Birth" required>
                <input type="date" value={form.dob} readOnly className="input-readonly" />
              </Field>
            </div>
          </div>

          {/* Editable fields */}
          <Field label="Username">
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="input-editable border-1 border-amber-50 rounded-[5px]"
            />
          </Field>

          <Field label="Password">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="input-editable border-1 border-amber-50 rounded-[5px]"
            />
          </Field>

          <Field label="Profile Picture">
            <input
              type="file"
              name="photoFile"
              accept="image/*"
              onChange={handleChange}
              className="block w-full text-sm  cursor-pointer"
            />
          </Field>

          {photoPreview && (
            <div className="md:col-span-2 mt-2 flex items-center gap-4">
              <img src={photoPreview} alt="Preview" className="h-24 w-24 rounded-xl border border-slate-600 shadow" />
              <span className="text-sm text-slate-300">Preview</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 cursor-pointer transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      {/* Tailwind extra classes */}
      <style>{`
        .input-editable {
          @apply w-full rounded-xl border border-slate-500/70 bg-slate-900 text-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/50;
        }
        .input-readonly {
          @apply w-full rounded-xl border border-slate-600/50 bg-slate-800 text-slate-300 px-3 py-2 cursor-not-allowed;
        }
      `}</style>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}
