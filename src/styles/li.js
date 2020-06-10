import styled from 'styled-components'


const Li = styled.li `
display: flex;
list-style: none;
margin-left: -2%;
margin-bottom: 1%;
align-self: center;
align-items: center;
& div {
    margin-left: 2%;
    display: flex;
    
    width: 110px;
    position: fixed;
    left: 20%;
    
}
`


export default Li;