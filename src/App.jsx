import { createElement } from "react";

function App() {

  const heading = 'My Tunes';
  const artistImg = "/liv.png";

  return (
    <>
      <div className="content-container">
      <h1>{heading}</h1>
      <div className="content">
        <img src={artistImg} alt="Olivia Rodrigo holding a megaphone" className="artistImg" />
        <div className="albums">
          <h2>Olivia Rodrigo's Albums</h2>
          <details>
            <summary>Sour<span>&#x2304;</span></summary>
            <ol>
              <li>"brutal"</li>
              <li>"traitor"</li>
              <li>"drivers license"</li>
              <li>"1 step forward, 3 steps back"</li>
              <li>"deja vu"</li>
              <li>"good 4 u"</li>
              <li>"enough for you"</li>
              <li>"happier"</li>
              <li>"jealousy, jealousy"</li>
              <li>"favorite crime"</li>
              <li>"hope ur ok"</li>
            </ol>
          </details>
          <details>
            <summary>Guts<span>&#x2304;</span></summary>
            <ol>
              <li>"all-american bitch"</li>
              <li>"bad idea right?"</li>
              <li>"vampire"</li>
              <li>"lacy"</li>
              <li>"ballad of a homeschooled girl"</li>
              <li>"making the bed"</li>
              <li>"logical"</li>
              <li>"get him back!"</li>
              <li>"love is embarrassing"</li>
              <li>"the grudge"</li>
              <li>"pretty isn't pretty"</li>
              <li>"teenage dream"</li>
              <span className="spilled">
                <li>"obsessed"</li>
                <li>"girl i've always been"</li>
                <li>"scared of my guitar"</li>
                <li>"stranger"</li>
                <li>"so american"</li>
              </span>
            </ol>
            <p className="spilled">*bonus tracks</p>
          </details>
        </div>
      </div>
    </div>
    </>
  )
}


export default App
