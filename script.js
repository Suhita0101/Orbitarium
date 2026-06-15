const planets = {
  Sun: {
    type: "G-type main-sequence star",
    meta: "System engine | 8 planets | 4.6-billion-year age",
    diameter: "1.39 million km",
    distance: "Center of the solar system",
    orbit: "Orbits the Milky Way in about 230 million years",
    moons: "0",
    feature: "Fusion-powered light, heat, and solar wind",
    text: "The Sun is a star, not a planet, and it contains nearly all the mass in the solar system. Its fusion core powers sunlight, weather, photosynthesis, solar wind, auroras, and the heliosphere that surrounds the planets.",
    facts: ["Fuses hydrogen into helium", "Drives space weather", "Its gravity organizes the solar system"]
  },
  Mercury: {
    type: "Terrestrial planet",
    meta: "Smallest planet | 0 moons | 88-day orbit",
    diameter: "4,879 km",
    distance: "57.9 million km",
    orbit: "88 Earth days",
    moons: "0",
    feature: "Closest planet to the Sun",
    text: "Mercury is a cratered, iron-rich world with no thick atmosphere to hold heat. Its days are extremely hot, its nights are extremely cold, and its surface preserves a long record of impacts.",
    facts: ["Nearest planet to the Sun", "Smallest of the eight planets", "Visited by Mariner 10 and MESSENGER"]
  },
  Venus: {
    type: "Terrestrial planet",
    meta: "Hottest planet | 0 moons | 225-day orbit",
    diameter: "12,104 km",
    distance: "108.2 million km",
    orbit: "225 Earth days",
    moons: "0",
    feature: "Runaway greenhouse atmosphere",
    text: "Venus is nearly Earth-sized but wrapped in a crushing carbon dioxide atmosphere and sulfuric acid clouds. Its surface is hotter than Mercury's because heat is trapped so effectively.",
    facts: ["Rotates backward compared with most planets", "Thick clouds hide the surface in visible light", "Mapped by radar from spacecraft"]
  },
  Earth: {
    type: "Terrestrial planet",
    meta: "Home world | 1 moon | 365.25-day orbit",
    diameter: "12,742 km",
    distance: "149.6 million km",
    orbit: "365.25 Earth days",
    moons: "1",
    feature: "Liquid oceans and known life",
    text: "Earth has liquid oceans, a nitrogen-oxygen atmosphere, a magnetic field, plate tectonics, and the only known biosphere. Its Moon stabilizes Earth's tilt and drives ocean tides.",
    facts: ["Only known world with life", "About 71% of the surface is covered by water", "Protected by a global magnetic field"]
  },
  Mars: {
    type: "Terrestrial planet",
    meta: "Red planet | 2 moons | 687-day orbit",
    diameter: "6,779 km",
    distance: "227.9 million km",
    orbit: "687 Earth days",
    moons: "2",
    feature: "Ancient rivers and giant volcanoes",
    text: "Mars is a cold desert world with polar ice, dust storms, ancient river valleys, and Olympus Mons, the largest volcano in the solar system. Robotic orbiters, landers, and rovers continue to study its past habitability.",
    facts: ["Moons are Phobos and Deimos", "Home to Valles Marineris canyon system", "A major target in the search for ancient life"]
  },
  Jupiter: {
    type: "Gas giant",
    meta: "Largest planet | 95+ moons | 12-year orbit",
    diameter: "139,820 km",
    distance: "778.5 million km",
    orbit: "11.86 Earth years",
    moons: "95+",
    feature: "Great Red Spot and huge magnetosphere",
    text: "Jupiter is the largest planet, a banded gas giant with powerful storms and a magnetic field so large it shapes a whole miniature system. Its moon Europa may hide a salty ocean beneath ice.",
    facts: ["More massive than all other planets combined", "Great Red Spot is a long-lived storm", "Explored by Galileo and Juno"]
  },
  Saturn: {
    type: "Gas giant",
    meta: "Ringed planet | 140+ moons | 29-year orbit",
    diameter: "116,460 km",
    distance: "1.43 billion km",
    orbit: "29.45 Earth years",
    moons: "140+",
    feature: "Bright icy ring system",
    text: "Saturn is famous for its broad rings made mostly of ice particles. Its moon Titan has a thick atmosphere and methane lakes, while Enceladus sprays water-rich plumes from a hidden ocean.",
    facts: ["Least dense planet", "Cassini orbited Saturn from 2004 to 2017", "Rings are thin compared with their width"]
  },
  Uranus: {
    type: "Ice giant",
    meta: "Tilted ice giant | 27 moons | 84-year orbit",
    diameter: "50,724 km",
    distance: "2.87 billion km",
    orbit: "84 Earth years",
    moons: "27",
    feature: "Rotates on its side",
    text: "Uranus is an ice giant with methane-tinted clouds and an extreme axial tilt, likely caused by a massive early collision. Its seasons are unusually long and strange.",
    facts: ["Discovered by William Herschel in 1781", "Visited once by Voyager 2", "Has faint rings"]
  },
  Neptune: {
    type: "Ice giant",
    meta: "Distant ice giant | 14 moons | 165-year orbit",
    diameter: "49,244 km",
    distance: "4.5 billion km",
    orbit: "164.8 Earth years",
    moons: "14",
    feature: "Fast winds and dark storms",
    text: "Neptune is the most distant known planet, a deep-blue ice giant with supersonic winds and changing storm systems. Its moon Triton orbits backward and may be a captured Kuiper Belt object.",
    facts: ["Predicted mathematically before direct observation", "Visited by Voyager 2 in 1989", "Triton has geyser-like activity"]
  }
};

Object.assign(planets.Sun, {
  day: "About 25 Earth days at the equator",
  gravity: "About 28 times Earth's surface gravity",
  atmosphere: "Layered solar atmosphere: photosphere, chromosphere, transition region, and corona",
  temperature: "About 5,500 C at the visible surface; millions of degrees in the corona",
  interior: "Core, radiative zone, convective zone, photosphere, chromosphere, and corona",
  exploration: "Solar observatories such as SOHO, SDO, Parker Solar Probe, and Solar Orbiter study the Sun's magnetic field, corona, wind, flares, and energetic particles.",
  discoveries: ["Parker Solar Probe has flown through the corona", "Magnetic fields twist and release energy during flares", "The solar cycle changes activity over about 11 years"],
  questions: ["Why is the corona so much hotter than the surface?", "How exactly does the solar wind accelerate?", "How can space weather forecasts improve?"]
});

