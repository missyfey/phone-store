import styled from 'styled-components'

const StyledButton = styled.button`
    background:none;
    border: 1px solid ${props=> props.cart ? `var(--orange)` : `var(--lightBlue)`};
    padding: .3em .5em;
    color: ${props=> props.cart ? `var(--orange)`: `var(--lightBlue)`};
    border-radius:5px;
    text-transform:capitalize;
    cursor:pointer;
    outline:none;
    display:flex;
    align-items:center;
    font-size:1em;
    transition: var(--mainTransition);
    &:hover{
        background: ${props=> props.cart ? `var(--orange)` : `var(--lightBlue)`};
        color: ${props=> props.cart ? `white` : `var(--mainBlue)`}
    }
`
const ClearButton = styled.button`
background:none;
border: 1px solid var(--darkOrange);
padding: .3em 1.5em;
color: var(--darkOrange);
border-radius:5px;
text-transform:capitalize;
cursor:pointer;
outline:none;
display:flex;
align-items:center;
font-size:1em;
transition: var(--mainTransition);
&:hover{
    background: var(--darkOrange);
    color: white
}
`
export {StyledButton , ClearButton}
    


// border: 1px solid var(--darkOrange);
//     color:  var(--darkOrange);
//     &:hover{
//         background:  var(--darkOrange);
//     }