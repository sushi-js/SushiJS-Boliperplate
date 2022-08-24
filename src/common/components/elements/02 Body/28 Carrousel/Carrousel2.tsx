/* eslint-disable @next/next/no-img-element */
import React from 'react'

const posts = [
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/09%20BrandImages/BCNHostess-cliente-logo-Adidas.png?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/09%20BrandImages/BCNHostess-cliente-logo-Bacardi.png?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/09%20BrandImages/BCNHostess-cliente-logo-GINMIG.png?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/09%20BrandImages/BCNHostess-cliente-logo-LuckySrike.png?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/09%20BrandImages/BCNHostess-cliente-logo-Mango.png?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/09%20BrandImages/BCNHostess-cliente-logo-MassimoDutti.png?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/09%20BrandImages/BCNHostess-cliente-logo-OneCoWork.png?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/09%20BrandImages/BCNHostess-cliente-logo-OYSHO.png?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/09%20BrandImages/BCNHostess-cliente-logo-PhilipMorris.png?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/09%20BrandImages/BCNHostess-cliente-logo-Revlon.png?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/09%20BrandImages/BCNHostess-cliente-logo-Telefonica.png?raw=true',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/09%20BrandImages/BCNHostess-cliente-logo-VICE.png?raw=true',
  },

]
export default function scrollImagesRight() {
  return (
<div className="w-full bg-white">
        <div className="h-[105px] m-auto overflow-hidden relative w-auto">
            <ul className="flex w-[calc(500px*2)] animate-scroll">
                <li className="w-[250px]"><img src ={posts[0].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[1].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[2].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[3].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[4].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[5].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[6].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[7].imageUrl} className="w-full h-full" /></li>
                <li className="w-[250px]"><img src ={posts[8].imageUrl} className="w-full h-full" /></li>
            </ul>
        </div>
</div>
  );
};