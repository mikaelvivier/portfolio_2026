import { cn } from "../utils/cn";
import { useEffect, useState } from "react";

interface MeteorsProps {
    number?: number;
    className?: string;
}

export const Meteors = ({ number = 20, className }: MeteorsProps) => {
    const [meteors, setMeteors] = useState<number[]>([]);

    useEffect(() => {
        const meteorStyles = new Array(number).fill(0).map(() => Math.random());
        setMeteors(meteorStyles);
    }, [number]);

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            {meteors.map((_, idx) => (
                <span
                    key={"meteor" + idx}
                    className={cn(
                        "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-black dark:bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
                        "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-black dark:before:from-[#64748b] before:to-transparent",
                    )}
                    style={{
                        top: Math.floor(Math.random() * 100) + "%", // Randomize start position across height
                        left: Math.floor(Math.random() * 100) + "%",
                        animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
                        animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
                    }}
                ></span>
            ))}
        </div>
    );
};
