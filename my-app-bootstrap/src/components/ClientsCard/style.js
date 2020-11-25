import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    
    .card-client {
        border: none;
        height: 50px;
        border-left: 8px solid #f77f00;
        background: #2e2e2e;
        color: #fff;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        width: 90%;
    
        display: flex;
        justify-content: space-between;
        align-items: center;

        &.notification {
            background: rgb(255, 22, 22);
        }
    }


    .card-body {
        margin-bottom: 20px;
    }

    .collapse {
        width: 90%;
    }

    .btn {
        border-radius: none;
    }

    .list-group-item {
        background: transparent;
    }

  /*   .card {
        width: 95%;
    }

    .card-body {
        width: 95%;
        margin-bottom: 20px;
    }

    .show {
        width: 95%;
    } */

    span {
        text-transform: capitalize;
        font-size: 15px;
    }
    


`