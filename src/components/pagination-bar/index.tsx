import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.css"
import { WebSiteType } from '@/models/enums/WebSiteType'

interface PaginationBarProps {
  type: keyof typeof WebSiteType,
  currentPage: number,
  pages: number,
  hasPrevious: boolean,
  hasNext: boolean
}

const PaginationBar = ({ type, currentPage, pages, hasNext, hasPrevious }: PaginationBarProps) => {
  console.log(pages)
  const getLinksByPageSize = () => {
    if (pages <= 10) {
      return <>
        <Link href={`/${WebSiteType[type]}?page=${1}`} hidden={currentPage == 1}>&laquo;&laquo;</Link>
        <Link href={`/${WebSiteType[type]}?page=${currentPage - 1}`} hidden={!hasPrevious}>&laquo;</Link>
        {
          [...Array(Number(pages)).keys()].map(item => (
            <Link href={`/${WebSiteType[type]}?page=${item + 1}`} prefetch={true} replace={true} key={item} className={currentPage == item + 1 ? styles.active : ''}>{item + 1}</Link>
          ))
        }
        <Link href={`/${WebSiteType[type]}?page=${currentPage + 1}`} hidden={!hasNext}>&raquo;</Link>
        <Link href={`/${WebSiteType[type]}?page=${pages}`} hidden={currentPage == pages}>&raquo;&raquo;</Link>
      </>
    }
    else {
      if (currentPage < 6) {
        return <>
          <Link href={`/${WebSiteType[type]}?page=${1}`} hidden={currentPage == 1}>&laquo;&laquo;</Link>
          <Link href={`/${WebSiteType[type]}?page=${currentPage - 1}`} hidden={!hasPrevious}>&laquo;</Link>
          {
            [...Array(Number(9)).keys()].map(item => (
              <Link href={`/${WebSiteType[type]}?page=${item + 1}`} prefetch={true} replace={true} key={item} className={currentPage == item + 1 ? styles.active : ''}>{item + 1}</Link>
            ))
          }
          <Link href="#" className={styles.disabled}>...</Link>
          <Link href={`/${WebSiteType[type]}?page=${currentPage + 1}`} hidden={!hasNext}>&raquo;</Link>
          <Link href={`/${WebSiteType[type]}?page=${pages}`} hidden={currentPage == pages}>&raquo;&raquo;</Link>
        </>
      }
      if (currentPage > pages - 5) {
        return <>
          <Link href={`/${WebSiteType[type]}?page=${1}`} hidden={currentPage == 1}>&laquo;&laquo;</Link>
          <Link href={`/${WebSiteType[type]}?page=${currentPage - 1}`} hidden={!hasPrevious}>&laquo;</Link>
          <Link href="#" className={styles.disabled}>...</Link>
          {
            [...Array(Number(9)).keys()].reverse().map(item => (
              <Link href={`/${WebSiteType[type]}?page=${pages - item}`} prefetch={true} replace={true} key={item} className={currentPage == pages - item ? styles.active : ''}>{pages - item}</Link>
            ))
          }

          <Link href={`/${WebSiteType[type]}?page=${currentPage + 1}`} hidden={!hasNext}>&raquo;</Link>
          <Link href={`/${WebSiteType[type]}?page=${pages}`} hidden={currentPage == pages}>&raquo;&raquo;</Link>
        </>
      }
      else {
        return <>
          <Link href={`/${WebSiteType[type]}?page=${1}`} hidden={currentPage == 1}>&laquo;&laquo;</Link>
          <Link href={`/${WebSiteType[type]}?page=${currentPage - 1}`} hidden={!hasPrevious}>&laquo;</Link>
          <Link href="#" className={styles.disabled}>...</Link>

          <Link href={`/${WebSiteType[type]}?page=${currentPage - 2}`} prefetch={true} replace={true}>{currentPage - 2}</Link>
          <Link href={`/${WebSiteType[type]}?page=${currentPage - 1}`} prefetch={true} replace={true}>{currentPage - 1}</Link>
          <Link href={`/${WebSiteType[type]}?page=${currentPage}`} prefetch={true} replace={true} className={styles.active}>{currentPage}</Link>
          <Link href={`/${WebSiteType[type]}?page=${currentPage + 1}`} prefetch={true} replace={true}>{currentPage + 1}</Link>
          <Link href={`/${WebSiteType[type]}?page=${currentPage + 2}`} prefetch={true} replace={true}>{currentPage + 2}</Link>

          <Link href="#" className={styles.disabled}>...</Link>
          <Link href={`/${WebSiteType[type]}?page=${currentPage + 1}`} hidden={!hasNext}>&raquo;</Link>
          <Link href={`/${WebSiteType[type]}?page=${pages}`} hidden={currentPage == pages}>&raquo;&raquo;</Link>
        </>
      }
    }
  }
  return (
    <div className={styles.center}>
      <div className={styles.pagination}>
        {
          getLinksByPageSize()
        }
      </div>
    </div>
  )
}

export default PaginationBar