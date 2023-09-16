'use client'
import Link from 'next/link'
import React from 'react'
import Styles from './styles.module.css'

const PaginationBar = ({ pageSize, index }: any) => {
  const geretate = () => {
    if (pageSize < 6) {
      return mm1(index)
    }
    else {
      return mm2()
    }
  }
  const mm1 = (index: number) => {
    const items = [1, 2, 3, 4, 5]
    return <>
      {
        items.map((item, index) => (
          <Link key={index} href="" className='link'>
            {item}
          </Link>
        ))
      }
    </>
  }
  const mm2 = () => {

  }
  return (
    <div id="pagination">
      <ul>
        <Link href="" className='page-item previous no' hidden={index == 1}>
          Previous
        </Link>
        {

        }
        <Link href="" className='page-item previous no'>
          Previous2
        </Link>
      </ul>
    </div>
  )
}

export default PaginationBar