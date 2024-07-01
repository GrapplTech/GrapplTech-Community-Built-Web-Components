import React, { useState } from 'react'
import Hero from './Hero'
import Card from '../Card/Card'
const data = [
  {
    id:1,
    imageURL: 'https://tse2.mm.bing.net/th?id=OIP.iuXuV3I1W9x3H6EVzOa8XwAAAA&pid=Api&P=0&h=180',
    title: "Espresso",
    "desc": 'A strong and concentrated coffee brewed by forcing hot water through finely-ground coffee beans. It has a rich flavor and a thick consistency'
  },
  {
    id:2,
    imageURL: 'https://tse4.mm.bing.net/th?id=OIP.3thd4i6u3PRBaSZjOuE-uQHaFJ&pid=Api&P=0&h=180',
    title: "Cappuccino",
    "desc": "A classic Italian coffee drink made with equal parts espresso, steamed milk, and milk foam. It's typically topped with a sprinkle of cocoa powder or cinnamon."
  },
  {
    id:3,
    imageURL: 'https://tse4.mm.bing.net/th?id=OIP.fB1Jla1T85SYand_FZMnWAHaHa&pid=Api&P=0&h=180',
    title: "Latte",
    "desc": 'A smooth and creamy coffee drink made with a shot of espresso and steamed milk, topped with a small amount of milk foam. It’s often served in larger cups.'
  },
  {
    id:4,
    imageURL: 'https://tse1.mm.bing.net/th?id=OIP.RofMmgfFgF5F-E1JM6C2fQHaE8&pid=Api&P=0&h=180',
    title: "Americano",
    desc: 'Made by diluting a shot of espresso with hot water. This coffee has a similar strength to drip coffee but with a different flavor profile.'  
  },
  {
    id:5,
    imageURL: 'https://tse4.mm.bing.net/th?id=OIP.3thd4i6u3PRBaSZjOuE-uQHaFJ&pid=Api&P=0&h=180',
    title: "Mocha",
    "desc": 'A delightful blend of espresso, steamed milk, and chocolate syrup, often topped with whipped cream and a dusting of cocoa powder.'
  },
  {
    id:6,
    imageURL: 'https://tse3.mm.bing.net/th?id=OIP.rT-yA6yxqzXTgH-5F2lyTAHaE8&pid=Api&P=0&h=180',
    title: "Macchiato",
    "desc": 'An espresso "stained" with a small amount of steamed milk. It can be served hot or cold and is less milky than a cappuccino.'
  },
  {
    id:7,
    imageURL: 'https://tse2.mm.bing.net/th?id=OIP.VgIyWmhAJnNUfu7GhWaIJgHaEi&pid=Api&P=0&h=180',
    title: "Flat White",
    "desc": 'An espresso-based drink with steamed milk and a thin layer of microfoam. It’s similar to a latte but with a higher coffee-to-milk ratio.'
  },
  {
    id:8,
    imageURL: 'https://tse2.mm.bing.net/th?id=OIP.Na_vKLfN9t49-XSq0ad_JQHaE8&pid=Api&P=0&h=180',
    title: "Affogato",
    "desc": 'A dessert coffee drink that consists of a scoop of vanilla ice cream "drowned" with a shot of hot espresso.'
  },
]


function Dashboard() {
  const [cardData,setData] = useState(data);
  const [showAll,setShowAll] = useState(false);
  const [pages,setPages] = useState(4)
  const handleClick = () => {
    if(showAll){
      setPages(4)
    }else {
      setPages(data.length);
    }
    setShowAll(!showAll);
  }
  return (
    <div className='px-4'>
      <Hero />
      <div className='relative top-[8rem] ' >
        <div className='flex justify-between items-center'>
          <div className='text-2xl font-semibold'>Features Product</div>
          <div className='text-xl font-semibold cursor-pointer text-pink-500' onClick={handleClick}>{showAll ? "Hide all" : "Show all"}</div>
        </div>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex-wrap  justify-center items-center mt-6 '>
          {
            cardData.slice(0,pages).map((item) => (
              <div>
                <Card img ={item.imageURL}
                title={item.title}
                description={item.desc}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard