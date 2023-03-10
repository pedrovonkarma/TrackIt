import styled from "styled-components"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../AppContext/Context";
export default function Menu(){
    const {hojeFeitos} = useContext(AppContext)
    const {hojeTotal} = useContext(AppContext)
    const navigate = useNavigate()
    return (
        <Bar data-test="menu">
            <p data-test="habit-link" onClick={() => navigate('/habitos')}>Hábitos</p>
            <button data-test="today" onClick={() => navigate('/hoje')}><CircularProgressbar value={(hojeFeitos.length / hojeTotal)*100} text="Hoje" strokeWidth='10'
            styles={buildStyles({
                rotation: 0,
                strokeLinecap: 'round',
                textSize: '20px',
                pathTransitionDuration: 0.5,
                pathColor: `#ffffff`,
                textColor: '#ffffff',
                trailColor: '#52B6FF',
              })}
            /></button>
            <p data-test="history-link" onClick={() => navigate('/historico')}>Histórico</p>
        </Bar>
    )
}
const Bar = styled.div`
width: 100%;
height: 70px;
left: 0px;
bottom: 0px;
background: #FFFFFF;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
padding-inline: 35px;
p{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF;
}
button{
    width: 91px;
height: 91px;
border-radius: 45.5px;
background: #52B6FF;
position: fixed;
left: calc(50% - 45.5px);
bottom: 18px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #FFFFFF;
}
`