Object.assign(planets.Mercury, {
  day: "58.6 Earth days",
  gravity: "38% of Earth",
  atmosphere: "Extremely thin exosphere of oxygen, sodium, hydrogen, helium, and potassium",
  temperature: "-180 C to 430 C",
  interior: "Large metallic core, rocky mantle, heavily cratered crust",
  exploration: "Mariner 10 mapped part of Mercury in the 1970s. MESSENGER orbited from 2011 to 2015 and revealed volcanic plains, polar ice in shadowed craters, and a surprisingly active magnetic environment.",
  discoveries: ["Water ice can survive in permanently shadowed polar craters", "The planet has a global magnetic field", "Long cliffs show the planet shrank as its interior cooled"],
  questions: ["How much volatile material is trapped near the poles?", "Why does such a small planet still have a magnetic field?"]
});

Object.assign(planets.Venus, {
  day: "243 Earth days",
  gravity: "90% of Earth",
  atmosphere: "Mostly carbon dioxide with clouds of sulfuric acid",
  temperature: "About 465 C average surface temperature",
  interior: "Rocky planet with volcanic plains, highlands, rift zones, and possible ongoing volcanism",
  exploration: "Venera landers survived the surface briefly, Magellan mapped Venus by radar, and future missions are designed to study its atmosphere, geology, and climate history.",
  discoveries: ["Surface pressure is more than 90 times Earth's", "It rotates slowly and backward", "Radar maps show widespread volcanic terrain"],
  questions: ["Did Venus once have oceans?", "Is volcanism active today?", "How did its climate diverge so sharply from Earth's?"]
});

Object.assign(planets.Earth, {
  day: "23.9 hours",
  gravity: "100% of Earth",
  atmosphere: "Mostly nitrogen and oxygen, with water vapor, argon, carbon dioxide, and trace gases",
  temperature: "About 15 C global average",
  interior: "Solid inner core, liquid outer core, mantle, and dynamic crust split into tectonic plates",
  exploration: "Earth is studied by thousands of satellites, ocean instruments, aircraft, field stations, and laboratories that track weather, climate, geology, ecosystems, and human activity.",
  discoveries: ["Plate tectonics recycles crust and shapes continents", "The magnetic field helps shield the atmosphere", "Life has transformed the atmosphere over billions of years"],
  questions: ["How will climate systems change over centuries?", "How common are Earth-like biospheres elsewhere?", "How did life begin?"]
});

Object.assign(planets.Mars, {
  day: "24.6 hours",
  gravity: "38% of Earth",
  atmosphere: "Thin carbon dioxide atmosphere with dust and trace gases",
  temperature: "About -65 C average",
  interior: "Rocky crust, mantle, and core; ancient volcanoes and impact basins dominate the surface",
  exploration: "Orbiters, landers, rovers, and a small helicopter have studied Mars. Major missions include Viking, Pathfinder, Spirit, Opportunity, Curiosity, InSight, Perseverance, and Ingenuity.",
  discoveries: ["Ancient river channels and lakebeds show past liquid water", "Organic molecules have been detected in rocks", "Seasonal dust storms can grow planet-wide"],
  questions: ["Did microbial life ever exist on Mars?", "How much water remains underground?", "How did Mars lose much of its atmosphere?"]
});

Object.assign(planets.Jupiter, {
  day: "9.9 hours",
  gravity: "253% of Earth at cloud tops",
  atmosphere: "Hydrogen and helium with ammonia clouds, water clouds, and complex storm chemistry",
  temperature: "About -110 C at cloud tops",
  interior: "Deep metallic hydrogen layer, possible diluted core, no solid surface like Earth",
  exploration: "Pioneer, Voyager, Galileo, Cassini, New Horizons, and Juno have studied Jupiter. Europa Clipper is designed to investigate Europa's ice shell and ocean potential.",
  discoveries: ["The Great Red Spot is a giant long-lived storm", "Io is the most volcanically active known world", "Europa likely has a global subsurface ocean"],
  questions: ["What is Jupiter's core really like?", "How deep do its storms and jet streams go?", "Could Europa's ocean support life?"]
});

Object.assign(planets.Saturn, {
  day: "10.7 hours",
  gravity: "107% of Earth at cloud tops",
  atmosphere: "Hydrogen and helium with ammonia, methane, and water compounds",
  temperature: "About -140 C at cloud tops",
  interior: "Gas giant with layered hydrogen, helium, and heavier materials deep inside",
  exploration: "Pioneer 11 and Voyager flew by Saturn. Cassini orbited for 13 years, studying the rings, atmosphere, Titan, Enceladus, and many moons.",
  discoveries: ["Enceladus sprays salty water-rich plumes", "Titan has rivers, lakes, and seas of methane and ethane", "The rings are made mostly of countless icy particles"],
  questions: ["How old are Saturn's rings?", "Does Enceladus have habitable chemistry?", "What drives the hexagon-shaped polar jet stream?"]
});

Object.assign(planets.Uranus, {
  day: "17.2 hours",
  gravity: "89% of Earth at cloud tops",
  atmosphere: "Hydrogen, helium, and methane, which helps create its blue-green color",
  temperature: "About -195 C at cloud tops",
  interior: "Ice giant with water, ammonia, methane materials under a hydrogen-helium atmosphere",
  exploration: "Voyager 2 flew by Uranus in 1986. No spacecraft has orbited it, making Uranus one of the least explored major planets.",
  discoveries: ["The planet is tilted about 98 degrees", "Its magnetic field is offset and oddly angled", "It has rings and many icy moons"],
  questions: ["What collision or process tipped Uranus over?", "How do ice giant interiors work?", "Are any Uranian moons geologically active?"]
});

Object.assign(planets.Neptune, {
  day: "16.1 hours",
  gravity: "114% of Earth at cloud tops",
  atmosphere: "Hydrogen, helium, methane, and high-altitude clouds",
  temperature: "About -200 C at cloud tops",
  interior: "Ice giant with deep layers of water, ammonia, methane materials, and a rocky core",
  exploration: "Voyager 2 flew by Neptune in 1989 and revealed active weather, rings, arcs, and the remarkable moon Triton.",
  discoveries: ["Fast winds can exceed the speed of sound", "Triton orbits backward and may be captured", "Dark storm systems appear and change over time"],
  questions: ["What powers Neptune's strong weather so far from the Sun?", "Does Triton hide an ocean?", "How common are Neptune-like planets around other stars?"]
});

