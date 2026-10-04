import { Genre, Movie, MovieDetails } from '../types/movie';

export const TMDB_GENRES: Genre[] = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Sci-Fi' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' }
];

export const FALLBACK_MOVIES: MovieDetails[] = [
  {
    id: 693134,
    title: 'Dune: Part Two',
    original_title: 'Dune: Part Two',
    overview: 'Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.',
    poster_path: '/czembW0Rk1Ke7lCJGahbOhdCuhV.jpg',
    backdrop_path: '/xOMo8BRK7PfcJv9JCnx7s5200bm.jpg',
    release_date: '2024-02-27',
    vote_average: 8.2,
    vote_count: 5420,
    popularity: 432.5,
    genre_ids: [878, 12, 18],
    genres: [
      { id: 878, name: 'Science Fiction' },
      { id: 12, name: 'Adventure' },
      { id: 18, name: 'Drama' }
    ],
    runtime: 166,
    tagline: 'Long live the fighters.',
    status: 'Released',
    budget: 190000000,
    revenue: 711844358,
    original_language: 'en',
    credits: {
      cast: [
        { id: 1190668, name: 'Timothée Chalamet', character: 'Paul Atreides', profile_path: '/BE2sdjpgsa2rNTFa66f7upkaOP.jpg', order: 0 },
        { id: 505710, name: 'Zendaya', character: 'Chani', profile_path: '/r2Q1xQJk6nE6t8jBq1q4hUqRmgp.jpg', order: 1 },
        { id: 933238, name: 'Rebecca Ferguson', character: 'Lady Jessica Atreides', profile_path: '/4YstgG3l2eWq6G9xK2c3mN9f3R.jpg', order: 2 },
        { id: 3894, name: 'Javier Bardem', character: 'Stilgar', profile_path: '/gAwnjGk3bE0yX2gJz0vU8eWzHqN.jpg', order: 3 },
        { id: 224513, name: 'Florence Pugh', character: 'Princess Irulan', profile_path: '/7RR0p5t4dE1wP8R4eF5r6t.jpg', order: 4 },
        { id: 1373737, name: 'Austin Butler', character: 'Feyd-Rautha Harkonnen', profile_path: '/2bY5y9gB0p8J4gK3jE1x.jpg', order: 5 }
      ],
      crew: [
        { id: 137427, name: 'Denis Villeneuve', job: 'Director', department: 'Directing' },
        { id: 947, name: 'Hans Zimmer', job: 'Original Music Composer', department: 'Sound' },
        { id: 7232, name: 'Greig Fraser', job: 'Director of Photography', department: 'Camera' }
      ]
    },
    videos: {
      results: [
        { id: '1', key: 'Way9Dexny3w', name: 'Official Trailer 3', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 872585,
    title: 'Oppenheimer',
    original_title: 'Oppenheimer',
    overview: 'The story of J. Robert Oppenheimer\'s role in the development of the atomic bomb during World War II, exploring the profound moral dilemmas, political hearings, and global impact of humanity\'s most devastating creation.',
    poster_path: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    backdrop_path: '/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg',
    release_date: '2023-07-19',
    vote_average: 8.1,
    vote_count: 8850,
    popularity: 380.2,
    genre_ids: [18, 36],
    genres: [
      { id: 18, name: 'Drama' },
      { id: 36, name: 'History' }
    ],
    runtime: 181,
    tagline: 'The world forever changes.',
    status: 'Released',
    budget: 100000000,
    revenue: 957000000,
    original_language: 'en',
    credits: {
      cast: [
        { id: 2037, name: 'Cillian Murphy', character: 'J. Robert Oppenheimer', profile_path: '/dm6V5eJ9jG5N3Y9z8rK2.jpg', order: 0 },
        { id: 5081, name: 'Emily Blunt', character: 'Katherine "Kitty" Oppenheimer', profile_path: '/nPJXaRMqdUqR.jpg', order: 1 },
        { id: 1892, name: 'Matt Damon', character: 'Leslie Groves', profile_path: '/elzaU07.jpg', order: 2 },
        { id: 3223, name: 'Robert Downey Jr.', character: 'Lewis Strauss', profile_path: '/1YjdSym1jA7.jpg', order: 3 },
        { id: 224513, name: 'Florence Pugh', character: 'Jean Tatlock', profile_path: '/7RR0p5t4dE1wP8R4eF5r6t.jpg', order: 4 }
      ],
      crew: [
        { id: 525, name: 'Christopher Nolan', job: 'Director', department: 'Directing' },
        { id: 9384, name: 'Ludwig Göransson', job: 'Original Music Composer', department: 'Sound' }
      ]
    },
    videos: {
      results: [
        { id: '2', key: 'uYPbbksJxIg', name: 'Official Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 157336,
    title: 'Interstellar',
    original_title: 'Interstellar',
    overview: 'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
    poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    backdrop_path: '/xJHokMbljvjADYdit5fK5VQsXEG.jpg',
    release_date: '2014-11-05',
    vote_average: 8.4,
    vote_count: 34500,
    popularity: 290.4,
    genre_ids: [12, 18, 878],
    genres: [
      { id: 12, name: 'Adventure' },
      { id: 18, name: 'Drama' },
      { id: 878, name: 'Science Fiction' }
    ],
    runtime: 169,
    tagline: 'Mankind was born on Earth. It was never meant to die here.',
    status: 'Released',
    budget: 165000000,
    revenue: 701729206,
    original_language: 'en',
    credits: {
      cast: [
        { id: 10297, name: 'Matthew McConaughey', character: 'Joseph Cooper', profile_path: '/eDqZ2z.jpg', order: 0 },
        { id: 1813, name: 'Anne Hathaway', character: 'Amelia Brand', profile_path: '/tLflr.jpg', order: 1 },
        { id: 83002, name: 'Jessica Chastain', character: 'Murphy "Murph" Cooper', profile_path: '/nkHq1.jpg', order: 2 },
        { id: 3895, name: 'Michael Caine', character: 'Professor John Brand', profile_path: '/kls9.jpg', order: 3 }
      ],
      crew: [
        { id: 525, name: 'Christopher Nolan', job: 'Director', department: 'Directing' },
        { id: 947, name: 'Hans Zimmer', job: 'Original Music Composer', department: 'Sound' }
      ]
    },
    videos: {
      results: [
        { id: '3', key: 'zSWdZVtXT7E', name: 'Official Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 569094,
    title: 'Spider-Man: Across the Spider-Verse',
    original_title: 'Spider-Man: Across the Spider-Verse',
    overview: 'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence.',
    poster_path: '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    backdrop_path: '/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
    release_date: '2023-05-31',
    vote_average: 8.4,
    vote_count: 6700,
    popularity: 310.1,
    genre_ids: [16, 28, 12, 878],
    genres: [
      { id: 16, name: 'Animation' },
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 878, name: 'Science Fiction' }
    ],
    runtime: 140,
    tagline: 'It\'s how you wear the mask that matters.',
    status: 'Released',
    budget: 100000000,
    revenue: 690516673,
    original_language: 'en',
    credits: {
      cast: [
        { id: 587506, name: 'Shameik Moore', character: 'Miles Morales (voice)', profile_path: '/voice1.jpg', order: 0 },
        { id: 56734, name: 'Hailee Steinfeld', character: 'Gwen Stacy (voice)', profile_path: '/voice2.jpg', order: 1 },
        { id: 153096, name: 'Daniel Kaluuya', character: 'Hobart "Hobie" Brown / Spider-Punk', profile_path: '/voice3.jpg', order: 2 },
        { id: 2524, name: 'Oscar Isaac', character: 'Miguel O\'Hara / Spider-Man 2099', profile_path: '/voice4.jpg', order: 3 }
      ],
      crew: [
        { id: 114408, name: 'Joaquim Dos Santos', job: 'Director', department: 'Directing' },
        { id: 12467, name: 'Kemp Powers', job: 'Director', department: 'Directing' }
      ]
    },
    videos: {
      results: [
        { id: '4', key: 'cqGjhVJWtEg', name: 'Official Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 1022789,
    title: 'Inside Out 2',
    original_title: 'Inside Out 2',
    overview: 'Teenager Riley\'s mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust aren\'t sure how to feel when Anxiety, Envy, Ennui, and Embarrassment show up.',
    poster_path: '/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
    backdrop_path: '/xg27NrXi7EgCGUrOTzCq9NZLye.jpg',
    release_date: '2024-06-11',
    vote_average: 7.7,
    vote_count: 4900,
    popularity: 395.8,
    genre_ids: [16, 10751, 35, 12],
    genres: [
      { id: 16, name: 'Animation' },
      { id: 10751, name: 'Family' },
      { id: 35, name: 'Comedy' },
      { id: 12, name: 'Adventure' }
    ],
    runtime: 96,
    tagline: 'Make room for new emotions.',
    status: 'Released',
    budget: 200000000,
    revenue: 1698000000,
    original_language: 'en',
    credits: {
      cast: [
        { id: 59175, name: 'Amy Poehler', character: 'Joy (voice)', profile_path: '/poehler.jpg', order: 0 },
        { id: 1217395, name: 'Maya Hawke', character: 'Anxiety (voice)', profile_path: '/hawke.jpg', order: 1 },
        { id: 70615, name: 'Kensington Tallman', character: 'Riley (voice)', profile_path: '/riley.jpg', order: 2 }
      ],
      crew: [
        { id: 1475712, name: 'Kelsey Mann', job: 'Director', department: 'Directing' }
      ]
    },
    videos: {
      results: [
        { id: '5', key: 'LEjhY15eCx0', name: 'Official Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 414906,
    title: 'The Batman',
    original_title: 'The Batman',
    overview: 'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler who targets Gotham\'s elite.',
    poster_path: '/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    backdrop_path: '/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg',
    release_date: '2022-03-01',
    vote_average: 7.7,
    vote_count: 9800,
    popularity: 220.6,
    genre_ids: [80, 9648, 53, 28],
    genres: [
      { id: 80, name: 'Crime' },
      { id: 9648, name: 'Mystery' },
      { id: 53, name: 'Thriller' },
      { id: 28, name: 'Action' }
    ],
    runtime: 176,
    tagline: 'Unmask the truth.',
    status: 'Released',
    budget: 200000000,
    revenue: 772245583,
    original_language: 'en',
    credits: {
      cast: [
        { id: 11288, name: 'Robert Pattinson', character: 'Bruce Wayne / The Batman', profile_path: '/pattinson.jpg', order: 0 },
        { id: 37153, name: 'Zoë Kravitz', character: 'Selina Kyle / Catwoman', profile_path: '/kravitz.jpg', order: 1 },
        { id: 8557, name: 'Paul Dano', character: 'Edward Nashton / The Riddler', profile_path: '/dano.jpg', order: 2 },
        { id: 7248, name: 'Colin Farrell', character: 'Oswald Cobblepot / The Penguin', profile_path: '/farrell.jpg', order: 3 }
      ],
      crew: [
        { id: 12226, name: 'Matt Reeves', job: 'Director', department: 'Directing' },
        { id: 12227, name: 'Michael Giacchino', job: 'Original Music Composer', department: 'Sound' }
      ]
    },
    videos: {
      results: [
        { id: '6', key: 'mqqft2x_Aa4', name: 'Main Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 792307,
    title: 'Poor Things',
    original_title: 'Poor Things',
    overview: 'Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.',
    poster_path: '/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg',
    backdrop_path: '/r2tL1eM9i7P2nQ1r9v5xK.jpg',
    release_date: '2023-12-07',
    vote_average: 7.8,
    vote_count: 4200,
    popularity: 198.3,
    genre_ids: [878, 10749, 35],
    genres: [
      { id: 878, name: 'Science Fiction' },
      { id: 10749, name: 'Romance' },
      { id: 35, name: 'Comedy' }
    ],
    runtime: 141,
    tagline: 'She\'s like nothing you\'ve ever seen.',
    status: 'Released',
    budget: 35000000,
    revenue: 117600000,
    original_language: 'en',
    credits: {
      cast: [
        { id: 54693, name: 'Emma Stone', character: 'Bella Baxter', profile_path: '/stone.jpg', order: 0 },
        { id: 12073, name: 'Mark Ruffalo', character: 'Duncan Wedderburn', profile_path: '/ruffalo.jpg', order: 1 },
        { id: 5293, name: 'Willem Dafoe', character: 'Dr. Godwin Baxter', profile_path: '/dafoe.jpg', order: 2 }
      ],
      crew: [
        { id: 14210, name: 'Yorgos Lanthimos', job: 'Director', department: 'Directing' }
      ]
    },
    videos: {
      results: [
        { id: '7', key: 'RlbR5N6veqw', name: 'Official Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 786892,
    title: 'Furiosa: A Mad Max Saga',
    original_title: 'Furiosa: A Mad Max Saga',
    overview: 'As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland, they come across the Citadel presided over by The Immortan Joe.',
    poster_path: '/iADOJ8Zymht2JPMoy3R7xUMZqaC.jpg',
    backdrop_path: '/wNAhuOZ3Zf84jCI5TeTVxDUm0R2.jpg',
    release_date: '2024-05-22',
    vote_average: 7.6,
    vote_count: 3600,
    popularity: 285.9,
    genre_ids: [28, 12, 878],
    genres: [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 878, name: 'Science Fiction' }
    ],
    runtime: 148,
    tagline: 'Out of the ashes, she will rise.',
    status: 'Released',
    budget: 168000000,
    revenue: 172800000,
    original_language: 'en',
    credits: {
      cast: [
        { id: 1397778, name: 'Anya Taylor-Joy', character: 'Imperator Furiosa', profile_path: '/taylorjoy.jpg', order: 0 },
        { id: 74568, name: 'Chris Hemsworth', character: 'Warlord Dementus', profile_path: '/hemsworth.jpg', order: 1 },
        { id: 1447938, name: 'Tom Burke', character: 'Praetorian Jack', profile_path: '/burke.jpg', order: 2 }
      ],
      crew: [
        { id: 2062, name: 'George Miller', job: 'Director', department: 'Directing' },
        { id: 1045, name: 'Junkie XL', job: 'Original Music Composer', department: 'Sound' }
      ]
    },
    videos: {
      results: [
        { id: '8', key: 'XJMuhwVlca4', name: 'Official Trailer 2', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 335984,
    title: 'Blade Runner 2049',
    original_title: 'Blade Runner 2049',
    overview: 'Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what\'s left of society into chaos. K\'s discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.',
    poster_path: '/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
    backdrop_path: '/ilRyAZwNStbtUcaGbmqdaIHTeGM.jpg',
    release_date: '2017-10-04',
    vote_average: 8.0,
    vote_count: 13200,
    popularity: 180.7,
    genre_ids: [878, 18, 9648],
    genres: [
      { id: 878, name: 'Science Fiction' },
      { id: 18, name: 'Drama' },
      { id: 9648, name: 'Mystery' }
    ],
    runtime: 164,
    tagline: 'The key to the future is finally unearthed.',
    status: 'Released',
    budget: 150000000,
    revenue: 259239658,
    original_language: 'en',
    credits: {
      cast: [
        { id: 30614, name: 'Ryan Gosling', character: 'K', profile_path: '/gosling.jpg', order: 0 },
        { id: 3, name: 'Harrison Ford', character: 'Rick Deckard', profile_path: '/ford.jpg', order: 1 },
        { id: 224513, name: 'Ana de Armas', character: 'Joi', profile_path: '/dearmas.jpg', order: 2 },
        { id: 5081, name: 'Sylvia Hoeks', character: 'Luv', profile_path: '/hoeks.jpg', order: 3 }
      ],
      crew: [
        { id: 137427, name: 'Denis Villeneuve', job: 'Director', department: 'Directing' },
        { id: 63, name: 'Roger Deakins', job: 'Director of Photography', department: 'Camera' }
      ]
    },
    videos: {
      results: [
        { id: '9', key: 'gCcx85zbxz4', name: 'Official Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 545611,
    title: 'Everything Everywhere All at Once',
    original_title: 'Everything Everywhere All at Once',
    overview: 'An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what\'s important to her by connecting with other versions of herself across the multiverse.',
    poster_path: '/w3LxiVYPqRLexP0747EHG2Y4aoy.jpg',
    backdrop_path: '/hE23b90fVfF0jKx9.jpg',
    release_date: '2022-03-24',
    vote_average: 8.0,
    vote_count: 6100,
    popularity: 175.4,
    genre_ids: [28, 12, 878, 35],
    genres: [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 878, name: 'Science Fiction' },
      { id: 35, name: 'Comedy' }
    ],
    runtime: 139,
    tagline: 'The universe is so much bigger than your problems.',
    status: 'Released',
    budget: 25000000,
    revenue: 143411000,
    original_language: 'en',
    credits: {
      cast: [
        { id: 1620, name: 'Michelle Yeoh', character: 'Evelyn Wang', profile_path: '/yeoh.jpg', order: 0 },
        { id: 2343, name: 'Ke Huy Quan', character: 'Waymond Wang', profile_path: '/quan.jpg', order: 1 },
        { id: 153096, name: 'Stephanie Hsu', character: 'Joy Wang / Jobu Tupaki', profile_path: '/hsu.jpg', order: 2 },
        { id: 3894, name: 'Jamie Lee Curtis', character: 'Deirdre Beaubeirdre', profile_path: '/curtis.jpg', order: 3 }
      ],
      crew: [
        { id: 114408, name: 'Daniel Kwan', job: 'Director', department: 'Directing' },
        { id: 114409, name: 'Daniel Scheinert', job: 'Director', department: 'Directing' }
      ]
    },
    videos: {
      results: [
        { id: '10', key: 'wxN1T1uxQ2g', name: 'Official Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 129,
    title: 'Spirited Away',
    original_title: '千と千尋の神隠し',
    overview: 'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
    poster_path: '/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
    backdrop_path: '/mSDmvjSjQyVv2cE5.jpg',
    release_date: '2001-07-20',
    vote_average: 8.5,
    vote_count: 16400,
    popularity: 160.8,
    genre_ids: [16, 10751, 14],
    genres: [
      { id: 16, name: 'Animation' },
      { id: 10751, name: 'Family' },
      { id: 14, name: 'Fantasy' }
    ],
    runtime: 125,
    tagline: 'The tunnel led to a mysterious world...',
    status: 'Released',
    budget: 19000000,
    revenue: 395580000,
    original_language: 'ja',
    credits: {
      cast: [
        { id: 19587, name: 'Rumi Hiiragi', character: 'Chihiro Ogino (voice)', profile_path: '/hiiragi.jpg', order: 0 },
        { id: 19588, name: 'Miyu Irino', character: 'Haku (voice)', profile_path: '/irino.jpg', order: 1 }
      ],
      crew: [
        { id: 608, name: 'Hayao Miyazaki', job: 'Director', department: 'Directing' },
        { id: 609, name: 'Joe Hisaishi', job: 'Original Music Composer', department: 'Sound' }
      ]
    },
    videos: {
      results: [
        { id: '11', key: 'ByXuk9QqQkk', name: 'Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 27205,
    title: 'Inception',
    original_title: 'Inception',
    overview: 'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person\'s idea into a target\'s subconscious.',
    poster_path: '/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
    backdrop_path: '/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    release_date: '2010-07-15',
    vote_average: 8.4,
    vote_count: 36200,
    popularity: 215.3,
    genre_ids: [28, 878, 12],
    genres: [
      { id: 28, name: 'Action' },
      { id: 878, name: 'Science Fiction' },
      { id: 12, name: 'Adventure' }
    ],
    runtime: 148,
    tagline: 'Your mind is the scene of the crime.',
    status: 'Released',
    budget: 160000000,
    revenue: 836836967,
    original_language: 'en',
    credits: {
      cast: [
        { id: 6193, name: 'Leonardo DiCaprio', character: 'Dom Cobb', profile_path: '/dicaprio.jpg', order: 0 },
        { id: 24045, name: 'Joseph Gordon-Levitt', character: 'Arthur', profile_path: '/levitt.jpg', order: 1 },
        { id: 27578, name: 'Elliot Page', character: 'Ariadne', profile_path: '/page.jpg', order: 2 },
        { id: 2524, name: 'Tom Hardy', character: 'Eames', profile_path: '/hardy.jpg', order: 3 }
      ],
      crew: [
        { id: 525, name: 'Christopher Nolan', job: 'Director', department: 'Directing' },
        { id: 947, name: 'Hans Zimmer', job: 'Original Music Composer', department: 'Sound' }
      ]
    },
    videos: {
      results: [
        { id: '12', key: 'YoHD9XEInc0', name: 'Official Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 496243,
    title: 'Parasite',
    original_title: '기생충',
    overview: 'All unemployed, Ki-taek\'s family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.',
    poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    backdrop_path: '/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg',
    release_date: '2019-05-30',
    vote_average: 8.5,
    vote_count: 17800,
    popularity: 140.9,
    genre_ids: [35, 53, 18],
    genres: [
      { id: 35, name: 'Comedy' },
      { id: 53, name: 'Thriller' },
      { id: 18, name: 'Drama' }
    ],
    runtime: 133,
    tagline: 'Act like you own the place.',
    status: 'Released',
    budget: 11400000,
    revenue: 263100000,
    original_language: 'ko',
    credits: {
      cast: [
        { id: 20738, name: 'Song Kang-ho', character: 'Kim Ki-taek', profile_path: '/song.jpg', order: 0 },
        { id: 1253360, name: 'Lee Sun-kyun', character: 'Park Dong-ik', profile_path: '/lee.jpg', order: 1 },
        { id: 1024095, name: 'Cho Yeo-jeong', character: 'Yeon-kyo', profile_path: '/cho.jpg', order: 2 },
        { id: 1253361, name: 'Choi Woo-shik', character: 'Kim Ki-woo', profile_path: '/choi.jpg', order: 3 }
      ],
      crew: [
        { id: 21684, name: 'Bong Joon-ho', job: 'Director', department: 'Directing' }
      ]
    },
    videos: {
      results: [
        { id: '13', key: '5xH0R_48b1s', name: 'Official Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 666277,
    title: 'Past Lives',
    original_title: 'Past Lives',
    overview: 'Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after Nora\'s family emigrates from South Korea. Twenty years later, they are reunited for one fateful week as they confront notions of love, destiny, and the choices that make a life.',
    poster_path: '/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg',
    backdrop_path: '/aF1P4QZ9p3iK8.jpg',
    release_date: '2023-06-02',
    vote_average: 7.9,
    vote_count: 2200,
    popularity: 115.6,
    genre_ids: [18, 10749],
    genres: [
      { id: 18, name: 'Drama' },
      { id: 10749, name: 'Romance' }
    ],
    runtime: 106,
    tagline: 'In-Yun is a Korean concept. It means providence or fate.',
    status: 'Released',
    budget: 12000000,
    revenue: 42000000,
    original_language: 'en',
    credits: {
      cast: [
        { id: 2364023, name: 'Greta Lee', character: 'Nora Moon', profile_path: '/lee.jpg', order: 0 },
        { id: 2049866, name: 'Teo Yoo', character: 'Hae Sung', profile_path: '/yoo.jpg', order: 1 },
        { id: 1358994, name: 'John Magaro', character: 'Arthur Zaturansky', profile_path: '/magaro.jpg', order: 2 }
      ],
      crew: [
        { id: 3105748, name: 'Celine Song', job: 'Director', department: 'Directing' }
      ]
    },
    videos: {
      results: [
        { id: '14', key: 'kA244xewjcI', name: 'Official Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 713704,
    title: 'Challengers',
    original_title: 'Challengers',
    overview: 'Tennis player turned coach Tashi has taken her husband, Art, and transformed him into a world-famous grand slam champion. To jolt him out of his recent losing streak, she enters him into a challenger event where he finds himself facing his former best friend and Tashi\'s former boyfriend.',
    poster_path: '/H6vke7zGiuL7z4libMKa93LJ9P.jpg',
    backdrop_path: '/cEpZ1Pq62QcR0Vj4x.jpg',
    release_date: '2024-04-18',
    vote_average: 7.2,
    vote_count: 2150,
    popularity: 168.4,
    genre_ids: [18, 10749, 10402],
    genres: [
      { id: 18, name: 'Drama' },
      { id: 10749, name: 'Romance' }
    ],
    runtime: 131,
    tagline: 'Her game. Her rules.',
    status: 'Released',
    budget: 55000000,
    revenue: 94200000,
    original_language: 'en',
    credits: {
      cast: [
        { id: 505710, name: 'Zendaya', character: 'Tashi Donaldson', profile_path: '/zendaya.jpg', order: 0 },
        { id: 1674178, name: 'Josh O\'Connor', character: 'Patrick Zweig', profile_path: '/oconnor.jpg', order: 1 },
        { id: 1802951, name: 'Mike Faist', character: 'Art Donaldson', profile_path: '/faist.jpg', order: 2 }
      ],
      crew: [
        { id: 57130, name: 'Luca Guadagnino', job: 'Director', department: 'Directing' },
        { id: 7783, name: 'Trent Reznor', job: 'Original Music Composer', department: 'Sound' }
      ]
    },
    videos: {
      results: [
        { id: '15', key: 'VobTTbf4fMc', name: 'Official Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 933260,
    title: 'The Substance',
    original_title: 'The Substance',
    overview: 'A fading celebrity takes a black-market drug: a cell-replicating substance that temporarily creates a younger, better version of herself. But sharing time comes with a strict balance: one week for one, one week for the other. Seven days each. No exceptions.',
    poster_path: '/lqoMzCcZYEFK729Fc65q8q9bGe1.jpg',
    backdrop_path: '/7h6TqPB3ES54UV8su84v7q4X8.jpg',
    release_date: '2024-09-07',
    vote_average: 7.3,
    vote_count: 3100,
    popularity: 295.2,
    genre_ids: [27, 878, 18],
    genres: [
      { id: 27, name: 'Horror' },
      { id: 878, name: 'Science Fiction' },
      { id: 18, name: 'Drama' }
    ],
    runtime: 141,
    tagline: 'If you respect the balance, what could go wrong?',
    status: 'Released',
    budget: 17500000,
    revenue: 55000000,
    original_language: 'en',
    credits: {
      cast: [
        { id: 887, name: 'Demi Moore', character: 'Elisabeth Sparkle', profile_path: '/moore.jpg', order: 0 },
        { id: 1476483, name: 'Margaret Qualley', character: 'Sue', profile_path: '/qualley.jpg', order: 1 },
        { id: 2164, name: 'Dennis Quaid', character: 'Harvey', profile_path: '/quaid.jpg', order: 2 }
      ],
      crew: [
        { id: 1109915, name: 'Coralie Fargeat', job: 'Director', department: 'Directing' }
      ]
    },
    videos: {
      results: [
        { id: '16', key: 'LNlrGhP54Zk', name: 'Official Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 533535,
    title: 'Deadpool & Wolverine',
    original_title: 'Deadpool & Wolverine',
    overview: 'A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.',
    poster_path: '/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
    backdrop_path: '/yDHYTfA3R0jFYba16jBB12WvgLs.jpg',
    release_date: '2024-07-24',
    vote_average: 7.7,
    vote_count: 5900,
    popularity: 350.7,
    genre_ids: [28, 35, 878],
    genres: [
      { id: 28, name: 'Action' },
      { id: 35, name: 'Comedy' },
      { id: 878, name: 'Science Fiction' }
    ],
    runtime: 128,
    tagline: 'Come together.',
    status: 'Released',
    budget: 200000000,
    revenue: 1338000000,
    original_language: 'en',
    credits: {
      cast: [
        { id: 10859, name: 'Ryan Reynolds', character: 'Wade Wilson / Deadpool', profile_path: '/reynolds.jpg', order: 0 },
        { id: 6968, name: 'Hugh Jackman', character: 'Logan / Wolverine', profile_path: '/jackman.jpg', order: 1 },
        { id: 1858547, name: 'Emma Corrin', character: 'Cassandra Nova', profile_path: '/corrin.jpg', order: 2 }
      ],
      crew: [
        { id: 17825, name: 'Shawn Levy', job: 'Director', department: 'Directing' }
      ]
    },
    videos: {
      results: [
        { id: '17', key: '73_1biulkYk', name: 'Official Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 808,
    title: 'Shrek',
    original_title: 'Shrek',
    overview: 'It ain\'t easy bein\' green -- especially if you\'re a likable (sort of) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an irrepressible, wise-cracking donkey.',
    poster_path: '/2yYP0PQjG8zVq57xzMm40p0c0V.jpg',
    backdrop_path: '/sAtoMqDVhNDQBc3Qf3Ge9.jpg',
    release_date: '2001-05-18',
    vote_average: 7.7,
    vote_count: 17000,
    popularity: 130.2,
    genre_ids: [16, 35, 14, 10751],
    genres: [
      { id: 16, name: 'Animation' },
      { id: 35, name: 'Comedy' },
      { id: 14, name: 'Fantasy' },
      { id: 10751, name: 'Family' }
    ],
    runtime: 90,
    tagline: 'The greatest fairy tale never told.',
    status: 'Released',
    budget: 60000000,
    revenue: 487853320,
    original_language: 'en',
    credits: {
      cast: [
        { id: 2157, name: 'Mike Myers', character: 'Shrek (voice)', profile_path: '/myers.jpg', order: 0 },
        { id: 776, name: 'Eddie Murphy', character: 'Donkey (voice)', profile_path: '/murphy.jpg', order: 1 },
        { id: 6944, name: 'Cameron Diaz', character: 'Princess Fiona (voice)', profile_path: '/diaz.jpg', order: 2 }
      ],
      crew: [
        { id: 10561, name: 'Andrew Adamson', job: 'Director', department: 'Directing' }
      ]
    },
    videos: {
      results: [
        { id: '18', key: 'CwXOrWvPBP8', name: 'Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 603,
    title: 'The Matrix',
    original_title: 'The Matrix',
    overview: 'Set in the 22nd century, The Matrix tells the story of a computer hacker who learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    backdrop_path: '/o5jT6eM8eS9.jpg',
    release_date: '1999-03-30',
    vote_average: 8.2,
    vote_count: 25800,
    popularity: 154.2,
    genre_ids: [28, 878],
    genres: [
      { id: 28, name: 'Action' },
      { id: 878, name: 'Science Fiction' }
    ],
    runtime: 136,
    tagline: 'Welcome to the Real World.',
    status: 'Released',
    budget: 63000000,
    revenue: 467222728,
    original_language: 'en',
    credits: {
      cast: [
        { id: 6384, name: 'Keanu Reeves', character: 'Thomas A. Anderson / Neo', profile_path: '/reeves.jpg', order: 0 },
        { id: 2975, name: 'Laurence Fishburne', character: 'Morpheus', profile_path: '/fishburne.jpg', order: 1 },
        { id: 530, name: 'Carrie-Anne Moss', character: 'Trinity', profile_path: '/moss.jpg', order: 2 }
      ],
      crew: [
        { id: 9339, name: 'Lilly Wachowski', job: 'Director', department: 'Directing' },
        { id: 9340, name: 'Lana Wachowski', job: 'Director', department: 'Directing' }
      ]
    },
    videos: {
      results: [
        { id: '19', key: 'vKQi3bBA1y8', name: 'Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  },
  {
    id: 1124,
    title: 'The Prestige',
    original_title: 'The Prestige',
    overview: 'A mysterious story of two magicians whose intense desire to uncover each other\'s secrets leads them into a deadly game of obsessive rivalry and tragic consequences in 19th-century London.',
    poster_path: '/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg',
    backdrop_path: '/w5g8Z2s.jpg',
    release_date: '2006-10-19',
    vote_average: 8.2,
    vote_count: 15900,
    popularity: 135.8,
    genre_ids: [18, 9648, 878],
    genres: [
      { id: 18, name: 'Drama' },
      { id: 9648, name: 'Mystery' },
      { id: 878, name: 'Sci-Fi' }
    ],
    runtime: 130,
    tagline: 'Are you watching closely?',
    status: 'Released',
    budget: 40000000,
    revenue: 109676311,
    original_language: 'en',
    credits: {
      cast: [
        { id: 6968, name: 'Hugh Jackman', character: 'Robert Angier', profile_path: '/jackman.jpg', order: 0 },
        { id: 3894, name: 'Christian Bale', character: 'Alfred Borden', profile_path: '/bale.jpg', order: 1 },
        { id: 3895, name: 'Michael Caine', character: 'Cutter', profile_path: '/caine.jpg', order: 2 },
        { id: 1245, name: 'Scarlett Johansson', character: 'Olivia Wenscombe', profile_path: '/johansson.jpg', order: 3 }
      ],
      crew: [
        { id: 525, name: 'Christopher Nolan', job: 'Director', department: 'Directing' }
      ]
    },
    videos: {
      results: [
        { id: '20', key: 'ijXjmXP4k38', name: 'Trailer', site: 'YouTube', type: 'Trailer', official: true }
      ]
    }
  }
];

export const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p';

export function getPosterUrl(path: string | null, size: 'w342' | 'w500' | 'w780' = 'w500'): string | null {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  return `${TMDB_IMAGE_BASE}/${size}${path}`;
}

export function getBackdropUrl(path: string | null, size: 'w780' | 'w1280' | 'original' = 'original'): string | null {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  return `${TMDB_IMAGE_BASE}/${size}${path}`;
}
