'use client';

import { useState } from 'react';

// Opening hours: Wed–Sun from 17:00; Fri/Sat until 23:30, other days until 22:30.
const CLOSED_DAYS = [1, 2]; // Mon, Tue
const TIMES = Array.from({ length: 12 }, (_, i) => {
    const minutes = 17 * 60 + i * 30;
    const h24 = Math.floor(minutes / 60);
    const m = minutes % 60;
    const h12 = h24 > 12 ? h24 - 12 : h24;

    return {
        value: `${String(h24).padStart(2, '0')}:${String(m).padStart(2, '0')}`,
        label: `${h12}:${String(m).padStart(2, '0')} PM`
    };
});

const todayISO = () => {
    const d = new Date();

    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const fieldClass =
    'h-14 w-full appearance-none border border-white/30 bg-black/60 px-4 text-sm font-bold tracking-[0.15em] text-white uppercase backdrop-blur-sm transition-colors focus:border-white focus:outline-none [color-scheme:dark]';

const ReserveWidget = () => {
    const [party, setParty] = useState('2');
    const [date, setDate] = useState(todayISO());
    const [time, setTime] = useState('19:00');
    const [warning, setWarning] = useState('');

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const day = new Date(`${date}T12:00:00`).getDay();
        if (CLOSED_DAYS.includes(day)) {
            setWarning('We are closed on Mondays and Tuesdays. Please pick another day.');

            return;
        }
        setWarning('');
        const params = new URLSearchParams({
            rid: '1435684',
            restref: '1435684',
            partysize: party,
            datetime: `${date}T${time}:00`,
            lang: 'en-US',
            ot_source: 'Restaurant website'
        });
        window.open(`https://www.opentable.com/booking/restref/availability?${params}`, '_blank', 'noopener');
    };

    return (
        <form onSubmit={submit} className='w-full max-w-3xl'>
            <div className='grid grid-cols-2 gap-2 md:grid-cols-[1fr_1fr_1fr_auto]'>
                <select aria-label='Party size' value={party} onChange={(e) => setParty(e.target.value)} className={fieldClass}>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                            {n} {n === 1 ? 'person' : 'people'}
                        </option>
                    ))}
                </select>
                <input
                    aria-label='Reservation date'
                    type='date'
                    min={todayISO()}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={fieldClass}
                />
                <select aria-label='Reservation time' value={time} onChange={(e) => setTime(e.target.value)} className={fieldClass}>
                    {TIMES.map((t) => (
                        <option key={t.value} value={t.value}>
                            {t.label}
                        </option>
                    ))}
                </select>
                <button
                    type='submit'
                    className='col-span-2 h-14 border border-white bg-white px-8 text-sm font-bold tracking-[0.2em] text-black uppercase transition-colors duration-300 hover:bg-transparent hover:text-white md:col-span-1'>
                    Find a Table
                </button>
            </div>
            <p className='mt-3 text-xs tracking-[0.15em] text-white/60 uppercase'>
                {warning || 'Powered by OpenTable · free online reservations'}
            </p>
        </form>
    );
};

export default ReserveWidget;
