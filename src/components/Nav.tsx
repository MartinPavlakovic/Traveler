import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <div>
        <Link to="/"> homelogo </Link>
      </div>
      <div>
        <Link to="/explore"> EXPLORE </Link>
        <Link to="/chats"> CHATS </Link>
        <Link to="/profile"> PROFILE </Link>
      </div>
      <div>
        <Link to="/login"> LOG IN</Link>
        <Link to="/register"> SIGN UP</Link>
      </div>
    </nav>
  );
}
