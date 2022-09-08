import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 25,
  borderRadius: 20,
  [`&.${linearProgressClasses.colorPrimary}`]: {
<<<<<<< HEAD
    backgroundColor:  theme.palette.primary.light,
=======
    backgroundColor: theme.palette.primary.light,
>>>>>>> main
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default BorderLinearProgress;
