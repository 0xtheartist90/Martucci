'use client';

import { useEffect, useRef } from 'react';

const HeroVideo = ({
    mp4,
    webm,
    poster,
    className = 'absolute inset-0 h-full w-full object-cover'
}: {
    mp4: string;
    webm: string;
    poster: string;
    className?: string;
}) => {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = ref.current;
        if (!video) return;
        const play = () => video.play().catch(() => undefined);
        play();
        // Resume when the tab becomes visible again — browsers pause offscreen/hidden videos.
        document.addEventListener('visibilitychange', play);

        return () => document.removeEventListener('visibilitychange', play);
    }, []);

    return (
        <video ref={ref} autoPlay loop muted playsInline poster={poster} className={className}>
            <source src={mp4} type='video/mp4' />
            <source src={webm} type='video/webm' />
        </video>
    );
};

export default HeroVideo;
