import React from 'react';
import data from './component/data/scan.json';
import Navbar from './component/Navbar.component';
import Monthly from './component/Monthly-Result.component';
import Vulnerabilities from './component/Vulnerabilities.component.jsx';
import './App.css';

class App extends React.Component {
  render(){
    const user = data.user;
    const scan = data.scan;
    const vulnerabilities = scan.vulnerabilities;
    let assets = scan.assets
      for(let i=0; i<vulnerabilities.length; i++){
        var affectedAssets = vulnerabilities[i].affectedAssets
        var affectedAssetsNames = "";
        for(let a=0; a<affectedAssets.length; a++){
          for(let v=0; v<scan.assets.length; v++){
            if(affectedAssets[a] === assets[v].id){
              if(affectedAssetsNames.length > 0) {
                affectedAssetsNames += ", ";
              }
              affectedAssetsNames = affectedAssetsNames + assets[v].description;
            }
          }
        }
        vulnerabilities[i].affectedAssetsNames = affectedAssetsNames; 
      }
    const high = vulnerabilities.filter(item => item.severity === "high");
    const medium = vulnerabilities.filter(item => item.severity === "medium");
    const low = vulnerabilities.filter(item => item.severity === "low");
    const info = vulnerabilities.filter(item => item.severity === "information");
    return (
      <div>
        <Navbar userName={user.displayName} userEmail={user.email} />
        <div className="container">
          <Monthly scan={scan} />
          <Vulnerabilities high={high} medium={medium} low={low} info={info} assets={scan.assets} />
        </div>
      </div>
    );
  }
}
export default App;
