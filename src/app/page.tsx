import HeroVideo from '@/components/hero-video';
import LightboxImage from '@/components/lightbox-image';
import MenuTabs from '@/components/menu-tabs';
import OpenTableWidget from '@/components/opentable-widget';
import Reveal from '@/components/reveal';

const AWARDS = [
    { quote: 'NUMBER 1, THE BEST PIZZERIA IN THE WORLD', source: '50 TOP PIZZA WORLD 2025' },
    { quote: 'NUMBER 1 PIZZERIA IN ITALY, 7 YEARS RUNNING', source: '50 TOP PIZZA ITALIA 2019–2025' },
    { quote: 'HONORED WITH THE TITLE OF “MAESTRO DELLA PIZZA”', source: 'IDENTITÀ GOLOSE 2025' },
    { quote: 'BEST PIZZA CHEF IN THE WORLD', source: '50 TOP PIZZA' },
    { quote: 'THREE SLICES, BEST RATING 2017–2025', source: 'GAMBERO ROSSO' },
    { quote: 'FIRST PIZZA RESTAURANT EVER IN THE WORLD TOP 20', source: 'AMERICAN FOOD BIBLE' },
    { quote: 'BEST PIZZA IN THE WORLD WITH “FUTURO DI MARINARA”', source: '50 TOP PIZZA' },
    { quote: 'BEST PIZZA DOUGH 2020', source: 'GAMBERO ROSSO' },
    { quote: '100 FORBES EXCELLENCES 2021', source: 'FORBES' }
];

// Cell classes keep every row the same height: span-4 at 2:1, span-2 at 1:1, span-3 at 3:2.
const PIZZAS = [
    {
        src: '/images/cdn/pizza-smoking.jpg',
        alt: 'Wood-fired pizza with smoking char at Francesco Martucci Wynwood, Miami',
        cell: 'col-span-2 aspect-[16/10] md:col-span-4 md:aspect-[2/1]'
    },
    {
        src: '/images/Martucci/Francesco%20(2).webp',
        alt: 'Wood-fired pizza with tomato, creamy burrata and fresh basil at Francesco Martucci',
        cell: 'aspect-square md:col-span-2'
    },
    {
        src: '/images/Martucci/Francesco%20(6).webp',
        alt: 'Wood-fired pizza topped with Kalamata olives and garlic on a charred crust',
        cell: 'aspect-square md:col-span-2'
    },
    {
        src: '/images/cdn/pizza-prosciutto.webp',
        alt: 'Wood-fired pizza topped with prosciutto, black olives and fresh basil on a leopard-spotted crust',
        cell: 'col-span-2 aspect-[16/10] md:col-span-4 md:aspect-[2/1]'
    },
    {
        src: '/images/Martucci/Francesco%20(7).webp',
        alt: 'Artichoke and herb pizza on a wooden peel, fresh from the wood-fired oven',
        cell: 'aspect-square md:col-span-3 md:aspect-[3/2]'
    },
    {
        src: '/images/Martucci/Francesco.webp',
        alt: 'Mortadella and pistachio pizza with fresh mozzarella at Francesco Martucci Wynwood',
        cell: 'aspect-square md:col-span-3 md:aspect-[3/2]'
    }
];

