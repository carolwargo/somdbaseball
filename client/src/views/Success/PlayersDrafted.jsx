import React from "react";
import Drafted from "../../components/Success/Drafted.jsx"
import TopDrafted from "../../components/Success/TopDrafted.jsx"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function PlayersDrafted() {
  return (
    <main>
        <div className="d-flex justify-content-around align-content-around p-2 ">
      <h2>SOUTHERN MARYLAND BASEBALL CAMP HALL OF FAME</h2>
      </div>
    <div className="d-flex justify-content-around">
      <MDBRow>
        <MDBCol>
    <MDBContainer className="p-4">
    <TopDrafted />
    </MDBContainer>
    </MDBCol>
<MDBCol>
  
     <MDBContainer className="drafted p-4">
    <Drafted />
    </MDBContainer>
    </MDBCol>
    </MDBRow>
    </div>
    </main>
  );
}
