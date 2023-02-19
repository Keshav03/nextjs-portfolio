import React from 'react'
import styles from '../styles/CssModule.module.css'


function cssModuleComponent() {
  return (
        <div className={styles.container}>
            <div className={styles.paragraph}><p>Uses the `paragraph` class in the Css Module style sheet.</p></div>
            <div className='paragraph'><p>This paragrpah element uses the class `paragraph` from the global css.</p></div>
        </div>
  )
}

export default cssModuleComponent