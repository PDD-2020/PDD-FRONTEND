import styled from 'styled-components';

export const Navbar = styled.div`
    width: 100%;

.sidebar-nav {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    background: #2e2e2e;
}


#sidebar_menu li {
    color: #999;
    display: flex;
    
    text-decoration: none;
    
    -webkit-transition: background .5s;
    -moz-transition: background .5s;
    -o-transition: background .5s;
    -ms-transition: background .5s;
    transition: background .5s;
}
.sidebar_name {
    padding-top: 25px;
    color: #fff;
    opacity: .7;
}

.sidebar-nav li     {
    height: 105px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  
    img {
        width: 195px;
    }

    .btn-secondary {
        background-color: transparent;
        border-color: transparent;
    }

}

.sidebar-nav li {
  color: #999999;
  display: block;
  text-decoration: none;
}

.sidebar-nav li:hover {
  color: #fff;
  background: rgba(255,255,255,0.2);
  text-decoration: none;
}

.content {
    margin-top: 45px;
    margin-left: 20px;
}

.form-inline {
    margin-bottom: 30px;
}

.dish {
    /* background-color: #2e2e2e;
    border-radius: 5px; */
}





`