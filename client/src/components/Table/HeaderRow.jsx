import { Tr, Th } from "@chakra-ui/react";

const HeaderRow = ({ headerTexts }) => {

  const headers = headerTexts.map(header => (
    <Th key={header} textTransform="none">{header}</Th>
  ));

  return (
    <Tr>
      {headers}
      <Th></Th>
      <Th></Th>
    </Tr>
  );
};

export default HeaderRow;
