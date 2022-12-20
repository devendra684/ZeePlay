import React from 'react'
import Navbar from "../Components/Navbar2"; 
import requests from '../Components/Api/Requests'
import CaptionCarousel from "../Components/Slider";
import Footer from "./Footer";
import Rows from '../Components/Api/Row'

export default function Movies() {
  return (
    <div>
      <Navbar />
      <CaptionCarousel />
        <div style={{marginTop:"20px"}} className="movie__rows">
          <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Rows title="Science Frictional Movies" fetchUrl={requests.fetchScienceMovies} />
          <Rows title="ZEE5 ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
          <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow/>
          <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Rows title="Historical Movies" fetchUrl={requests.fetchHistoricalMovies} />
          <Rows title="Drama Movies" fetchUrl={requests.fetchDramaMovies} isLargeRow/>
          <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
      <Footer />
    </div>
  )
}
