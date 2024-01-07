import { BiHomeCircle, BiUser } from 'react-icons/bi';
import { HiOutlineHashtag } from 'react-icons/hi';
import { BsBell, BsBookmark, BsTwitter } from 'react-icons/bs';
import { HiEnvelope } from 'react-icons/hi2';
import Link from 'next/link';

const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon: BsTwitter
  },
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
      <div className="max-w-screen-xl w-full h-full flex relative">
        /* Left sidebar for navigation/header */
        <section className="fixed w-72 flex flex-col h-screen space-y-4 my-4">
          {NAVIGATION_ITEMS.map((item) => (
            <Link 
              className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6"
              href={`/${item.title.toLowerCase()}`}
              key={item.title}
            >
              <div>
                <item.icon />
              </div>
              {item.title !== 'Twitter' && <div>{item.title}</div>}
            </Link>  
          ))}
          <button className="">
            Tweet
          </button>      
        </section>
        <main>Home timeline</main>
        <section>Right section</section>
      </div>  
    </div>
  );
}

export default Home;