const atlasItems = [
  {
    category: "Solar System",
    title: "Solar System Census",
    text: "The solar system contains eight planets and five officially recognized dwarf planets: Ceres, Pluto, Haumea, Makemake, and Eris.",
    facts: ["Inner planets are rocky", "Outer planets are giants", "Dwarf planets orbit the Sun but have not cleared their neighborhoods"]
  },
  {
    category: "Planets",
    title: "Inner Planets",
    text: "Mercury, Venus, Earth, and Mars are terrestrial planets with solid surfaces. They orbit close to the Sun and are smaller than the outer planets.",
    facts: ["Mercury is smallest", "Venus is hottest", "Earth has known life", "Mars preserves evidence of ancient water"]
  },
  {
    category: "Planets",
    title: "Outer Planets",
    text: "Jupiter and Saturn are gas giants. Uranus and Neptune are ice giants, containing more water, ammonia, and methane ices in their interiors.",
    facts: ["No hard Earth-like surface", "Many moons", "Ring systems exist around all four giant planets"]
  },
  {
    category: "Moons",
    title: "Ocean Worlds",
    text: "Several moons may contain subsurface oceans, including Europa, Enceladus, Titan, Ganymede, and Callisto, making them major astrobiology targets.",
    facts: ["Europa has an icy shell", "Enceladus vents plumes", "Titan has methane weather"]
  },
  {
    category: "Missions",
    title: "Voyager Legacy",
    text: "Voyager 1 and Voyager 2 launched in 1977. Voyager 2 remains the only spacecraft to visit Uranus and Neptune.",
    facts: ["Outer planet flybys", "Golden Records aboard", "Now exploring interstellar space"]
  },
  {
    category: "Missions",
    title: "Mars Exploration",
    text: "Mars missions study climate, geology, water history, and habitability using orbiters, landers, rovers, and helicopters.",
    facts: ["Perseverance caches samples", "Curiosity studies ancient environments", "Orbiters map minerals and weather"]
  },
  {
    category: "Rockets",
    title: "How Rockets Reach Orbit",
    text: "A rocket must accelerate sideways fast enough that as it falls, Earth curves away beneath it. Low Earth orbit requires roughly 7.8 km/s orbital speed.",
    facts: ["Staging drops empty mass", "Engines work in vacuum", "Payload fairings protect spacecraft during ascent"]
  },
  {
    category: "Astronauts",
    title: "Human Spaceflight",
    text: "Astronauts train for launch, spacewalks, robotics, science operations, emergency procedures, and life in microgravity.",
    facts: ["Microgravity affects muscles and bones", "Spacewalks use pressurized suits", "Crewed missions depend on ground teams"]
  },
  {
    category: "Universe",
    title: "Black Holes",
    text: "Black holes are huge concentrations of matter packed into tiny spaces. Their event horizons mark boundaries where escape becomes impossible.",
    facts: ["Detected by effects on surroundings", "Can have accretion disks", "Sagittarius A* sits at the Milky Way's center"]
  },
  {
    category: "Universe",
    title: "Galaxies",
    text: "Galaxies are gravity-bound systems of stars, planets, gas, dust, and dark matter. They can be spiral, elliptical, or irregular.",
    facts: ["Largest contain trillions of stars", "Milky Way spans more than 100,000 light-years", "Galaxies gather into groups and clusters"]
  },
  {
    category: "Universe",
    title: "Cosmic Web",
    text: "Galaxy groups, clusters, superclusters, walls, filaments, and voids form the large-scale structure of the universe.",
    facts: ["Gravity organizes matter", "Voids are vast underdense regions", "Superclusters are not always gravitationally bound"]
  },
  {
    category: "Telescopes",
    title: "Hubble and Webb",
    text: "Hubble observes mainly visible and ultraviolet light. Webb specializes in infrared light, helping study early galaxies, stars, planets, and dust-hidden regions.",
    facts: ["Hubble launched in 1990", "Webb launched in 2021", "Infrared light reveals cooler and distant objects"]
  }
];

