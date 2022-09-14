import styled from "styled-components";

export const MenuLinks = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
`;

export const MenuMainPathItem = styled.div`
    display: inline-block;
    margin-inline: 15px;
`;

export const SubMenuContainer = styled.div`
    position: absolute;
    display: ${(props) => (props.hidden ? "none" : "flex")};
    left: 0;
    right: 0;

    padding-top: 24px;
    margin: 0 1rem;
    opacity: 0.95;
`;

export const SubMenuContent = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 45px;
    height: 100%;
    width: 100%;
    background-color: white;
`;

export const MenuColumn = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 30px;
`;

export const MenuColumnItem = styled.li`
    display: inline-block;
    margin-inline: 15px;
`;
