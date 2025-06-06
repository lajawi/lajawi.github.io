"use client";

import clsx from "clsx";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import NextImage, { ImageProps } from "next/image";
import { useCallback, useEffect } from "react";
import { useImageContext } from "@/app/contexts/image-context";

export function FullscreenImage() {
    const { images, currentIndex, isFullscreen, closeFullscreen, goToNext, goToPrevious } = useImageContext();

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        switch (e.key) {
            case "ArrowRight":
                goToNext();
                break;
            case "ArrowLeft":
                goToPrevious();
                break;
            case "Escape":
                closeFullscreen();
                break;
            default:
                break;
        }
    }, [goToNext, goToPrevious, closeFullscreen]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [handleKeyDown]);

    if (!isFullscreen || currentIndex === -1) return null;

    const currentImage = images[currentIndex];
    if (!currentImage) return null;

    const count = images.length;

    return (
        <div className="cursor-zoom-out fixed inset-0 bg-black/80 flex items-center justify-center object-contain z-40 p-8 md:px-20" onClick={closeFullscreen}>
            <NextImage id={currentImage.id} src={currentImage.src} alt={currentImage.alt} width={currentImage.width} height={currentImage.height} className="duration-100 object-contain max-w-full max-h-full w-max h-max" unoptimized placeholder={typeof currentImage.src !== 'string' ? "blur" : "empty"} />

            <button onClick={(e) => {e.stopPropagation(); closeFullscreen();}} className="absolute top-4 right-4 text-white p-2 rounded-md bg-white/25 hover:bg-white/50 transition-colors cursor-pointer z-50">
                <X className="h-6 w-6" />
            </button>
            {count > 1 &&
                <>
                    <button onClick={(e) => {e.stopPropagation(); goToPrevious();}} className="absolute left-4 text-white p-2 rounded-md bg-white/25 hover:bg-white/50 transition-colors cursor-pointer z-50">
                        <ChevronLeft className="h-8 w-8" />
                    </button>
                    <button onClick={(e) => {e.stopPropagation(); goToNext();}} className="absolute right-4 text-white p-2 rounded-md bg-white/25 hover:bg-white/50 transition-colors cursor-pointer z-50">
                        <ChevronRight className="h-8 w-8" />
                    </button>
                </>
            }
        </div>
    );
}

export default function Image({ id, src, alt, ...props }: { id: string } & ImageProps) {
    const { registerImage, openFullscreen, currentPath } = useImageContext();

    useEffect(() => {
        registerImage({ id: id!, src, alt, width: props.width, height: props.height });
    }, [id, src, alt, props.width, props.height, registerImage, currentPath]);

    const handleClick = () => {
        openFullscreen(id!);
    };

    return (
        <NextImage id={id!} src={src || ""} alt={alt || ""} onClick={handleClick} {...props} className={clsx("cursor-zoom-in", props.className)} placeholder={typeof src !== 'string' ? "blur" : "empty"} />
    );
}
