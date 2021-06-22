import styled from "@emotion/styled";
import Utilities from "../utilities";

const ObjectRelative = styled.div`
  ${Utilities.Margin};
  ${Utilities.Padding};
  ${Utilities.Location};
  ${Utilities.Size};
  ${Utilities.Display};
  ${Utilities.Flex};
  position: relative;
`;

const ObjectAbsolute = styled.div`
  ${Utilities.Margin};
  ${Utilities.Padding};
  ${Utilities.Location};
  ${Utilities.Size};
  ${Utilities.Display};
  ${Utilities.Flex};
  position: absolute;
`;

const ObjectFixed = styled.div`
  ${Utilities.Margin};
  ${Utilities.Padding};
  ${Utilities.Location};
  ${Utilities.Size};
  ${Utilities.Display};
  ${Utilities.Flex};
  position: fixed;
`;

const ObjectSticky = styled.div`
  ${Utilities.Margin};
  ${Utilities.Padding};
  ${Utilities.Location};
  ${Utilities.Size};
  ${Utilities.Display};
  ${Utilities.Flex};
  position: sticky;
`;

const ObjectDiv = styled.div`
  ${Utilities.Margin};
  ${Utilities.Padding};
  ${Utilities.Location};
  ${Utilities.Position};
  ${Utilities.Size};
  ${Utilities.Display};
  ${Utilities.Flex};
`;

const ObjectImg = styled.img`
  ${Utilities.Margin};
  ${Utilities.Padding};
  ${Utilities.Location};
  ${Utilities.Position};
  ${Utilities.Size};
  ${Utilities.Display};
  ${Utilities.Flex};
`;

const IJNobject = {
  R: ObjectRelative,
  A: ObjectAbsolute,
  F: ObjectFixed,
  S: ObjectSticky,
  D: ObjectDiv,
  Img: ObjectImg
};

export { ObjectRelative, ObjectAbsolute, ObjectFixed, ObjectSticky, ObjectDiv, ObjectImg };
export default IJNobject;
