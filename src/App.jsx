import { useState } from 'react'
import './App.css'

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [currentPage, setCurrentPage] = useState('home') // Add navigation state

  const locations = [
    {
      id: 1,
      name: "Pattaya Beach Moo-Café",
      country: "Thailand",
      description: "Sip your latte while watching the sunrise over Pattaya Beach. Our cow friends love the tropical vibes!",
      speciality: "Thai Iced Coffee with Coconut Milk",
      cowFacts: "Local cows here wear sunglasses and flower leis!"
    },
    {
      id: 2,
      name: "Jomtien Cow-fee Corner",
      country: "Thailand",
      description: "A quieter spot in Jomtien where cows gather for afternoon coffee and beach volleyball.",
      speciality: "Mango Sticky Rice Cappuccino",
      cowFacts: "These cows are excellent at beach volleyball (they use their udders as extra hands)!"
    },
    {
      id: 3,
      name: "Blackpool Moo-nificent Café",
      country: "England",
      description: "Right on the famous Blackpool promenade! Cows love the classic British seaside atmosphere.",
      speciality: "Fish & Chips Flavored Coffee (surprisingly good!)",
      cowFacts: "Blackpool cows can dance to the organ music from the pier!"
    },
    {
      id: 4,
      name: "Benidorm Bovine Bar",
      country: "Spain",
      description: "Spanish cows know how to party! This café never closes and the sangria-coffee is legendary.",
      speciality: "Café con Leche Sangria",
      cowFacts: "These cows speak fluent Spanish and love flamenco dancing!"
    }
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="logo-container">
          <CowLogo />
          <h1>Moo-nificent Coffee Cafés</h1>
        </div>
        <nav>
          <button
            onClick={() => {setSelectedLocation(null); setCurrentPage('home')}}
            className={currentPage === 'home' ? 'active' : ''}
          >
            Home
          </button>
          <button
            onClick={() => {setSelectedLocation(null); setCurrentPage('about')}}
            className={currentPage === 'about' ? 'active' : ''}
          >
            About Our Cows 🐄
          </button>
          <button
            onClick={() => {setSelectedLocation(null); setCurrentPage('menu')}}
            className={currentPage === 'menu' ? 'active' : ''}
          >
            Coffee Menu ☕
          </button>
        </nav>
      </header>

      <main className="main">
        {selectedLocation ? (
          <section className="location-detail">
            <button onClick={() => setSelectedLocation(null)} className="back-button">
              ← Back to Locations
            </button>
            <div className="location-detail-content">
              <h2>{selectedLocation.name}</h2>
              <p className="country-large">{selectedLocation.country}</p>
              <p className="description-large">{selectedLocation.description}</p>
              <div className="speciality-large">
                <h3>Our Speciality</h3>
                <p>{selectedLocation.speciality}</p>
              </div>
              <div className="cow-facts">
                <h3>Fun Cow Facts</h3>
                <p>{selectedLocation.cowFacts}</p>
              </div>
              <CowCelebrating />
            </div>
          </section>
        ) : currentPage === 'home' ? (
          <>
            <section className="hero">
              <div className="hero-content">
                <h2>Welcome to the World's Most Moo-nificent Coffee Experience! ☕🐄</h2>
                <p>Where cartoon cows and coffee lovers unite across the globe!</p>
                <CowDrinkingCoffee />
              </div>
            </section>

            <section className="locations">
              <h2>Our Udderly Amazing Locations 🌍</h2>
              <div className="location-grid">
                {locations.map(location => (
                  <div
                    key={location.id}
                    className="location-card"
                    onClick={() => setSelectedLocation(location)}
                  >
                    <h3>{location.name}</h3>
                    <p className="country">{location.country}</p>
                    <p>{location.description}</p>
                    <div className="speciality">
                      <strong>Speciality:</strong> {location.speciality}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="gallery">
              <h2>Our Happy Coffee-Loving Cows 🐄💕</h2>
              <div className="cow-gallery">
                <CowWithCappuccino />
                <CowWithLatte />
                <CowWithEspresso />
              </div>
            </section>
          </>
        ) : currentPage === 'about' ? (
          <AboutCowsPage />
        ) : currentPage === 'menu' ? (
          <CoffeeMenuPage />
        ) : null}
      </main>

      <footer className="footer">
        <p>🐄 "Life's too short for bad coffee!" - Wise Cow Proverb 🐄</p>
        <p>© 2024 Moo-nificent Coffee Cafés - Bringing joy to cows and humans worldwide!</p>
      </footer>
    </div>
  )
}

// New Page Components
const AboutCowsPage = () => (
  <div className="page-content">
    <section className="hero">
      <div className="hero-content">
        <h2>About Our Amazing Cows 🐄✨</h2>
        <p>Meet the most coffee-loving, globe-trotting cows in the world!</p>
        <CowCelebrating />
      </div>
    </section>

    <section className="cow-facts-section">
      <h2>Udderly Fascinating Cow Facts! 🤓</h2>
      <div className="facts-grid">
        <div className="fact-card">
          <h3>🌍 Worldly Cows</h3>
          <p>Our cows are multilingual! They moo in Thai, Spanish, English, and even understand tourist sign language.</p>
        </div>
        <div className="fact-card">
          <h3>☕ Coffee Connoisseurs</h3>
          <p>Each cow has a refined palate and can distinguish between over 47 different coffee bean varieties just by smell!</p>
        </div>
        <div className="fact-card">
          <h3>🏐 Athletic Abilities</h3>
          <p>The Jomtien cows hold the world record for beach volleyball - their four legs give them an unfair advantage!</p>
        </div>
        <div className="fact-card">
          <h3>🎵 Musical Talents</h3>
          <p>Blackpool cows can dance to any tune from the pier's organ. They're particularly good at the foxtrot!</p>
        </div>
        <div className="fact-card">
          <h3>🌊 Beach Lovers</h3>
          <p>Despite being land animals, our cows are excellent swimmers and love to surf during their break times!</p>
        </div>
        <div className="fact-card">
          <h3>🎨 Creative Spirits</h3>
          <p>Many of our cows are accomplished artists, specializing in latte art and sand sculptures.</p>
        </div>
      </div>
    </section>

    <section className="cow-gallery-extended">
      <h2>Meet Our Star Cows! 🌟</h2>
      <div className="cow-gallery">
        <CowWithCappuccino />
        <CowWithLatte />
        <CowWithEspresso />
      </div>
    </section>
  </div>
)

const CoffeeMenuPage = () => (
  <div className="page-content">
    <section className="hero">
      <div className="hero-content">
        <h2>Our Moo-nificent Coffee Menu ☕🐄</h2>
        <p>Crafted with love by cows, for coffee lovers everywhere!</p>
        <CowDrinkingCoffee />
      </div>
    </section>

    <section className="menu-section">
      <h2>Signature Cow Blends ✨</h2>
      <div className="menu-grid">
        <div className="menu-item">
          <h3>🇹🇭 Thai Iced Moo-cha</h3>
          <p className="price">$4.50</p>
          <p>Creamy Thai coffee with coconut milk, served over ice with a dash of cow magic from Pattaya Beach!</p>
        </div>
        <div className="menu-item">
          <h3>🥭 Mango Sticky Rice Cappuccino</h3>
          <p className="price">$5.20</p>
          <p>A tropical delight from Jomtien! Espresso meets sweet mango and coconut sticky rice foam.</p>
        </div>
        <div className="menu-item">
          <h3>🐟 Fish & Chips Coffee (Limited Edition)</h3>
          <p className="price">$6.00</p>
          <p>Surprisingly delicious! A Blackpool specialty with hints of sea salt and crispy goodness.</p>
        </div>
        <div className="menu-item">
          <h3>🍷 Café con Leche Sangria</h3>
          <p className="price">$7.50</p>
          <p>The party never stops in Benidorm! Coffee meets Spanish sangria for the ultimate fiesta in a cup.</p>
        </div>
        <div className="menu-item">
          <h3>🐄 Classic Cow Latte</h3>
          <p className="price">$3.80</p>
          <p>Our signature drink! Rich espresso with perfectly steamed milk and a hint of happiness from our cows.</p>
        </div>
        <div className="menu-item">
          <h3>🌊 Ocean Breeze Americano</h3>
          <p className="price">$3.20</p>
          <p>Bold coffee with a refreshing twist, inspired by our beachside locations.</p>
        </div>
      </div>
    </section>

    <section className="dessert-section">
      <h2>Sweet Treats 🧁</h2>
      <div className="menu-grid">
        <div className="menu-item">
          <h3>🥥 Coconut Cow Cookies</h3>
          <p className="price">$2.50</p>
          <p>Shaped like adorable cows, made with real coconut from Thailand!</p>
        </div>
        <div className="menu-item">
          <h3>🍰 Udder-ly Delicious Cheesecake</h3>
          <p className="price">$4.80</p>
          <p>Creamy, dreamy cheesecake that will make you moo with joy!</p>
        </div>
        <div className="menu-item">
          <h3>🍪 Coffee Bean Biscuits</h3>
          <p className="price">$1.90</p>
          <p>Crunchy biscuits shaped like coffee beans, perfect for dunking!</p>
        </div>
      </div>
    </section>
  </div>
)

// SVG Cow Components
const CowLogo = () => (
  <svg width="50" height="50" viewBox="0 0 100 100" className="cow-logo">
    <circle cx="50" cy="40" r="25" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <circle cx="42" cy="35" r="3" fill="#000"/>
    <circle cx="58" cy="35" r="3" fill="#000"/>
    <ellipse cx="50" cy="45" rx="4" ry="3" fill="#ffb6c1"/>
    <path d="M46,48 Q50,52 54,48" stroke="#333" strokeWidth="2" fill="none"/>
    <ellipse cx="35" cy="30" rx="8" ry="12" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <ellipse cx="65" cy="30" rx="8" ry="12" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <circle cx="35" cy="25" r="3" fill="#000"/>
    <circle cx="65" cy="25" r="3" fill="#000"/>
    <ellipse cx="50" cy="70" rx="20" ry="15" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <circle cx="45" cy="80" r="3" fill="#ffb6c1"/>
    <circle cx="55" cy="80" r="3" fill="#ffb6c1"/>
    <rect x="48" y="55" width="4" height="10" fill="#8B4513"/>
  </svg>
)

const CowDrinkingCoffee = () => (
  <svg width="200" height="150" viewBox="0 0 200 150" className="cow-main">
    <ellipse cx="100" cy="90" rx="40" ry="30" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <circle cx="100" cy="60" r="30" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <circle cx="90" cy="55" r="4" fill="#000"/>
    <circle cx="110" cy="55" r="4" fill="#000"/>
    <ellipse cx="100" cy="65" rx="5" ry="4" fill="#ffb6c1"/>
    <path d="M95,70 Q100,75 105,70" stroke="#333" strokeWidth="2" fill="none"/>
    <ellipse cx="75" cy="45" rx="10" ry="15" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <ellipse cx="125" cy="45" rx="10" ry="15" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <circle cx="75" cy="38" r="4" fill="#000"/>
    <circle cx="125" cy="38" r="4" fill="#000"/>
    <ellipse cx="80" cy="110" rx="8" ry="15" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <ellipse cx="120" cy="110" rx="8" ry="15" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <rect x="130" y="40" width="25" height="30" fill="#8B4513" stroke="#333" strokeWidth="2"/>
    <rect x="132" y="42" width="21" height="26" fill="#3E2723"/>
    <ellipse cx="142" cy="30" rx="15" ry="8" fill="#654321"/>
    <path d="M127,45 Q120,40 115,45" stroke="#333" strokeWidth="2" fill="none"/>
    <circle cx="155" cy="45" r="3" fill="#333"/>
    <text x="50" y="140" fontSize="12" fill="#333" textAnchor="middle">Ahh, perfect!</text>
  </svg>
)

const CowWithCappuccino = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" className="cow-gallery">
    <ellipse cx="60" cy="70" rx="25" ry="20" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <circle cx="60" cy="45" r="20" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <circle cx="54" cy="42" r="3" fill="#000"/>
    <circle cx="66" cy="42" r="3" fill="#000"/>
    <ellipse cx="60" cy="48" rx="3" ry="2" fill="#ffb6c1"/>
    <ellipse cx="40" cy="35" rx="8" ry="12" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <ellipse cx="80" cy="35" rx="8" ry="12" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <rect x="75" y="35" width="15" height="20" fill="#8B4513" stroke="#333" strokeWidth="2"/>
    <circle cx="82" cy="30" r="8" fill="#f5deb3"/>
    <circle cx="82" cy="30" r="6" fill="#deb887"/>
    <text x="60" y="105" fontSize="10" fill="#333" textAnchor="middle">Cappuccino!</text>
  </svg>
)

const CowWithLatte = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" className="cow-gallery">
    <ellipse cx="60" cy="70" rx="25" ry="20" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <circle cx="60" cy="45" r="20" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <circle cx="54" cy="42" r="3" fill="#000"/>
    <circle cx="66" cy="42" r="3" fill="#000"/>
    <ellipse cx="60" cy="48" rx="3" ry="2" fill="#ffb6c1"/>
    <ellipse cx="40" cy="35" rx="8" ry="12" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <ellipse cx="80" cy="35" rx="8" ry="12" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <rect x="75" y="30" width="18" height="25" fill="#fff" stroke="#333" strokeWidth="2"/>
    <rect x="77" y="32" width="14" height="18" fill="#deb887"/>
    <circle cx="93" cy="40" r="2" fill="#333"/>
    <path d="M70,40 Q75,35 80,40" stroke="#333" strokeWidth="2" fill="none"/>
    <text x="60" y="105" fontSize="10" fill="#333" textAnchor="middle">Latte Art!</text>
  </svg>
)

