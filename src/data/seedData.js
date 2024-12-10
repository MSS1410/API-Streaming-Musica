const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Cancion = require('../API/models/canciones')
const Plataforma = require('../API/models/plataformas')

dotenv.config()
const canciones = [
  {
    nombre: 'Economic head simply',
    artista: 'Billie Eilish',
    discografica: 'Darkroom/Interscope',
    duracion: 335,
    valoracion: 4.5,
    plataformas_disponibles: ['Pandora', 'Napster', 'SoundCloud']
  },
  {
    nombre: 'Order now throughout',
    artista: 'Ed Sheeran',
    discografica: 'Atlantic Records',
    duracion: 202,
    valoracion: 3.6,
    plataformas_disponibles: ['Deezer', 'Napster']
  },
  {
    nombre: 'Throw back end',
    artista: 'Adele',
    discografica: 'Columbia Records',
    duracion: 161,
    valoracion: 4.1,
    plataformas_disponibles: ['Tidal', 'iHeartRadio']
  },
  {
    nombre: 'Interesting behind during',
    artista: 'Shawn Mendes',
    discografica: 'Island Records',
    duracion: 185,
    valoracion: 4.9,
    plataformas_disponibles: [
      'Napster',
      'Spotify',
      'YouTube Music',
      'Amazon Music'
    ]
  },
  {
    nombre: 'Seem however agency',
    artista: 'Drake',
    discografica: 'OVO Sound',
    duracion: 143,
    valoracion: 4.9,
    plataformas_disponibles: [
      'Pandora',
      'Tidal',
      'SoundCloud',
      'Napster',
      'Amazon Music'
    ]
  },
  {
    nombre: 'Guess eight',
    artista: 'Billie Eilish',
    discografica: 'Darkroom/Interscope',
    duracion: 193,
    valoracion: 3.1,
    plataformas_disponibles: [
      'Tidal',
      'Apple Music',
      'iHeartRadio',
      'YouTube Music',
      'Deezer'
    ]
  },
  {
    nombre: 'Piece draw',
    artista: 'The Weeknd',
    discografica: 'XO Records',
    duracion: 347,
    valoracion: 4.2,
    plataformas_disponibles: ['Tidal', 'Pandora', 'SoundCloud']
  },
  {
    nombre: 'Behind couple six',
    artista: 'Ed Sheeran',
    discografica: 'Atlantic Records',
    duracion: 237,
    valoracion: 4.2,
    plataformas_disponibles: [
      'Pandora',
      'iHeartRadio',
      'YouTube Music',
      'Tidal',
      'Amazon Music'
    ]
  },
  {
    nombre: 'Benefit cut',
    artista: 'Billie Eilish',
    discografica: 'Darkroom/Interscope',
    duracion: 203,
    valoracion: 3.5,
    plataformas_disponibles: ['Pandora', 'Tidal', 'Amazon Music', 'Napster']
  },
  {
    nombre: 'None lawyer',
    artista: 'Adele',
    discografica: 'Columbia Records',
    duracion: 355,
    valoracion: 4.1,
    plataformas_disponibles: [
      'Pandora',
      'Deezer',
      'SoundCloud',
      'Spotify',
      'Amazon Music'
    ]
  },
  {
    nombre: 'Early big',
    artista: 'Dua Lipa',
    discografica: 'Warner Records',
    duracion: 300,
    valoracion: 3.2,
    plataformas_disponibles: ['Spotify', 'Tidal', 'Deezer']
  },
  {
    nombre: 'Mr number',
    artista: 'Billie Eilish',
    discografica: 'Darkroom/Interscope',
    duracion: 227,
    valoracion: 4.6,
    plataformas_disponibles: [
      'Napster',
      'YouTube Music',
      'Spotify',
      'iHeartRadio'
    ]
  },
  {
    nombre: 'At significant benefit',
    artista: 'Dua Lipa',
    discografica: 'Warner Records',
    duracion: 218,
    valoracion: 4.9,
    plataformas_disponibles: [
      'Apple Music',
      'Pandora',
      'iHeartRadio',
      'Spotify',
      'Napster'
    ]
  },
  {
    nombre: 'Price out star',
    artista: 'Billie Eilish',
    discografica: 'Darkroom/Interscope',
    duracion: 250,
    valoracion: 3.2,
    plataformas_disponibles: ['Tidal', 'Apple Music', 'Spotify', 'iHeartRadio']
  },
  {
    nombre: 'For end',
    artista: 'Shawn Mendes',
    discografica: 'Island Records',
    duracion: 194,
    valoracion: 4.2,
    plataformas_disponibles: [
      'YouTube Music',
      'Pandora',
      'Tidal',
      'Spotify',
      'iHeartRadio'
    ]
  },
  {
    nombre: 'Control',
    artista: 'Bruno Mars',
    discografica: 'Atlantic Records',
    duracion: 120,
    valoracion: 4.1,
    plataformas_disponibles: ['iHeartRadio', 'Deezer']
  },
  {
    nombre: 'List next',
    artista: 'Ed Sheeran',
    discografica: 'Atlantic Records',
    duracion: 171,
    valoracion: 4.5,
    plataformas_disponibles: ['Apple Music', 'Tidal']
  },
  {
    nombre: 'International if',
    artista: 'Luis Fonsi',
    discografica: 'Universal Latin',
    duracion: 275,
    valoracion: 4.4,
    plataformas_disponibles: ['Amazon Music', 'Deezer']
  },
  {
    nombre: 'Stage cultural pass',
    artista: 'Shawn Mendes',
    discografica: 'Island Records',
    duracion: 310,
    valoracion: 4.8,
    plataformas_disponibles: [
      'YouTube Music',
      'Pandora',
      'Apple Music',
      'SoundCloud'
    ]
  },
  {
    nombre: 'Drug drug',
    artista: 'Dua Lipa',
    discografica: 'Warner Records',
    duracion: 122,
    valoracion: 4.8,
    plataformas_disponibles: ['SoundCloud', 'Pandora', 'Amazon Music', 'Tidal']
  },
  {
    nombre: 'Seek something fund',
    artista: 'Drake',
    discografica: 'OVO Sound',
    duracion: 224,
    valoracion: 4.3,
    plataformas_disponibles: ['Tidal', 'Spotify']
  },
  {
    nombre: 'Picture natural strategy project',
    artista: 'Adele',
    discografica: 'Columbia Records',
    duracion: 175,
    valoracion: 4.7,
    plataformas_disponibles: ['Apple Music', 'Tidal', 'Pandora']
  },
  {
    nombre: 'Everything wonder that',
    artista: 'Billie Eilish',
    discografica: 'Darkroom/Interscope',
    duracion: 322,
    valoracion: 3.9,
    plataformas_disponibles: ['Tidal', 'SoundCloud', 'Napster']
  },
  {
    nombre: 'Six wear price',
    artista: 'Luis Fonsi',
    discografica: 'Universal Latin',
    duracion: 273,
    valoracion: 3.5,
    plataformas_disponibles: [
      'YouTube Music',
      'SoundCloud',
      'Apple Music',
      'iHeartRadio'
    ]
  },
  {
    nombre: 'Eat prepare well',
    artista: 'Adele',
    discografica: 'Columbia Records',
    duracion: 204,
    valoracion: 3.9,
    plataformas_disponibles: ['YouTube Music', 'Amazon Music']
  },
  {
    nombre: 'Defense Mrs',
    artista: 'Luis Fonsi',
    discografica: 'Universal Latin',
    duracion: 122,
    valoracion: 3.6,
    plataformas_disponibles: ['Pandora', 'Amazon Music', 'Tidal', 'Deezer']
  },
  {
    nombre: 'Cut approach vote',
    artista: 'Bruno Mars',
    discografica: 'Atlantic Records',
    duracion: 147,
    valoracion: 3.4,
    plataformas_disponibles: [
      'Pandora',
      'SoundCloud',
      'Deezer',
      'Spotify',
      'Tidal'
    ]
  },
  {
    nombre: 'Billion of affect',
    artista: 'Billie Eilish',
    discografica: 'Darkroom/Interscope',
    duracion: 217,
    valoracion: 3.6,
    plataformas_disponibles: ['Pandora', 'Napster', 'Apple Music']
  },
  {
    nombre: 'President TV',
    artista: 'Dua Lipa',
    discografica: 'Warner Records',
    duracion: 316,
    valoracion: 3.2,
    plataformas_disponibles: [
      'Spotify',
      'Napster',
      'Apple Music',
      'YouTube Music',
      'iHeartRadio'
    ]
  },
  {
    nombre: 'Its candidate industry',
    artista: 'Bruno Mars',
    discografica: 'Atlantic Records',
    duracion: 335,
    valoracion: 3.6,
    plataformas_disponibles: ['Napster', 'YouTube Music']
  },
  {
    nombre: 'Oil though',
    artista: 'Dua Lipa',
    discografica: 'Warner Records',
    duracion: 347,
    valoracion: 3.3,
    plataformas_disponibles: [
      'iHeartRadio',
      'YouTube Music',
      'Deezer',
      'Spotify',
      'Amazon Music'
    ]
  },
  {
    nombre: 'Drug rise forward',
    artista: 'Bruno Mars',
    discografica: 'Atlantic Records',
    duracion: 286,
    valoracion: 4.6,
    plataformas_disponibles: [
      'Spotify',
      'iHeartRadio',
      'Apple Music',
      'YouTube Music'
    ]
  },
  {
    nombre: 'Challenge economic test',
    artista: 'Ed Sheeran',
    discografica: 'Atlantic Records',
    duracion: 237,
    valoracion: 4.4,
    plataformas_disponibles: ['SoundCloud', 'Deezer']
  },
  {
    nombre: 'Fine nation concern',
    artista: 'Taylor Swift',
    discografica: 'Republic Records',
    duracion: 324,
    valoracion: 3.9,
    plataformas_disponibles: ['Apple Music', 'Tidal']
  },
  {
    nombre: 'Coach product exactly agree',
    artista: 'Drake',
    discografica: 'OVO Sound',
    duracion: 140,
    valoracion: 4.8,
    plataformas_disponibles: [
      'Amazon Music',
      'YouTube Music',
      'iHeartRadio',
      'SoundCloud'
    ]
  },
  {
    nombre: 'Record organization chance',
    artista: 'Ed Sheeran',
    discografica: 'Atlantic Records',
    duracion: 225,
    valoracion: 3.3,
    plataformas_disponibles: [
      'YouTube Music',
      'Napster',
      'iHeartRadio',
      'Spotify',
      'Pandora'
    ]
  },
  {
    nombre: 'Option rich',
    artista: 'Bruno Mars',
    discografica: 'Atlantic Records',
    duracion: 187,
    valoracion: 3.0,
    plataformas_disponibles: [
      'Amazon Music',
      'Napster',
      'iHeartRadio',
      'Pandora',
      'Spotify'
    ]
  },
  {
    nombre: 'Remember anyone light',
    artista: 'Dua Lipa',
    discografica: 'Warner Records',
    duracion: 317,
    valoracion: 3.5,
    plataformas_disponibles: [
      'Tidal',
      'Amazon Music',
      'YouTube Music',
      'Deezer',
      'iHeartRadio'
    ]
  },
  {
    nombre: 'Customer best',
    artista: 'Luis Fonsi',
    discografica: 'Universal Latin',
    duracion: 201,
    valoracion: 4.6,
    plataformas_disponibles: ['Spotify', 'Pandora', 'Apple Music', 'Deezer']
  },
  {
    nombre: 'Understand difference',
    artista: 'Luis Fonsi',
    discografica: 'Universal Latin',
    duracion: 222,
    valoracion: 3.3,
    plataformas_disponibles: [
      'SoundCloud',
      'Tidal',
      'iHeartRadio',
      'Apple Music',
      'Napster'
    ]
  },
  {
    nombre: 'State organization',
    artista: 'Shawn Mendes',
    discografica: 'Island Records',
    duracion: 257,
    valoracion: 5.0,
    plataformas_disponibles: [
      'Spotify',
      'YouTube Music',
      'Apple Music',
      'Deezer',
      'Amazon Music'
    ]
  },
  {
    nombre: 'Drive both',
    artista: 'Adele',
    discografica: 'Columbia Records',
    duracion: 172,
    valoracion: 3.1,
    plataformas_disponibles: ['Spotify', 'Amazon Music', 'Apple Music']
  },
  {
    nombre: 'Manage owner',
    artista: 'Drake',
    discografica: 'OVO Sound',
    duracion: 140,
    valoracion: 3.2,
    plataformas_disponibles: [
      'Spotify',
      'Napster',
      'Deezer',
      'Pandora',
      'Apple Music'
    ]
  },
  {
    nombre: 'Rich seem shake',
    artista: 'Adele',
    discografica: 'Columbia Records',
    duracion: 242,
    valoracion: 4.0,
    plataformas_disponibles: ['Amazon Music', 'Tidal', 'Spotify', 'SoundCloud']
  },
  {
    nombre: 'Bag someone lose part',
    artista: 'Billie Eilish',
    discografica: 'Darkroom/Interscope',
    duracion: 126,
    valoracion: 4.0,
    plataformas_disponibles: ['Amazon Music', 'YouTube Music', 'Spotify']
  },
  {
    nombre: 'Popular provide',
    artista: 'Billie Eilish',
    discografica: 'Darkroom/Interscope',
    duracion: 170,
    valoracion: 3.5,
    plataformas_disponibles: [
      'iHeartRadio',
      'Amazon Music',
      'Tidal',
      'YouTube Music'
    ]
  },
  {
    nombre: 'Billion green',
    artista: 'Bruno Mars',
    discografica: 'Atlantic Records',
    duracion: 173,
    valoracion: 4.3,
    plataformas_disponibles: ['Tidal', 'Pandora']
  },
  {
    nombre: 'Not glass investment top',
    artista: 'Shawn Mendes',
    discografica: 'Island Records',
    duracion: 245,
    valoracion: 3.2,
    plataformas_disponibles: ['Deezer', 'Tidal', 'Spotify', 'YouTube Music']
  },
  {
    nombre: 'Commercial again',
    artista: 'Ed Sheeran',
    discografica: 'Atlantic Records',
    duracion: 120,
    valoracion: 3.9,
    plataformas_disponibles: [
      'Spotify',
      'Apple Music',
      'Amazon Music',
      'SoundCloud'
    ]
  },
  {
    nombre: 'Develop',
    artista: 'The Weeknd',
    discografica: 'XO Records',
    duracion: 321,
    valoracion: 3.7,
    plataformas_disponibles: ['Deezer', 'Napster']
  },
  {
    nombre: 'Everyone worker',
    artista: 'Drake',
    discografica: 'OVO Sound',
    duracion: 282,
    valoracion: 4.4,
    plataformas_disponibles: ['Amazon Music', 'Tidal']
  },
  {
    nombre: 'Half',
    artista: 'Shawn Mendes',
    discografica: 'Island Records',
    duracion: 316,
    valoracion: 4.7,
    plataformas_disponibles: ['Amazon Music', 'iHeartRadio', 'Tidal']
  },
  {
    nombre: 'Eat data benefit',
    artista: 'Shawn Mendes',
    discografica: 'Island Records',
    duracion: 351,
    valoracion: 3.4,
    plataformas_disponibles: [
      'Apple Music',
      'Tidal',
      'iHeartRadio',
      'SoundCloud',
      'Napster'
    ]
  },
  {
    nombre: 'Door interview decide',
    artista: 'Dua Lipa',
    discografica: 'Warner Records',
    duracion: 328,
    valoracion: 3.6,
    plataformas_disponibles: [
      'Spotify',
      'Amazon Music',
      'iHeartRadio',
      'YouTube Music'
    ]
  },
  {
    nombre: 'Pretty',
    artista: 'Adele',
    discografica: 'Columbia Records',
    duracion: 215,
    valoracion: 3.3,
    plataformas_disponibles: [
      'YouTube Music',
      'SoundCloud',
      'Tidal',
      'Apple Music'
    ]
  },
  {
    nombre: 'Wrong magazine try',
    artista: 'Billie Eilish',
    discografica: 'Darkroom/Interscope',
    duracion: 301,
    valoracion: 3.7,
    plataformas_disponibles: [
      'Apple Music',
      'Napster',
      'YouTube Music',
      'SoundCloud',
      'iHeartRadio'
    ]
  },
  {
    nombre: 'Painting order',
    artista: 'Shawn Mendes',
    discografica: 'Island Records',
    duracion: 136,
    valoracion: 3.8,
    plataformas_disponibles: [
      'Napster',
      'Spotify',
      'YouTube Music',
      'Apple Music',
      'Tidal'
    ]
  },
  {
    nombre: 'Evening behind might',
    artista: 'Bruno Mars',
    discografica: 'Atlantic Records',
    duracion: 284,
    valoracion: 4.2,
    plataformas_disponibles: [
      'YouTube Music',
      'iHeartRadio',
      'Pandora',
      'Spotify'
    ]
  },
  {
    nombre: 'Customer chair way would',
    artista: 'Luis Fonsi',
    discografica: 'Universal Latin',
    duracion: 154,
    valoracion: 3.4,
    plataformas_disponibles: ['Tidal', 'Spotify', 'Napster', 'Pandora']
  },
  {
    nombre: 'Law leave',
    artista: 'Drake',
    discografica: 'OVO Sound',
    duracion: 254,
    valoracion: 5.0,
    plataformas_disponibles: ['Deezer', 'Tidal', 'Apple Music', 'Pandora']
  },
  {
    nombre: 'College Mrs',
    artista: 'Adele',
    discografica: 'Columbia Records',
    duracion: 174,
    valoracion: 4.4,
    plataformas_disponibles: [
      'Napster',
      'YouTube Music',
      'iHeartRadio',
      'Pandora'
    ]
  },
  {
    nombre: 'Fear fine control',
    artista: 'Bruno Mars',
    discografica: 'Atlantic Records',
    duracion: 286,
    valoracion: 4.0,
    plataformas_disponibles: ['YouTube Music', 'Tidal', 'Pandora']
  },
  {
    nombre: 'Relationship score',
    artista: 'Billie Eilish',
    discografica: 'Darkroom/Interscope',
    duracion: 123,
    valoracion: 3.0,
    plataformas_disponibles: [
      'Napster',
      'Apple Music',
      'Spotify',
      'Deezer',
      'Pandora'
    ]
  },
  {
    nombre: 'Energy rather model',
    artista: 'Luis Fonsi',
    discografica: 'Universal Latin',
    duracion: 259,
    valoracion: 4.6,
    plataformas_disponibles: [
      'YouTube Music',
      'Pandora',
      'Tidal',
      'Deezer',
      'Apple Music'
    ]
  },
  {
    nombre: 'Including',
    artista: 'Adele',
    discografica: 'Columbia Records',
    duracion: 345,
    valoracion: 4.7,
    plataformas_disponibles: ['Amazon Music', 'Pandora', 'Tidal', 'Deezer']
  },
  {
    nombre: 'Sense something',
    artista: 'Adele',
    discografica: 'Columbia Records',
    duracion: 191,
    valoracion: 3.7,
    plataformas_disponibles: ['Spotify', 'Apple Music']
  },
  {
    nombre: 'Occur war similar',
    artista: 'Dua Lipa',
    discografica: 'Warner Records',
    duracion: 294,
    valoracion: 4.0,
    plataformas_disponibles: ['Amazon Music', 'Tidal', 'Deezer']
  },
  {
    nombre: 'Far teacher',
    artista: 'Drake',
    discografica: 'OVO Sound',
    duracion: 137,
    valoracion: 4.1,
    plataformas_disponibles: ['Deezer', 'YouTube Music']
  },
  {
    nombre: 'Answer risk hard resource',
    artista: 'Bruno Mars',
    discografica: 'Atlantic Records',
    duracion: 251,
    valoracion: 3.3,
    plataformas_disponibles: ['Amazon Music', 'YouTube Music', 'iHeartRadio']
  },
  {
    nombre: 'Alone explain air',
    artista: 'Dua Lipa',
    discografica: 'Warner Records',
    duracion: 151,
    valoracion: 4.4,
    plataformas_disponibles: ['Napster', 'Amazon Music', 'Deezer', 'Spotify']
  },
  {
    nombre: 'Training',
    artista: 'Dua Lipa',
    discografica: 'Warner Records',
    duracion: 226,
    valoracion: 3.1,
    plataformas_disponibles: ['Amazon Music', 'SoundCloud']
  },
  {
    nombre: 'Them rather will',
    artista: 'Bruno Mars',
    discografica: 'Atlantic Records',
    duracion: 283,
    valoracion: 3.8,
    plataformas_disponibles: ['Amazon Music', 'SoundCloud']
  },
  {
    nombre: 'Themselves benefit now',
    artista: 'Adele',
    discografica: 'Columbia Records',
    duracion: 198,
    valoracion: 3.5,
    plataformas_disponibles: ['Pandora', 'Deezer', 'SoundCloud']
  },
  {
    nombre: 'Push effect television',
    artista: 'Ed Sheeran',
    discografica: 'Atlantic Records',
    duracion: 291,
    valoracion: 3.7,
    plataformas_disponibles: [
      'Apple Music',
      'iHeartRadio',
      'Spotify',
      'Napster',
      'SoundCloud'
    ]
  },
  {
    nombre: 'Wind check operation piece',
    artista: 'Taylor Swift',
    discografica: 'Republic Records',
    duracion: 354,
    valoracion: 4.6,
    plataformas_disponibles: ['Napster', 'Spotify']
  },
  {
    nombre: 'Drop',
    artista: 'Billie Eilish',
    discografica: 'Darkroom/Interscope',
    duracion: 217,
    valoracion: 4.2,
    plataformas_disponibles: ['Napster', 'Deezer', 'SoundCloud', 'Pandora']
  },
  {
    nombre: 'First receive recently',
    artista: 'Adele',
    discografica: 'Columbia Records',
    duracion: 201,
    valoracion: 5.0,
    plataformas_disponibles: ['Pandora', 'iHeartRadio']
  },
  {
    nombre: 'Kitchen effect',
    artista: 'Shawn Mendes',
    discografica: 'Island Records',
    duracion: 181,
    valoracion: 4.0,
    plataformas_disponibles: ['Tidal', 'Pandora']
  },
  {
    nombre: 'Study middle',
    artista: 'Luis Fonsi',
    discografica: 'Universal Latin',
    duracion: 269,
    valoracion: 3.1,
    plataformas_disponibles: [
      'Pandora',
      'Napster',
      'YouTube Music',
      'Apple Music',
      'Deezer'
    ]
  },
  {
    nombre: 'Likely friend',
    artista: 'Bruno Mars',
    discografica: 'Atlantic Records',
    duracion: 241,
    valoracion: 4.2,
    plataformas_disponibles: ['Napster', 'iHeartRadio', 'Spotify']
  },
  {
    nombre: 'Long Democrat stand',
    artista: 'Luis Fonsi',
    discografica: 'Universal Latin',
    duracion: 216,
    valoracion: 4.7,
    plataformas_disponibles: ['Spotify', 'SoundCloud']
  },
  {
    nombre: 'Improve forget firm',
    artista: 'Dua Lipa',
    discografica: 'Warner Records',
    duracion: 276,
    valoracion: 3.1,
    plataformas_disponibles: ['Napster', 'SoundCloud']
  },
  {
    nombre: 'Author during risk',
    artista: 'Shawn Mendes',
    discografica: 'Island Records',
    duracion: 261,
    valoracion: 3.1,
    plataformas_disponibles: ['Amazon Music', 'SoundCloud', 'Spotify']
  },
  {
    nombre: 'Skill group simple',
    artista: 'Ed Sheeran',
    discografica: 'Atlantic Records',
    duracion: 262,
    valoracion: 3.2,
    plataformas_disponibles: ['Deezer', 'iHeartRadio', 'Apple Music', 'Spotify']
  },
  {
    nombre: 'Character data',
    artista: 'Bruno Mars',
    discografica: 'Atlantic Records',
    duracion: 297,
    valoracion: 4.5,
    plataformas_disponibles: ['YouTube Music', 'Tidal']
  },
  {
    nombre: 'Capital',
    artista: 'Adele',
    discografica: 'Columbia Records',
    duracion: 319,
    valoracion: 3.3,
    plataformas_disponibles: ['Deezer', 'SoundCloud']
  },
  {
    nombre: 'Effort',
    artista: 'Luis Fonsi',
    discografica: 'Universal Latin',
    duracion: 160,
    valoracion: 4.7,
    plataformas_disponibles: ['Pandora', 'YouTube Music', 'Amazon Music']
  },
  {
    nombre: 'Social baby across',
    artista: 'Dua Lipa',
    discografica: 'Warner Records',
    duracion: 250,
    valoracion: 3.7,
    plataformas_disponibles: ['SoundCloud', 'iHeartRadio', 'Napster']
  },
  {
    nombre: 'Thank anyone be',
    artista: 'Adele',
    discografica: 'Columbia Records',
    duracion: 198,
    valoracion: 3.3,
    plataformas_disponibles: [
      'Apple Music',
      'Napster',
      'Spotify',
      'iHeartRadio',
      'Deezer'
    ]
  },
  {
    nombre: 'Early water science',
    artista: 'Dua Lipa',
    discografica: 'Warner Records',
    duracion: 120,
    valoracion: 3.8,
    plataformas_disponibles: [
      'Apple Music',
      'Spotify',
      'Tidal',
      'Pandora',
      'Deezer'
    ]
  },
  {
    nombre: 'Everyone',
    artista: 'The Weeknd',
    discografica: 'XO Records',
    duracion: 127,
    valoracion: 3.9,
    plataformas_disponibles: ['Pandora', 'YouTube Music']
  },
  {
    nombre: 'Expect happy',
    artista: 'Ed Sheeran',
    discografica: 'Atlantic Records',
    duracion: 282,
    valoracion: 3.5,
    plataformas_disponibles: [
      'Deezer',
      'Napster',
      'Tidal',
      'YouTube Music',
      'iHeartRadio'
    ]
  },
  {
    nombre: 'Cold hear ball price',
    artista: 'Shawn Mendes',
    discografica: 'Island Records',
    duracion: 139,
    valoracion: 4.1,
    plataformas_disponibles: ['Spotify', 'Napster']
  },
  {
    nombre: 'Her short position',
    artista: 'Luis Fonsi',
    discografica: 'Universal Latin',
    duracion: 195,
    valoracion: 4.8,
    plataformas_disponibles: [
      'Napster',
      'iHeartRadio',
      'SoundCloud',
      'YouTube Music',
      'Tidal'
    ]
  },
  {
    nombre: 'Ever return everybody may',
    artista: 'Drake',
    discografica: 'OVO Sound',
    duracion: 311,
    valoracion: 3.4,
    plataformas_disponibles: ['Deezer', 'SoundCloud', 'Spotify']
  },
  {
    nombre: 'Meet stuff become',
    artista: 'Shawn Mendes',
    discografica: 'Island Records',
    duracion: 351,
    valoracion: 4.4,
    plataformas_disponibles: [
      'iHeartRadio',
      'Spotify',
      'Napster',
      'SoundCloud',
      'Pandora'
    ]
  },
  {
    nombre: 'Security appear sister',
    artista: 'Dua Lipa',
    discografica: 'Warner Records',
    duracion: 356,
    valoracion: 4.7,
    plataformas_disponibles: ['iHeartRadio', 'Apple Music', 'Deezer']
  },
  {
    nombre: 'Grow use',
    artista: 'Shawn Mendes',
    discografica: 'Island Records',
    duracion: 133,
    valoracion: 4.7,
    plataformas_disponibles: [
      'SoundCloud',
      'YouTube Music',
      'Apple Music',
      'Deezer'
    ]
  },
  {
    nombre: 'Watch show cup',
    artista: 'Ed Sheeran',
    discografica: 'Atlantic Records',
    duracion: 199,
    valoracion: 4.2,
    plataformas_disponibles: [
      'Tidal',
      'Amazon Music',
      'Pandora',
      'iHeartRadio',
      'Apple Music'
    ]
  },
  {
    nombre: 'These process no',
    artista: 'Bruno Mars',
    discografica: 'Atlantic Records',
    duracion: 211,
    valoracion: 4.8,
    plataformas_disponibles: [
      'Pandora',
      'YouTube Music',
      'Tidal',
      'Napster',
      'Spotify'
    ]
  }
]
const plataformas = [
  { nombre: 'Spotify', descripcion: 'Plataforma de música en Streaming' },
  {
    nombre: 'SoundCloud',
    descripcion: 'Plataforma de música libre en Streaming'
  },
  { nombre: 'YouTube Music', descripcion: 'Plataforma de música en Streaming' },
  { nombre: 'Deezer', descripcion: 'Plataforma de música en Streaming' },
  { nombre: 'Apple Music', descripcion: 'Plataforma de música en Streaming' },
  { nombre: 'Amazon Music', descripcion: 'Plataforma de música en Streaming' },
  { nombre: 'Tidal', descripcion: 'Plataforma de música en Streaming' },
  { nombre: 'Pandora', descripcion: 'Plataforma de música en Streaming' },
  { nombre: 'Napster', descripcion: 'Plataforma de música en Streaming' },
  { nombre: 'iHeartRadio', descripcion: 'Plataforma de música en Streaming' }
]

module.exports = { plataformas, canciones }
