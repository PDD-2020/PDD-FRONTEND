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
    
    a {
        color: red;
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
    .btn-warning {
        margin-right: 10px;
    }

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`