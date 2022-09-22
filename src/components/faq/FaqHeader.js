// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiTextField from '@mui/material/TextField'
import AccordionControlled from './AccordionControlled'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'

// Styled Card component
const Card = styled(MuiCard)(({ theme }) => ({
  border: 0,
  borderRadius: '20px',
  boxShadow: 4,
  backgroundSize: 'cover',
  backgroundImage:
    theme.palette.mode === 'light'
      ? 'url(/images/pages/tree-cone-cube-bg-light.png)'
      : 'url(/images/pages/tree-cone-cube-bg-dark.png)'
}))

// Styled TextField component
const TextField = styled(MuiTextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.paper
  },
  [theme.breakpoints.up('sm')]: {
    width: 450
  }
}))

const FaqHeader = props => {
  // ** Props
  const { searchTerm, setSearchTerm } = props

  const handleFaqFilter = e => {
    setSearchTerm(e.target.value)
  }

  return (
    <Card 
    sx={{
      paddingBottom: '50px'
    }}>
      <CardContent sx={{ pt: 10, textAlign: 'center', pb: theme => `${theme.spacing(23)} !important` }}>
        <Typography variant='h1' sx={{ mb: 1.5, color: 'fontColor.main',  }}>
          justb Help Center
        </Typography>
        <Typography variant='body2' sx={{ mb: 7 }}>
          or choose a category to quickly find the help you need
        </Typography>
        <TextField sx={{
        }}
          value={searchTerm}
          placeholder='Ask a question....'
          onChange={e => handleFaqFilter(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Magnify />
              </InputAdornment>
            )
          }}
        />
      </CardContent>
      
    </Card>
  )
}

export default FaqHeader
