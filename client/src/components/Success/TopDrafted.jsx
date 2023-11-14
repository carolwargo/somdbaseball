import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

import Gavin from '../../assets/Gavin.jpg'
import Brett from '../../assets/Brett.jpg'
import JohnM from '../../assets/JohnM.jpg'
import SteveClevenger from '../../assets/SteveClevenger.avif'
import Kenard from '../../assets/Kenard.jpg'
import BrandonErbe from '../../assets/BrandonErbe.jpg'
import ChrisArcher from '../../assets/ChrisArcher.jpg'
import JeffBaker from '../../assets/JeffBaker.jpg'
import JoshB from '../../assets/JoshB.jpg'
import JeffPal from '../../assets/JeffPal.png'
import NickA from '../../assets/NickA.jpg'  
import JohnPoss from '../../assets/JohnPoss.jpeg'
import BobbySt from '../../assets/BobbySt.jpg'
export default function TopDrafted() {
  return (
    <div className='top-drafted p-4'>
        <h3>TOP 6 ROUNDERS</h3>
    <MDBRow>
    <MDBCol className='flex-col p-2'>
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
          src={Brett}
          alt='brett-cecil'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle>Brett Cecil</MDBCardTitle>
          <MDBCardText>
            1st Round- Toronto Blue Jays
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol className='flex-col p-2'>
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
         src={Gavin} 
         alt='gavin-floyd'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle>Gavin Floyd</MDBCardTitle>
          <MDBCardText> 1st Round- Philadelphia Phillies</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
    <MDBRow >
      <MDBCol className='flex-col p-2'>
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={JohnM} 
            alt='john-mccurdy'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>John McCurdy</MDBCardTitle>
            <MDBCardText>
            1st Round- Oakland Athletics
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className='flex-col p-2'>
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={SteveClevenger} 
            alt='steve-clevenger'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Steve Clevenger</MDBCardTitle>
            <MDBCardText>7th Round- Chicago Cubs</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>

    <MDBRow >
      <MDBCol className='flex-col p-2'>
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={Kenard} 
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Kenard Jones</MDBCardTitle>
            <MDBCardText>
            3rd Round- San Diego Padres
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className='flex-col p-2'>
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={BrandonErbe}
            alt='brandon-erbe'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Brandon Erbe</MDBCardTitle>
            <MDBCardText>3rd Round- Baltimore Orioles</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>

    <MDBRow >
      <MDBCol className='flex-col p-2'>
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={ChrisArcher}
            alt='chris-archer'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Chris Archer</MDBCardTitle>
            <MDBCardText>
            5th Round- Cleveland Indians
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className='flex-col p-2'>
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={JeffBaker}
            alt='jeff-baker'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Jeff Baker</MDBCardTitle>
            <MDBCardText>4th Round- Colorado Rockies</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>

    <MDBRow >
      <MDBCol className='flex-col p-2'>
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={JoshB}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Josh Banks</MDBCardTitle>
            <MDBCardText>
            2nd Round- Toronto Blue Jays
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className='flex-col p-2'>
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={JeffPal}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Jeff Palumbo</MDBCardTitle>
            <MDBCardText>15th Round- Assistant Head Coach ECU</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <MDBRow>
    <MDBCol className='flex-col p-2'>
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
          src={NickA}
          alt='nick-adenhart'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle>Nick Adenhart</MDBCardTitle>
          <MDBCardText>
            14th Round- Anaheim Angels
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol className='flex-col p-2'>
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
          src={JohnPoss}
          alt='john-poss'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle>Johnny Poss</MDBCardTitle>
          <MDBCardText> Baltimore Orioles- Assistant Coach UMD</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
  <MDBRow>
    <MDBCol className='flex-col p-2'>
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
          src={BobbySt}
          alt='bobby-stpierre'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle>Bobby St. Pierre</MDBCardTitle>
          <MDBCardText>
          Scouting Supervisor-Houston Astros
            Pitching Analysis 
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol className='flex-col p-2'>
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
          src='https://mdbootstrap.com/img/new/standard/city/042.webp'
          alt='...'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle>Guy Smith</MDBCardTitle>
          <MDBCardText> 11th Round- Owner "5-Tool", 26yr Tenure Coach</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
    </div>
  );
}