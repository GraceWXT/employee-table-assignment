import { Tr, Th } from "@chakra-ui/react";

// The table headers row
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
