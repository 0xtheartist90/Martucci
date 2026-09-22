import HeroVideo from '@/components/hero-video';
import ReserveWidget from '@/components/reserve-widget';
import Reveal from '@/components/reveal';

const OPENTABLE_URL = 'https://www.opentable.com/r/francesco-martucci-miami-beach';

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
        alt: 'Wood-fired Neapolitan pizza with smoking char at Francesco Martucci Wynwood, Miami',
        cell: 'col-span-2 aspect-[16/10] md:col-span-4 md:aspect-[2/1]'
    },
    {
        src: '/images/Martucci/Francesco%20(2).webp',
        alt: 'Wood-fired pizza with tomato, creamy burrata and fresh basil at Francesco Martucci',
        cell: 'aspect-square md:col-span-2'
    },
    {
        src: '/images/Martucci/Francesco%20(6).webp',
        alt: 'Neapolitan pizza topped with Kalamata olives and garlic on a charred crust',
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
const RESTAURANT_SHOTS = [
    {
        src: '/images/Martucci/Francesco%20(9).webp',
        alt: 'Wood-fired pizza on a peel beside the glowing hearth at Francesco Martucci Wynwood',
        cell: 'row-span-2'
    },
    { src: '/images/cdn/dining-room.jpg', alt: 'Dining room of Francesco Martucci in Wynwood, Miami', cell: 'col-span-2' },
    {
        src: '/images/Martucci/Francesco%20(1).webp',
        alt: 'Intimate dining tables beneath hanging greenery at Francesco Martucci Wynwood',
        cell: ''
    },
    {
        src: '/images/Martucci/Francesco%20(8).webp',
        alt: 'Pizzaiolo sliding a fresh pizza from the wooden peel at Francesco Martucci',
        cell: ''
    },
    { src: '/images/cdn/dining-room-2.jpg', alt: 'Warm industrial dining room with wood tables in Wynwood', cell: 'col-span-2' },
    { src: '/images/cdn/wine-wall.jpg', alt: 'Floor-to-ceiling wine wall at Francesco Martucci Miami', cell: '' }
];

const CRAFT = [
    {
        title: 'The Dough',
        text: 'Long-fermented and highly hydrated for an ultra-light, airy crust, handled with the precision that made it famous in Caserta.'
    },
    {
        title: 'The Ingredients',
        text: 'Buffalo mozzarella from Campania, heirloom tomatoes and seasonal Florida produce. The finest of Italy, accented with Miami flavor.'
    },
    {
        title: 'The Oven',
        text: 'A dedicated wood-fired hearth delivers the authentic crisp, soft-centered, slightly smoky char of true Neapolitan pizza.'
    },
    {
        title: 'The Experience',
        text: 'From signature classics to the multi-course “Degustazione” pizza tasting menu. Pizza re-imagined, shared among friends.'
    }
];

const ReserveButton = ({ label = 'RESERVE A TABLE', className = '' }: { label?: string; className?: string }) => (
    <a
        href={OPENTABLE_URL}
        target='_blank'
        rel='noopener noreferrer'
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
                <div className='flex items-center gap-6'>
                    <a
                        href='tel:+17542195694'
                        className='hidden border border-white/40 px-5 py-2.5 text-xs font-bold tracking-[0.2em] text-white/90 uppercase transition-colors duration-300 hover:border-white hover:text-white md:block'>
                        Call Us
                    </a>
                    <a
                        href={OPENTABLE_URL}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='border border-white px-5 py-2.5 text-xs font-bold tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-black'>
                        RESERVE A TABLE
                    </a>
                </div>
            </nav>

            {/* ── Hero ───────────────────────────────────── */}
            <section className='relative flex min-h-svh items-end overflow-hidden'>
                <HeroVideo
                    mp4='/video/francesco-hero.mp4'
                    webm='/video/francesco-hero.webm'
                    poster='/video/francesco-hero-poster.jpg'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30' />
                <div className='relative z-10 w-full px-6 pt-32 pb-16 md:px-12 md:pb-24'>
                    <div className='mb-5 text-[11px] font-bold tracking-[0.3em] text-white/60 uppercase'>
                        #1 Pizzeria in the World · 50 Top Pizza 2025
                    </div>
                    <h1 className='font-display max-w-3xl text-4xl leading-[1.12] font-normal md:text-5xl lg:text-6xl'>
                        Wood-fired Neapolitan pizza,
                        <br />
                        from Caserta to Wynwood.
                    </h1>
                    <p className='mt-5 max-w-lg text-base leading-relaxed text-white/75'>
                        Long-fermented, ultra-light and fired in ninety seconds, in the heart of Miami. Tables fill
                        fast. Reserve yours tonight.
                    </p>
                    <div className='mt-8'>
                        <ReserveWidget />
                    </div>
                </div>
            </section>

            {/* ── Awards marquee ─────────────────────────── */}
            <section className='overflow-hidden border-y border-white/10 bg-black py-10'>
                <div className='marquee-track flex w-max'>
                    {[0, 1].map((copy) => (
                        <div key={copy} className='flex' aria-hidden={copy === 1}>
                            {AWARDS.map((award, i) => (
                                <div key={i} className='w-[320px] shrink-0 border-r border-white/10 px-8'>
                                    <img src={'/images/cdn/laurel.png'} alt='' className='mb-4 h-10 w-auto opacity-80' />
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
                        <p className='mt-4 text-sm leading-relaxed text-white/70'>
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
                                        <img
                                            src={pizza.src}
                                            alt={pizza.alt}
                                            loading='lazy'
                                            className='h-full w-full object-cover transition-transform duration-700 hover:scale-105'
                                        />
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                        <Reveal className='mt-10'>
                            <div className='flex flex-wrap gap-4'>
                                <ReserveButton />
                                <a
                                    href='https://www.martuccimiami.com/menu'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-block border border-white/60 px-8 py-4 text-sm font-bold tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-black'>
                                    VIEW FULL MENU
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ── The craft ──────────────────────────────── */}
            <section className='border-t border-white/10 px-6 py-20 md:px-12 md:py-28'>
                <div className='grid gap-10 md:grid-cols-[240px_1fr] md:gap-16'>
                    <div className='md:sticky md:top-28 md:self-start'>
                        <SectionLabel>/THE CRAFT</SectionLabel>
                        <p className='mt-4 text-sm leading-relaxed text-white/70'>
                            At Francesco Martucci Wynwood, every element is crafted with care.
                        </p>
                    </div>
                    <div>
                        <div className='divide-y divide-white/10'>
                            {CRAFT.map((item, i) => (
                                <Reveal key={item.title} delay={i * 80}>
                                    <div className='grid gap-3 py-8 md:grid-cols-[280px_1fr] md:gap-10'>
                                        <h3 className='font-display text-2xl font-medium uppercase md:text-3xl'>
                                            {item.title}
                                        </h3>
                                        <p className='max-w-xl leading-relaxed text-white/70'>{item.text}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                        <Reveal className='mt-10'>
                            <div className='grid gap-4 sm:grid-cols-2'>
                                <div className='aspect-[4/3] overflow-hidden'>
                                    <img
                                        src='/images/Martucci/Francesco%20(3).webp'
                                        alt='Slice of wood-fired pizza with olives presented on a sculpted hand'
                                        loading='lazy'
                                        className='h-full w-full object-cover transition-transform duration-700 hover:scale-105'
                                    />
                                </div>
                                <div className='aspect-[4/3] overflow-hidden'>
                                    <img
                                        src='/images/Martucci/Francesco%20(5).webp'
                                        alt='Slice of Neapolitan pizza with melted mozzarella and basil on a black plate'
                                        loading='lazy'
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
                        <p className='mt-4 text-sm leading-relaxed text-white/70'>
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
                                <Reveal key={shot.src} delay={i * 80} className={shot.cell}>
                                    <div className='h-full w-full overflow-hidden'>
                                        <img
                                            src={shot.src}
                                            alt={shot.alt}
                                            loading='lazy'
                                            className='h-full w-full object-cover transition-transform duration-700 hover:scale-105'
                                        />
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── The chef ───────────────────────────────── */}
            <section className='border-t border-white/10 px-6 py-16 md:px-12 md:py-20'>
                <div className='grid gap-10 md:grid-cols-[240px_1fr] md:gap-16'>
                    <div className='md:self-start'>
                        <SectionLabel>/THE CHEF</SectionLabel>
                    </div>
                    <Reveal>
                        <div className='flex flex-col items-start gap-8 sm:flex-row sm:items-center'>
                            <img
                                src='/images/Martucci/Francesco%20(4).webp'
                                alt='Chef Francesco Martucci working the pass in his Wynwood kitchen'
                                loading='lazy'
                                className='aspect-square w-40 object-cover grayscale md:w-48'
                            />
                            <div>
                                <p className='max-w-xl text-lg leading-relaxed text-white/80'>
                                    Behind every pizza stands Francesco Martucci of Pizzeria I Masanielli, Caserta,
                                    named the world&rsquo;s best pizza chef. His craft, now fired nightly in Wynwood.
                                </p>
                                <p className='mt-3 text-xs tracking-[0.2em] text-[#929292] uppercase'>
                                    Francesco Martucci · Chef &amp; Pizzaiolo
                                </p>
                            </div>
                        </div>
                    </Reveal>
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
                            Open Wednesday through Sunday from 5:00 PM. Book online in seconds via OpenTable.
                        </p>
                        <div className='mt-10 flex justify-center'>
                            <ReserveWidget />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── Footer ─────────────────────────────────── */}
            <footer className='border-t border-white/10 px-6 pt-16 pb-8 md:px-12 md:pt-20'>
                <div className='grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-8'>
                    <div>
                        <h3 className='font-display text-3xl leading-[1.1] font-medium uppercase md:text-4xl'>
                            Francesco
                            <br />
                            Martucci
                            <br />
                            Wynwood
                        </h3>
                        <p className='mt-6 max-w-xs text-sm leading-relaxed text-white/50 italic'>
                            &ldquo;For me, pizza is far more than just food. It is my passion, my craft, my life.&rdquo;
                        </p>
                    </div>
                    <div>
                        <div className='mb-4 text-xs font-bold tracking-[0.25em] text-[#929292] uppercase'>Hours</div>
                        <ul className='space-y-2 text-sm leading-relaxed text-white/70'>
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
