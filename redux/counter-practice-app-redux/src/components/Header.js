import classes from './Header.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/redux-store'

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch()

  const logoutButtonHandler = () => {
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isLoggedIn && <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutButtonHandler}>Logout</button>
          </li>
        </ul>}
      </nav>
    </header>
  );
};

export default Header;
