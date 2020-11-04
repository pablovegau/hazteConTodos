import styled from "styled-components"
import { rem } from "polished"

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${rem("28px")};
  width: ${rem("28px")};
  border: 0;
  border-radius: var(--borderRadius-round);
  box-shadow: var(--shadow-roundButton);
  background-color: var(--grayColor-alpha_twenty);
  transition: background-color 0.5s, box-shadow 0.3s;

  &:hover {
    background-color: var(--grayColor-alpha_thirty);
    box-shadow: var(--shadow-hoverRoundButton);
  }
`
