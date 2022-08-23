/* eslint-disable @next/next/no-img-element */
import React from 'react'

const posts = [
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/06%20CardsProps/BCNHostess-cliente-Adidas.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/src/common/components/elements/02%20Body/BCNHostess-cliente-Beefeater.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/src/common/components/elements/02%20Body/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/src/common/components/elements/02%20Body/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/src/common/components/elements/02%20Body/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/src/common/components/elements/02%20Body/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/src/common/components/elements/02%20Body/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/src/common/components/elements/02%20Body/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/src/common/components/elements/02%20Body/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/src/common/components/elements/02%20Body/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/src/common/components/elements/02%20Body/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/src/common/components/elements/02%20Body/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/src/common/components/elements/02%20Body/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/src/common/components/elements/02%20Body/BCNHostess-cliente-Tinder.jpg?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/src/common/components/elements/02%20Body/BCNHostess-cliente-Tinder.jpg?raw=true',
  },

]
export default function scrollImagesRight() {
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