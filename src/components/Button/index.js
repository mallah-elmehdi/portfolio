import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';

const getColor = (color) => (color ? color : 'primary');

const Base = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.fontSize.md,
    textDecoration: 'none',
    borderRadius: 0,
    padding: theme.spacing(1.5, 5),
    boxShadow: 'none',
}));

const StyledButton = styled(Base)(({ theme, variant, color }) => ({
    border: variant === 'outlined' ? `2.75px solid ${theme.palette[getColor(color)].main}` : 0,
    backgroundColor: variant === 'outlined' ? 'transparent' : theme.palette[getColor(color)].main,
    '&:hover': {
        border: variant === 'outlined' ? `2.75px solid ${theme.palette[getColor(color)].main}` : 0,
        backgroundColor: variant === 'outlined' ? 'transparent' : theme.palette[getColor(color)].main,
    },
    color: variant === 'outlined' ? theme.palette[getColor(color)].main : 'white',
    '&:focus': {
        boxShadow: `${alpha(theme.palette[getColor(color)].main, 0.25)} 0 0 0 0.15rem`,
    },
}));

export default StyledButton;
