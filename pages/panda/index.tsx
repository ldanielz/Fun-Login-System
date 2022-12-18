import { PandaContainer } from './styles'

export default function Panda() {
  return (
    <PandaContainer>
      {/* <div className="face">
        <div className="eyes">
          <div className="eye Reye">
            <div className="white Rwhite"></div>
          </div>
          <div className="eye Leye">
            <div className="white Lwhite"></div>
          </div>
        </div>
        <div className="nose">
          <div className="circle"></div>
          <div className="col"></div>
          <div className="Rlip"></div>
          <div className="Llip"></div>
        </div>
        <div className="cheeks">
          <div className="cheek Rcheek"></div>
          <div className="cheek Lcheek"></div>
        </div>
        <div className="ears">
          <div className="ear Rear"></div>
          <div className="ear Lear"></div>
        </div>
      </div> */}
      <div>
        <svg
          className="panda idle"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 199.13 148"
        >
          <path
            className="ear leftear"
            d="M47.08 17c-5.92-8-13.91-18.74-30-6.82S9 32.86 15 40.84 32.88 50 41.75 43.38 53 25 47.08 17z"
          />
          <path
            className="ear rightear"
            d="M152.91 17c5.92-8 13.91-18.74 30-6.82S191 32.86 185 40.84s-17.89 9.16-26.76 2.54S147 25 152.91 17z"
          />

          <path
            className="head"
            d="M198.65 74c5.92 40.44-44.32 74-99 74s-106-33.74-99-74C5.6 45.71 25.72 20.42 56.42 8a115 115 0 0 1 43.23-8 118 118 0 0 1 44.7 8.37c30.21 12.33 50.12 37.04 54.3 65.63z"
            fill="#fff"
          />

          <path
            className="feature rightpatch"
            d="M125.52 42.48c-4.77 7-5.2 18.14-3.42 26C125.78 84.86 140.92 93 156 96.94c9.24 2.43 23 3.35 26.51-8C187 74.62 176.29 55.57 168 44.72c-12-15.56-30.14-20.26-42.48-2.24z"
          />
          <path
            className="feature righteyepatch"
            d="M130.58 66.16C128 79 153.79 86.93 154.94 71.29c.87-11.93-21.58-18.91-24.36-5.13z"
            fill="#fff"
          />
          <ellipse
            className="eye righteye"
            cx="142.21"
            cy="70.5"
            rx="7.5"
            ry="1"
          />

          <path
            className="feature leftpatch"
            d="M73 42.48c4.77 7 5.2 18.14 3.42 26C72.73 84.86 57.59 93 42.49 96.94c-9.23 2.43-23 3.35-26.51-8-4.46-14.34 6.25-33.39 14.57-44.24C42.5 29.16 60.66 24.46 73 42.48z"
          />
          <path
            className="feature lefteyepatch"
            d="M67.78 66.16C70.37 79 44.56 86.93 43.42 71.29 42.55 59.36 65 52.38 67.78 66.16z"
            fill="#fff"
          />
          <ellipse
            className="eye lefteye"
            cx="56.15"
            cy="70.5"
            rx="7.5"
            ry="1"
          />

          <path
            className="feature nose"
            d="M87.65 85.55c0-3.45 2.18-6.55 12-6.55s12 3.1 12 6.55c0 4.36-7.64 12-12 12s-12-6.55-12-12z"
          />
          <ellipse
            className="mouth feature"
            cx="99.65"
            cy="123"
            rx="10"
            ry="3"
          />
        </svg>
      </div>
    </PandaContainer>
  )
}
