import React from "react";
import { createPortal } from "react-dom"

export default function Loading ({ open }) {
    const loading = (
        <div>
            <div className="bg-var-2 fixed top-0 bottom-0 w-screen h-screen flex justify-center items-center">
                <div className="circle"></div>
            </div>
        </div>
    )

    if (open) {
        return createPortal(loading, document.body)
    } else {
        null
    }
}