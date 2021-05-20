import React, {useState} from 'react';
import style from "src/Content4.module.css";
import { Comp } from "src/inner/k";


export default function Index() {
    const [s] = useState(true);

    if (s) {
        return
        <>
            <div className={style.header}></div>
                <Comp />
        </>
    }

    return null;
}

export const getServerSideProps = () => {
    return {
        props: {}
    };
}