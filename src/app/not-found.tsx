import Link from 'next/link'
import React from 'react'

const notfound = () => {
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
            <h1>{`Aradığınız sayfa bulunamadı :( - 404`}</h1>
            <Link
                href="/"
                style={{ textDecoration: "underline", fontSize: 20, marginTop: 8, color: "#3C486B" }}
            >
                Anasayfa
            </Link>
        </div>
    )
}

export default notfound