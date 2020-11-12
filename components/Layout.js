import Head from 'next/head'

const Layout = ({ children }) => {
  const head = () => (
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
      crossorigin="anonymous"
    />
  )
  const nav = () => (
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link" href="">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">
          Login
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">
          Register
        </a>
      </li>
    </ul>
  )
  return (
    <React.Fragment>
      {head()}
      {nav()}
      {children}
    </React.Fragment>
  )
}
export default Layout
