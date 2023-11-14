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

import Gavin from '../../assets/images/Gavin.png'
import Brett from '../../assets/images/Brett.png'
import John from '../../assets/images/John.png'
import Steve from '../../assets/images/Steve.png'
import Kenard from '../../assets/images/Kenard.png'
import Brandon from '../../assets/images/Brandon.png'
import Chris from '../../assets/images/Chris.png'
import Jeff from '../../assets/images/Jeff.png'
import Josh from '../../assets/images/Josh.png'
import JeffPal from '../../assets/images/JeffPal.png'
import NickA from '../../assets/images/NickA.png'  
import Johnny from '../../assets/images/Johnny.png'
import BobbySt from '../../assets/images/BobbySt.png'
import Guy from '../../assets/images/Guy.png'
import Ryan from '../../assets/images/Ryan.png'


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
    <MDBCol className='flex-col p-2'>
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={John} 
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
  </MDBRow>
   

    <MDBRow >
    <MDBCol className='flex-col p-2'>
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={Steve} 
            alt='steve-clevenger'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Steve Clevenger</MDBCardTitle>
            <MDBCardText>7th Round- Chicago Cubs</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
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
            src={Brandon}
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
            src={Chris}
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
            src={Jeff}
            alt='jeff-baker'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Jeff Baker</MDBCardTitle>
            <MDBCardText>4th Round- Colorado Rockies</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className='flex-col p-2'>
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={Josh}
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
    <MDBCol className='flex-col p-2'>
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
          src={Johnny}
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
          src={Guy}
          alt='...'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle>Guy Smith</MDBCardTitle>
          <MDBCardText> 11th Round- Owner "5-Tool", 26yr Tenure Coach</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol className='flex-col p-2'>
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
          src={Ryan}
          alt='ryan-terrill'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle>Ryan Terrill</MDBCardTitle>
          <MDBCardText> George Mason- Asstitant Coach/Recruiting Coordinator</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
  
    </div>
  );
}