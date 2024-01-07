import { BiHomeCircle, BiUser } from 'react-icons/bi';
import { HiOutlineHashtag } from 'react-icons/hi';
import { BsBell, BsBookmark, BsTwitter } from 'react-icons/bs';
import { HiEnvelope } from 'react-icons/hi2';
import Link from 'next/link';

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
        <section className="fixed w-72 flex flex-col h-screen">
          <Link href={"/"} className="my-4">
            <BsTwitter />
          </Link>
          {NAVIGATION_ITEMS.map((item) => (
            <Link 
              className="hover:bg-white/10 transition duration-200 flex items-center justify-center space-x-2 rounded-3xl p-4"
              href={`/${item.title.toLowerCase()}`}
              key={item.title}
            >
              <div>
                <item.icon />
              </div>
              <div>
                {item.title}
              </div>    
            </Link>  
          ))}  
        </section>
        <main>Home timeline</main>
        <section>Right section</section>
      </div>  
    </div>
  );
}

export default Home;