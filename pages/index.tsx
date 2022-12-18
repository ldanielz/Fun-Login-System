import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section>
      <div className={styles.bear__wrapper}>
        <svg
          className={styles.bear}
          viewBox="0 0 241 257"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className={styles.bear__body}>
            <path
              d="M213.727 108.553C213.727 136.968 213.701 173.493 201.933 202.922C196.071 217.583 187.328 230.384 174.292 239.532C161.263 248.676 143.78 254.286 120.235 254.286C96.6889 254.286 79.2065 248.676 66.1771 239.532C53.1413 230.384 44.3983 217.583 38.536 202.922C26.7685 173.493 26.7425 136.968 26.7425 108.553C26.7425 52.8665 68.7328 7.97217 120.235 7.97217C171.736 7.97217 213.727 52.8665 213.727 108.553Z"
              fill="#AF7128"
              stroke="#000000"
              strokeWidth="4"
            />
            <circle
              cx="37.3983"
              cy="36.9758"
              r="34.8416"
              fill="#AF7128"
              stroke="#000000"
              strokeWidth="4"
            />
            <circle
              cx="203.509"
              cy="36.9758"
              r="34.8416"
              fill="#AF7128"
              stroke="#000000"
              strokeWidth="4"
            />
            <g className={styles.bear__eyes}>
              <g className={styles['bear__eyes-crossed']}>
                {/* <!-- Right --> */}
                <line
                  x1="164.746"
                  x2="183.746"
                  y1="99.811"
                  y2="111.811"
                  strokeWidth="4"
                  strokeLinecap="round"
                  stroke="#000000"
                ></line>
                <line
                  x1="164.746"
                  x2="183.746"
                  y1="111.811"
                  y2="99.811"
                  strokeWidth="4"
                  strokeLinecap="round"
                  stroke="#000000"
                ></line>
                {/* <!-- Left --> */}
                <line
                  x1="58.1606"
                  x2="74.1606"
                  y1="99.811"
                  y2="111.811"
                  strokeWidth="4"
                  strokeLinecap="round"
                  stroke="#000000"
                ></line>
                <line
                  x1="58.1606"
                  x2="74.1606"
                  y1="111.811"
                  y2="99.811"
                  strokeWidth="4"
                  strokeLinecap="round"
                  stroke="#000000"
                ></line>
              </g>
              <g className={styles['bear__eyes-normal']}>
                <circle cx="174.746" cy="105.811" r="8.0793" fill="#000000" />
                <circle cx="66.1606" cy="105.811" r="8.0793" fill="#000000" />
              </g>
            </g>
            <path
              d="M141.246 120.415C141.246 128.625 131.378 137.866 120.401 137.866C109.425 137.866 99.5567 128.625 99.5567 120.415C99.5567 112.205 109.425 108.134 120.401 108.134C131.378 108.134 141.246 112.205 141.246 120.415Z"
              fill="#000000"
            />
            <rect
              x="75.7932"
              y="69.9394"
              width="88.3706"
              height="13.25"
              fill="#FF1E1E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M187.771 28.755C205.711 43.1491 215.789 65.9033 215.789 86.2595H154.142C154.055 72.5907 142.947 61.5369 129.258 61.5369H110.699C97.0096 61.5369 85.902 72.5907 85.8151 86.2595L24.4714 86.2595C24.4714 65.9033 34.5498 43.149 52.4893 28.755C70.4288 14.361 94.76 6.27448 120.13 6.27448C145.501 6.27448 169.832 14.361 187.771 28.755Z"
              fill="#000000"
            />
          </g>
          <g className={styles.bear__arm}>
            <rect
              x="2"
              y="120"
              height="54"
              width="220"
              rx="27"
              fill="#AF7128"
              strokeWidth="4"
              stroke="#000000"
            ></rect>
            <line
              x1="214"
              y1="139"
              x2="192"
              y2="138"
              strokeLinecap="round"
              stroke="#000000"
              strokeWidth="4"
            ></line>
            <line
              x1="214"
              y1="157"
              x2="192"
              y2="158"
              strokeLinecap="round"
              stroke="#000000"
              strokeWidth="4"
            ></line>
          </g>
          <g className={styles.bear__arms}>
            <rect
              x="-10"
              y="100"
              width="54"
              height="80"
              ry="27"
              strokeWidth="4"
              stroke="#000000"
              fill="#AF7128"
            ></rect>
            <rect
              x="0"
              y="110"
              width="34"
              height="40"
              ry="17"
              fill="#F2DA89"
            ></rect>
            <rect
              x="198"
              y="100"
              width="54"
              height="80"
              ry="27"
              strokeWidth="4"
              stroke="#000000"
              fill="#AF7128"
            ></rect>
            <rect
              x="208"
              y="110"
              width="34"
              height="40"
              ry="17"
              fill="#F2DA89"
            ></rect>
          </g>
        </svg>
      </div>
      <main>
        <form>
          <div className={styles['form-group']}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required placeholder="Enter email" />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              placeholder="Enter password"
            />
            {/* <button id="reveal" type="button" aria-pressed="false">
              <span aria-hidden className={styles['material-symbols-outlined']}>
                visibility
              </span>
              <span className={styles['sr-only']}>Reveal password</span>
            </button> */}
          </div>
          <input type="submit" value="Sign In" />
          <svg
            className={styles['indicator-arm']}
            viewBox="-4 -4 102 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="arm">
                {/* <!-- Plus/Minus 4 on each side to accommodate stroke --> */}
                <rect
                  x="0"
                  y="0"
                  width="98"
                  height="58"
                  rx="28"
                  fill="#AF7128"
                  stroke="#000000"
                  strokeWidth="4"
                />
              </clipPath>
              <clipPath id="behind">
                <rect x="58" y="0" height="61" width="59" />
              </clipPath>
            </defs>
            <g className={styles['indicator-arm__arm']} clipPath="url(#arm)">
              <rect
                x="2"
                y="2"
                width="92"
                height="54"
                rx="28"
                fill="#AF7128"
                stroke="#000000"
                strokeWidth="4"
              />
              <g clipPath="url(#behind)">
                <g className="indicator-arm__paw">
                  <rect
                    x="2"
                    y="2"
                    width="94"
                    height="54"
                    rx="28"
                    fill="#AF7128"
                    stroke="#000000"
                    strokeWidth="4"
                  />
                  <rect
                    x="12"
                    width="72"
                    y="12"
                    height="34"
                    fill="#F2DA89"
                    rx="18"
                  ></rect>
                </g>
              </g>
              <g className={styles['indicator-arm__claws']}>
                <rect
                  x="2"
                  y="2"
                  width="94"
                  height="54"
                  rx="28"
                  fill="#AF7128"
                  stroke="#000000"
                  strokeWidth="4"
                />
                <line
                  x1="8"
                  y1="21"
                  x2="30"
                  y2="19"
                  strokeLinecap="round"
                  stroke="#000000"
                  strokeWidth="4"
                ></line>
                <line
                  x1="8"
                  y1="39"
                  x2="30"
                  y2="41"
                  strokeLinecap="round"
                  stroke="#000000"
                  strokeWidth="4"
                ></line>
              </g>
              <g clipPath="url(#behind)">
                <g
                  className={styles['indicator-arm__paw']}
                  clipPath="url(#behind)"
                >
                  <rect
                    x="2"
                    y="2"
                    width="94"
                    height="54"
                    rx="28"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="4"
                  />
                </g>
              </g>
            </g>
          </svg>
        </form>
      </main>
    </section>
  )
}
