import { useEffect, useState } from 'react'
import { CLINIC, UI } from './clinic.js'

const LANGS = ['en', 'ar']
const SECTION_IDS = ['services', 'why', 'reviews', 'visit']

function firstLang() {
  const asked = new URLSearchParams(window.location.search).get('lang')
  if (LANGS.includes(asked)) return asked
  try {
    const saved = window.localStorage.getItem('lang')
    if (LANGS.includes(saved)) return saved
  } catch {
    // Storage can be blocked. The default language is fine.
  }
  return CLINIC.defaultLang
}

const waLink = (text) =>
  `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(text)}`

const Tooth = (props) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
    <path d="M20 6c-8 0-13 6-13 14 0 7 3 11 4 17 1 7 2 21 8 21 5 0 4-14 13-14s8 14 13 14c6 0 7-14 8-21 1-6 4-10 4-17 0-8-5-14-13-14-5 0-8 3-12 3s-7-3-12-3z" />
  </svg>
)

// Phone numbers always read left to right, also inside Arabic text.
const Phone = () => <bdi dir="ltr">{CLINIC.phone}</bdi>

export default function App() {
  const [lang, setLang] = useState(firstLang)
  const c = CLINIC[lang]
  const t = UI[lang]

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = t.dir
    document.title = c.metaTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', c.metaDescription)
  }, [lang, t, c])

  function switchLang() {
    const next = t.switchTo
    setLang(next)
    try {
      window.localStorage.setItem('lang', next)
    } catch {
      // Storage can be blocked. The switch still works for this visit.
    }
    const url = new URL(window.location.href)
    if (next === CLINIC.defaultLang) url.searchParams.delete('lang')
    else url.searchParams.set('lang', next)
    window.history.replaceState(null, '', url)
  }

  function book(e) {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.target))
    const lines = [
      t.msgHello(c.name),
      `${t.msgName}: ${f.name}`,
      `${t.msgPhone}: ${f.phone}`,
      `${t.msgService}: ${f.service}`,
      f.date && `${t.msgDate}: ${f.date}`,
      f.note && `${t.msgNote}: ${f.note}`,
    ]
    window.open(waLink(lines.filter(Boolean).join('\n')), '_blank', 'noopener')
  }

  const now = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
  const tel = `tel:${CLINIC.phone.replace(/\s/g, '')}`
  const quickChat = waLink(t.msgHello(c.name))
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(CLINIC.mapQuery)}&hl=${lang}&output=embed`
  const isMockup = CLINIC.mode === 'mockup'
  const sections = SECTION_IDS.map((id, i) => [id, t.nav[i]]).filter(
    ([id]) => id !== 'reviews' || c.reviews.length > 0,
  )

  return (
    <>
      <header className="nav">
        <div className="wrap nav-in">
          <a href="#top" className="brand">
            <Tooth className="brand-mark" />
            <span>{c.name}</span>
          </a>
          <nav aria-label={t.navLabel}>
            {sections.map(([id, label]) => (
              <a href={`#${id}`} key={id}>{label}</a>
            ))}
          </nav>
          <button type="button" className="lang" lang={t.switchTo} onClick={switchLang}>
            {t.switchLabel}
          </button>
          <a href="#book" className="btn btn-sm">{t.bookCta}</a>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div>
            <p className="eyebrow">{c.hero.eyebrow}</p>
            <h1>{c.hero.title}</h1>
            <p className="lead">{c.hero.lead}</p>
            <div className="actions">
              <a href="#book" className="btn">{t.bookCta}</a>
              <a href={tel} className="btn btn-ghost">{t.call}&nbsp;<Phone /></a>
            </div>
            <p className="hint">{c.hero.hint}</p>
          </div>

          <div className={CLINIC.photo ? 'hero-art has-photo' : 'hero-art'} aria-hidden="true">
            {CLINIC.photo ? (
              <img className="hero-photo" src={CLINIC.photo} alt="" />
            ) : (
              <Tooth className="hero-tooth" />
            )}
            {c.chips.slice(0, 2).map(([big, small], i) => (
              <div className={`chip chip-${i ? 'b' : 'a'}`} key={small}>
                <strong>{big}</strong>
                <span>{small}</span>
              </div>
            ))}
          </div>
        </section>

        {c.stats.length > 0 && (
          <section className="wrap stats" aria-label={t.statsLabel}>
            {c.stats.map(([n, label]) => (
              <div key={label}>
                <strong>{n}</strong>
                <span>{label}</span>
              </div>
            ))}
          </section>
        )}

        <section id="services" className="wrap section">
          <p className="eyebrow">{t.servicesEyebrow}</p>
          <h2>{c.servicesTitle}</h2>
          <div className="grid">
            {c.services.map(([title, text], i) => (
              <article className="card" key={title}>
                <span className="num">{pad(i + 1)}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="why" className="band">
          <div className="wrap section split">
            <div>
              <p className="eyebrow">{t.whyEyebrow}</p>
              <h2>{c.whyTitle}</h2>
              {c.whyLead && <p className="lead">{c.whyLead}</p>}
            </div>
            <ul className="reasons">
              {c.reasons.map(([title, text]) => (
                <li key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {c.reviews.length > 0 && (
          <section id="reviews" className="wrap section">
            <p className="eyebrow">{t.reviewsEyebrow}</p>
            <h2>{c.reviewsTitle}</h2>
            <div className="grid">
              {c.reviews.map(([quote, name, treatment]) => (
                <figure className="card quote" key={name}>
                  <div className="stars" role="img" aria-label={t.starsLabel}>★★★★★</div>
                  <blockquote>{quote}</blockquote>
                  <figcaption>
                    <strong>{name}</strong>
                    <span>{treatment}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section id="book" className="wrap section split book">
          <div>
            <p className="eyebrow">{t.bookEyebrow}</p>
            <h2>{t.bookTitle}</h2>
            <p className="lead">{t.bookLead}</p>
            <a href={quickChat} target="_blank" rel="noopener" className="link">
              {t.bookDirect}
            </a>
          </div>
          <form className="card form" onSubmit={book}>
            <label>
              {t.fName}
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              {t.fPhone}
              <input
                name="phone"
                type="tel"
                dir="ltr"
                required
                autoComplete="tel"
                pattern="[0-9+ ]{8,16}"
                title={t.fPhoneHint}
                placeholder="01X XXXX XXXX"
              />
            </label>
            <label>
              {t.fService}
              <select name="service" required defaultValue="" key={lang}>
                <option value="" disabled>{t.fChoose}</option>
                {c.services.map(([title]) => <option key={title}>{title}</option>)}
                <option>{t.fEmergency}</option>
                <option>{t.fUnsure}</option>
              </select>
            </label>
            <label>
              <span>{t.fDate} <small>{t.optional}</small></span>
              <input name="date" type="date" min={today} />
            </label>
            <label className="full">
              <span>{t.fNote} <small>{t.optional}</small></span>
              <textarea name="note" rows="3" />
            </label>
            <button className="btn full">{t.send}</button>
          </form>
        </section>

        <section id="visit" className="band">
          <div className="wrap section split">
            <div>
              <p className="eyebrow">{t.visitEyebrow}</p>
              <h2>{c.visitTitle}</h2>
              <address>{c.address}</address>
              <dl className="hours">
                {c.hours.map(([day, time]) => (
                  <div key={day}>
                    <dt>{day}</dt>
                    <dd>{time}</dd>
                  </div>
                ))}
              </dl>
              <a href={tel} className="btn btn-ghost">{t.call}&nbsp;<Phone /></a>
            </div>
            <iframe
              className="map"
              title={t.mapTitle(c.name)}
              loading="lazy"
              referrerPolicy="no-referrer"
              src={mapSrc}
            />
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <div>
          <span>© {now.getFullYear()} {c.name}{lang === 'ar' ? '،' : ','} {c.area}</span>
          <span>{isMockup ? t.mockupNote(c.name) : t.demoNote}</span>
        </div>
        <p className="credit">
          {isMockup ? t.creditMockup : t.creditDemo}{' '}
          <a href={CLINIC.credit.url} target="_blank" rel="noopener">
            <bdi>{CLINIC.credit.name}</bdi>
          </a>
          <span> · {t.creditTag}</span>
        </p>
      </footer>

      <a href={quickChat} target="_blank" rel="noopener" className="fab">
        {t.fab}
      </a>
    </>
  )
}
