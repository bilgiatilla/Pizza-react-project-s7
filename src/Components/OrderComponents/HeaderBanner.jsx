import styled from 'styled-components'
const Wrapper = styled.div`
  background-color: #CE2829;
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const BannerTitle = styled.h1`
  font-family: "Londrina Solid", cursive;
  font-size: 64px;
  color: white;
  text-align: center;
  margin: auto;
`;
const Breadcrumb = styled.div`
  position: absolute;
  bottom: 30px;
  left: 400px;
  font-family: "Barlow", sans-serif;
  font-size: 16px;
`;
const HomeText = styled.span`
  color: #bdbdbd;`

const OrderText = styled.span`
  color: white;
  font-weight: 600;
`;

export function HeaderBanner () {
    return (
      <Wrapper>
      <BannerTitle>Teknolojik Yemekler</BannerTitle>

      <Breadcrumb>
        <HomeText>Anasayfa - </HomeText>
        <OrderText>Sipariş Oluştur</OrderText>
      </Breadcrumb>
    </Wrapper>
    )
}