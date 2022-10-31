import { Box } from '@mui/material';
import * as icons from './svgs/_index';

const iconSizes = {
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px'
};

export default function Icon({ size, name, color }) {
  const CurrentIcon = icons[name];
  if (!CurrentIcon)
    return (
      <>
        {`"${name}" is not a valid icon name! `}
        <Icon />
      </>
    );
  return (
    <Box
      as="svg"
      sx={{
        width: iconSizes[size],
        height: iconSizes[size]
      }}
      fill="currentColor"
      color={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <CurrentIcon />
    </Box>
  );
}

Icon.defaultProps = {
  name: 'default_icon',
  size: 'md',
  color: 'inherit'
};
