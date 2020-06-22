import React, {useCallback} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from 'styles/first-post.module.css'

console.log('执行了')
export default function FirstPost() {
  const clickMe = useCallback(() => {
    console.log('you clicked me')
  }, [])
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          内容
        </div>
      </div>
    </React.Fragment>

  )
}