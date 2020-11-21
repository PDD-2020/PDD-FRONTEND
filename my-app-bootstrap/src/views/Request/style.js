import styled from 'styled-components';

export const Form = styled.form`
    margin-top: 25px;
    background: #2e2e2e;
    padding: 20px;
    display: flex;

    .title {
        font-size: 28px;
        padding-bottom: 35px;
    }

    label {
        color: #fff;
    }
    
    .flex {
        display: flex;
        flex-direction: row;

        button {
            border: transparent;
            background: transparent;
        }
        
        img {
            width: 90px;
            border-radius: 50px;
        }
    }
    a {
        color: red;

    }
    button {
        margin-right: 10px;
    }
    
    .btn-warning {
        margin-right: 10px;
    }

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span {
        color: red;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
        position: absolute;
        padding-left: 5px;
    }
    
    
`
