import React, { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [isFallback, setIsFallback] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setCurrentSrc(src);
    setIsFallback(false);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!isFallback && fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setIsFallback(true);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className="w-full h-full bg-[#EFEAE4] flex flex-col items-center justify-center text-[#8B6B4D]/40 p-4">
        <ImageOff className="w-8 h-8 stroke-[1.5] mb-2" />
        <span className="text-[10px] uppercase tracking-widest font-mono font-bold">Image Unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={handleError}
      className={className}
      referrerPolicy="no-referrer"
      decoding={props.loading === 'eager' ? 'sync' : 'async'}
      fetchPriority={props.fetchPriority} {...props}
    />
  );
}