atlasItems.push(
  {
    category: "Solar System",
    title: "The Sun as the System Engine",
    text: "The Sun contains almost all the mass in the solar system and drives space weather through light, heat, solar wind, flares, and coronal mass ejections.",
    facts: ["The Sun is a G-type main-sequence star", "Solar wind shapes the heliosphere", "Sunlight powers weather and photosynthesis on Earth"],
    detail: "Solar activity can disturb radio communications, satellites, navigation systems, and power grids. Studying the Sun helps protect technology and explains how stars influence planets."
  },
  {
    category: "Solar System",
    title: "Small Bodies",
    text: "Asteroids, comets, meteoroids, Kuiper Belt objects, and dust preserve leftovers from solar system formation.",
    facts: ["Comets grow comas and tails near the Sun", "Asteroids are mostly rocky or metallic", "Meteorites let laboratories study space material directly"],
    detail: "Small bodies are scientifically valuable because they changed less than planets did. They also matter for planetary defense because some near-Earth objects can cross Earth's orbit."
  },
  {
    category: "Planets",
    title: "Why Planets Have Seasons",
    text: "Seasons are caused mostly by axial tilt, not distance from the Sun. A hemisphere tilted toward the Sun receives more direct sunlight and longer days.",
    facts: ["Earth's tilt is about 23.5 degrees", "Mars has seasons too", "Uranus has extreme seasons because it rotates on its side"],
    detail: "Planetary seasons can shape polar caps, storms, atmospheric circulation, and surface frost. Comparing seasons across planets helps scientists understand climate physics."
  },
  {
    category: "Planets",
    title: "Atmospheres as Time Capsules",
    text: "A planet's atmosphere records gravity, temperature, chemistry, solar radiation, volcanism, impacts, and sometimes biological activity.",
    facts: ["Mars lost much of its early atmosphere", "Venus kept a massive heat-trapping atmosphere", "Earth's oxygen rose because of life"],
    detail: "Atmospheres can be read remotely by spectroscopy. That same technique helps astronomers study exoplanet atmospheres around distant stars."
  },
  {
    category: "Moons",
    title: "Galilean Moons",
    text: "Io, Europa, Ganymede, and Callisto are Jupiter's four largest moons, first observed by Galileo Galilei in 1610.",
    facts: ["Io is volcanic", "Europa likely has an ocean", "Ganymede is the largest moon in the solar system", "Callisto is heavily cratered"],
    detail: "These moons showed that not everything orbits Earth, strengthening the case for a Sun-centered solar system."
  },
  {
    category: "Moons",
    title: "Titan",
    text: "Titan is Saturn's largest moon and one of the only places besides Earth known to have stable liquids on its surface.",
    facts: ["Thick nitrogen-rich atmosphere", "Methane and ethane lakes", "Dragonfly mission will explore Titan by rotorcraft"],
    detail: "Titan is cold enough that methane can behave somewhat like water does on Earth, cycling through clouds, rain, rivers, lakes, and seas."
  },
  {
    category: "Missions",
    title: "Apollo Program",
    text: "Apollo demonstrated crewed lunar landing, surface exploration, sample return, deep-space navigation, and large-scale mission operations.",
    facts: ["Apollo 11 landed in 1969", "Six Apollo missions landed humans on the Moon", "Astronauts returned lunar rocks and soil"],
    detail: "Apollo samples still support research today. They help scientists date lunar surfaces and reconstruct the early impact history of the Earth-Moon system."
  },
  {
    category: "Missions",
    title: "Artemis Program",
    text: "Artemis aims to return astronauts to the Moon, build lunar exploration capability, and prepare technologies for deeper space missions.",
    facts: ["Focus on the lunar south polar region", "Orion carries crew", "SLS provides heavy-lift launch capability"],
    detail: "The lunar south pole is scientifically interesting because permanently shadowed regions may contain water ice and other volatiles."
  },
  {
    category: "Telescopes",
    title: "How Telescopes See Time",
    text: "Light travels at a finite speed, so looking farther into space means seeing objects as they were in the past.",
    facts: ["The Moon is about 1.3 light-seconds away", "The Sun is about 8 light-minutes away", "Distant galaxies can show early cosmic history"],
    detail: "Large telescopes are time machines in a literal observational sense. They collect old light that has crossed space for years, millions of years, or billions of years."
  },
  {
    category: "Universe",
    title: "Dark Matter",
    text: "Dark matter is unseen mass inferred from gravity. It helps explain galaxy rotation, gravitational lensing, and the growth of cosmic structure.",
    facts: ["Does not emit ordinary light", "Detected through gravity", "A major component of the universe's matter"],
    detail: "Scientists do not yet know what dark matter is made of. Its effects are mapped by studying galaxy motion, galaxy clusters, and the cosmic microwave background."
  },
  {
    category: "Universe",
    title: "Exoplanets",
    text: "Exoplanets are planets beyond our solar system. Thousands have been confirmed, from hot Jupiters to rocky worlds to mini-Neptunes.",
    facts: ["Transit method measures tiny dips in starlight", "Radial velocity tracks stellar wobble", "Some planets orbit in habitable zones"],
    detail: "The habitable zone is the range where liquid water could exist on a rocky planet's surface, but habitability also depends on atmosphere, geology, star activity, and time."
  },
  {
    category: "Universe",
    title: "Star Life Cycle",
    text: "Stars form in clouds of gas and dust, shine by nuclear fusion, and end as white dwarfs, neutron stars, or black holes depending on mass.",
    facts: ["Nebulae can be stellar nurseries", "Mass controls lifetime", "Heavy elements are forged in stars and explosions"],
    detail: "The atoms in planets and people were made by earlier generations of stars. Stellar evolution is also the origin story for much of chemistry."
  },
  {
    category: "Planets",
    title: "Mercury's Polar Ice",
    text: "Despite its closeness to the Sun, Mercury has permanently shadowed craters near its poles where water ice can remain cold and stable.",
    facts: ["Radar-bright deposits match polar cold traps", "MESSENGER confirmed evidence for ice", "No thick atmosphere spreads heat around"],
    detail: "Mercury is a good reminder that location alone does not decide a planet's conditions. Geometry, atmosphere, rotation, and terrain matter too."
  },
  {
    category: "Planets",
    title: "Venus as a Climate Warning",
    text: "Venus helps scientists understand how greenhouse gases, clouds, volcanism, and sunlight can reshape a rocky planet's climate.",
    facts: ["Carbon dioxide dominates the atmosphere", "Surface pressure crushes landers quickly", "Cloud layers reflect sunlight but trap heat below"],
    detail: "Studying Venus sharpens climate models and gives planetary scientists a dramatic comparison point for Earth-sized worlds."
  },
  {
    category: "Missions",
    title: "Parker Solar Probe",
    text: "Parker Solar Probe repeatedly dives near the Sun to sample the corona and solar wind closer than any previous spacecraft.",
    facts: ["Uses Venus gravity assists", "Protected by a heat shield", "Studies solar particles and magnetic fields"],
    detail: "The mission helps explain how the Sun launches streams of particles that affect planets, spacecraft, astronauts, and technology."
  },
  {
    category: "Astronauts",
    title: "Spacewalks",
    text: "Spacewalks let astronauts repair hardware, install instruments, test suits, and work outside spacecraft in a harsh vacuum environment.",
    facts: ["Suits are miniature spacecraft", "Astronauts train underwater", "Tethers and procedures manage risk"],
    detail: "Every spacewalk is choreographed carefully because tools, temperature, visibility, and body motion behave differently in orbit."
  },
  {
    category: "Rockets",
    title: "Reusable Launch Systems",
    text: "Reusable boosters are designed to survive ascent, separation, reentry, landing, inspection, and launch again.",
    facts: ["Reuse can lower cost", "Landing burns demand precise control", "Thermal and structural loads are severe"],
    detail: "Reusability changes launch operations from single-use transportation toward fleet management, refurbishment, and rapid cadence."
  },
  {
    category: "Universe",
    title: "Gravitational Lensing",
    text: "Mass bends spacetime, so galaxy clusters and other massive objects can magnify, stretch, or multiply images of more distant objects behind them.",
    facts: ["Predicted by general relativity", "Useful for mapping dark matter", "Can reveal very distant galaxies"],
    detail: "Lensing turns gravity into a cosmic telescope, helping astronomers see faint systems that would otherwise be hidden."
  }
);

const sceneProfiles = {
  Sun: {
    theme: "theme-sun",
    signal: "Solar flare theatre",
    mood: "The room heats into gold, plasma, and lens flare as if the exhibit glass is facing a living star.",
    notes: ["Watch for pulsing light around the solar core", "Best search terms: solar wind, flare, Parker", "Ambient sound shifts warmer and brighter"]
  },
  Mercury: {
    theme: "theme-mercury",
    signal: "Crater silence",
    mood: "Dusty stone tones and sharp light make the scene feel airless, close to the Sun, and ancient.",
    notes: ["Open the polar ice notes in the atlas", "Compare day length with orbital length", "Look for cratered surface clues"]
  },
  Venus: {
    theme: "theme-venus",
    signal: "Pressure chamber",
    mood: "Amber clouds, volcanic heat, and heavy haze turn the museum into a greenhouse-world descent.",
    notes: ["Search greenhouse or climate", "Use the comparison console for temperature context", "Quiz questions now include Venus climate"]
  },
  Earth: {
    theme: "theme-earth",
    signal: "Blue biosphere",
    mood: "Oceanic cyan, green landlight, and softer glows return the room to the only known living world.",
    notes: ["Open atmosphere notes", "Compare gravity with nearby worlds", "Use glossary terms like biosignature"]
  },
  Mars: {
    theme: "theme-mars",
    signal: "Dust storm archive",
    mood: "Red-orange haze and darker canyon tones set the floor inside a rover-era Martian outpost.",
    notes: ["Search rovers or ancient water", "Open Mars exploration history", "Mission dossiers connect to sample science"]
  },
  Jupiter: {
    theme: "theme-jupiter",
    signal: "Storm giant",
    mood: "Bands of cream, copper, and blue pressure make the room feel huge, fast, and magnetically alive.",
    notes: ["Search Europa or magnetosphere", "Check the Jovian moon quiz items", "Storm and moon facts reward close reading"]
  },
  Saturn: {
    theme: "theme-saturn",
    signal: "Ringlight gallery",
    mood: "Pale gold rings and icy reflections give the exhibit a quiet, cathedral-like sweep.",
    notes: ["Search Titan or Enceladus", "Open ring notes in the planet panel", "Look for methane lake content"]
  },
  Uranus: {
    theme: "theme-uranus",
    signal: "Tilted ice chamber",
    mood: "Blue-green cold light and off-axis calm suggest a world tipped into impossible seasons.",
    notes: ["Compare rotation and seasons", "Search ice giants", "Notice how little spacecraft data exists"]
  },
  Neptune: {
    theme: "theme-neptune",
    signal: "Dark wind corridor",
    mood: "Deep cobalt and distant stormlight make the museum feel far from sunlight and full of fast weather.",
    notes: ["Search Triton", "Compare wind and orbit facts", "Open the science questions for Neptune"]
  }
};

