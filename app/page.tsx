import styles from "./home-page.module.css";

export const metadata = {
    title: "AlumLinC | Learn About Schools. Get Answers.",
};

/** The home page */
export default function Home() {
    return (
        <div className={styles.topBanner}>
            <div>
                <h1 className={styles.topBannerTitle}>AlumLinC</h1>
                <h2 className={styles.topBannerSubtitle}>
                    Learn About Schools. Get Answers.
                </h2>
            </div>
            <svg
                fill="none"
                width="1920"
                xmlns="http://www.w3.org/2000/svg"
                style={{ "-webkit-print-color-adjust": "exact" }}
                id="/images/wave.svg"
                version="1.1"
                viewBox="93 615 1920 324"
                height="324"
            >
                <g id="shape-fcb98b15-8604-8067-8002-292fcc083240">
                    <g
                        className="fills"
                        id="fills-fcb98b15-8604-8067-8002-292fcc083240"
                    >
                        <path
                            rx="0"
                            ry="0"
                            style={{ /*fill: "#22e5aa",*/ "fill-opacity": 1 }}
                            d="M93.000,777.000L157.000,812.944C221.000,849.563,349.000,920.438,477.000,912.000C605.000,903.563,733.000,812.438,861.000,804.000C989.000,795.563,1117.000,866.438,1245.000,893.944C1373.000,920.438,1501.000,903.563,1629.000,903.056C1757.000,903.563,1885.000,920.438,1949.000,930.056L2013.000,939.000L2013.000,615.000L1949.000,615.000C1885.000,615.000,1757.000,615.000,1629.000,615.000C1501.000,615.000,1373.000,615.000,1245.000,615.000C1117.000,615.000,989.000,615.000,861.000,615.000C733.000,615.000,605.000,615.000,477.000,615.000C349.000,615.000,221.000,615.000,157.000,615.000L93.000,615.000Z"
                        ></path>
                    </g>
                </g>
            </svg>
        </div>
    );
}
