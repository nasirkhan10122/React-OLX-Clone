import React from 'react';
import './index.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Products from "./Products";






function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
            <Navbar />
            <Banner />
            <div className = "home_row">
              <Products 
                id = "1"
                title="FEATURED"
                product_image = "https://apollo-singapore.akamaized.net/v1/files/ax6probkjvlk2-PK/image;s=300x600;q=60"
                image = "https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"              
                price = {"RS 650,000"}
                spec = "2008 - 100,000 km"
                text ="urgent fr sale full genion"
                loc = "Karachi"
                date = "Today" 
              />
              <Products 
                id = "1"
                title="FEATURED"
                product_image = "https://apollo-singapore.akamaized.net/v1/files/ax6probkjvlk2-PK/image;s=300x600;q=60"
                image = "https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"              
                price = {"RS 650,000"}
                spec = "2008 - 100,000 km"
                text ="urgent fr sale full genion"
                loc = "Karachi"
                date = "Today" 
              />
               <Products 
                id = "1"
                title="FEATURED"
                product_image = "https://apollo-singapore.akamaized.net/v1/files/ax6probkjvlk2-PK/image;s=300x600;q=60"
                image = "https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"              
                price = {"RS 650,000"}
                spec = "2008 - 100,000 km"
                text ="urgent fr sale full genion"
                loc = "Karachi"
                date = "Today" 
              />
               <Products 
                id = "1"
                title="FEATURED"
                product_image = "https://apollo-singapore.akamaized.net/v1/files/ax6probkjvlk2-PK/image;s=300x600;q=60"
                image = "https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"              
                price = {"RS 650,000"}
                spec = "2008 - 100,000 km"
                text ="urgent fr sale full genion"
                loc = "Karachi"
                date = "Today" 
              />
              </div>
              <div className = "home_row">
              <Products 
                id = "1"
                title="FEATURED"
                product_image = "https://apollo-singapore.akamaized.net/v1/files/ax6probkjvlk2-PK/image;s=300x600;q=60"
                image = "https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"              
                price = {"RS 650,000"}
                spec = "2008 - 100,000 km"
                text ="urgent fr sale full genion"
                loc = "Karachi"
                date = "Today" 
              />
              <Products 
                id = "1"
                title="FEATURED"
                product_image = "https://apollo-singapore.akamaized.net/v1/files/ax6probkjvlk2-PK/image;s=300x600;q=60"
                image = "https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"              
                price = {"RS 650,000"}
                spec = "2008 - 100,000 km"
                text ="urgent fr sale full genion"
                loc = "Karachi"
                date = "Today" 
              />
               <Products 
                id = "1"
                title="FEATURED"
                product_image = "https://apollo-singapore.akamaized.net/v1/files/ax6probkjvlk2-PK/image;s=300x600;q=60"
                image = "https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"              
                price = {"RS 650,000"}
                spec = "2008 - 100,000 km"
                text ="urgent fr sale full genion"
                loc = "Karachi"
                date = "Today" 
              />
               <Products 
                id = "1"
                title="FEATURED"
                product_image = "https://apollo-singapore.akamaized.net/v1/files/ax6probkjvlk2-PK/image;s=300x600;q=60"
                image = "https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"              
                price = {"RS 650,000"}
                spec = "2008 - 100,000 km"
                text ="urgent fr sale full genion"
                loc = "Karachi"
                date = "Today" 
              />
              </div>
              <div className = "home_row">
              <Products 
                id = "1"
                title="FEATURED"
                product_image = "https://apollo-singapore.akamaized.net/v1/files/ax6probkjvlk2-PK/image;s=300x600;q=60"
                image = "https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"              
                price = {"RS 650,000"}
                spec = "2008 - 100,000 km"
                text ="urgent fr sale full genion"
                loc = "Karachi"
                date = "Today" 
              />
              <Products 
                id = "1"
                title="FEATURED"
                product_image = "https://apollo-singapore.akamaized.net/v1/files/ax6probkjvlk2-PK/image;s=300x600;q=60"
                image = "https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"              
                price = {"RS 650,000"}
                spec = "2008 - 100,000 km"
                text ="urgent fr sale full genion"
                loc = "Karachi"
                date = "Today" 
              />
               <Products 
                id = "1"
                title="FEATURED"
                product_image = "https://apollo-singapore.akamaized.net/v1/files/ax6probkjvlk2-PK/image;s=300x600;q=60"
                image = "https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"              
                price = {"RS 650,000"}
                spec = "2008 - 100,000 km"
                text ="urgent fr sale full genion"
                loc = "Karachi"
                date = "Today" 
              />
               <Products 
                id = "1"
                title="FEATURED"
                product_image = "https://apollo-singapore.akamaized.net/v1/files/ax6probkjvlk2-PK/image;s=300x600;q=60"
                image = "https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"              
                price = {"RS 650,000"}
                spec = "2008 - 100,000 km"
                text ="urgent fr sale full genion"
                loc = "Karachi"
                date = "Today" 
              />
              </div>
              <div className = "home_row">
              <Products 
                id = "1"
                title="FEATURED"
                product_image = "https://apollo-singapore.akamaized.net/v1/files/ax6probkjvlk2-PK/image;s=300x600;q=60"
                image = "https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"              
                price = {"RS 650,000"}
                spec = "2008 - 100,000 km"
                text ="urgent fr sale full genion"
                loc = "Karachi"
                date = "Today" 
              />
              <Products 
                id = "1"
                title="FEATURED"
                product_image = "https://apollo-singapore.akamaized.net/v1/files/ax6probkjvlk2-PK/image;s=300x600;q=60"
                image = "https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"              
                price = {"RS 650,000"}
                spec = "2008 - 100,000 km"
                text ="urgent fr sale full genion"
                loc = "Karachi"
                date = "Today" 
              />
               <Products 
                id = "1"
                title="FEATURED"
                product_image = "https://apollo-singapore.akamaized.net/v1/files/ax6probkjvlk2-PK/image;s=300x600;q=60"
                image = "https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"              
                price = {"RS 650,000"}
                spec = "2008 - 100,000 km"
                text ="urgent fr sale full genion"
                loc = "Karachi"
                date = "Today" 
              />
               <Products 
                id = "1"
                title="FEATURED"
                product_image = "https://apollo-singapore.akamaized.net/v1/files/ax6probkjvlk2-PK/image;s=300x600;q=60"
                image = "https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"              
                price = {"RS 650,000"}
                spec = "2008 - 100,000 km"
                text ="urgent fr sale full genion"
                loc = "Karachi"
                date = "Today" 
              />
              </div>
          </Route>
          <Route path="/Login">
            <h1>login Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
