'use client';

import { useState } from 'react';

type MenuItem = { name: string; price: string; desc: string; tags?: string };

const SECTIONS: { label: string; note?: string; items: MenuItem[] }[] = [
    {
        label: 'Signature Pizza',
        note: 'Two temperature pizzas · fried at 180°C, finished in the oven at 320°C',
        items: [
            {
                name: 'DOC',
                price: '26',
                desc: 'San Marzano tomato DOP, fior di latte, Parmigiano Reggiano aged 36 months, cherry tomato confit',
                tags: 'GF available'
            },
            {
                name: 'Futuro di Marinara',
                price: '28',
                desc: 'Cream of roasted San Marzano tomato DOP, hand-stoned Itrana olives, anchovies, wild garlic pesto, Salina capers, wild oregano'
            },
            {
                name: 'Le 7 Consistenze della Cipolla',
                price: '28',
                desc: 'Seven interpretations of onion: creamed, fermented, crispy, burnt, onion mayonnaise, onion jam and onion gel, fior di latte'
            },
            {
                name: 'Assoluto di Pomodoro',
                price: '26',
                desc: 'Roasted cherry tomato cream, sautéed piennolo tomatoes, San Marzano mousse, tomato confit, datterino chips, tomato jam',
                tags: 'DF'
            },
            {
                name: 'Pepperoni Secondo Martucci',
                price: '28',
                desc: 'San Marzano tomato DOP, fior di latte, spicy Italian salami, black olive powder, garlic, basil'
            },
            {
                name: 'Parmigiana',
                price: '28',
                desc: 'San Marzano tomato DOP, fior di latte, eggplant, basil, chips of Parmigiano Reggiano aged 36 months'
            }
        ]
    },
    {
        label: 'Classic Wood-Fired',
        items: [
            {
                name: 'Margherita',
                price: '22',
                desc: 'San Marzano tomato DOP, fior di latte, extra virgin olive oil Fontana Lupo',
                tags: 'GF available'
            },
            {
                name: 'Capricciosa Secondo Martucci',
                price: '28',
                desc: 'Roasted San Marzano cream, prosciutto cotto, fior di latte, pecorino Romano DOP, baked olives, cardoncelli mushrooms, artichokes, crispy salame Napoli'
            },
            {
                name: 'Mani di Velluto',
                price: '26',
                desc: 'Friarielli cream with buffalo milk, hand-cut pork sausage with fennel, aged pecorino Romano DOP',
                tags: 'GF available'
            },
            {
                name: 'Assoluto di Carciofo',
                price: '28',
                desc: 'Cream of fresh artichoke stems, sautéed artichoke, smoked provola, pecorino Romano DOP, wild garlic, smoked olive oil',
                tags: 'GF available'
            },
            {
                name: 'Ricci di Mama',
                price: '26',
                desc: 'Sautéed endive, cherry tomato confit, Itrana olives, Salina capers, anchovies, toasted pine nuts, burrata'
            },
            {
                name: 'Fior di Zucca al Quadrato',
                price: '29',
                desc: 'Zucchini cream, fior di latte, zucchini chips, squash blossoms, pumpkin seeds, saffron mayo, mullet bottarga, lemon zest'
            },
            {
                name: 'Una Volta Era Tonno e Cipolla',
                price: '29',
                desc: 'Leek pesto, hazelnut, fior di latte, tomato confit, Itrana olives, basil and lemon tuna mousse, yellow tuna fillet, katsuobushi'
            },
            {
                name: "'O Calzone",
                price: '29',
                desc: 'Prosciutto cotto artigianale, ricotta di bufala DOP, San Marzano tomato DOP, fior di latte, Parmigiano Reggiano aged 36 months'
            }
        ]
    },
    {
        label: 'Antipasti',
        items: [
            {
                name: 'Crocchè',
                price: '16',
                desc: 'Potato di Avezzano, prosciutto cotto, salame Napoli, pecorino Romano DOP, provola, parsley',
                tags: 'GF available'
            },
            {
                name: 'Arancino',
                price: '16',
                desc: 'Acquerello rice, béchamel, pork ragù, San Marzano tomato DOP, Parmigiano Reggiano, provola',
                tags: 'GF available'
            },
            {
                name: 'Frittatina Come una Mafalda',
                price: '16',
                desc: 'Fusillone di Gragnano, minced Marchigiano beef, guanciale, ricotta di bufala, fior di latte, cherry tomatoes, béchamel'
            },
            {
                name: 'Frittatina Classica',
                price: '16',
                desc: 'Bucatini, béchamel, beef ragù, prosciutto cotto, golden cherry tomatoes, Parmigiano Reggiano, fior di latte'
            },
            {
                name: 'Radicchio di Castelfranco',
                price: '19',
                desc: 'Pomegranate-marinated Castelfranco radicchio, carpione gel, almond cream, beetroot dust, wild micro herbs',
                tags: 'V · GF'
            },
            {
                name: 'Orto Mediterraneo',
                price: '19',
                desc: 'Heirloom tomatoes, ripe papaya, sweet-and-sour red onion, crisp radishes, chia, basil-lime oil, rose-scented dressing',
                tags: 'V · GF'
            },
            {
                name: 'Insalata di Funghi Assoluti',
                price: '20',
                desc: 'Fried and marinated organic mushrooms, mizuna, watercress, nasturtium, lime mayo, crunchy herb crumble',
                tags: 'V'
            }
        ]
    },
    {
        label: 'Primi & Secondi',
        items: [
            {
                name: 'Spaghetti al Pomodoro',
                price: '26',
                desc: 'Spaghetti di Gragnano IGP, piennolo tomatoes, organic basil'
            },
            {
                name: 'Tortelli Cacio e Pepe',
                price: '28',
                desc: 'House-made tortelli, pecorino Romano DOP, white chocolate and cracked black pepper filling, Parmigiano cream'
            },
            {
                name: 'Paccheri alla Genovese di Mare',
                price: '30',
                desc: 'Paccheri di Gragnano IGP, Alaskan black cod, 17-hour slow-cooked onion, anchovies, burnt onion powder'
            },
            {
                name: 'Fettucine ai Cento Tuorli con Astice',
                price: '65',
                desc: 'Maine lobster, house-made fettucine with 100 egg yolks, cherry tomatoes, slow-confit tomatoes, fresh basil'
            },
            {
                name: 'Merluzzo Nero Pizzaiola',
                price: '46',
                desc: 'Charcoal-grilled wild Alaskan black cod, San Marzano tomato DOP, olives, capers, mozzarella di bufala cream',
                tags: 'GF'
            },
            {
                name: 'Maitake Mushroom',
                price: '28',
                desc: 'Roasted maitake, organic sweet corn purée, chive oil, coconut and toasted pistachio cream',
                tags: 'V · GF'
            },
            {
                name: 'Bistecca alla Toscana',
                price: '120',
                desc: 'Prime 42 oz charcoal-grilled bone-in porterhouse, rosemary, thyme, garlic, roasted potato and rapini'
            },
            {
                name: 'A5 Wagyu alla Brace',
                price: '150',
                desc: '5 oz charcoal-grilled Wagyu, roasted rapini, broccolini purée, lemon gel',
                tags: 'GF'
            }
        ]
    },
    {
        label: 'Dolci',
        items: [
            {
                name: 'Affogato al Caffè',
                price: '16',
                desc: 'House-made Madagascar bourbon vanilla gelato, Lavazza espresso'
            },
            {
                name: 'Sichuan Gelato',
                price: '18',
                desc: 'House-made Sichuan pepper gelato, local white peach, yuzu marmalade, roasted almonds',
                tags: 'GF'
            },
            {
                name: 'Tiramisù ai Porcini',
                price: '18',
                desc: 'Mascarpone cream, house-made lady fingers, porcini mushroom essence, dark cocoa'
            }
        ]
    }
];

