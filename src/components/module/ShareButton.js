"use client";

import styles from "@/module/ShareButton.module.css";
import { useState, useEffect } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { LuShare2 } from "react-icons/lu";


function ShareButton() {
    const [url, setUrl] = useState();

    useEffect(() => {
        setUrl(window.location.href)
    } , [])
  return (
    <CopyToClipboard text={url}>
    <div className={styles.container}>
        <LuShare2/>
        <button>اشتراک‌گذاری</button>
    </div>
    </CopyToClipboard>

  )
}

export default ShareButton;