// Mosaic on a fixed row grid: the oven shot runs tall down the left, wide room shots span two columns.
const RESTAURANT_SHOTS: { src: string; alt: string; cell: string; position?: string }[] = [
    {
        src: '/images/Martucci/Francesco%20(9).webp',
        alt: 'Wood-fired pizza on a peel beside the glowing hearth at Francesco Martucci Wynwood',
        cell: 'col-span-2 row-span-2 md:col-span-1'
    },
    {
        src: '/images/restaurant-2.jpg',
        alt: 'Dining room with colorful murals and timber columns at Francesco Martucci Wynwood',
        cell: 'col-span-2'
    },
    { src: '/images/restaurant-3.jpg', alt: 'Cozy corner banquette under exposed wooden beams at Francesco Martucci', cell: '' },
    {
        src: '/images/Martucci/Francesco%20(1).webp',
        alt: 'Intimate dining tables beneath hanging greenery at Francesco Martucci Wynwood',
        cell: ''
    },
    { src: '/images/restaurant-4.jpg', alt: 'Backlit bar with leather seating at Francesco Martucci Wynwood', cell: 'col-span-2' },
    { src: '/images/cdn/wine-wall.jpg', alt: 'Floor-to-ceiling wine wall at Francesco Martucci Miami', cell: '' },
    {
        src: '/images/Martucci/Francesco%20(8).webp',
        alt: 'Pizzaiolo finishing a wood-fired pizza on the peel at Francesco Martucci',
        cell: '',
        position: 'object-bottom'
    },
    { src: '/images/restaurant-1.jpg', alt: 'Private dining room with chandelier and framed art at Francesco Martucci', cell: '' },
    { src: '/images/restaurant-5.jpg', alt: 'View across the bar toward the open kitchen at Francesco Martucci Wynwood', cell: '' }
];

// Minimal line icons drawn in the site's thin-stroke style.
const CraftIcon = ({ kind }: { kind: string }) => {
    const common = {
        width: 30,
        height: 30,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.3,
        strokeLinecap: 'round' as const,
        strokeLinejoin: 'round' as const,
        'aria-hidden': true
    };
    switch (kind) {
        case 'dough': // wheat ear
            return (
                <svg {...common}>
                    <path d='M12 21V7' />
                    <path d='M12 7c-2.4 0-3.6-1.4-3.6-3.5C10.5 3.5 12 4.9 12 7Z' />
                    <path d='M12 7c2.4 0 3.6-1.4 3.6-3.5C13.5 3.5 12 4.9 12 7Z' />
                    <path d='M12 12c-2.4 0-3.6-1.4-3.6-3.5C10.5 8.5 12 9.9 12 12Z' />
                    <path d='M12 12c2.4 0 3.6-1.4 3.6-3.5C13.5 8.5 12 9.9 12 12Z' />
                    <path d='M12 17c-2.4 0-3.6-1.4-3.6-3.5C10.5 13.5 12 14.9 12 17Z' />
                    <path d='M12 17c2.4 0 3.6-1.4 3.6-3.5C13.5 13.5 12 14.9 12 17Z' />
                </svg>
            );
        case 'ingredients': // basil leaf
            return (
                <svg {...common}>
                    <path d='M19 4c.6 6.5-1.5 11.4-5.2 13.6-2.5 1.5-5.6 1-7-1.4-1.4-2.4-.5-5.4 2-6.9C12.5 7.1 15 5 19 4Z' />
                    <path d='M5 21c3-4.5 7-8.5 11-11.5' />
                </svg>
            );
        case 'oven': // flame
            return (
                <svg {...common}>
                    <path d='M12 21c3.6 0 6-2.4 6-5.6 0-3.7-2.7-5.9-4.4-8.9-.2 1.7-.8 2.9-2 4-1.2-.8-1.8-1.9-2-3.5-1.9 2.2-3.6 5-3.6 8.4C6 18.6 8.4 21 12 21Z' />
                    <path d='M12 21c-1.6 0-2.7-1.2-2.7-2.9 0-1.5 1-2.7 2.7-4.1 1.7 1.4 2.7 2.6 2.7 4.1 0 1.7-1.1 2.9-2.7 2.9Z' />
                </svg>
            );
        default: // experience: cloche
            return (
                <svg {...common}>
                    <path d='M4 17h16' />
                    <path d='M5 17a7 7 0 0 1 14 0' />
                    <path d='M12 10V8.5' />
                    <circle cx='12' cy='7.6' r='0.9' />
                    <path d='M2.5 20h19' />
                </svg>
            );
    }
};

