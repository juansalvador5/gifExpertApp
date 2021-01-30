import styled from 'styled-components';

export const Input = styled.input`
    min-width: 100%;
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    border:none;
    background: white;
    border-radius: 4px;
    ::placeholder {
        color: gray;
    }
`;

export const Form = styled.form`
    min-width: 80%;
`;