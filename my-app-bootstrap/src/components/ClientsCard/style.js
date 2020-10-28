import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    
    .card-client {
        border: none;
        height: 50px;
        border-left: 7px solid #80ed99;
        background: #2e2e2e;
        color: #fff;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        width: 90%;
    
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    .card {
        width: 95%;
    }

    .card-body {
        width: 95%;
        margin-bottom: 20px;
    }

    .show {
        width: 95%;
    }

    span {
        text-transform: capitalize;
        font-size: 15px;
    }
    


`