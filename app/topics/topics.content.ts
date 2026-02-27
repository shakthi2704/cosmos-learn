export interface ArticleSection {
    title: string
    content: string
}

export interface ArticleContent {
    slug: string
    introduction: string
    sections: ArticleSection[]
    keyTakeaways: string[]
    conclusion: string
    furtherReading: {
        title: string
        url: string
    }[]
}

export const articleContent: Record<string, ArticleContent> = {
    "solar-system": {
        slug: "solar-system",
        introduction: "Our solar system is a cosmic neighborhood containing eight planets, numerous moons, asteroids, comets, and dwarf planets—all orbiting our Sun. Formed 4.6 billion years ago from a giant rotating cloud of gas and dust, this celestial family showcase the incredible diversity of planetary bodies and the forces that govern them.",
        sections: [
            {
                title: "The Sun: Our Star",
                content: "At the heart of our solar system lies the Sun, a medium-sized yellow star that contains 99.86% of the system's total mass. This massive ball of plasma generates energy through nuclear fusion, converting hydrogen into helium at its core. The Sun's gravitational pull keeps all planets in their orbits, while its heat and light make life possible on Earth."
            },
            {
                title: "The Inner Rocky Planets",
                content: "The four planets closest to the Sun—Mercury, Venus, Earth, and Mars—are called terrestrial planets. These rocky worlds have solid surfaces and relatively thin atmospheres (or none at all in Mercury's case). Earth stands out as the only planet known to harbor life, with its perfect distance from the Sun creating conditions suitable for liquid water."
            },
            {
                title: "The Outer Gas Giants",
                content: "Beyond the asteroid belt lie the four gas giants: Jupiter, Saturn, Uranus, and Neptune. These massive planets are composed primarily of hydrogen and helium, with no solid surface to stand on. Jupiter is the largest, with a mass greater than all other planets combined. Saturn is famous for its spectacular ring system, while ice giants Uranus and Neptune contain significant amounts of water, methane, and ammonia ices."
            },
            {
                title: "Moons and Minor Bodies",
                content: "Our solar system contains over 200 known moons orbiting various planets. Some, like Jupiter's Europa and Saturn's Enceladus, may harbor subsurface oceans potentially suitable for life. The asteroid belt between Mars and Jupiter contains millions of rocky remnants from the solar system's formation. Beyond Neptune lies the Kuiper Belt, home to dwarf planets like Pluto and countless icy bodies."
            },
        ],
        keyTakeaways: [
            "The solar system formed 4.6 billion years ago from a rotating cloud of gas and dust",
            "Eight planets orbit the Sun, divided into inner rocky planets and outer gas giants",
            "Hundreds of moons, asteroids, and comets also call the solar system home",
            "The Sun contains 99.86% of the solar system's total mass",
        ],
        conclusion: "Our solar system represents just one of billions of planetary systems in the Milky Way galaxy. Understanding its formation, structure, and dynamics helps us comprehend how planets form around other stars and guides our search for life beyond Earth.",
        furtherReading: [
            { title: "NASA Solar System Exploration", url: "https://solarsystem.nasa.gov" },
            { title: "The Planetary Society", url: "https://www.planetary.org" },
        ]
    },

    "black-holes": {
        slug: "black-holes",
        introduction: "Black holes are the most extreme objects in the universe—regions of spacetime where gravity is so intense that nothing, not even light, can escape once it crosses the event horizon. These cosmic phenomena challenge our understanding of physics and represent the ultimate fate of the most massive stars.",
        sections: [
            {
                title: "What Are Black Holes?",
                content: "A black hole forms when matter is compressed into an infinitely small point called a singularity, creating a gravitational field so strong that the escape velocity exceeds the speed of light. The boundary around a black hole from which nothing can escape is called the event horizon. Once anything crosses this point of no return, it is forever trapped by the black hole's immense gravity."
            },
            {
                title: "How Black Holes Form",
                content: "Stellar-mass black holes form when massive stars—those with at least 20 times the Sun's mass—reach the end of their lives. After exhausting their nuclear fuel, these stars can no longer support themselves against gravity. The core collapses catastrophically in a supernova explosion, and if enough mass remains, it continues collapsing into a black hole. The entire mass of the core compresses into a point of infinite density."
            },
            {
                title: "Types of Black Holes",
                content: "Astronomers have identified several types of black holes. Stellar black holes form from dying stars and typically range from 5 to 100 solar masses. Supermassive black holes, found at the centers of most galaxies including our own Milky Way, contain millions to billions of solar masses. Intermediate-mass black holes, though rare, bridge the gap between these two categories. Scientists also theorize about primordial black holes that may have formed in the early universe."
            },
            {
                title: "Observing Black Holes",
                content: "Since black holes don't emit light, astronomers detect them indirectly. They observe matter heating up as it spirals into black holes, emitting intense X-rays. They track stars orbiting invisible massive objects. In 2019, the Event Horizon Telescope captured the first direct image of a black hole's shadow in the galaxy M87, confirming Einstein's predictions about their appearance. Gravitational wave detectors like LIGO observe spacetime ripples from merging black holes."
            },
        ],
        keyTakeaways: [
            "Black holes are regions where gravity is so strong that not even light can escape",
            "They form when massive stars collapse at the end of their lives",
            "The event horizon marks the point of no return around a black hole",
            "Supermassive black holes exist at the centers of most galaxies",
        ],
        conclusion: "Black holes represent the ultimate laboratory for testing our understanding of gravity, spacetime, and the fundamental laws of physics. As our observation technology improves, we continue to unlock the mysteries of these enigmatic cosmic objects.",
        furtherReading: [
            { title: "NASA Black Holes", url: "https://www.nasa.gov/black-holes" },
            { title: "Event Horizon Telescope", url: "https://eventhorizontelescope.org" },
        ]
    },

    "dark-matter": {
        slug: "dark-matter",
        introduction: "Dark matter is one of the greatest mysteries in modern physics—an invisible substance that makes up approximately 85% of the universe's total matter, yet has never been directly detected. Its presence is known only through its gravitational effects on visible matter, radiation, and the structure of the universe.",
        sections: [
            {
                title: "The Missing Mass Problem",
                content: "In the 1930s, astronomer Fritz Zwicky noticed that galaxies in clusters were moving far too fast to be held together by the gravity of their visible matter alone. Decades later, Vera Rubin's observations of galaxy rotation curves revealed the same problem: galaxies rotate so quickly that they should fly apart unless some invisible mass is providing additional gravity. This led to the hypothesis of dark matter—matter that doesn't emit, absorb, or reflect light."
            },
            {
                title: "Evidence for Dark Matter",
                content: "Multiple lines of evidence point to dark matter's existence. Galaxy rotation curves show stars moving faster at the edges than visible mass can explain. Gravitational lensing—where massive objects bend light from distant sources—reveals more mass than we can see. The cosmic microwave background radiation shows patterns that require dark matter. Computer simulations of galaxy formation only match observations when dark matter is included."
            },
            {
                title: "What Could Dark Matter Be?",
                content: "Scientists have proposed various candidates for dark matter particles. WIMPs (Weakly Interacting Massive Particles) are theoretical particles that interact only through gravity and the weak nuclear force. Axions are extremely light hypothetical particles. Some theories suggest primordial black holes or other exotic objects. Despite decades of searching with increasingly sensitive detectors, dark matter particles have not been directly detected."
            },
            {
                title: "Dark Matter's Role in the Universe",
                content: "Dark matter plays a crucial role in cosmic structure formation. Its gravity provides the scaffolding around which normal matter collects to form galaxies. Without dark matter, galaxies as we know them couldn't have formed in the time since the Big Bang. Dark matter halos surround galaxies, extending far beyond the visible edges and containing most of a galaxy's mass."
            },
        ],
        keyTakeaways: [
            "Dark matter makes up 85% of the universe's matter but doesn't emit light",
            "Its presence is detected through gravitational effects on visible matter",
            "Galaxy rotation and gravitational lensing provide strong evidence",
            "The true nature of dark matter remains one of physics' biggest mysteries",
        ],
        conclusion: "Dark matter represents a fundamental gap in our understanding of the universe. Solving this mystery could revolutionize physics and reveal new fundamental particles or forces. Experiments worldwide continue the search for direct detection of dark matter particles.",
        furtherReading: [
            { title: "Dark Matter Research at CERN", url: "https://home.cern/science/physics/dark-matter" },
            { title: "NASA Dark Matter Explanation", url: "https://science.nasa.gov/astrophysics/focus-areas/what-is-dark-energy" },
        ]
    },

    "big-bang": {
        slug: "big-bang",
        introduction: "The Big Bang theory describes the origin of our universe from an extremely hot, dense state approximately 13.8 billion years ago. This wasn't an explosion in space, but rather the expansion of space itself, bringing all matter, energy, and even time into existence.",
        sections: [
            {
                title: "The Beginning of Everything",
                content: "The Big Bang marks the beginning of space, time, matter, and energy. In the first fraction of a second, the universe expanded from a point smaller than an atom to astronomical size in a process called cosmic inflation. Temperatures were so extreme that even atoms couldn't form—only a soup of fundamental particles existed. As the universe expanded, it cooled, allowing particles to combine and eventually form the first atoms."
            },
            {
                title: "Evidence for the Big Bang",
                content: "Multiple lines of evidence support the Big Bang theory. Edwin Hubble discovered that galaxies are moving away from us, with more distant galaxies receding faster—evidence that space itself is expanding. The cosmic microwave background radiation is the cooled remnant of the Big Bang's intense heat, discovered accidentally in 1964. The observed abundances of hydrogen, helium, and other light elements match Big Bang predictions. The distribution of galaxies follows patterns predicted by the theory."
            },
            {
                title: "The First Moments",
                content: "The universe's earliest moments saw rapid changes. Within the first second, fundamental forces separated, and matter gained dominance over antimatter. Within minutes, the first atomic nuclei formed in a process called Big Bang nucleosynthesis. For 380,000 years, the universe was opaque—a fog of hot plasma. When it finally cooled enough for atoms to form, light could travel freely, creating the cosmic microwave background we observe today."
            },
            {
                title: "From Chaos to Structure",
                content: "Tiny quantum fluctuations in the early universe became the seeds for all cosmic structure. Over millions of years, gravity amplified these density variations. Dark matter collapsed into filaments and halos, attracting normal matter. The first stars ignited roughly 100 million years after the Big Bang, ending the cosmic dark ages. Galaxies formed and evolved, eventually producing the structured universe we see today."
            },
        ],
        keyTakeaways: [
            "The Big Bang occurred 13.8 billion years ago, creating space, time, and matter",
            "The universe has been expanding and cooling ever since",
            "Multiple independent observations confirm the Big Bang theory",
            "Cosmic structure evolved from tiny quantum fluctuations in the early universe",
        ],
        conclusion: "The Big Bang theory represents one of humanity's greatest intellectual achievements—understanding the origin and evolution of the entire universe. While many mysteries remain, particularly about the universe's first moments, the theory provides a robust framework for understanding cosmic history.",
        furtherReading: [
            { title: "NASA's Big Bang Overview", url: "https://wmap.gsfc.nasa.gov/universe/bb_theory.html" },
            { title: "European Space Agency: Planck Mission", url: "https://www.esa.int/Science_Exploration/Space_Science/Planck" },
        ]
    },

    // Add more articles for remaining topics...
    // This shows the structure - you can add the rest later
}