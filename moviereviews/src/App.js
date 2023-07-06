import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navigation from './Components/Navigation';
import MovieList from './Components/MovieList'
import MovieContainer from './Components/MovieContainer';

let movieArray = [
  {
    title: "Mean Girls",
    director: "Mark Waters",
    type: "teen comedy drama",
    year: 2004,
    starring: [
      "Lindsay Lohan",
      "Rachel McAdams",
      "Tina Fey"
    ],
    image: "https://i.pinimg.com/originals/37/7c/aa/377caa8fcefe05a6728b7d7d2144c265.jpg",
    anotherImage: "https://th.bing.com/th/id/OIP.CfAuYdYL9geMS5QpWqb3mAHaKh?w=186&h=265&c=7&r=0&o=5&pid=1.7",
    synopsis: "Cady Heron is a 16 year old homeschooled girl who not only makes the mistake of falling for Aaron Samuels, the ex-boyfriend of queenbee Regina George, but also unintentionally joins The Plastics, led by Regina herself. Join Cady as she learns that high school life can and will be really tough.",
    reviews: [
      ["user423", 4, "Loved it! Watched it 10 times so far this month!"],
      ["gurltalker", 5, "A classic. Iconic. Always hits!"],
    ],
  },
  {
    title: "Jennifer's Body",
    director: "Karyn Kusama",
    type: "horror comedy",
    year: 2009,
    starring: [
      "Megan Fox",
      "Amanda Seyfried",
      "Johnny Simmons",
    ],
    image: "https://th.bing.com/th/id/OIP.dEj_kzaJzJOwA9oVYz_E3gHaLI?w=186&h=280&c=7&r=0&o=5&pid=1.7",
    anotherImage: "https://th.bing.com/th/id/OIP.2_Kfc85e1zNfbN0U55qM3wHaLA?w=186&h=276&c=7&r=0&o=5&pid=1.7",
    synopsis: "A demonically possessed high school student who kills her male classmates and devours their flesh in order to survive, with her childhood friend striving to end her killing spree.",
    reviews: [
      ["boyh8er", 5, "Underrated. Megan is an icon"],
      ["poser43", 2, "Ridiculous! Too gorey and unrealistic!"],
    ],
  },
  {
    title: "Shang-Chi",
    director: "Destin Daniel Cretton",
    type: "superhero action",
    year: 2021,
    starring: [
      "Simu Liu",
      "Awkwafina",
      "Meng'er Zhang",
      "Benedict Wong",
    ],
    image: "https://th.bing.com/th/id/OIP.fpKsZeXDGvgLxxF5OeSvgwAAAA?pid=ImgDet&rs=1",
    anotherImage: "https://th.bing.com/th/id/OIP.lxqqEXdVGLPlub4J0OAEKgHaK-?w=186&h=276&c=7&r=0&o=5&pid=1.7",
    synopsis: "Shang-Chi is forced to confront his past when his father Wenwu, the leader of the Ten Rings terrorist organization, draws Shang-Chi and his sister Xialing into a search for a mythical village.",
    reviews: [
      []
    ]
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <div>
        <MovieList movies={movieArray} />
        <MovieContainer movies={movieArray} />
      </div>
    </div>
  );
}

export default App;