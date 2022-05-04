import { Box, Tooltip } from '@chakra-ui/react';
import React from 'react';

export default function StatusIndicatorInactive(props) {
  const inactiveColor = 'gray.400';

  return (
    <Tooltip label={`Status: Inactive`} textTransform="capitalize">
      <Box
        as="div"
        h="12px"
        w="12px"
        position="relative"
        bgColor={inactiveColor}
        borderRadius="50%"
        {...props}
      />
    </Tooltip>
  );
}
