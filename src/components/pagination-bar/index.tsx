import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.css"

const PaginationBar = ({ data }: any) => {

  console.log(data)
  return (
    <div className={styles.center}>
      <div className={styles.pagination}>
        <Link href={`/${data.type}?page=${data.currentPage - 1}`} hidden={!data.hasPrevious}>&laquo;</Link>
        {
          [...Array(Number(data.pages)).keys()].map(item => (
            <Link href={`/${data.type}?page=${item + 1}`} prefetch={true} replace={true} key={item} className={data.currentPage == item + 1 ? styles.active : ''}>{item + 1}</Link>
          ))
        }
        {/* <a href="#">1</a>
        <a href="#" className={styles.active}>2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a> */}
        <Link href={`/${data.type}?page=${+data.currentPage + 1}`} hidden={!data.hasNext}>&raquo;</Link>
      </div>
    </div>
  )
}

export default PaginationBar