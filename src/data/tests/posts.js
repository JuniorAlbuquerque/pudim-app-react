import hotel from '../../assets/images/hotel.jpg'
import sport from '../../assets/images/sport.jpg'
import jnr from '../../assets/images/jnr.jpeg'
import camelo from '../../assets/images/camelo.jpg'
import tenis from '../../assets/images/tenis.jpg'
import manaus from '../../assets/images/manaus.jpeg'

export const jsonData = [
  {
    id: 0,
    userid: 1,
    author: 'Júnior',
    local: 'Teatro Amazonas',
    avatar: jnr,
    imgs: [{ id: 0, src: manaus }],
    likes: 78,
    liked: false,
    comments: 46,
    wish: false,
  },
  {
    id: 1,
    userid: 2,
    author: 'Hotel Ilha Bela',
    local: 'Parintins',
    avatar: hotel,
    imgs: [
      { id: 0, src: hotel },
      { id: 1, src: sport },
      { id: 2, src: tenis },
      { id: 4, src: hotel },
      { id: 5, src: hotel },
    ],
    likes: 14,
    liked: false,
    comments: 10,
    wish: false,
  },
  {
    id: 2,
    userid: 1,
    author: 'Júnior',
    local: 'Deserto Kalahari',
    avatar: jnr,
    imgs: [{ id: 0, src: camelo }],
    likes: 28,
    liked: false,
    comments: 14,
    wish: false,
  },
]