const CRAFT = [
    {
        icon: 'dough',
        title: 'The Dough',
        text: 'Long-fermented and highly hydrated for an ultra-light, airy crust, handled with the precision that made it famous in Caserta.'
    },
    {
        icon: 'ingredients',
        title: 'The Ingredients',
        text: 'Buffalo mozzarella from Campania, heirloom tomatoes and seasonal Florida produce. The finest of Italy, accented with Miami flavor.'
    },
    {
        icon: 'oven',
        title: 'The Oven',
        text: 'A dedicated wood-fired hearth delivers the authentic crisp, soft-centered, slightly smoky char of a true wood-fired pizza.'
    },
    {
        icon: 'experience',
        title: 'The Experience',
        text: 'From signature classics to the multi-course “Degustazione” pizza tasting menu. Pizza re-imagined, shared among friends.'
    }
];

const CallButton = ({ label = 'CALL TO RESERVE', className = '' }: { label?: string; className?: string }) => (
    <a
        href='tel:+17542195694'
        className={`inline-block border border-white bg-white px-8 py-4 text-sm font-bold tracking-[0.2em] text-black transition-colors duration-300 hover:bg-transparent hover:text-white ${className}`}>
        {label}
    </a>
);

const SectionLabel = ({ children }: { children: string }) => (
    <div className='text-xs font-bold tracking-[0.3em] text-[#929292] uppercase'>{children}</div>
);

