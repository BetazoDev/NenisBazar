import styled, { css } from "styled-components";

const EasyButton = styled.TouchableOpacity`
    flex-direction: row;
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
    justify-content: center;
    background: transparent;
    ${(props) =>
        props.primary &&
        css`
            background: white;
        `
    }
    ${(props) =>
        props.secondary &&
        css`
            background: #000
        `
    }
    ${(props) => 
        props.danger &&
        css`
            background: #f40105
        `
    }
    ${(props) => 
        props.large &&
        css`
            width: 300px
        `
    }
    ${(props) => 
        props.medium &&
        css`
            width: 100px
        `
    }
    ${(props) => 
        props.small &&
        css`
            width: 40px
        `
    }
    ${(props) => 
        props.color &&
        css`
            border: black
        `
    }
`;

export default EasyButton;