'use client';

import { useEffect, useRef } from 'react';

const LOADER_SRC =
    'https://www.opentable.com/widget/reservation/loader?rid=1435684&type=standard&theme=wide&color=8&dark=true&iframe=false&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website&font=arialBlack&ot_logo=standard&primary_color=000000&primary_font_color=ffffff&button_color=383838&button_font_color=ffffff&cfe=true';

const OpenTableWidget = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || el.childElementCount > 0) return;
        if (!document.getElementById('ot-widget-overrides')) {
            const style = document.createElement('style');
            style.id = 'ot-widget-overrides';
            style.textContent = '.ot-dtp-picker .ot-title{display:none!important}';
            document.head.appendChild(style);
        }
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = LOADER_SRC;
        script.async = true;
        el.appendChild(script);

        return () => el.replaceChildren();
    }, []);

    return <div ref={ref} className='w-full max-w-3xl' />;
};

export default OpenTableWidget;