const MenuTabs = () => {
    const [active, setActive] = useState(0);
    const section = SECTIONS[active];

    return (
        <div>
            <div className='flex flex-wrap gap-x-8 gap-y-3 border-b border-white/10 pb-4'>
                {SECTIONS.map((s, i) => (
                    <button
                        key={s.label}
                        onClick={() => setActive(i)}
                        className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors ${
                            i === active
                                ? 'text-white underline underline-offset-8'
                                : 'text-white/50 hover:text-white'
                        }`}>
                        {s.label}
                    </button>
                ))}
            </div>
            {section.note && (
                <p className='mt-6 text-xs tracking-[0.15em] text-[#929292] uppercase'>{section.note}</p>
            )}
            <div className='mt-8 grid gap-x-14 gap-y-8 md:grid-cols-2'>
                {section.items.map((item) => (
                    <div key={item.name}>
                        <div className='flex items-baseline justify-between gap-4'>
                            <h3 className='font-display text-lg font-medium'>{item.name}</h3>
                            <span className='shrink-0 text-sm text-white/70'>{item.price}</span>
                        </div>
                        <p className='mt-1.5 text-sm leading-relaxed text-white/55'>
                            {item.desc}
                            {item.tags && <span className='ml-2 text-xs tracking-wide text-white/40'>({item.tags})</span>}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuTabs;
