import {AiFillApple, AiOutlineSearch} from 'react-icons/ai';
import {BsBag} from 'react-icons/bs'

export default function Home() {
  return (
   <>
    <header>
      <nav>
        <i><AiFillApple/></i> 
        <ul>
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>TV & Home</li>
          <li>Entertainment</li>
          <li>Accessories</li>
          <li>Support</li>
          <li><AiOutlineSearch/></li>
          <li><BsBag/></li>
        </ul>
      </nav>
    </header>
   </>
  )
}
