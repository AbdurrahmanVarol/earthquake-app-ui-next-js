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
            }}
        >
            <h1>Özür dileriz. Beklenmedik bir hata meydana geldi.</h1>
            <div style={{ width: "100%", display: "flex", flexDirection: "row", gap: 5, justifyContent: "center" }}>
                <Link
                    href="/"
                    style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
                >
                    Anasayfa
                </Link>
                <button
                    onClick={() => { router.refresh() }}
                    style={{ color: "white", textDecoration: "underline", fontSize: 20, marginTop: 8 }}
                >
                    Yeniden Yükle
                </button>
            </div>

        </div>
    )
}

export default Earthquakes500