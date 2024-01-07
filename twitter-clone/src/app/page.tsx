import { BiHomeCircle, BiUser } from 'react-icons/bi';
import { HiOutlineHashtag } from 'react-icons/hi';
import { BsBell, BsBookmark } from 'react-icons/bs';
import { HiEnvelope } from 'react-icons/hi2';

const NAVIGATION_ITEMS = [
  {
    title: 'Home',
    icon: BiHomeCircle
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag
  },
  {
    title: 'Notifications',
    icon: BsBell
  },
  {
    title: 'Messages',
    icon: HiEnvelope
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark
  },
  {
    title: 'Profile',
    icon: BiUser
  },
];  

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        /* Left sidebar for navigation/header */
        <section className="fixed w-72 flex flex-col">

        </section>
        <main>Home timeline</main>
        <section>Right section</section>
      </div>  
    </div>
  );
}

export default Home;