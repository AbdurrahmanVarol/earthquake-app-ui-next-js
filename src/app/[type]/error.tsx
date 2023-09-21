'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Earthquakes500 = () => {
    const router = useRouter()
    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                color: "#B70404"
            }}
        >
            <h1 style={{ fontSize: 100 }}>500</h1>
            <h2>Özür dileriz. Beklenmedik bir hata meydana geldi.</h2>
            <div style={{ width: "100%", display: "flex", flexDirection: "row", gap: 5, justifyContent: "center", color: "#3C486B" }}>
                <Link
                    href="/"
                    style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
                >
                    Anasayfa
                </Link>
                <button
                    onClick={() => { router.refresh() }}
                    style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
                >
                    Yeniden Yükle
                </button>
            </div>

        </div>
    )
}

export default Earthquakes500