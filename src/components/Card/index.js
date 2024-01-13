import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    boxShadow: theme.shadows.default,
    borderRadius: theme.borderRadius.lg,
    width: '100%',
    height: '100%',
    // borderBottom: '5px solid',
    // borderColor: theme.palette.primary.main,
}));

export default StyledCard;