const Page = () => {
    return (
        <main>
            {/* ── Navigation ─────────────────────────────── */}
            <nav className='fixed top-0 z-50 flex w-full items-center justify-between bg-black/70 px-6 py-4 backdrop-blur-md md:px-12'>
                <img src={'/images/cdn/martucci-logo.png'} alt='Francesco Martucci' className='h-10 w-auto md:h-12' />
                <a
                    href='tel:+17542195694'
                    className='border border-white px-5 py-2.5 text-xs font-bold tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-black'>
                    CALL TO RESERVE
                </a>
            </nav>

            {/* ── Hero ───────────────────────────────────── */}
            <section className='relative'>
                <div className='relative flex min-h-svh items-end overflow-hidden'>
                    <HeroVideo
                        mp4='/video/francesco-hero.mp4'
                        webm='/video/francesco-hero.webm'
                        poster='/video/francesco-hero-poster.jpg'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30' />
                    <div className='relative z-10 w-full px-6 pt-28 pb-10 md:px-12 md:pt-32 md:pb-44'>
                        <img src='/images/cdn/laurel-white.png' alt='' className='mb-5 h-10 w-auto opacity-90 md:h-12' />
                        <h1 className='font-display max-w-2xl text-4xl leading-[1.1] font-medium uppercase md:text-6xl'>
                            #1 in Miami
                            <br />
                            #5 in America
                        </h1>
                        <div className='mt-5 text-sm font-bold tracking-[0.35em] text-white/90 uppercase md:text-lg'>
                            50 Top Pizza
                        </div>
                    </div>
                </div>
                {/* Below the video on phones; pulled up over it on larger screens. */}
                <div className='relative z-10 px-6 pt-6 pb-2 md:-mt-36 md:px-12 md:pt-0 md:pb-16'>
                    <OpenTableWidget />
                </div>
            </section>

            {/* ── Awards marquee ─────────────────────────── */}
            <section className='overflow-hidden border-y border-white/10 bg-black py-10'>
                <div className='marquee-track flex w-max'>
                    {[0, 1].map((copy) => (
                        <div key={copy} className='flex' aria-hidden={copy === 1}>
                            {AWARDS.map((award, i) => (
                                <div key={i} className='w-[320px] shrink-0 border-r border-white/10 px-8'>
                                    <img src={'/images/cdn/laurel-white.png'} alt='' className='mb-4 h-8 w-auto opacity-80' />
                                    <div className='text-sm leading-snug font-bold tracking-wide'>{award.quote}</div>
                                    <div className='mt-2 text-xs tracking-[0.15em] text-[#929292]'>{award.source}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Pizza ──────────────────────────────────── */}
            <section id='pizza' className='px-6 py-20 md:px-12 md:py-28'>
                <div className='grid gap-10 md:grid-cols-[240px_1fr] md:gap-16'>
                    <div className='md:sticky md:top-28 md:self-start'>
                        <SectionLabel>/THE PIZZA</SectionLabel>
                        <p className='mt-4 hidden text-sm leading-relaxed text-white/70 md:block'>
                            Every pizza starts with dough fermented for days, the finest Italian ingredients and a
                            roaring wood fire, finished in ninety seconds and served in minutes.
                        </p>
                    </div>
                    <div>
                        <Reveal>
                            <h2 className='font-display max-w-3xl text-3xl leading-tight font-medium uppercase md:text-5xl'>
                                Pizza from the world&rsquo;s #1 pizzeria, fired to perfection
                            </h2>
                        </Reveal>
                        <div className='mt-12 grid grid-cols-2 gap-4 md:grid-cols-6'>
                            {PIZZAS.map((pizza, i) => (
                                <Reveal key={pizza.src} delay={i * 100} className={pizza.cell}>
                                    <div className='h-full w-full overflow-hidden'>
                                        <LightboxImage
                                            src={pizza.src}
                                            alt={pizza.alt}
                                            className='h-full w-full object-cover transition-transform duration-700 hover:scale-105'
                                        />
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── The menu ───────────────────────────────── */}
            <section id='menu' className='border-t border-white/10 px-6 py-20 md:px-12 md:py-28'>
                <div className='grid gap-10 md:grid-cols-[240px_1fr] md:gap-16'>
                    <div className='md:sticky md:top-28 md:self-start'>
                        <SectionLabel>/THE MENU</SectionLabel>
                        <p className='mt-4 hidden text-sm leading-relaxed text-white/70 md:block'>
                            Two-temperature signature pizzas, wood-fired classics, handmade pasta and dolci. Menu
                            changes with the seasons.
                        </p>
                    </div>
                    <div>
                        <Reveal>
                            <h2 className='font-display max-w-3xl text-3xl leading-tight font-medium uppercase md:text-5xl'>
                                From the Degustazione to the Margherita
                            </h2>
                        </Reveal>
                        <Reveal className='mt-10'>
                            <div className='border border-white/15 p-8 md:p-10'>
                                <div className='flex flex-wrap items-baseline justify-between gap-4'>
                                    <h3 className='font-display text-2xl font-medium uppercase md:text-3xl'>
                                        Degustazione · Tasting Menu
                                    </h3>
                                    <span className='text-lg text-white/80'>180 per person</span>
                                </div>
                                <p className='mt-4 max-w-2xl leading-relaxed text-white/60'>
                                    Eight courses through the world of Martucci: from the Insalata di Funghi Assoluti
                                    and Tortelli Cacio e Pepe to A5 Wagyu alla Brace, the two-temperature Futuro di
                                    Marinara and Sichuan gelato. Sommelier-selected wine pairing, 100.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal className='mt-12'>
                            <MenuTabs />
                        </Reveal>
                        <Reveal className='mt-12'>
                            <CallButton />
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ── The craft ──────────────────────────────── */}
            <section className='border-t border-white/10 px-6 py-20 md:px-12 md:py-28'>
                <div className='grid gap-10 md:grid-cols-[240px_1fr] md:gap-16'>
                    <div className='md:sticky md:top-28 md:self-start'>
                        <SectionLabel>/THE CRAFT</SectionLabel>
                        <p className='mt-4 hidden text-sm leading-relaxed text-white/70 md:block'>
                            At Francesco Martucci Wynwood, every element is crafted with care.
                        </p>
                    </div>
                    <div>
                        <div className='divide-y divide-white/10'>
                            {CRAFT.map((item, i) => (
                                <Reveal key={item.title} delay={i * 80}>
                                    <div className='grid gap-3 py-8 md:grid-cols-[280px_1fr] md:gap-10'>
                                        <div className='flex items-center gap-4'>
                                            <span className='text-white/60'>
                                                <CraftIcon kind={item.icon} />
                                            </span>
                                            <h3 className='font-display text-2xl font-medium uppercase md:text-3xl'>
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className='max-w-xl leading-relaxed text-white/70'>{item.text}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                        <Reveal className='mt-10'>
                            <div className='grid gap-4 sm:grid-cols-2'>
                                <div className='aspect-[4/3] overflow-hidden'>
                                    <LightboxImage
                                        src='/images/Martucci/Francesco%20(3).webp'
                                        alt='Slice of wood-fired pizza with olives presented on a sculpted hand'
                                        className='h-full w-full object-cover transition-transform duration-700 hover:scale-105'
                                    />
                                </div>
                                <div className='aspect-[4/3] overflow-hidden'>
                                    <LightboxImage
                                        src='/images/Martucci/Francesco%20(5).webp'
                                        alt='Slice of wood-fired pizza with melted mozzarella and basil on a black plate'
                                        className='h-full w-full object-cover transition-transform duration-700 hover:scale-105'
                                    />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ── The restaurant ─────────────────────────── */}
            <section className='border-t border-white/10 px-6 py-20 md:px-12 md:py-28'>
                <div className='grid gap-10 md:grid-cols-[240px_1fr] md:gap-16'>
                    <div className='md:sticky md:top-28 md:self-start'>
                        <SectionLabel>/THE RESTAURANT</SectionLabel>
                        <p className='mt-4 hidden text-sm leading-relaxed text-white/70 md:block'>
                            An intimate dining room in the heart of Wynwood with a wood-fired hearth, full bar and a
                            floor-to-ceiling wine wall.
                        </p>
                    </div>
                    <div>
                        <Reveal>
                            <h2 className='font-display max-w-3xl text-3xl leading-tight font-medium uppercase md:text-5xl'>
                                Wood-fired tradition meets South Florida
                            </h2>
                        </Reveal>
                        <div className='mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[260px] md:grid-cols-3'>
                            {RESTAURANT_SHOTS.map((shot, i) => (
                                <Reveal key={shot.src} delay={i * 60} className={shot.cell}>
                                    <div className='h-full w-full overflow-hidden'>
                                        <LightboxImage
                                            src={shot.src}
                                            alt={shot.alt}
                                            className={`h-full w-full object-cover transition-transform duration-700 hover:scale-105 ${shot.position ?? ''}`}
                                        />
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── The chef ───────────────────────────────── */}
            <section className='relative border-t border-white/10 bg-black'>
                <div className='relative overflow-hidden md:flex md:min-h-svh md:items-end'>
                    <HeroVideo
                        mp4='/video/chef.mp4'
                        webm='/video/chef.webm'
                        poster='/video/chef-poster.jpg'
                        className='aspect-video w-full object-cover md:absolute md:inset-0 md:aspect-auto md:h-full'
                    />
                    <div className='absolute inset-0 hidden bg-gradient-to-t from-black via-transparent to-transparent md:block' />
                    <div className='relative z-10 w-full px-6 pt-10 pb-14 md:px-12 md:pt-24 md:pb-20'>
                        <SectionLabel>/THE CHEF</SectionLabel>
                        <h2 className='font-display mt-5 text-3xl leading-tight font-medium uppercase md:text-5xl'>
                            The world&rsquo;s best pizza chef
                        </h2>
                        <p className='mt-6 max-w-xl text-lg leading-relaxed text-white/80'>
                            Behind every pizza stands Francesco Martucci of Pizzeria I Masanielli, Caserta, the
                            pizzeria voted number one in the world. Decades of obsession with dough, fire and
                            flavor, now served table-side in Miami.
                        </p>
                        <p className='mt-4 max-w-xl text-sm leading-relaxed text-white/60 italic'>
                            &ldquo;For me, pizza is far more than just food. It is my passion, my craft, my life,
                            and my way of expressing both tradition and creativity.&rdquo;
                        </p>
                        <p className='mt-6 text-xs tracking-[0.2em] text-[#929292] uppercase'>
                            Francesco Martucci · Chef &amp; Pizzaiolo
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Reserve ────────────────────────────────── */}
            <section id='reserve' className='relative overflow-hidden border-t border-white/10'>
                <img
                    src={'/images/cdn/dining-wide.jpg'}
                    alt=''
                    loading='lazy'
                    className='absolute inset-0 h-full w-full object-cover opacity-30'
                />
                <div className='relative z-10 px-6 py-24 text-center md:px-12 md:py-36'>
                    <Reveal>
                        <SectionLabel>/RESERVE</SectionLabel>
                        <h2 className='font-display mx-auto mt-6 max-w-3xl text-4xl leading-tight font-medium uppercase md:text-6xl'>
                            Your table in Wynwood is waiting
                        </h2>
                        <p className='mx-auto mt-6 max-w-xl leading-relaxed text-white/80'>
                            Open Wednesday through Sunday from 5:00 PM. Call us and we will set your table.
                        </p>
                        <div className='mt-10 flex justify-center'>
                            <CallButton label='CALL 754-219-5694' />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── Footer ─────────────────────────────────── */}
            <footer className='border-t border-white/10 px-6 pt-16 pb-8 text-center md:px-12 md:pt-20 md:text-left'>
                <div className='grid grid-cols-2 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-8'>
                    <div className='col-span-2 md:col-span-1'>
                        <h3 className='font-display text-xl leading-[1.6] font-normal tracking-[0.35em] uppercase md:text-2xl'>
                            Francesco
                            <br />
                            Martucci
                            <br />
                            Wynwood
                        </h3>
                        <p className='mx-auto mt-6 max-w-xs text-sm leading-relaxed text-white/50 italic md:mx-0'>
                            &ldquo;For me, pizza is far more than just food. It is my passion, my craft, my life.&rdquo;
                        </p>
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <div className='mb-4 text-xs font-bold tracking-[0.25em] text-[#929292] uppercase'>Hours</div>
                        <ul className='mx-auto w-fit space-y-2 text-sm leading-relaxed text-white/70 md:mx-0'>
                            <li className='flex gap-2'>
                                <span className='w-20 shrink-0 text-white/45'>Mon – Tue</span>
                                <span className='text-white/45'>Closed</span>
                            </li>
                            <li className='flex gap-2'>
                                <span className='w-20 shrink-0 text-white/45'>Wed – Thu</span>
                                <span className='whitespace-nowrap'>5:00–10:30 PM</span>
                            </li>
                            <li className='flex gap-2'>
                                <span className='w-20 shrink-0 text-white/45'>Fri – Sat</span>
                                <span className='whitespace-nowrap'>5:00–11:30 PM</span>
                            </li>
                            <li className='flex gap-2'>
                                <span className='w-20 shrink-0 text-white/45'>Sun</span>
                                <span className='whitespace-nowrap'>5:00–10:30 PM</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='mb-4 text-xs font-bold tracking-[0.25em] text-[#929292] uppercase'>
                            Location
                        </div>
                        <p className='text-sm leading-relaxed text-white/70'>
                            10 NE 27th Street
                            <br />
                            Miami, Florida 33137
                        </p>
                        <a
                            href='https://www.google.com/maps?cid=1025007931396253817'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mt-3 inline-block text-sm text-white/70 underline underline-offset-4 transition-colors hover:text-white'>
                            Get directions
                        </a>
                    </div>
                    <div>
                        <div className='mb-4 text-xs font-bold tracking-[0.25em] text-[#929292] uppercase'>Contact</div>
                        <ul className='space-y-2 text-sm leading-relaxed'>
                            <li>
                                <a href='tel:+17542195694' className='text-white/70 transition-colors hover:text-white'>
                                    754-219-5694
                                </a>
                            </li>
                            <li>
                                <a
                                    href='mailto:info@martuccimiami.com'
                                    className='text-white/70 transition-colors hover:text-white'>
                                    info@martuccimiami.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.instagram.com/martucci_miami/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='Follow Francesco Martucci on Instagram'
                                    className='mt-1 inline-block text-white/60 transition-colors hover:text-white'>
                                    <svg
                                        width='20'
                                        height='20'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='1.7'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        aria-hidden='true'>
                                        <rect x='2' y='2' width='20' height='20' rx='5' />
                                        <circle cx='12' cy='12' r='4.5' />
                                        <circle cx='17.2' cy='6.8' r='0.8' fill='currentColor' stroke='none' />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between'>
                    <span>© {new Date().getFullYear()} Francesco Martucci Wynwood</span>
                    <span>10 NE 27th Street, Miami, Florida 33137</span>
                </div>
            </footer>
        </main>
    );
};

export default Page;
