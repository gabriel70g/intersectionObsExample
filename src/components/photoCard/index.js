import React from "react";
import { ImgWrapper, Img, Article } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
export const PhotoCard = (props) => {
  const { id, src } = props;
  const [show, element] = useNearScreen();

  return (
    <Article ref={element}>
      {show && (
        <ImgWrapper>
          <Img key={id} src={src} />
        </ImgWrapper>
      )}
    </Article>
  );
};