const CowWithEspresso = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" className="cow-gallery">
    <ellipse cx="60" cy="70" rx="25" ry="20" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <circle cx="60" cy="45" r="20" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <circle cx="54" cy="42" r="3" fill="#000"/>
    <circle cx="66" cy="42" r="3" fill="#000"/>
    <ellipse cx="60" cy="48" rx="3" ry="2" fill="#ffb6c1"/>
    <ellipse cx="40" cy="35" rx="8" ry="12" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <ellipse cx="80" cy="35" rx="8" ry="12" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <rect x="80" y="40" width="12" height="15" fill="#fff" stroke="#333" strokeWidth="2"/>
    <rect x="82" y="42" width="8" height="10" fill="#3E2723"/>
    <circle cx="92" cy="47" r="1.5" fill="#333"/>
    <path d="M75,45 Q78,40 82,45" stroke="#333" strokeWidth="2" fill="none"/>
    <text x="60" y="105" fontSize="10" fill="#333" textAnchor="middle">Espresso Shot!</text>
  </svg>
)

const CowCelebrating = () => (
  <svg width="150" height="150" viewBox="0 0 150 150" className="cow-celebrating">
    <ellipse cx="75" cy="90" rx="35" ry="25" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <circle cx="75" cy="60" r="25" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <circle cx="68" cy="55" r="3" fill="#000"/>
    <circle cx="82" cy="55" r="3" fill="#000"/>
    <ellipse cx="75" cy="65" rx="4" ry="3" fill="#ffb6c1"/>
    <path d="M70,70 Q75,75 80,70" stroke="#333" strokeWidth="2" fill="none"/>
    <ellipse cx="50" cy="45" rx="10" ry="15" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <ellipse cx="100" cy="45" rx="10" ry="15" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <circle cx="50" cy="38" r="4" fill="#000"/>
    <circle cx="100" cy="38" r="4" fill="#000"/>
    <line x1="35" y1="35" x2="45" y2="25" stroke="#333" strokeWidth="3"/>
    <line x1="115" y1="35" x2="105" y2="25" stroke="#333" strokeWidth="3"/>
    <ellipse cx="60" cy="115" rx="8" ry="15" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <ellipse cx="90" cy="115" rx="8" ry="15" fill="#f5f5f5" stroke="#333" strokeWidth="2"/>
    <rect x="90" y="35" width="20" height="25" fill="#FF6B6B" stroke="#333" strokeWidth="2"/>
    <text x="100" y="45" fontSize="8" fill="#fff" textAnchor="middle">COFFEE</text>
    <text x="100" y="53" fontSize="8" fill="#fff" textAnchor="middle">RULES!</text>
    <circle cx="25" cy="25" r="3" fill="#FFD700"/>
    <circle cx="125" cy="25" r="3" fill="#FFD700"/>
    <circle cx="30" cy="15" r="2" fill="#FFD700"/>
    <circle cx="120" cy="15" r="2" fill="#FFD700"/>
    <text x="75" y="140" fontSize="12" fill="#333" textAnchor="middle">Best coffee ever!</text>
  </svg>
)

export default App
