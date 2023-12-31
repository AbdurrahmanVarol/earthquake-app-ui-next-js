import Link from 'next/link'
import React from 'react'

const Earthquakes404 = () => {
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
            <h1 style={{ fontSize: 100 }}>404</h1>
            <h2>Aradığınız kuruma ait deprem bilgileri bulunamadı!</h2>
            <Link
                href="/"
                style={{ textDecoration: "underline", fontSize: 20, marginTop: 8, color: "#3C486B" }}
            >
                Anasayfa
            </Link>
        </div>
    )
}

export default Earthquakes404