const expeditionModes = [
  {
    title: "Atmosphere Scanner",
    text: "Follow how gases decide heat, pressure, color, weather, and habitability across worlds.",
    prompts: ["Venus traps heat", "Mars lost air", "Earth's oxygen carries a life story"]
  },
  {
    title: "Ocean Worlds Route",
    text: "Track the moons and planets where water, ice, salts, or exotic liquids may hide chemistry worth chasing.",
    prompts: ["Europa's ocean", "Enceladus plumes", "Titan methane seas"]
  },
  {
    title: "Mission Architect",
    text: "Think like mission control by pairing spacecraft goals with launch energy, instruments, risk, and terrain.",
    prompts: ["Flyby", "Orbiter", "Lander or rover"]
  },
  {
    title: "Deep Time Lens",
    text: "Use craters, rocks, light travel time, and star life cycles to read the universe as a record of the past.",
    prompts: ["Impact history", "Ancient light", "Stellar chemistry"]
  }
];

const missionDossiers = [
  {
    era: "Moon",
    title: "Apollo 11",
    text: "The first crewed lunar landing proved that humans could travel to another world, work on its surface, and return samples safely.",
    details: ["Crew: Neil Armstrong, Buzz Aldrin, Michael Collins", "Landing site: Sea of Tranquility", "Legacy: lunar geology, navigation, spacesuit operations, sample science"]
  },
  {
    era: "Outer Planets",
    title: "Voyager 1 and 2",
    text: "The Voyager spacecraft transformed knowledge of Jupiter, Saturn, Uranus, Neptune, rings, moons, magnetic fields, and the outer heliosphere.",
    details: ["Voyager 2 visited all four giant planets", "Both carry Golden Records", "Their data reshaped understanding of ocean worlds and volcanic moons"]
  },
  {
    era: "Mars",
    title: "Rovers and Landers",
    text: "Mars surface missions test whether ancient environments had water, chemistry, and energy sources that could have supported microbial life.",
    details: ["Viking searched for biology signals", "Curiosity studies ancient lake environments", "Perseverance collects samples for future return"]
  },
  {
    era: "Telescopes",
    title: "Hubble Space Telescope",
    text: "Hubble's long mission produced deep fields, galaxy evolution studies, precise cosmic expansion measurements, and iconic views of nebulae.",
    details: ["Serviced by astronauts", "Observed ultraviolet, visible, and near-infrared light", "Helped refine estimates for the age and expansion of the universe"]
  },
  {
    era: "Infrared",
    title: "James Webb Space Telescope",
    text: "Webb observes infrared light to study early galaxies, star-forming regions, exoplanet atmospheres, and objects hidden by dust.",
    details: ["Works near the Sun-Earth L2 region", "Uses a large segmented mirror", "Can detect faint heat signatures and stretched ancient light"]
  },
  {
    era: "Future",
    title: "Artemis and Beyond",
    text: "New lunar missions focus on sustained exploration, south polar science, crew systems, surface mobility, and preparation for Mars-scale challenges.",
    details: ["Water ice could support science and resources", "Gateway concepts support lunar orbit operations", "Long-duration missions test human resilience"]
  }
];

const glossary = [
  ["Accretion disk", "A rotating disk of gas, dust, and plasma falling toward a massive object such as a black hole or young star."],
  ["Asteroid belt", "A region between Mars and Jupiter containing many rocky leftovers from solar system formation."],
  ["Atmosphere", "A layer of gases held around a planet, moon, or star by gravity."],
  ["Dwarf planet", "A round object orbiting the Sun that has not cleared its orbital neighborhood."],
  ["Event horizon", "The boundary around a black hole beyond which nothing can escape."],
  ["Exoplanet", "A planet orbiting a star beyond our solar system."],
  ["Galaxy", "A large gravity-bound system of stars, gas, dust, planets, and dark matter."],
  ["Gravity assist", "A spacecraft maneuver that uses a planet's motion and gravity to change speed or direction."],
  ["Heliosphere", "The bubble-like region of space influenced by the solar wind from the Sun."],
  ["Kuiper Belt", "A distant region beyond Neptune populated by icy bodies, including Pluto."],
  ["Light-year", "The distance light travels in one year, about 9.46 trillion kilometers."],
  ["Nebula", "A cloud of gas and dust in space, often linked to star birth or star death."]
];

glossary.push(
  ["Albedo", "The fraction of sunlight a surface reflects. Ice has high albedo, while dark rock has lower albedo."],
  ["Aurora", "Light produced when charged particles interact with a planet's atmosphere near magnetic poles."],
  ["Biosignature", "A chemical, pattern, or measurement that could indicate life, though it must be checked carefully against nonliving explanations."],
  ["Coronal mass ejection", "A huge eruption of solar plasma and magnetic field from the Sun's corona."],
  ["Cryovolcanism", "Volcanic-like activity involving water, ammonia, methane, or other icy materials instead of molten rock."],
  ["Escape velocity", "The speed needed to leave a body's gravity without further propulsion."],
  ["Habitable zone", "The range around a star where liquid water could exist on the surface of a rocky planet, if conditions are right."],
  ["Magnetosphere", "A region around a planet controlled by its magnetic field, often interacting with solar wind."],
  ["Oort Cloud", "A distant, theoretical shell of icy bodies surrounding the solar system and feeding some long-period comets."],
  ["Planetary defense", "The effort to find, track, study, and if necessary deflect hazardous near-Earth objects."],
  ["Redshift", "The stretching of light toward longer wavelengths, often used to study cosmic expansion and distant galaxies."],
  ["Roche limit", "The distance within which tidal forces can tear apart an object held together mainly by gravity."],
  ["Solar wind", "A stream of charged particles flowing outward from the Sun."],
  ["Spectroscopy", "The study of light split into wavelengths, used to identify composition, temperature, motion, and atmospheric gases."],
  ["Tidal heating", "Internal heating caused by changing gravitational pulls, important for moons like Io and Europa."]
);

