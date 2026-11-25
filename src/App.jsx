import { useEffect, useState } from 'react'
import brandDivider from './assets/concert/brand-divider.svg'
import headerDivider from './assets/concert/header-divider.svg'
import menuLines from './assets/concert/menu-lines.svg'
import landingBrandDivider from './assets/landing/brand-divider.svg'
import landingHeaderDivider from './assets/landing/header-divider.svg'
import landingMenuLines from './assets/landing/menu-lines.svg'
import './App.css'

const events = [
  { variant: 'featured', nodeId: '1:45' },
  { variant: 'secondary', nodeId: '1:61' },
]

function LandingHeader() {
  return (
    <header className="landing-header" data-node-id="25:26">
      <div className="landing-header__top" data-node-id="25:27">
        <a
          className="landing-brand"
          href="#landing"
          aria-label="Better Way home"
          data-node-id="1:16"
        >
          <span>BETTER</span>
          <span>WAY</span>
          <span className="landing-brand__divider" aria-hidden="true">
            <img src={landingBrandDivider} alt="" />
          </span>
        </a>
        <div className="landing-menu" aria-hidden="true" data-node-id="1:17">
          <img src={landingMenuLines} alt="" />
        </div>
      </div>
      <span className="landing-header__divider" aria-hidden="true" data-node-id="1:7">
        <img src={landingHeaderDivider} alt="" />
      </span>
    </header>
  )
}

function ConcertHeader() {
  return (
    <header className="concert-header" data-node-id="25:28">
      <div className="concert-header__top" data-node-id="25:29">
        <a
          className="concert-brand"
          href="#landing"
          aria-label="Better Way home"
          data-node-id="2:36"
        >
          <span>BETTER</span>
          <span>WAY</span>
          <span className="concert-brand__divider" aria-hidden="true">
            <img src={brandDivider} alt="" />
          </span>
        </a>
        <div className="concert-menu" aria-hidden="true" data-node-id="2:32">
          <img src={menuLines} alt="" />
        </div>
      </div>
      <span className="concert-header__divider" aria-hidden="true" data-node-id="2:35">
        <img src={headerDivider} alt="" />
      </span>
    </header>
  )
}

function EventCard({ variant, nodeId }) {
  return (
    <article
      className={`event-card event-card--${variant}`}
      data-node-id={nodeId}
    >
      <div className="event-card__background" aria-hidden="true">
        <span className="event-card__overlay" />
      </div>
      <div className="event-card__content">
        <p className="event-countdown">
          Count down to an event:
          <br />
          10:50:35
        </p>
        <h2>BIG CONCERT</h2>
      </div>
      <a className="explore-link" href="#concert">
        Explore
      </a>
    </article>
  )
}

function ConcertPage() {
  const sections = [
    { label: 'VENUE MAP', nodeId: '2:54' },
    { label: 'TICKET PRICES', nodeId: '2:55' },
    { label: 'INFORMATION', nodeId: '2:68' },
  ]

  return (
    <main className="concert-page" data-node-id="2:148">
      <section className="concert-hero" data-node-id="2:83">
        <div className="concert-hero__content" data-node-id="2:142">
          <ConcertHeader />
          <div className="concert-summary" data-node-id="25:30">
            <h1>BIG CONCERT</h1>
            <p className="concert-countdown">
              Count down to an event:
              <br />
              10:50:35
            </p>
          </div>
        </div>
      </section>
      <section
        className="concert-information"
        aria-label="Concert details"
        data-node-id="2:72"
      >
        <div className="concert-rows" data-node-id="2:141">
          {sections.map(({ label, nodeId }) => (
            <InformationRow key={nodeId} label={label} nodeId={nodeId} />
          ))}
        </div>
      </section>
    </main>
  )
}

function InformationRow({ label, nodeId }) {
  return (
    <div className="concert-row" data-node-id={nodeId}>
      <span className="concert-row__label">{label}</span>
      <span className="concert-row__icon" aria-hidden="true">
        +
      </span>
    </div>
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
      <div className="landing-content">
        <LandingHeader />
        <section className="event-list" aria-label="Upcoming events">
          {events.map(({ variant, nodeId }) => (
            <EventCard key={nodeId} variant={variant} nodeId={nodeId} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default App
