"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { usePathname } from "next/navigation";
import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";

interface Image {
    id: string,
    src: string | StaticImport,
    alt: string,
    width: number | undefined | `${number}`,
    height: number | undefined | `${number}`,
}

interface ImageContextType {
    images: Image[],
    currentIndex: number,
    currentPath: string,
    isFullscreen: boolean,
    registerImage: (image: Image) => void,
    openFullscreen: (id: string) => void,
    closeFullscreen: () => void,
    goToNext: () => void,
    goToPrevious: () => void,
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const useImageContext = () => {
    const context = useContext(ImageContext);
    if (context === undefined) {
        throw new Error(`useImageContext must be used within an ImageProvider`);
    }
    return context;
};

interface ImageProviderProps {
    children: ReactNode,
}

export const ImageProvider: React.FC<ImageProviderProps> = ({ children }) => {
    const [images, setImages] = useState<Image[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState(pathname);

    if (currentPath !== pathname) {
        console.log(`Pathname changed from ${currentPath} to ${pathname} - resetting images`);
        setImages([]);
        console.log("Reset images due to pathname change");
        setCurrentIndex(-1);
        console.log("Set current index to -1 due to pathname change");
        setIsFullscreen(false);
        console.log("Set fullscreen to false due to pathname change");
        setCurrentPath(pathname);
        console.log(`Set current pathname to ${pathname}`);
    }

    const registerImage = useCallback((image: Image) => {
        setImages((prevImages) => {
            if (!prevImages.some((img) => img.id === image.id)) {
                console.log(`Registering image with id '${image.id}'`);
                return [...prevImages, image];
            }
            console.log(`Registering image with id '${image.id}' skipped because was already in the list`);
            return prevImages;
        });
    }, []);

    const openFullscreen = (id: string) => {
        document.body.classList.add("overflow-y-hidden");
        const index = images.findIndex((img) => img.id === id);
        if (index !== -1) {
            setCurrentIndex(index);
            console.log(`Setting current index to ${index}`);
            setIsFullscreen(true);
            console.log("Fullscreen set to true");
        } else {
            console.log("Index is -1, not going fullscreen");
            document.body.classList.remove("overflow-y-hidden");
        }
    };

    const closeFullscreen = () => {
        document.body.classList.remove("overflow-y-hidden");
        setIsFullscreen(false);
        console.log("Set fullscreen to false");
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <ImageContext.Provider
            value={{
                images,
                currentIndex,
                currentPath,
                isFullscreen,
                registerImage,
                openFullscreen,
                closeFullscreen,
                goToNext,
                goToPrevious,
            }}
        >
            {children}
        </ImageContext.Provider>
    );
}
