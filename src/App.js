import "./styles.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function Biography() {
  return (
    <>
      <main class="clas">
        <h1>Takato Yamamoto (山本 タカト)</h1>
        <p>
          <i>
            <sub>15 января 1960 г.; Japan</sub>
          </i>
        </p>
        <img src="https://uploads5.wikiart.org/00147/images//280full.jpg" />
        <p>
          Takato Yamamoto was born in Akita Prefecture (Japan) in 1960. After
          graduating from the painting department of the Tokyo Zokei University,
          he experimented with the Ukiyo-e Pop style. He further refined and
          developed that style to create his “Heisei estheticism” style. His
          first exhibition was held in Tokyo, in 1998.
        </p>
      </main>
    </>
  );
}

function MostFamousPicture() {
  return (
    <>
      <h1>The most famous picture is:</h1>
      {/* <div>
        <img src="https://uploads4.wikiart.org/00511/images/takato-yamamoto/451298704-1827786334416831-1747983100586521828-n.jpg!PinterestSmall.jpg" />
      </div> */}
      <div class="icons">
        <div>
          <p class="imag1">
            <img src="https://uploads4.wikiart.org/00511/images/takato-yamamoto/451298704-1827786334416831-1747983100586521828-n.jpg!PinterestSmall.jpg" />
          </p>
          <h2>If the Moon Shines</h2>
          <p>Original Title: 月照れば</p>
          <p>Date: 2001</p>
          <p>Style: Ukiyo-e, Pop Art</p>
          <p>Dimensions: 21 x 30 cm</p>
        </div>
      </div>
    </>
  );
}

function AllPictures() {
  return (
    <>
      <div class="icons">
        <div>
          <p class="imag1">
            <img src="https://uploads4.wikiart.org/00511/images/takato-yamamoto/451298704-1827786334416831-1747983100586521828-n.jpg!PinterestSmall.jpg" />
          </p>
          <h2>If the Moon Shines</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads3.wikiart.org/00147/images/takato-yamamoto/larger-7.jpg!PinterestSmall.jpg" />
          </p>
          <h2>Football Under the Moonlight</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads8.wikiart.org/00147/images/takato-yamamoto/8a5e9615ed1d13bf288d950fc177d287-black-white-art-the-black.jpg!PinterestSmall.jpg" />
          </p>
          <h2>The Magus</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads4.wikiart.org/00147/images/takato-yamamoto/takato-yamamoto-03.jpg!PinterestSmall.jpg" />
          </p>
          <h2>End of Crazy Love</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads7.wikiart.org/00147/images/takato-yamamoto/tumblr-okbl7ilrmr1qdf3gxo1-500.jpg!PinterestSmall.jpg" />
          </p>
          <h2>Confusing Entity</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads4.wikiart.org/00147/images/takato-yamamoto/takato-yamamoto-4.jpeg!PinterestSmall.jpeg" />
          </p>
          <h2>Saint Sebastian</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads2.wikiart.org/00147/images/takato-yamamoto/takatoyamamoto02.jpg!PinterestSmall.jpg" />
          </p>
          <h2>J'ai Baisé Ta Bouche Jokanaan</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads3.wikiart.org/00147/images/takato-yamamoto/eed809904721d62aafedcb77d6600b16-peeping-tom-yamamoto.jpg!PinterestSmall.jpg" />
          </p>
          <h2>Confusion of a Peeping Tom</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads0.wikiart.org/00147/images/takato-yamamoto/0d5ceaa24ece2ff3ac093d236ec16683.jpg!PinterestSmall.jpg" />
          </p>
          <h2>Secret Traces of Night</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads1.wikiart.org/00147/images/takato-yamamoto/larger.jpg!PinterestSmall.jpg" />
          </p>
          <h2>SHU-RA</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads3.wikiart.org/00147/images/takato-yamamoto/larger-5.jpg!PinterestSmall.jpg" />
          </p>
          <h2>A Ghost in Ginza</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads5.wikiart.org/00147/images/takato-yamamoto/pa-takato2.jpg!PinterestSmall.jpg" />
          </p>
          <h2>Grotesque</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads2.wikiart.org/00147/images/takato-yamamoto/large-1.jpg!PinterestSmall.jpg" />
          </p>
          <h2>A Dragon's Coffin III</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads2.wikiart.org/00147/images/takato-yamamoto/large-2.jpg!PinterestSmall.jpg" />
          </p>
          <h2>A Dragon's Coffin II</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads0.wikiart.org/00147/images/takato-yamamoto/large.jpg!PinterestSmall.jpg" />
          </p>
          <h2>A Dragon's Coffin I</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads3.wikiart.org/00147/images/takato-yamamoto/aa5215eb7df4c500f990cc69af53ea5a-japanese-illustration-japanese-artists.jpg!PinterestSmall.jpg" />
          </p>
          <h2>Ghost Diagram</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads4.wikiart.org/00147/images/takato-yamamoto/1b0dd683d9404b99e450cbf4e4e9626e-traditional-artwork-creepy-art.jpg!PinterestSmall.jpg" />
          </p>
          <h2>For Secret Joy</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads7.wikiart.org/00147/images/takato-yamamoto/tumblr-m5z4d8hq1j1qfo5fco1-500.jpg!PinterestSmall.jpg" />
          </p>
          <h2>Egg</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads7.wikiart.org/00147/images/takato-yamamoto/723bb3e1b11c364b37d6b0a7c31eba93-art-chinois-japanese-illustration.jpg!PinterestSmall.jpg" />
          </p>
          <h2>Shimmering Sky</h2>
        </div>
        <div>
          <p class="imag1">
            <img src="https://uploads7.wikiart.org/00147/images/takato-yamamoto/3a696b5c937d67e68dc7584b682e4101-vampire-illustration-japanese-illustration.jpg!PinterestSmall.jpg" />
          </p>
          <h2>Vampire</h2>
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState("BIO");

  return (
    <>
      <Router>
        <nav>
          <div class="buttons">
            <Link
              to="bio"
              className={activePage === "BIO" ? "active" : ""}
              onClick={() => setActivePage("BIO")}
            >
              БІОГРАФІЯ
            </Link>
            <Link
              to="top"
              className={activePage === "TOP" ? "active" : ""}
              onClick={() => setActivePage("TOP")}
            >
              НАЙВІДОМІША КАРТИНА
            </Link>
            <Link
              to="all"
              className={activePage === "ALL" ? "active" : ""}
              onClick={() => setActivePage("ALL")}
            >
              ВСІ КАРТИНИ
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="bio" element={<Biography />} />
          <Route path="top" element={<MostFamousPicture />} />
          <Route path="all" element={<AllPictures />} />
        </Routes>
      </Router>
    </>
  );
}
