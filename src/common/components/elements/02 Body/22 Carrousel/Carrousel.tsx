/* eslint-disable @next/next/no-img-element */
import React from 'react'

const posts = [
  {
    imageUrl:
    'https://github.com/miguelgargallo/SushiJS-Example-001/blob/main/bento/06%20Arubamu/BCNHostess-cliente-Adidas.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/miguelgargallo/SushiJS-Example-001/blob/main/bento/06%20Arubamu/BCNHostess-cliente-Beefeater.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/miguelgargallo/SushiJS-Example-001/blob/main/bento/06%20Arubamu/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/miguelgargallo/SushiJS-Example-001/blob/main/bento/06%20Arubamu/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/miguelgargallo/SushiJS-Example-001/blob/main/bento/06%20Arubamu/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/miguelgargallo/SushiJS-Example-001/blob/main/bento/06%20Arubamu/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/miguelgargallo/SushiJS-Example-001/blob/main/bento/06%20Arubamu/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/miguelgargallo/SushiJS-Example-001/blob/main/bento/06%20Arubamu/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/miguelgargallo/SushiJS-Example-001/blob/main/bento/06%20Arubamu/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/miguelgargallo/SushiJS-Example-001/blob/main/bento/06%20Arubamu/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/miguelgargallo/SushiJS-Example-001/blob/main/bento/06%20Arubamu/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/miguelgargallo/SushiJS-Example-001/blob/main/bento/06%20Arubamu/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/miguelgargallo/SushiJS-Example-001/blob/main/bento/06%20Arubamu/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/miguelgargallo/SushiJS-Example-001/blob/main/bento/06%20Arubamu/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/miguelgargallo/SushiJS-Example-001/blob/main/bento/06%20Arubamu/BCNHostess-cliente-Tinder.jpg?raw=true',
  },

]
export default function scrollImagesRight(props) {
  return (
<div className="w-full bg-red-100">
        <div className="h-[200px] m-auto overflow-hidden relative w-auto">
            <ul className="flex w-[calc(250px*14)] animate-scroll">
                <li className="w-[250px]"><img src ={posts[0].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[0].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[0].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[0].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[0].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[0].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[0].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[0].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[0].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[0].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[0].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[0].imageUrl} className="w-full h-full" /></li>
            </ul>
        </div>
</div>
  );
};