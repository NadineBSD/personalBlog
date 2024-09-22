import React, { useState, useEffect } from 'react'
import axios from 'axios';
import data from "./data.jsx"
import './Portfolio.css'

function Card(props) {
    return (
        <div className="card-container">
            <div className="card">
                <img src={`/assets/${props.img}`} className="card--image" />
                <h1 className="card--title">{props.title}</h1>
            </div>
        </div>
    )
}

function Portfolio() {

    const [designs, setDesigns] = useState([]);
    const [webDev, setWebDev] = useState([]);
    const [mobileDev, setMobileDev] = useState([]);

    const [isDesignArrayEmpty, setIsDesignArrayEmpty] = useState(true);
    const [isWebArrayEmpty, setIsWebArrayEmpty] = useState(true);
    const [isMobileArrayEmpty, setIsMobileArrayEmpty] = useState(true);

    useEffect(() => {
        // Fetch design array data
        axios.get('https://personal-blog-lovat-delta.vercel.app/designArray')
            .then((response) => {
                setDesigns(response.data);
            })
            .catch((error) => {
                console.error('Error fetching designs:', error);
            });

        // Fetch web dev array data
        axios.get('https://personal-blog-lovat-delta.vercel.app/webDevArray')
            .then((response) => {
                setWebDev(response.data);
            })
            .catch((error) => {
                console.error('Error fetching webDev:', error);
            });

        // Fetch mobile dev array data
        axios.get('https://personal-blog-lovat-delta.vercel.app/mobileDevArray')
            .then((response) => {
                setMobileDev(response.data);
            })
            .catch((error) => {
                console.error('Error fetching mobileDev:', error);
            });
    }, []);

    useEffect(() => {
        setIsDesignArrayEmpty(designs.length === 0);
        setIsWebArrayEmpty(webDev.length === 0);
        setIsMobileArrayEmpty(mobileDev.length === 0);
    });

    const designCards = designs.map(item => {
        return (
            <Card
                key={item.id}
                img={item.srcImg}
                title={item.Title}
            />
        )
    });

    const webCards = webDev.map(item => {
        return (
            <Card
                key={item.id}
                img={item.srcImg}
                title={item.Title}
            />
        )
    });

    const mobileCards = mobileDev.map(item => {
        return (
            <Card
                key={item.id}
                img={item.srcImg}
                title={item.Title}
            />
        )
    });

    return (
        <div className='portfolio-container'>

            <div className="doodles">
                <svg className="Star10" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9081 0.771792C15.4703 1.21881 14.6432 3.9009 14.0108 7.25351L12.8919 12.9753L7.54054 14.9422C2.38378 16.8643 0 18.4289 0 19.904C0 21.111 1.84865 22.2285 4.71892 22.7202C10.6541 23.7931 13.8162 24.5977 14.6432 25.2682C15.1297 25.6705 16.5892 28.5761 18 31.7499C20.9189 38.5445 22.0865 40.5114 23.4973 40.9137C25.9784 41.6289 26.8541 37.9634 26.6108 27.4586C26.5622 24.5083 26.6595 21.6027 26.8541 20.9769C27.0486 20.2616 28.9459 18.5183 31.6216 16.5961C35.3676 13.8246 36 13.1541 36 12.0366C36 10.2485 34.7838 10.025 29.1405 10.8296C22.8162 11.7684 22.5243 11.6343 20.8703 6.35948C18.973 0.324779 17.7081 -1.10567 15.9081 0.771792ZM18.8757 9.13097C20.3838 13.8693 21.9892 14.5845 28.8 13.6011L30.8919 13.3329L29.1892 14.7187C28.2649 15.4786 26.8054 16.7302 25.9297 17.4007C23.7892 19.2335 23.3514 21.0663 23.3514 28.9784C23.3514 33.1357 23.1568 35.7283 22.9135 35.4601C22.6703 35.2366 21.5514 32.8227 20.4324 30.1407C19.2649 27.4139 17.9514 24.6871 17.4649 24.0613C16.2973 22.4967 12.6 21.111 8.07568 20.4404C6.03243 20.1722 4.37838 19.7699 4.37838 19.6358C4.37838 19.1441 11.5297 16.5067 12.8432 16.5067C14.1568 16.5067 14.4 15.9703 16.3459 8.77336C16.7838 7.1194 17.2703 5.77836 17.4649 5.77836C17.6595 5.77836 18.2919 7.29821 18.8757 9.13097Z" />
                </svg>
                <svg className="Heart6" viewBox="-10 0 53 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.9078 0.322729C17.1321 0.741906 14.7992 2.27889 13.8243 3.71107C12.2575 6.01654 10.7951 10.1384 10.7951 12.4439C10.7951 14.5049 10.5862 14.6446 8.77566 14.0857C5.22419 13.0377 1.6379 13.8761 0.523716 16.0418C-0.311924 17.6487 -0.137833 20.1288 0.976354 22.5041C2.0209 24.7048 4.59746 27.5692 6.30356 28.4774C7.5222 29.1062 7.55702 29.3158 6.47765 30.3288C5.15456 31.5863 5.0501 32.6342 6.09465 34.8C7.48739 37.5945 9.7854 39.7253 13.6502 41.8212C19.1167 44.7205 24.6876 45.8034 26.9857 44.3712C27.7865 43.9171 30.2934 40.5637 31.1639 38.852C31.1987 38.7822 31.8254 39.0965 32.5914 39.4808C33.6011 40.0048 34.3323 40.1445 35.4465 40.0048C40.9826 39.2712 50.0702 30.4685 52.4031 23.5521C53.1691 21.3165 53.2039 16.985 52.4727 15.3432C51.254 12.5836 48.2597 11.0467 45.7527 11.8501C44.0815 12.374 42.5495 13.2823 40.7041 14.8542C39.9033 15.5179 39.1721 16.0418 39.0328 16.0418C38.8935 16.0418 38.615 15.1336 38.3713 14.0158C37.6053 10.2782 35.3769 7.9727 32.487 7.83297C30.9201 7.79804 30.8505 7.72818 30.1193 6.05147C29.3533 4.3049 27.299 2.17409 25.5233 1.23094C24.6876 0.811768 20.788 -0.0964471 20.2309 0.008347C20.1264 0.0432784 19.5345 0.148072 18.9078 0.322729ZM23.086 3.60628C25.001 4.3049 26.5678 5.66723 27.5079 7.37886L28.3088 8.91584L27.0205 10.5925C25.384 12.7583 24.7573 14.2953 24.4787 16.8103C24.3046 18.6617 24.1654 18.8713 22.9467 19.7096C20.8228 21.1069 18.8382 25.9623 18.8033 29.7C18.8033 30.3986 18.6989 31.0274 18.5944 31.1322C18.49 31.2719 17.4454 30.8877 16.2616 30.3288C15.0778 29.7699 13.2672 29.176 12.2227 28.9664C8.81048 28.3377 5.50274 25.5781 3.65737 21.8404C2.68245 19.8843 2.54318 18.2425 3.27437 17.2295C4.04037 16.2165 6.93029 16.3562 9.54167 17.5439C11.7004 18.5569 13.0235 18.7316 13.4413 18.1028C13.5806 17.8932 13.7199 16.2864 13.7547 14.5049C13.9288 9.12543 15.7393 5.07339 18.5596 3.81587C20.2657 3.01244 21.2755 2.97751 23.086 3.60628ZM33.3922 10.6275C34.8894 11.396 35.7947 13.6316 35.9688 17.0199C36.2473 21.8754 37.1526 22.085 41.3308 18.1377C44.743 14.924 46.7277 13.946 48.3641 14.6446C49.722 15.2035 50.314 16.7055 50.314 19.535C50.314 22.1548 49.0953 25.1589 46.7277 28.3377C43.6288 32.5294 37.3267 37.35 34.9242 37.35C33.8101 37.35 32.0343 36.7212 32.0343 36.337C32.0691 36.2322 32.278 35.1842 32.5566 34.0315C33.2181 31.3418 33.2181 27.1151 32.5566 24.9144C31.7906 22.3295 30.2238 20.4083 27.9954 19.3603C26.15 18.487 26.0804 18.4172 26.2893 17.3343C26.7768 14.924 28.3088 12.409 30.0845 11.2213C31.9995 9.92885 32.0691 9.92885 33.3922 10.6275ZM28.448 23.2377C29.6319 24.6 30.2934 26.8356 30.2934 29.5952C30.2586 33.6822 28.1695 39.6205 25.7322 42.3452L24.5484 43.6725L21.9718 42.939C16.7839 41.4719 11.8049 38.328 9.36758 35.0096C8.04448 33.1931 8.11412 32.1103 9.57649 31.6911C11.1781 31.237 12.745 31.6562 16.1223 33.3678C19.3256 34.9746 20.2309 35.1842 20.8576 34.4507C21.0665 34.1712 21.3799 32.4246 21.5888 30.5034C22.0415 26.3815 22.7378 24.0761 23.9565 22.6439C24.7225 21.7007 25.001 21.5959 26.0804 21.7706C26.9508 21.8754 27.682 22.3644 28.448 23.2377Z" />
                </svg>
                <svg className="Heart7" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3823 0.857142C21.0416 1.31428 19.2742 2.09143 18.4819 2.59429C17.0802 3.46286 17.0192 3.46286 13.6673 1.95429C7.99948 -0.605715 3.55055 0.0342863 0.929945 3.73714C-0.349886 5.56571 -0.288942 10.8229 0.990889 15.0286C3.85527 24.3086 8.73081 30.7543 19.1523 39.2114L22.6261 42L24.1497 40.5371C25.9171 38.7086 30.6708 30.8457 32.7429 26.2743C38.045 14.3886 36.7652 3.41714 29.6957 0.857142C26.5875 -0.285715 25.4905 -0.285715 22.3823 0.857142ZM29.2081 3.37143C30.6098 4.10286 32.0725 7.07429 32.6819 10.3657C33.2304 13.0629 32.1334 19.2343 30.3051 23.8971C28.5987 28.24 22.8089 38.3429 22.0167 38.3429C20.6759 38.3429 13.1797 30.3886 10.1935 25.7714C3.67244 15.8514 1.72222 4.46857 6.35399 3.32571C8.18232 2.91429 11.2295 3.50857 13.1797 4.69714L14.9471 5.79428L13.8501 9.08571C12.0828 14.3886 13.6673 19.5543 17.3849 20.88C18.8476 21.4286 19.3351 21.3829 20.615 20.7429C21.4682 20.3314 22.4433 19.4629 22.748 18.7771C23.845 16.7657 23.0527 11.4629 21.2853 8.49143C20.4321 7.02857 19.8227 5.61143 20.0055 5.29143C20.554 4.24 24.2107 2.68571 26.039 2.68571C27.075 2.68571 28.4768 3.00571 29.2081 3.37143ZM19.0913 11.2343C20.0055 13.3371 20.1274 17.1314 19.2132 17.8171C17.6287 19.0057 15.8004 13.7486 16.8364 10.6857C17.3849 9.04 18.1772 9.26857 19.0913 11.2343Z" />
                </svg>
                <svg className="Heart8" viewBox="0 0 600 540" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M397.982 9.09106C343.955 31.7762 288.323 123.996 271.74 219.175C268.531 237.915 264.251 255.176 262.647 257.148C261.042 259.121 243.924 250.737 224.667 238.408C117.148 169.86 0 190.572 0 278.847C0 350.355 126.777 466.739 251.413 509.644C307.58 529.37 354.118 541.699 362.142 538.74C384.074 530.85 479.29 367.615 507.106 288.217C555.784 152.106 537.062 36.2146 461.638 6.6253C438.636 -2.2515 424.193 -1.75836 397.982 9.09106ZM458.963 49.0366C480.895 68.2697 488.919 88.9822 491.058 137.311C494.803 204.874 479.29 262.573 433.287 352.82C412.425 394.245 360.003 483.507 343.42 506.685C334.861 518.028 233.226 474.137 172.245 432.712C100.565 383.889 42.7938 314.847 42.7938 277.861C42.7938 244.819 62.5859 232.984 111.799 237.422C147.104 240.381 189.897 260.107 226.272 290.19C284.044 337.039 302.231 329.642 310.79 255.669C313.464 230.025 319.883 196.983 324.163 182.189C346.095 109.202 399.052 39.1735 431.147 39.1735C440.241 39.1735 452.544 43.6119 458.963 49.0366Z" />
                </svg>
                <svg className="Star11" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.8718 38.5891C33.6062 37.1948 30.8372 35.547 29.7673 34.9766L27.7534 33.9626L25.1103 36.9413C23.2852 39.0327 22.0895 39.8566 21.1455 39.7298C19.9498 39.5397 19.8239 39.0327 19.5092 33.8358L19.1946 28.132L10.5727 24.266C1.38453 20.1466 0 19.3227 0 17.9284C0 16.2173 2.83198 15.2666 9.43995 14.7596C19.8868 14.0625 19.1316 14.6329 19.5092 6.8376C19.8239 0.563367 19.8868 0.246486 21.2713 0.0563578C23.2223 -0.260523 24.1033 0.626743 27.8164 6.14047C31.2148 11.2106 31.1518 11.2106 35.9977 8.73889C39.0814 7.15448 41.284 7.21786 42.1651 8.80226C42.9832 10.3233 42.9832 10.3233 38.8926 15.837C37.2563 18.1819 35.8718 20.5268 35.8718 21.0339C35.8718 21.6042 37.6339 25.8504 39.7107 30.4769C43.6755 39.0961 43.9272 40.5537 41.1582 40.9973C40.4659 41.0607 38.1374 39.9833 35.8718 38.5891ZM34.9278 29.9065L33.2915 26.2307L32.0329 27.7517C31.4036 28.5756 30.8372 29.5263 30.8372 29.9699C30.8372 30.667 35.9347 34.2795 36.3753 33.8358C36.5011 33.7091 35.8718 31.9346 34.9278 29.9065ZM23.9145 31.5543C23.9145 31.2374 23.6628 30.9839 23.2852 30.9839C22.9705 30.9839 22.6559 31.4275 22.6559 31.9979C22.6559 32.5049 22.9705 32.7584 23.2852 32.5683C23.6628 32.3782 23.9145 31.9346 23.9145 31.5543ZM28.9492 24.0125C30.5854 20.7804 30.7113 20.0198 30.082 18.6256C29.3268 16.851 28.5086 16.7243 25.0473 17.7383C22.6559 18.3721 22.6559 18.3721 22.6559 21.8577C22.6559 25.0899 22.7817 25.4068 24.7327 26.5476C25.8025 27.2447 26.8095 27.8151 26.8724 27.8151C26.9982 27.8151 27.8793 26.1039 28.9492 24.0125ZM19.1316 21.7944C20.0756 19.196 18.0618 18.0552 13.8453 18.8157L11.0133 19.3227L14.1599 21.0339C17.81 22.9351 18.6282 23.0619 19.1316 21.7944ZM26.306 12.6682C27.0612 12.2246 26.9982 11.8443 26.1801 10.3233C25.6767 9.30927 24.6697 7.78825 23.9775 6.90098L22.6559 5.31658V9.30927C22.6559 12.9851 22.7817 13.2386 24.1033 13.2386C24.8585 13.2386 25.8655 12.9851 26.306 12.6682Z" />
                </svg>

            </div>

            <div className="align-left">
                <h1 className="title">Design</h1>
                {isDesignArrayEmpty ? (
                    <p className='text'>Cricket sounds ... 🦗</p>
                ) : (
                    <div className="cards-list-wrapper">
                        <section className="cards-list">
                            {designCards}
                        </section>
                    </div>)}
            </div>

            <div className="align-left">
                <h1 className="title">Web Dev</h1>
                {isWebArrayEmpty ? (
                    <p className='text'>Cricket sounds ... 🦗</p>
                ) : (
                    <div className="cards-list-wrapper">
                        <section className="cards-list">
                            {webCards}
                        </section>
                    </div>)}
            </div>

            <div className="align-left">
                <h1 className="title">Mobile Dev</h1>
                {isMobileArrayEmpty ? (
                    <p className='text'>Cricket sounds ... 🦗</p>
                ) : (
                    <div className="cards-list-wrapper">
                        <section className="cards-list">
                            {mobileCards}
                        </section>
                    </div>)}
            </div>

        </div>
    )
}

export default Portfolio
