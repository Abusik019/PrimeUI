import { useState } from 'react';
import styles from './style.module.scss'


// [
//   {
//     name: ,
//     href: 
//     icon
//   }
// ]

export const NavigationPanel = ({ children }) => {
  console.log(children);

  return (
    <ul className={styles.navPanel}>
        
    </ul>
  )
}

// 1. Построить список заголовков, где каждый уровень вложенности имеется +15px margin left

// 2. РАзложить все вложенные заголовки и составить массив и вывести через map
// ['', '', '', ''].map(el => h1.text)


//  [{
//   name: '',
//   href: '',
//   desc: '',
//   links: [{
//       name: '',
//       href: '',
//       desc: '',
//     },
//     {
//       name: '',
//       href: '',
//       desc: '',
//     }
//   ]
// },
// {
//   name: '',
//   href: '',
//   desc: '',
// }]