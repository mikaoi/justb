import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 35,
  borderRadius: 20,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.secondary.light,
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default BorderLinearProgress;