const quizQuestions = [
  {
    question: "Which planet is the largest in the solar system?",
    options: ["Jupiter", "Saturn", "Neptune", "Earth"],
    answer: "Jupiter"
  },
  {
    question: "What boundary around a black hole marks the point where escape becomes impossible?",
    options: ["Event horizon", "Asteroid belt", "Heliosphere", "Photosphere"],
    answer: "Event horizon"
  },
  {
    question: "Which two planets are classified as ice giants?",
    options: ["Uranus and Neptune", "Jupiter and Saturn", "Earth and Mars", "Venus and Mercury"],
    answer: "Uranus and Neptune"
  },
  {
    question: "What is the Milky Way?",
    options: ["Our home galaxy", "A moon of Saturn", "A type of rocket engine", "A Mars rover"],
    answer: "Our home galaxy"
  }
];

quizQuestions.push(
  {
    question: "Which spacecraft was the only one to fly by Uranus and Neptune?",
    options: ["Voyager 2", "Cassini", "Juno", "New Horizons"],
    answer: "Voyager 2"
  },
  {
    question: "Why is Venus hotter than Mercury even though Mercury is closer to the Sun?",
    options: ["Venus has a thick heat-trapping atmosphere", "Venus is larger than Jupiter", "Mercury reflects all sunlight", "Venus has no sunlight"],
    answer: "Venus has a thick heat-trapping atmosphere"
  },
  {
    question: "Which Saturn moon has lakes and seas of methane and ethane?",
    options: ["Titan", "Europa", "Phobos", "Charon"],
    answer: "Titan"
  },
  {
    question: "What technique splits light to study composition and motion?",
    options: ["Spectroscopy", "Staging", "Docking", "Aerobraking"],
    answer: "Spectroscopy"
  },
  {
    question: "Which Jovian moon is famous for active volcanoes?",
    options: ["Io", "Callisto", "Titan", "Triton"],
    answer: "Io"
  },
  {
    question: "What is an exoplanet?",
    options: ["A planet orbiting another star", "A comet tail", "A moon of Earth", "A type of spacesuit"],
    answer: "A planet orbiting another star"
  },
  {
    question: "What mostly causes seasons on planets like Earth and Mars?",
    options: ["Axial tilt", "Distance alone", "Asteroid belts", "Solar eclipses"],
    answer: "Axial tilt"
  },
  {
    question: "Which telescope is optimized for infrared observations of faint and distant objects?",
    options: ["James Webb Space Telescope", "Sputnik 1", "Apollo 11", "Voyager 1"],
    answer: "James Webb Space Telescope"
  }
);

quizQuestions.push(
  {
    question: "What powers the Sun's light and heat?",
    options: ["Nuclear fusion in its core", "Burning oxygen", "Lightning in the corona", "Reflected light from planets"],
    answer: "Nuclear fusion in its core"
  },
  {
    question: "Which planet has the Great Red Spot?",
    options: ["Jupiter", "Mars", "Venus", "Uranus"],
    answer: "Jupiter"
  },
  {
    question: "Which moon sprays water-rich plumes from a hidden ocean?",
    options: ["Enceladus", "Mercury", "Deimos", "Ganymede"],
    answer: "Enceladus"
  },
  {
    question: "What is the region influenced by the Sun's solar wind called?",
    options: ["Heliosphere", "Event horizon", "Kuiper crack", "Galactic core"],
    answer: "Heliosphere"
  },
  {
    question: "Which planet rotates on its side compared with the others?",
    options: ["Uranus", "Earth", "Saturn", "Mercury"],
    answer: "Uranus"
  },
  {
    question: "What do reusable boosters try to do after launch?",
    options: ["Return and fly again", "Turn into satellites", "Land on the Moon every time", "Become telescope mirrors"],
    answer: "Return and fly again"
  },
  {
    question: "What force lets a spacecraft gain or change speed during a close planet flyby?",
    options: ["Gravity assist", "Photosynthesis", "Ring shadowing", "Cloud braking only"],
    answer: "Gravity assist"
  },
  {
    question: "Why are some moon oceans exciting for astrobiology?",
    options: ["They may combine liquid water, chemistry, and energy", "They are hotter than the Sun", "They have no gravity", "They are visible from every telescope"],
    answer: "They may combine liquid water, chemistry, and energy"
  }
);

const canvas = document.getElementById("starfield");
const context = canvas.getContext("2d");
let stars = [];
let activeFilter = "All";
let quizIndex = 0;
let quizOrder = [];
let currentQuizOptions = [];
let currentPlanetName = "Earth";
let activeSoundId = "cosmicRelaxation";
let soundEnabled = false;
let soundConsoleOpen = false;

const soundscapes = [
  {
    id: "cosmicRelaxation",
    name: "Cosmic Relaxation",
    description: "Pure cosmic mind relaxation",
    audioSrc: "assets/audio/cosmic-relaxation.wav",
    highlights: ["Warm low drone", "Slow meditative shimmer", "Soft cosmic chimes"]
  },
  {
    id: "interstellarJourney",
    name: "Interstellar Journey",
    description: "Long-range space travel ambience",
    audioSrc: "assets/audio/interstellar-journey.wav",
    highlights: ["Deep engine-like undertone", "Travel pulse", "Wide sci-fi atmosphere"]
  },
  {
    id: "deepSpaceScenes",
    name: "Deep Space Scenes",
    description: "4K deep relaxation atmosphere",
    audioSrc: "assets/audio/deep-space-scenes.wav",
    highlights: ["Dark-space bass bed", "Sparse distant sparkles", "Slow cinematic tension"]
  },
  {
    id: "starlitDreaming",
    name: "Starlit Dreaming",
    description: "Night sky dreaming and meditation",
    audioSrc: "assets/audio/starlit-dreaming.wav",
    highlights: ["Gentle night-sky tone", "Dreamy high notes", "Calm floating rhythm"]
  },
  {
    id: "planetFlight",
    name: "Planet Flight",
    description: "Flying through planets relaxation",
    audioSrc: "assets/audio/planet-flight.wav",
    highlights: ["Forward motion pulse", "Bright planet flyby chimes", "Soft launch-pad depth"]
  },
  {
    id: "observatoryStargaze",
    name: "Observatory Stargaze",
    description: "Planetarium skywatching background",
    audioSrc: "assets/audio/observatory-stargaze.wav",
    highlights: ["Quiet observatory ambience", "Telescope-night calm", "Clean stargazing texture"]
  }
];

function setCanvasSize() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  stars = Array.from({ length: Math.min(180, Math.floor(window.innerWidth / 6)) }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 1.7 + 0.35,
    speed: Math.random() * 0.24 + 0.08,
    alpha: Math.random() * 0.7 + 0.25
  }));
}

