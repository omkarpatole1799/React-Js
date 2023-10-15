import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { clearLocalStorage as clearStorage } from '../../Utils/clearLocalStorage'

// CSS IMPORT
import './Navbar.css'
import './NavbarQueries.css'

function Navbar() {
  const navigate = useNavigate()
  const [actionButtons, setActionButtons] = useState(null)

  const [navOpen, setNavOpen] = useState(false)

  let userType = localStorage.getItem('userType')
  useEffect(() => {
    userType === '1'
      ? setActionButtons([
          {
            name: 'Dashboard',
            function: daboardButtonHandler
          },
          { name: 'Add log', function: addLogHandler },
          {
            name: 'Add user',
            function: addUserButtonHandler
          },
          {
            name: 'Log list',
            function: logListButtonHandler
          },
          { name: 'Logout', function: logOutButtonHandler }
        ])
      : setActionButtons([
          {
            name: 'Dashboard',
            function: daboardButtonHandler
          },
          { name: 'Add log', function: addLogHandler },
          {
            name: 'Log list',
            function: logListButtonHandler
          },
          { name: 'Logout', function: logOutButtonHandler }
        ])
  }, [userType])

  function logOutButtonHandler() {
    clearLocalStorage()
    navigate('/login')
  }
  function addLogHandler() {
    setNavOpen(false)
    navigate('/addLog')
  }
  function daboardButtonHandler() {
    setNavOpen(false)
    navigate('/')
  }
  function logListButtonHandler() {
    setNavOpen(false)
    navigate('/logList/' + localStorage.getItem('userId'))
  }
  function addUserButtonHandler() {
    setNavOpen(false)
    navigate('/addUser')
  }
  function clearLocalStorage() {
    setNavOpen(false)
    clearStorage()
  }
  function mobileNavHandler() {
    setNavOpen(!navOpen)
  }
  console.log(navOpen)
  return (
    <>
      <section className="header-section">
        <header
          className={navOpen ? 'header nav-open' : 'header'}>
          <div>Logo</div>
          <nav className="main-nav">
            <ul className="main-nav-links">
              {actionButtons !== null &&
                actionButtons.map((el, i) => {
                  return (
                    <li
                      className="main-nav-link"
                      onClick={el.function}
                      key={i}>
                      {el.name}
                    </li>
                  )
                })}
            </ul>
          </nav>
          <button
            className="btn-mobile-nav "
            onClick={mobileNavHandler}>
            <div className={navOpen ? 'dis-none' : ''}>
              <ion-icon
                className="menu-icon dis-none"
                name="grid-outline"></ion-icon>
            </div>
            <div className={!navOpen ? 'dis-none' : ''}>
              <ion-icon
                className="menu-icon"
                name="close-circle-outline"></ion-icon>
            </div>
          </button>
        </header>
      </section>
    </>
  )
}

export default Navbar
