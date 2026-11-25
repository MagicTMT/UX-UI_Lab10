import { useEffect, useState } from 'react'
import './App.css'

const events = [
  { theme: 'blue' },
  { theme: 'sunset' },
]

function Header({ variant = 'landing' }) {
  return (
    <header className={`site-header site-header--${variant}`}>
      <a className="wordmark" href="#landing" aria-label="Better Way home">
        BETTER
        <br />
        WAY
      </a>
      <button className="menu-toggle" type="button" aria-label="Open menu">
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

function EventCard({ theme }) {
  return (
    <article className={`event-card event-card--${theme}`}>
      <p className="event-countdown">
        Count down to an event:
        <br />
        10:50:35
      </p>
      <h2>BIG CONCERT</h2>
      <a className="explore-link" href="#concert">
        Explore
      </a>
    </article>
  )
}

function ConcertPage() {
  const sections = ['VENUE MAP', 'TICKET PRICES', 'INFORMATION']

  return (
    <main className="concert-page">
      <section className="concert-hero">
        <Header variant="concert" />
        <h1>BIG CONCERT</h1>
        <p className="concert-countdown">
          Count down to an event:
          <br />
          10:50:35
        </p>
      </section>
      <section className="concert-sections" aria-label="Concert details">
        {sections.map((section) => (
          <div className="concert-section" key={section}>
            <span>{section}</span>
            <span aria-hidden="true">+</span>
          </div>
        ))}
      </section>
    </main>
  )
}

function App() {
  const [isConcertPage, setIsConcertPage] = useState(
    window.location.hash === '#concert',
  )

  useEffect(() => {
    const updatePage = () => {
      setIsConcertPage(window.location.hash === '#concert')
    }

    window.addEventListener('hashchange', updatePage)
    return () => window.removeEventListener('hashchange', updatePage)
  }, [])

  if (isConcertPage) {
    return <ConcertPage />
  }

  return (
    <main className="landing-page">
      <Header />
      <section className="event-list" aria-label="Upcoming events">
        {events.map(({ theme }) => (
          <EventCard key={theme} theme={theme} />
        ))}
      </section>
    </main>
  )
}

export default App
