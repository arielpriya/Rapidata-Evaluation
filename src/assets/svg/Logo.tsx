import * as React from "react"

const LogoComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={50}
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="655.78 631.86 1383.44 1712.48"
  >
    <defs>
      <linearGradient
        id="id2"
        gradientUnits="userSpaceOnUse"
        x1={669.398}
        y1={2206.607}
        x2={2064.164}
        y2={1401.336}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#07f",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#00ecbb",
          }}
        />
      </linearGradient>
      <style>{".fil1{fill:#0a1759;fill-rule:nonzero}"}</style>
      <mask id="id0">
        <linearGradient
          id="id1"
          gradientUnits="userSpaceOnUse"
          x1={1762.255}
          y1={1763.758}
          x2={1149.739}
          y2={1599.636}
        >
          <stop
            offset={0}
            style={{
              stopOpacity: 1,
              stopColor: "white",
            }}
          />
          <stop
            offset={1}
            style={{
              stopOpacity: 0,
              stopColor: "white",
            }}
          />
        </linearGradient>
        <path
          style={{
            fill: "url(#id1)",
          }}
          d="M1149.739 1056.014h889.479v1288.322h-889.479z"
        />
      </mask>
    </defs>
    <g id="Layer_x0020_1">
      <path
        style={{
          fill: "none",
        }}
        d="M0 0h8226v3000.115H0z"
      />
      <g id="_2161925070512">
        <path
          d="M1096.433 711.369c284.321-164.152 651.26-65.834 815.415 218.491l.004.013c164.159 284.325 65.836 651.261-218.488 815.413l-.006.004-397.956-689.295-639.624 369.306V965.783l440.655-254.414zm252.282 1232.902-692.937 400.066v-459.519l493.963-285.189 198.974 344.642z"
          style={{
            fill: "url(#id2)",
          }}
        />
        <path
          style={{
            mask: "url(#id0)",
            fill: "#07f",
          }}
          d="m1579.695 2344.336-429.956-744.7 145.663-543.622 743.816 1288.322z"
        />
      </g>
    </g>
  </svg>
)

export default LogoComponent
