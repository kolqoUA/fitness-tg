import "./styles.css";

import { forwardRef, useState, type InputHTMLAttributes } from "react";
import { FileUploader } from "@/shared/assets";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const ImageUploader = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    }
  };

  return (
    <div className="image-uploader">
      <label className={`dropzone ${previewUrl ? "is-image" : ""}`}>
        <div className="placeholder">
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" />
          ) : (
            <>
              <FileUploader />
              <p>Завантажити зображення</p>
            </>
          )}
        </div>
        <input
          ref={ref}
          type="file"
          accept="image/*"
          {...props}
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
});

ImageUploader.displayName = "ImageUploader";

export default ImageUploader;
