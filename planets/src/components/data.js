const data = [
    {"planet": "Mercury",
    "link": "https://en.wikipedia.org/wiki/Mercury_(planet)",
"overview": "The first planet from the Sun and the smallest in the Solar System. Mercury is classified as a terrestrial planet, with roughly the same surface gravity as Mars.",
"internalStructure": "Mercury appears to have a solid silicate crust and mantle overlying a solid, metallic outer core layer, a deeper liquid core layer, and a solid inner core. The composition of the iron-rich core remains uncertain, but it likely contains nickel, silicon and perhaps sulfur and carbon, plus trace amounts of other elements.",
"surfaceGeology": "The surface of Mercury is heavily cratered, as a result of countless impact events that have accumulated over billions of years. Its largest crater, Caloris Planitia, has a diameter of 1,550 km (960 mi), which is about one-third the diameter of the planet (4,880 km or 3,030 mi).",
"rotationTime": "58.646 d",
"revolutionTime": "88 d",
"radius": "2,439.7±1.0 km",
"temperature": "164 °C"},

{
    "planet": "Venus",
    "link": "https://en.wikipedia.org/wiki/Venus",
    "overview": "Venus is the second planet from the Sun. It is a terrestrial planet and is the closest in mass and size to its orbital neighbour Earth. Venus has by far the densest atmosphere of the terrestrial planets, composed mostly of carbon dioxide with a thick, global sulfuric acid cloud cover.",
    "internalStructure": "Without data from reflection seismology or knowledge of its moment of inertia, little direct information is available about the internal structure and geochemistry of Venus. The similarity in size and density between Venus and Earth suggests that they share a similar internal structure: a core, mantle, and crust.",
    "surfaceGeology": "At the surface it has a mean temperature of 737 K (464 °C; 867 °F) and a pressure 92 times that of Earth's at sea level. These extreme conditions compress carbon dioxide into a supercritical state at Venus's surface.",
    "rotationTime": "243 d",
    "revolutionTime": "225 d",
    "radius": "6,051.8±1.0 km",
    "temperature": "464 °C"
},

{
    "planet": "Earth",
    "link": "https://en.wikipedia.org/wiki/Earth",
    "overview": "Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being an ocean world, the only one in the Solar System sustaining liquid surface water.",
    "internalStructure": "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle. The crust is separated from the mantle by the Mohorovičić discontinuity.",
    "surfaceGeology": "Earth's surface is the boundary between the atmosphere, and the solid Earth and oceans. Defined in this way, it has an area of about 510 million km2 (197 million sq mi). Earth can be divided into two hemispheres: by latitude into the polar Northern and Southern hemispheres; or by longitude into the continental Eastern and Western hemispheres.",
    "rotationTime": "0.99 d",
    "revolutionTime": "365.26 d",
    "radius": "6,371 km",
    "temperature": "16 °C"
},

{
    "planet": "Mars",
    "link": "https://en.wikipedia.org/wiki/Mars",
    "overview": "Mars is the fourth planet from the Sun. The surface of Mars is orange-red because it is covered in iron(III) oxide dust, giving it the nickname 'the Red Planet'. Mars is among the brightest objects in Earth's sky, and its high-contrast albedo features have made it a common subject for telescope viewing.",
    "internalStructure": "Like Earth, Mars is differentiated into a dense metallic core overlaid by less dense rocky layers. The outermost layer is the crust, which is on average about 42–56 kilometres (26–35 mi) thick.",
    "surfaceGeology": "Mars is a terrestrial planet with a surface that consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The Martian surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt and may be similar to andesitic rocks on Earth, or silica glass.",
    "rotationTime": "24.6 h",
    "revolutionTime": "687 d",
    "radius": "6,779 km",
    "temperature": "−64 °C"
},

{
    "planet": "Jupiter",
    "link": "https://en.wikipedia.org/wiki/Jupiter",
    "overview": "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than 2.5 times that of all the other planets in the Solar System combined and slightly less than one-thousandth the mass of the Sun.",
    "internalStructure": "Data from the Juno mission showed that Jupiter has a diffuse core that mixes into its mantle, extending for 30–50% of the planet's radius, and comprising heavy elements with a combined mass 7–25 times the Earth. This mixing process could have arisen during formation, while the planet accreted solids and gases from the surrounding nebula.",
    "surfaceGeology": "At a surface depth where the atmospheric pressure level is 1 bar (0.10 MPa), the temperature is around 165 K (−108 °C; −163 °F). The region where supercritical hydrogen changes gradually from a molecular fluid to a metallic fluid spans pressure ranges of 50–400 GPa with temperatures of 5,000–8,400 K (4,730–8,130 °C; 8,540–14,660 °F), respectively.",
    "rotationTime": "398.88 d",
    "revolutionTime": "11.86 y",
    "radius": "69,911 km",
    "temperature": "−185 °C"
},

{
    "planet": "Saturn",
    "link": "https://en.wikipedia.org/wiki/Saturn",
    "overview": "Saturn is the sixth planet from the Sun and the second largest in the Solar System, after Jupiter. It is a gas giant, with an average radius of about nine times that of Earth. It has an eighth the average density of Earth, but is over 95 times more massive.",
    "internalStructure": "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
    "surfaceGeology": "Saturn is a gas giant, composed predominantly of hydrogen and helium. It lacks a definite surface, though it is likely to have a solid core. The planet's rotation makes it an oblate spheroid—a ball flattened at the poles and bulging at the equator.",
    "rotationTime": "398.88 d",
    "revolutionTime": "29.4475 y",
    "radius": "58,232 km",
    "temperature": "-178 °C"
},

{
    "planet": "Uranus",
    "link": "https://en.wikipedia.org/wiki/Uranus",
    "overview": "Uranus is the seventh planet from the Sun. It is a gaseous cyan-coloured ice giant. Most of the planet is made of water, ammonia, and methane in a supercritical phase of matter, which astronomy calls 'ice' or volatiles. The planet's atmosphere has a complex layered cloud structure and has the lowest minimum temperature (49 K (−224 °C; −371 °F)) of all the Solar System's planets.",
    "internalStructure": "Uranus's mass is roughly 14.5 times that of Earth, making it the least massive of the giant planets. Its diameter is slightly larger than Neptune's at roughly four times that of Earth. A resulting density of 1.27 g/cm3 makes Uranus the second least dense planet, after Saturn.",
    "surfaceGeology": "The fluid interior structure of Uranus means that it has no solid surface. The gaseous atmosphere gradually transitions into the internal liquid layers.[17] For the sake of convenience, a revolving oblate spheroid set at the point at which atmospheric pressure equals 1 bar (100 kPa) is conditionally designated as a 'surface'.",
    "rotationTime": "369.66 d",
    "revolutionTime": "84.0205 y",
    "radius": "25,362±7 km",
    "temperature": "−224 °C"
},

{
    "planet": "Neptune",
    "link": "https://en.wikipedia.org/wiki/Neptune",
    "overview": "Neptune is the eighth and farthest known planet from the Sun. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth. Compared to its fellow ice giant Uranus, Neptune is slightly more massive, but denser and smaller.",
    "internalStructure": "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5 to 10% of its mass and extends perhaps 10 to 20% of the way towards the core. Pressure in the atmosphere reaches about 10 GPa, or about 105 atmospheres. Increasing concentrations of methane, ammonia and water are found in the lower regions of the atmosphere.",
    "surfaceGeology": "The mantle is equivalent to 10 to 15 Earth masses and is rich in water, ammonia and methane. As is customary in planetary science, this mixture is called icy even though it is a hot, dense supercritical fluid. This fluid, which has a high electrical conductivity, is sometimes called a water–ammonia ocean.",
    "rotationTime": "367.49 d",
    "revolutionTime": "164.8 y",
    "radius": "24,622±19 km",
    "temperature": "−218 °C"
},

];

export default data;