function animateStars() {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  stars.forEach((star) => {
    star.y += star.speed;
    if (star.y > window.innerHeight + 4) {
      star.y = -4;
      star.x = Math.random() * window.innerWidth;
    }
    context.beginPath();
    context.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    context.fill();
  });
  requestAnimationFrame(animateStars);
}

function shuffleArray(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function resetQuizOrder() {
  quizOrder = shuffleArray(quizQuestions.map((_, index) => index));
  quizIndex = 0;
}

function applySceneTheme(name) {
  const profile = sceneProfiles[name] || sceneProfiles.Earth;
  document.body.classList.remove(...Object.values(sceneProfiles).map((scene) => scene.theme));
  document.body.classList.add(profile.theme);
  currentPlanetName = name;
  updateAmbientTone(name);
}

function triggerSceneBurst() {
  const flash = document.getElementById("sceneFlash");
  flash.classList.remove("burst");
  void flash.offsetWidth;
  flash.classList.add("burst");
}

function renderSceneBriefing(name) {
  const profile = sceneProfiles[name] || sceneProfiles.Earth;
  const planet = planets[name];
  document.getElementById("sceneBriefing").innerHTML = `
    <article>
      <span class="signal">${profile.signal}</span>
      <h3>${name} scene active</h3>
      <p>${profile.mood}</p>
    </article>
    <article>
      <span class="signal">Curator route</span>
      <h3>${planet.feature}</h3>
      <ul>${profile.notes.map((note) => `<li>${note}</li>`).join("")}</ul>
    </article>
  `;
}

function selectPlanet(name, shouldPauseOrbit = true) {
  document.querySelectorAll(".planet-button").forEach((planetButton) => {
    planetButton.classList.toggle("active", planetButton.dataset.planet === name);
  });
  if (shouldPauseOrbit) {
    document.getElementById("solarView").classList.add("paused");
  }
  triggerSceneBurst();
  applySceneTheme(name);
  renderPlanetPanel(name);
  renderSceneBriefing(name);
}

function renderPlanetPanel(name) {
  const planet = planets[name];
  const panel = document.getElementById("planetPanel");
  const avatarClass = `p-${name.toLowerCase()}`;
  document.querySelectorAll("[data-select-planet]").forEach((button) => {
    button.classList.toggle("active", button.dataset.selectPlanet === name);
  });
  panel.classList.remove("revealing");
  void panel.offsetWidth;
  panel.classList.add("revealing");
  panel.innerHTML = `
    <div class="world-card">
      <div class="world-hero">
        <div class="planet-avatar ${avatarClass}" aria-hidden="true"></div>
        <div class="world-title">
          <p class="panel-kicker">Selected signal</p>
          <h3>${name}</h3>
          <p class="planet-meta">${planet.meta}</p>
        </div>
      </div>
      <p class="cinema-copy">${planet.text}</p>
      <dl class="stat-constellation">
        <div class="stat-chip"><dt>Type</dt><dd>${planet.type}</dd></div>
        <div class="stat-chip"><dt>Diameter</dt><dd>${planet.diameter}</dd></div>
        <div class="stat-chip"><dt>Distance</dt><dd>${planet.distance}</dd></div>
        <div class="stat-chip"><dt>Gravity</dt><dd>${planet.gravity}</dd></div>
      </dl>
      <div class="world-fact-strip">
        ${planet.facts.map((fact) => `<span>${fact}</span>`).join("")}
      </div>
      <div class="planet-deep-dive">
        <details open>
          <summary>Interior and surface</summary>
          <div><p>${planet.interior}</p></div>
        </details>
        <details>
          <summary>Exploration history</summary>
          <div><p>${planet.exploration}</p></div>
        </details>
        <details>
          <summary>Major discoveries</summary>
          <div><ul>${planet.discoveries.map((item) => `<li>${item}</li>`).join("")}</ul></div>
        </details>
        <details>
          <summary>Open science questions</summary>
          <div><ul>${planet.questions.map((item) => `<li>${item}</li>`).join("")}</ul></div>
        </details>
      </div>
    </div>
  `;
}

function renderPlanetPicker() {
  document.getElementById("planetPicker").innerHTML = Object.keys(planets)
    .map((name) => `<button type="button" data-select-planet="${name}">${name}</button>`)
    .join("");
}

function renderAtlas() {
  const query = document.getElementById("atlasSearch").value.trim().toLowerCase();
  const grid = document.getElementById("atlasGrid");
  const filtered = atlasItems.filter((item) => {
    const matchesFilter = activeFilter === "All" || item.category === activeFilter;
    const haystack = `${item.category} ${item.title} ${item.text} ${item.facts.join(" ")}`.toLowerCase();
    return matchesFilter && haystack.includes(query);
  });

  grid.innerHTML = filtered
    .map((item) => `
      <article class="atlas-card">
        <span class="tag">${item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <ul>${item.facts.map((fact) => `<li>${fact}</li>`).join("")}</ul>
        ${item.detail ? `<details><summary>Open exhibit notes</summary><div><p>${item.detail}</p></div></details>` : ""}
      </article>
    `)
    .join("") || `<article class="atlas-card"><h3>No exhibit found</h3><p>Try a broader term like planet, moon, mission, or galaxy.</p></article>`;
}

function renderMissionDossiers() {
  document.getElementById("missionDossier").innerHTML = missionDossiers
    .map((mission) => `
      <article>
        <span class="tag">${mission.era}</span>
        <h3>${mission.title}</h3>
        <p>${mission.text}</p>
        <details>
          <summary>Mission notes</summary>
          <div><ul>${mission.details.map((detail) => `<li>${detail}</li>`).join("")}</ul></div>
        </details>
      </article>
    `)
    .join("");
}

function renderFilters() {
  const filters = ["All", ...new Set(atlasItems.map((item) => item.category))];
  document.getElementById("atlasFilters").innerHTML = filters
    .map((filter) => `<button class="filter-button ${filter === activeFilter ? "active" : ""}" type="button" data-filter="${filter}">${filter}</button>`)
    .join("");
}

function renderPlanetTable() {
  document.getElementById("planetTable").innerHTML = Object.entries(planets)
    .filter(([name]) => name !== "Sun")
    .map(([name, planet]) => `
      <tr>
        <td><strong>${name}</strong></td>
        <td>${planet.type}</td>
        <td>${planet.distance}</td>
        <td>${planet.orbit}</td>
        <td>${planet.moons}</td>
        <td>${planet.feature}</td>
      </tr>
    `)
    .join("");
}

function renderExpeditionModes() {
  document.getElementById("expeditionGrid").innerHTML = expeditionModes
    .map((mode) => `
      <article class="expedition-card">
        <h3>${mode.title}</h3>
        <p>${mode.text}</p>
        <ul>${mode.prompts.map((prompt) => `<li>${prompt}</li>`).join("")}</ul>
      </article>
    `)
    .join("");
}

function renderGlossary() {
  document.getElementById("glossaryGrid").innerHTML = glossary
    .map(([term, definition]) => `
      <article class="term-card">
        <button type="button">${term}</button>
        <p>${definition}</p>
      </article>
    `)
    .join("");
}

function renderQuiz() {
  if (!quizOrder.length) {
    resetQuizOrder();
  }
  const current = quizQuestions[quizOrder[quizIndex]];
  currentQuizOptions = shuffleArray(current.options);
  document.getElementById("quizQuestion").innerHTML = `<h3>${current.question}</h3>`;
  document.getElementById("quizOptions").innerHTML = currentQuizOptions
    .map((option) => `<button class="quiz-option" type="button">${option}</button>`)
    .join("");
  document.getElementById("quizFeedback").textContent = "";
}

function getActiveSound() {
  return soundscapes.find((soundscape) => soundscape.id === activeSoundId) || soundscapes[0];
}

function updateSoundButton() {
  const toggle = document.getElementById("soundToggle");
  if (soundConsoleOpen) {
    toggle.textContent = "Minimize";
  } else {
    toggle.textContent = soundEnabled ? "Now Playing" : "Soundscape";
  }
  toggle.setAttribute("aria-pressed", String(soundConsoleOpen));
  toggle.setAttribute("aria-expanded", String(soundConsoleOpen));
}

function setSoundConsoleOpen(isOpen) {
  soundConsoleOpen = isOpen;
  document.getElementById("soundConsole").classList.toggle("open", isOpen);
  updateSoundButton();
}

function loadEmbeddedSound() {
  const track = getActiveSound();
  const audio = document.getElementById("ambientAudio");
  const status = document.getElementById("audioStatus");
  if (!audio.src.endsWith(track.audioSrc)) {
    audio.src = track.audioSrc;
  }
  audio.volume = 0.82;
  status.textContent = `${track.name} is loaded locally.`;
}

function playEmbeddedSound() {
  const track = getActiveSound();
  const audio = document.getElementById("ambientAudio");
  const status = document.getElementById("audioStatus");
  loadEmbeddedSound();
  return audio.play()
    .then(() => {
      soundEnabled = true;
      status.textContent = `Playing ${track.name}.`;
      document.getElementById("playSound").textContent = "Pause Track";
      updateSoundButton();
    })
    .catch(() => {
      soundEnabled = false;
      status.textContent = `Press Play in the audio bar to start ${track.name}.`;
      document.getElementById("playSound").textContent = "Play Selected Track";
      updateSoundButton();
    });
}

function updateAmbientTone() {
  return undefined;
}

function setSoundEnabled(enabled) {
  setSoundConsoleOpen(true);
  if (enabled) {
    playEmbeddedSound();
  } else {
    soundEnabled = false;
    document.getElementById("ambientAudio").pause();
    document.getElementById("audioStatus").textContent = "Paused.";
    document.getElementById("playSound").textContent = "Play Selected Track";
    updateSoundButton();
  }
}

function setActiveSound(id, shouldStart = true) {
  activeSoundId = id;
  const track = getActiveSound();
  document.querySelectorAll(".sound-track").forEach((button) => {
    button.classList.toggle("active", button.dataset.soundTrack === activeSoundId);
  });
  document.getElementById("activeSoundName").textContent = `${track.name} | ${track.description}`;
  document.getElementById("soundHighlights").innerHTML = track.highlights
    .map((highlight) => `<span>${highlight}</span>`)
    .join("");
  if (shouldStart || soundEnabled) {
    setSoundEnabled(true);
  } else {
    loadEmbeddedSound();
  }
}

function renderSoundTracks() {
  document.getElementById("soundTracks").innerHTML = soundscapes
    .map((soundscape) => `<button class="sound-track" type="button" data-sound-track="${soundscape.id}">${soundscape.name}</button>`)
    .join("");
  setActiveSound(activeSoundId, false);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll("[data-reveal]").forEach((element) => {
  revealObserver.observe(element);
});

document.querySelectorAll(".planet-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectPlanet(button.dataset.planet);
  });
});

