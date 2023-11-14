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
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Matt Coenen</MDBCardTitle>
            <MDBCardText>
            2nd Round- Detroit Tigers
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
            <MDBCardTitle>Sean Black</MDBCardTitle>
            <MDBCardText>2nd Round- Washington Nationals</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>

    <MDBRow >
      <MDBCol className='flex-col p-2'>
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Matt Coenen</MDBCardTitle>
            <MDBCardText>
            2nd Round- Detroit Tigers
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
            <MDBCardTitle>Sean Black</MDBCardTitle>
            <MDBCardText>2nd Round- Washington Nationals</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>

    <MDBRow >
      <MDBCol className='flex-col p-2'>
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Matt Coenen</MDBCardTitle>
            <MDBCardText>
            2nd Round- Detroit Tigers
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
            <MDBCardTitle>Sean Black</MDBCardTitle>
            <MDBCardText>2nd Round- Washington Nationals</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>

    <MDBRow >
      <MDBCol className='flex-col p-2'>
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Matt Coenen</MDBCardTitle>
            <MDBCardText>
            2nd Round- Detroit Tigers
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
            <MDBCardTitle>Sean Black</MDBCardTitle>
            <MDBCardText>2nd Round- Washington Nationals</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <MDBRow>
    <MDBCol className='flex-col p-2'>
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
          src='https://mdbootstrap.com/img/new/standard/city/041.webp'
          alt='...'
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
          src='https://mdbootstrap.com/img/new/standard/city/042.webp'
          alt='...'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle>Gavin Floyd</MDBCardTitle>
          <MDBCardText> 1st Round- Philadelphia Phillies</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
  <MDBRow>
    <MDBCol className='flex-col p-2'>
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
          src='https://mdbootstrap.com/img/new/standard/city/041.webp'
          alt='...'
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
          src='https://mdbootstrap.com/img/new/standard/city/042.webp'
          alt='...'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle>Gavin Floyd</MDBCardTitle>
          <MDBCardText> 1st Round- Philadelphia Phillies</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
  <MDBRow>
    <MDBCol className='flex-col p-2'>
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
          src='https://mdbootstrap.com/img/new/standard/city/041.webp'
          alt='...'
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
          src='https://mdbootstrap.com/img/new/standard/city/042.webp'
          alt='...'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle>Gavin Floyd</MDBCardTitle>
          <MDBCardText> 1st Round- Philadelphia Phillies</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
    </div>
  );
}