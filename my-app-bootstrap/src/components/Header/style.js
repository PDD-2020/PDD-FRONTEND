import styled from 'styled-components';

export const ListGroup = styled.div`

.list-group-item {
    background: #2e2e2e;
    height: 105px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  
    img {
        max-width: 170px;
    }

    .btn-secondary {
        background-color: transparent;
        border-color: transparent;
    }

}

.list-group-item:hover {
  color: #fff;
  background: rgba(255,255,255,0.2);
  text-decoration: none;
}

`