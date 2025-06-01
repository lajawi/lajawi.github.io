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
    const previousPathname = useRef(pathname);

    useEffect(() => {
        if (previousPathname.current !== pathname && previousPathname.current !== null) {
            setImages([]);
            setCurrentIndex(-1);
            setIsFullscreen(false);
        }
        previousPathname.current = pathname;
    }, [pathname]);

    const registerImage = useCallback((image: Image) => {
        setImages((prevImages) => {
            if (!prevImages.some((img) => img.id === image.id)) {
                return [...prevImages, image];
            }
            return prevImages;
        });
    }, []);

    const openFullscreen = (id: string) => {
        document.body.classList.add("overflow-y-hidden");
        const index = images.findIndex((img) => img.id === id);
        if (index !== -1) {
            setCurrentIndex(index);
            setIsFullscreen(true);
        }
    };

    const closeFullscreen = () => {
        document.body.classList.remove("overflow-y-hidden");
        setIsFullscreen(false);
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
