import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { IoIosArrowDropup } from "react-icons/io";

const ScrollToTop = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 150;

      isTop !== true ? setScrolled(true) : setScrolled(false);
    });
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <IconContainer>
      {scrolled && (
        <IoIosArrowDropup size={42} color="#F2441D" onClick={handleScroll} />
      )}
    </IconContainer>
  );
}

export default ScrollToTop

const IconContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
`