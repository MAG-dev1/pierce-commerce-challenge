import styled from 'styled-components';

export const Label = styled.label`
        color: white;
        font-size: 1.0rem;
        font-weight: 400;
        text-align: center;
        margin: 0;
    `;


export const ButtonForm = styled.button`
      margin-top: 5%;
   text-align: center;
   display: flex;
   justify-content: center;
   align-items: center;
   align-content: center;
    border: 2px solid black;
    `

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const Popup_card = `
background: white;
  padding: 20px;
  border-radius: 15px;
  width: 90%;
  max-width: 350px; /* Aquí controlas que sea "chiquita" */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: center;
  animation: fadeIn 0.3s ease;
`