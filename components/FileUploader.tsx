"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
// 02:04:28
import { convertFileToUrl } from "@/lib/utils";

type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};
// https://www.npmjs.com/package/react-dropzone
export const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const onDrop = (acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="file-upload">
      <input {...getInputProps()} />
      {files && files?.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          width={1000}
          height={1000}
          alt="uploaded image"
          className="max-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image
            src="/assets/icons/upload.svg"
            width={40}
            height={40}
            alt="upload"
          />
          <div className="file-upload_label">
            <p className="text-14-regular ">
              <span className="text-green-500">點擊上傳 </span>
              或拖放
            </p>
            <p className="text-12-regular">
              SVG, PNG, JPG or GIF (最大. 800x400px)
            </p>
          </div>
        </>
      )}
    </div>
  );
};
