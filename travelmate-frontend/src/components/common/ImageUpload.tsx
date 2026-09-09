"use client";

import React, { useState, useRef } from 'react';
import { uploadToImgBB } from '@/lib/imgbb';
import { UploadCloud, Image as ImageIcon, CheckCircle2, AlertCircle, Loader2, X, ExternalLink, RefreshCw } from 'lucide-react';

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

export default function ImageUpload({
  value,
  onChange,
  label = "Cover Image",
  required = false,
  placeholder = "Click or drag & drop image to upload to ImgBB",
  className = "",
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inputMode, setInputMode] = useState<'upload' | 'url'>('upload');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file (JPEG, PNG, WebP, etc.)');
      return;
    }

    // Limit to 32MB (ImgBB max limit)
    if (file.size > 32 * 1024 * 1024) {
      setError('Image file must be under 32MB');
      return;
    }

    setError(null);
    setIsUploading(true);

    try {
      const hostedUrl = await uploadToImgBB(file);
      onChange(hostedUrl);
    } catch (err: any) {
      console.error('Upload failed:', err);
      setError(err?.message || 'Failed to upload image to ImgBB. Please check your internet or API key.');
    } finally {
      setIsUploading(false);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const isImgBBUrl = value && (value.includes('ibb.co') || value.includes('imgbb.com'));

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Label and Mode Switcher */}
      <div className="flex items-center justify-between">
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
        <div className="flex items-center gap-1.5 text-xs">
          <button
            type="button"
            onClick={() => setInputMode('upload')}
            className={`px-2 py-0.5 rounded-md transition font-medium cursor-pointer ${
              inputMode === 'upload'
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
            }`}
          >
            Upload via ImgBB
          </button>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <button
            type="button"
            onClick={() => setInputMode('url')}
            className={`px-2 py-0.5 rounded-md transition font-medium cursor-pointer ${
              inputMode === 'url'
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
            }`}
          >
            Direct URL
          </button>
        </div>
      </div>

      {inputMode === 'upload' ? (
        <div>
          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={onFileInputChange}
            className="hidden"
          />

          {value ? (
            /* Uploaded Image Preview Box */
            <div className="relative group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2">
              <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-900/5 dark:bg-slate-900">
                <img
                  src={value}
                  alt="Uploaded preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Overlaid Badges */}
                <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 backdrop-blur-md text-white">
                  {isImgBBUrl ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>ImgBB Hosted</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon className="w-3 h-3 text-cyan-400" />
                      <span>Image Ready</span>
                    </>
                  )}
                </div>

                {/* Overlaid Action Controls */}
                <div className="absolute top-2 right-2 flex items-center gap-1.5">
                  <a
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-md text-white transition"
                    title="View full image in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => onChange('')}
                    className="p-1.5 rounded-lg bg-black/60 hover:bg-rose-600/80 backdrop-blur-md text-white transition cursor-pointer"
                    title="Remove image"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Replace overlay on hover */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center cursor-pointer"
                >
                  <div className="px-3.5 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-semibold shadow-lg flex items-center gap-2">
                    <RefreshCw className="w-3.5 h-3.5 text-emerald-500" />
                    Replace Image
                  </div>
                </div>
              </div>

              {/* URL Display Footer */}
              <div className="mt-2 px-2 pb-1 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="truncate max-w-[80%]" title={value}>
                  {value}
                </span>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline cursor-pointer"
                >
                  Change
                </button>
              </div>
            </div>
          ) : (
            /* Empty Drag & Drop Zone */
            <div
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              onClick={() => !isUploading && fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-6 text-center transition cursor-pointer flex flex-col items-center justify-center min-h-[140px] ${
                dragActive
                  ? 'border-emerald-500 bg-emerald-500/5'
                  : 'border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-slate-900/50 bg-slate-50/50 dark:bg-slate-950/50'
              }`}
            >
              {isUploading ? (
                <div className="flex flex-col items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <Loader2 className="w-8 h-8 animate-spin" />
                  <p className="text-xs font-semibold">Uploading to ImgBB...</p>
                  <p className="text-[11px] text-slate-400">Please wait while the image is hosted</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {placeholder}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Supports JPG, PNG, WebP up to 32MB (Powered by ImgBB)
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        /* Direct URL Mode */
        <div className="space-y-1">
          <input
            type="url"
            required={required}
            placeholder="https://i.ibb.co/... or any image URL"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
          {value && (
            <div className="mt-2 relative h-32 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
              <img
                src={value}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={() => setError('Invalid image URL or unable to load image preview')}
              />
            </div>
          )}
        </div>
      )}

      {/* Error display */}
      {error && (
        <div className="flex items-center gap-1.5 text-xs text-rose-500 font-medium px-1">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
