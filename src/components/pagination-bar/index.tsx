import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.css"
import { WebSiteType } from '@/models/enums/WebSiteType'

interface PaginationBarProps {
  type: WebSiteType,
  currentPage: number,
  pages: number,
  hasPrevious: boolean,
  hasNext: boolean
}

const PaginationBar = ({ type, currentPage, pages, hasNext, hasPrevious }: PaginationBarProps) => {

  return (
    <div className={styles.center}>
      <div className={styles.pagination}>
        <Link href={`/${type}?page=${currentPage - 1}`} hidden={!hasPrevious}>&laquo;</Link>
        {
          [...Array(Number(pages)).keys()].map(item => (
            <Link href={`/${type}?page=${item + 1}`} prefetch={true} replace={true} key={item} className={currentPage == item + 1 ? styles.active : ''}>{item + 1}</Link>
          ))
        }
        <Link href={`/${type}?page=${currentPage + 1}`} hidden={!hasNext}>&raquo;</Link>
      </div>
    </div>
  )
}

export default PaginationBar