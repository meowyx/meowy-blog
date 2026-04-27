export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="shell">
        <span>// crafted with care &nbsp;·&nbsp; {year}</span>
        <span>
          <a href="https://github.com/meowyx" className="link">github</a>
          &nbsp;·&nbsp;
          <a href="https://x.com/me256ow" className="link">x</a>
          &nbsp;·&nbsp;
          <a href="https://www.linkedin.com/in/sushmitaaar/" className="link">linkedin</a>
        </span>
      </div>
    </footer>
  )
}
