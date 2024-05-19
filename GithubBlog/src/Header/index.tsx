import { HeaderContainer } from "./styles";
import logo from "../assets/Logo.svg"
import right from "../assets/effect1.svg"
import left from "../assets/effect2.svg"


export function Header() {
  return (
    <HeaderContainer>
      <img src={right} alt="" />
      <img src={logo} alt="" />
      <img src={left} alt="" />
    </HeaderContainer>
  )
}