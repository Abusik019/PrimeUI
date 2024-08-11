import styles from './style.module.scss'

export const NavigationPanel = ({ children = [] }) => {
  console.log(children);

  return (
    <ul className={styles.navPanel}>
      {children.map((child, index) => (
        <li key={index}>
          <a href={child.href} style={{marginBottom: child.links ? '10px' : '0px'}}>{child.name}</a>
          {child.links && (
            <div className={styles.linksArray}>
              {child.links.map((childLink, index) => (
                <h1 key={index}>{childLink.name}</h1>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}