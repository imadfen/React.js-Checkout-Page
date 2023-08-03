import { SVGProps } from "react"
const MailboxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#FFF"
    {...props}
  >
    <path fill="none" d="M-618-3000H782V600H-618zM0 0h24v24H0z" />
    <path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
  </svg>
)
export default MailboxIcon
