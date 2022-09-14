import styled from "styled-components";

interface LinkButtonProps {
    color: string;
}

export const LinkButton = styled.a<LinkButtonProps>`
    color: ${(props) => props.color};
    cursor: pointer;

    &:hover {
        font-weight: 500;
    }
`;

LinkButton.defaultProps = {
    color: "black",
};
