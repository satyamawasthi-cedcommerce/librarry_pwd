import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
// this is the details page which shows the individual details
export default function Details() {
  var detailPage = useLocation();
  var myBook = detailPage.state.bookDetails;
  console.log(myBook);
  return (
    //   returning JSX
    <div>
      <Header />
      <div className="individualBook">
        <h1 style={{ color: "#00342E" }}>Here is Your Book</h1>
        <hr
          style={{
            border: "1px solid #00342E",
            width: "100%",
            marginTop: ".5%",
          }}
        />
        <div className="bookContent">
          <div>
            <img
              src={`https://covers.openlibrary.org/b/olid/${myBook.cover_edition_key}-L.jpg`}
              alt="..."
              style={{
                borderRadius: "10px",
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
              }}
            />
          </div>
          <div className="vl"></div>
          <div style={{ width: "60%", textAlign: "left" }}>
            <h2 style={{ color: "#00342e" }}>{myBook.title}</h2>
            

            <hr
              style={{
                border: "1px solid #00342E",
                width: "100%",
                marginTop: "1%",
                marginBottom: "2%",
              }}
            />
            <sub>{myBook.subtitle}</sub>
            <h3>Author: {myBook.author_name[0]}</h3>
            <h3>Published by: {myBook.publisher}</h3>
            <h3>Latest Published in: {myBook.publish_year[0]}</h3>
            <sub>{myBook.publish_place}</sub>
            <h4>Language: {myBook.language}</h4>
            <h4>Pages: {myBook.number_of_pages_median}</h4>
            <h4>E-book access:{myBook.ebook_access}</h4>
            <button
              className="btnbb"
              onClick={() => {
                alert("Thankyou for Borroeing the book.");
              }}
            >
              Borrow Book Now
            </button>
            
          </div>
        </div>
      </div>
      <footer>
        <h3>@book.online.store.com</h3>
      </footer>
    </div>
  );
}
