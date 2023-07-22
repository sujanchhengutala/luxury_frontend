import React from 'react'
import { styled } from 'styled-components'

const form = () => {
  return (
    
    <Wrapper>
        <div className='container'>

            <div className='sujan'>
                <div className="fCard">
            <h3>You’ve come so far.</h3>
            <p>So why not join our crew of airsoft nutheads for monthly promotions, updates and tips? Nothing can go wrong</p> 
                </div>

            <div className='forms'>
                <div className='name'>
                    <p>Your name</p>
                    <input type='text' />
                </div>
                <div className='email'>
                    <p>Your email</p>
                    <input type='text' />
                </div>
                <button>Suscribe</button>
            </div>

            </div>

    
           
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
height: 20rem;
background-color: #D2D9EA;
.container{
    .sujan{
        height: 20rem;
        width: 100%;
       display: flex;
       justify-content: space-around;
       .fCard{
        height: 20rem;
        width: 23%;
    margin-left: 13rem;
h3{
    padding: 4rem 0 0 1rem;
}
P{
    padding-left: 1rem;
}
       }
       .forms{
        height: 20rem;
        width: 62%;
       display: flex;
       align-items: center;
       gap: 4.5rem;
       .name, .email{
        p{
                text-transform: uppercase;
        }
        input{
            width: 27.5rem;
            height: 4rem;
            outline: none;
            border-radius: 10px;
            background-color: #6f6b6b;
            box-shadow: none;

        }
       }

       button{
        height: 4rem;
        width: 12rem;
        margin-top: 2.5rem;
        border-radius: 10px;
        border: none;
        background-color: #B9C2D9;
       }

       }
    }
}



`

export default form