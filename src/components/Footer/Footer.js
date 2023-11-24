import styled from "styled-components";


const Footer = () => {
    return (
  <FooterStyle>
          <div className="container">
            
            <footer className="footer">
                <h2 className="footer__title">movie app</h2>
                <p className="footer__author">Created By M Irsyad Ibrahim Faqih</p>

            </footer>
            
        </div>
  </FooterStyle>
    );
}

const FooterStyle= styled.div`
  .container {
    background-color: rgb(30, 23, 165);
    color: white;
    padding: 1rem;
    text-align: center;
  }
  .footer__title {
    margin-bottom: 1rem;
 }
  .footer__author {
    margin-bottom: 1rem;
 }
  @media (min-width: 768px) {

 }
  @media (min-width: 992px) {
    
 }
`

export default Footer;
