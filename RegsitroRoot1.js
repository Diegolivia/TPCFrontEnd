import React from "react";
import styled from "styled-components";

export const RegsitroRoot1 = ({}) => {
  return (
    <RegsitroRootRoot>
      <Design>
        <Navbar>
          <Image1 src={`https://file.rendit.io/n/kRqmrqfIkXZuVcbV9Yh8.png`} />
        </Navbar>
        <FlexColumn>
          <FlexColumn1>
            <Text1>Iniciar sesión</Text1>
            <Paragraph>Inicia sesión con tu correo institucional</Paragraph>
            <WhiteFlexRow>
              <Text2>Institución educativa</Text2>
              <Image2
                src={`https://file.rendit.io/n/zpIxR6STlrCVQ9J1MzuJ.svg`}
              />
            </WhiteFlexRow>
            <WhiteText>Correo</WhiteText>
            <WhiteText1>Contraseña</WhiteText1>
            <IndigoText>Regístrate</IndigoText>
          </FlexColumn1>
          <Footer>
            <FlexColumn2>
              <DbbcdfbaafdPhotoRoom
                src={`https://file.rendit.io/n/kRqmrqfIkXZuVcbV9Yh8.png`}
              />
              <Paragraph1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                ullamcorper consectetur arcu odio elit.{" "}
              </Paragraph1>
            </FlexColumn2>
            <FlexColumn3>
              <Text3>Secciones</Text3>
              <Text4>Inicio</Text4>
              <Text4>Nosotros</Text4>
              <Text4>Nuestra App</Text4>
              <Text7>Contáctanos</Text7>
            </FlexColumn3>
            <FlexColumn4>
              <Text3>Redes sociales</Text3>
              <Text9>TPC_oficial_fb</Text9>
              <FlexColumn5>
                <Text10>TPC_oficial_ig</Text10>
                <Text11>TPC_oficial_ig</Text11>
              </FlexColumn5>
            </FlexColumn4>
            <FlexColumn6>
              <Text3>Contacto</Text3>
              <Text4>999 999 999</Text4>
              <Text7>tpc@gmail.com</Text7>
            </FlexColumn6>
          </Footer>
          <ImageCoba
            src={`https://file.rendit.io/n/XJCdrubyVvUqDwRvI3O6.png`}
          />
        </FlexColumn>
      </Design>
    </RegsitroRootRoot>
  );
};

const Text3 = styled.div`
  margin: 0px 0px 25px 0px;
  color: #0d0949;
  font-size: 20px;
  font-weight: 700;
  font-family: Montserrat;
  white-space: nowrap;
`;
const Text4 = styled.div`
  margin: 0px 0px 16px 0px;
  color: #b3b3b3;
  font-size: 20px;
  font-weight: 600;
  font-family: Montserrat;
  white-space: nowrap;
`;
const Text7 = styled.div`
  align-self: stretch;
  color: #b3b3b3;
  font-size: 20px;
  font-weight: 600;
  font-family: Montserrat;
  white-space: nowrap;
`;
const RegsitroRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 0px 0px 0.44px;
  background-color: #f3f7ff;
  overflow: hidden;
`;
const Design = styled.div`
  height: 1058px;
  gap: 87px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px 0px 40px 141px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/lJU04Dcb69Aei8UzX16k.svg");
`;
const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Image1 = styled.img`
  height: 60px;
`;
const FlexColumn = styled.div`
  width: 1164px;
  height: 822px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
  padding: 0px 135px 0px 0px;
`;
const FlexColumn1 = styled.div`
  height: 464px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 605px 0px 0px;
`;
const Text1 = styled.div`
  margin: 0px 0px 20px 0px;
  color: #0d0949;
  font-size: 48px;
  font-weight: 700;
  font-family: Montserrat;
  white-space: nowrap;
`;
const Paragraph = styled.div`
  width: 559px;
  align-self: stretch;
  margin: 0px 0px 41px 0px;
  color: #b3b3b3;
  font-size: 20px;
  font-weight: 600;
  font-family: Montserrat;
`;
const WhiteFlexRow = styled.div`
  width: 476px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 17px 0px;
  padding: 20px 25px 21px 36px;
  border-radius: 20px;
  background-color: #ffffff;
`;
const Text2 = styled.div`
  color: #aeaeae;
  font-size: 20px;
  font-weight: 500;
  font-family: Montserrat;
  line-height: 20px;
  white-space: nowrap;
  letter-spacing: 0.2px;
`;
const Image2 = styled.img`
  width: 21px;
  height: 13px;
  align-self: flex-end;
  margin: 0px 0px 3px 0px;
`;
const WhiteText = styled.div`
  width: 69px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 0px 17px 0px;
  padding: 20px 435px 21px 33px;
  color: #aeaeae;
  font-size: 20px;
  font-weight: 500;
  font-family: Montserrat;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 0.2px;
  border-radius: 20px;
  background-color: #ffffff;
`;
const WhiteText1 = styled.div`
  width: 118px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 0px 42px 0px;
  padding: 20px 383px 21px 36px;
  color: #aeaeae;
  font-size: 20px;
  font-weight: 500;
  font-family: Montserrat;
  line-height: 20px;
  white-space: nowrap;
  letter-spacing: 0.2px;
  border-radius: 20px;
  background-color: #ffffff;
`;
const IndigoText = styled.div`
  width: 108px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 19px 229px 18px 200px;
  color: #f9f9f9;
  font-size: 20px;
  font-weight: 700;
  font-family: Montserrat;
  white-space: nowrap;
  border-radius: 20px;
  background-color: #5f75da;
`;
const Footer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const FlexColumn2 = styled.div`
  width: 371px;
  height: 204px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 101px 0px 0px;
`;
const DbbcdfbaafdPhotoRoom = styled.img`
  width: 114px;
  height: 60px;
`;
const Paragraph1 = styled.div`
  width: 361px;
  align-self: flex-end;
  color: #b3b3b3;
  font-size: 20px;
  font-weight: 600;
  font-family: Montserrat;
  white-space: pre-wrap;
`;
const FlexColumn3 = styled.div`
  width: 131px;
  height: 204px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0px 109px 0px 0px;
`;
const FlexColumn4 = styled.div`
  width: 154px;
  height: 182px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 134px 0px 0px;
  padding: 11px 0px;
`;
const Text9 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 16px 0px;
  color: #b3b3b3;
  font-size: 20px;
  font-weight: 600;
  font-family: Montserrat;
  white-space: nowrap;
`;
const FlexColumn5 = styled.div`
  width: 142px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 12px 0px 0px;
`;
const Text10 = styled.div`
  left: 0px;
  top: 0px;
  position: absolute;
  color: #b3b3b3;
  font-size: 20px;
  font-weight: 600;
  font-family: Montserrat;
  white-space: nowrap;
`;
const Text11 = styled.div`
  position: relative;
  color: #b3b3b3;
  font-size: 20px;
  font-weight: 600;
  font-family: Montserrat;
  white-space: nowrap;
`;
const FlexColumn6 = styled.div`
  width: 164px;
  height: 182px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 11px 0px;
`;
const ImageCoba = styled.img`
  width: 788px;
  height: 636px;
  left: 511px;
  top: 0px;
  position: absolute;
`;
