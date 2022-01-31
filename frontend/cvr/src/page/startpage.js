import React from "react";
import { Link } from 'react-router-dom';


class StartPage extends React.Component {

  render() {
    return (
      <div>


        <header className="w3-container w3-center" style={{ backgroundColor: '#DED7E6', padding: '128px 16px' }}>
          <h1 className="w3-margin w3-jumbo">Create & Read CV project</h1>
          <Link to={'/ulogdin'} className="w3-button w3-black w3-padding-large w3-large w3-margin-top">Get Started</Link>
        </header>

        <div className="w3-row-padding w3-padding-64 w3-container">
          <div className="w3-content">
            <div className="w3-twothird">
              <h1>CV hazırlarken</h1>
              <h5 className="w3-padding-32">Bir user hesabı oluşturarak login olduktan sonra cv'nizi hazırlayabilirsiniz. Oluşturulan bütü cv bilgilerini admin sayfasından yönetici rolündeki kullanıcılar listeleyip inceleyebilirler.</h5>
              <p className="w3-text-grey">CV oluştururken Ad soyad, Cep numarası, email, Eğitim bilgileri (Okul - Dönem ), iş tecrübesi (İş yeri - yıl - açıklama ), Mesleki Beceri ve bilgilerinizi girmelisiniz.</p>
            </div>
            <div className="w3-third w3-center">
              <i className="fa fa-anchor w3-padding-64" />
            </div>
          </div>
        </div>



        <footer className="w3-container w3-teal w3-center w3-margin-top">
          <p>Powered by Beytullah Topuz</p>
        </footer>


      </div>
    );
  }

}

export default StartPage;