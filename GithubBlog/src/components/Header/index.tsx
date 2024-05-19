import { HeaderContainer } from "./styles";
import logo from "../../assets/Logo.svg"
import right from "../../assets/effect1.svg"
import left from "../../assets/effect2.svg"


export function Header() {
  return (
    <HeaderContainer>
      <img src={right} alt="" className="effect" />
      <img src={logo} alt="" className="logo"/>
      <img src={left} alt="" className="effect"/>
    </HeaderContainer>
  )
}