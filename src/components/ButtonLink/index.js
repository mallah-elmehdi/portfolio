import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const StyledLink = styled((props) => <Link underline={props.underline ? props.underline : 'none'} {...props} />)(({ theme, color }) => ({
    fontWeight: theme.fontWeight.medium,
    fontSize: theme.fontSize.sm,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.black,
    cursor: 'pointer',
}));

export default StyledLink;
