import { SVGProps } from "react"
const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#FFF"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
)
export default HomeIcon