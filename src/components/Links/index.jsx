import styles from './style.module.scss';


const LINKS = [
    {
        name: 'Storybook',
        image: '../../../src/assets/storybook.png',
        href: 'https://storybook.nextui.org/?path=/story/components-avatar--default'
    },
    {
        name: '@nextui-org',
        image: '../../../src/assets/npm.svg',
        href: 'https://www.npmjs.com/package/@nextui-org'
    },
    {
        name: 'Source',
        image: '../../../src/assets/white-github.svg',
        href: 'https://github.com/nextui-org/nextui/tree/main/packages/components'
    },
    {
        name: 'Style sources',
        image: '../../../src/assets/white-github.svg',
        href: 'https://github.com/nextui-org/nextui/blob/main/packages/core/theme/src/components'
    },
    {
        name: 'React Aria',
        image: '../../../src/assets/react-aria.png',
        href: 'https://react-spectrum.adobe.com/react-aria'
    },
];

export const Links = () => {
  const randomCount = Math.floor(Math.random() * 4) + 2;
  const randomLinks = LINKS.sort(() => 0.5 - Math.random()).slice(0, randomCount);

  return (
    <ul className={styles.links}>
      {randomLinks.map((link, index) => (
        <li key={index}>
          <img src={link.image} />
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