document.getElementById("planetPicker").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  selectPlanet(button.dataset.selectPlanet);
});

document.getElementById("solarView").addEventListener("dblclick", () => {
  document.getElementById("solarView").classList.remove("paused");
  document.querySelectorAll(".planet-button").forEach((button) => {
    button.classList.remove("active");
  });
});

document.getElementById("atlasSearch").addEventListener("input", renderAtlas);

document.getElementById("atlasFilters").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  activeFilter = button.dataset.filter;
  renderFilters();
  renderAtlas();
});

document.getElementById("glossaryGrid").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  button.closest(".term-card").classList.toggle("open");
});

document.getElementById("quizOptions").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const answer = quizQuestions[quizOrder[quizIndex]].answer;
  document.querySelectorAll(".quiz-option").forEach((option) => {
    option.disabled = true;
    option.classList.toggle("correct", option.textContent === answer);
  });
  button.classList.toggle("incorrect", button.textContent !== answer);
  document.getElementById("quizFeedback").textContent =
    button.textContent === answer ? "Correct. Mission control approves." : `Not quite. The answer is ${answer}.`;
});

document.getElementById("nextQuestion").addEventListener("click", () => {
  quizIndex = (quizIndex + 1) % quizQuestions.length;
  if (quizIndex === 0) {
    resetQuizOrder();
  }
  renderQuiz();
});

document.getElementById("soundToggle").addEventListener("click", () => {
  setSoundConsoleOpen(!soundConsoleOpen);
});

document.getElementById("soundClose").addEventListener("click", () => {
  setSoundConsoleOpen(false);
});

document.getElementById("soundTracks").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  setActiveSound(button.dataset.soundTrack);
});

document.getElementById("playSound").addEventListener("click", () => {
  const audio = document.getElementById("ambientAudio");
  if (!audio.paused) {
    setSoundEnabled(false);
    return;
  }
  setSoundEnabled(true);
});

document.getElementById("ambientAudio").addEventListener("play", () => {
  const track = getActiveSound();
  soundEnabled = true;
  document.getElementById("audioStatus").textContent = `Playing ${track.name}.`;
  document.getElementById("playSound").textContent = "Pause Track";
  updateSoundButton();
});

document.getElementById("ambientAudio").addEventListener("pause", () => {
  if (document.getElementById("ambientAudio").ended) return;
  soundEnabled = false;
  document.getElementById("playSound").textContent = "Play Selected Track";
  updateSoundButton();
});

renderSoundTracks();
updateSoundButton();
renderPlanetPicker();
selectPlanet("Earth", false);
renderFilters();
renderAtlas();
renderPlanetTable();
renderMissionDossiers();
renderExpeditionModes();
renderGlossary();
resetQuizOrder();
renderQuiz();
setCanvasSize();
animateStars();
window.addEventListener("resize", setCanvasSize);
