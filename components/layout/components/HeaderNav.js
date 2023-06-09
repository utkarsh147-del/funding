import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
const HeaderNav = () => {
const Router=useRouter();

  return (
   
    
      <HeaderNavWrapper>
        <Link passHref href={'/'}><HeaderNavLinks active={Router.pathname == "/" ? true : false} >
          Campaigns
        </HeaderNavLinks></Link>
        <Link passHref href={'/page'}><HeaderNavLinks active={Router.pathname == "/page" ? true : false} >
          Create Campaign
        </HeaderNavLinks></Link>
        <Link passHref href={'/dashboard'}><HeaderNavLinks active={Router.pathname == " C:\\Users\\utkar\\OneDrive\\Desktop\\gpt\\thesavior\\app\\createcampaign.js" ? true : false} >
          Dashboard
        </HeaderNavLinks></Link>
      </HeaderNavWrapper>
  )
}

const HeaderNavWrapper=styled.div`
display:flex;
align-items:center;
background-color:${(props)=>props.active?props.theme.bgSubDiv:props.theme.bgDiv};
justify-content:space-between;
padding:6px;
height:50%;
border-radius:10px;



`
const HeaderNavLinks=styled.div`
background-color:${(props)=>props.theme.bgSubDiv};    
height:100%;
font-family:'Roboto';
margn:7px;
align-items:center;
border-radius:10px;
justify-content:space-between;
padding:0 5px 0 5px;
cursor:pointer;
text-transform:uppercase;
font-weights:bold;
font-size:small;

`



export default HeaderNav