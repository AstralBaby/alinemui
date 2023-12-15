import {
    Card,
    Grid,
    Select,
    Checkbox,
    CardContent,
    CardActions,
    Button,
    TextField,
    MenuItem,
    InputLabel,
    OutlinedInput,
    CardHeader,
    Typography,
    FormControlLabel
} from "@mui/material"


const variants = ["outlined", "filled"]

const SignUpForm = ({ variant }) => (
    <Card variant={variant}>
        <CardContent>
            <Typography className="text-xl mb-5 font-bold capitalize not-prose">
                {variant}
            </Typography>
            <Grid container spacing={2} rowSpacing={4}>
                <Grid item xs={6}>
                    <TextField label="First name" variant={variant} fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Last name" variant={variant} fullWidth />
                </Grid>
                <Grid item xs={8}>
                    <TextField label="Email address" placeholder="catalina@aline.com" variant={variant} fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel id="country-select">Country</InputLabel>
                    <Select defaultValue="Country" displayEmpty fullWidth id="country-select" variant={variant}>
                        <MenuItem>Argentina</MenuItem>
                        <MenuItem>United States</MenuItem>
                        <MenuItem>Croatia</MenuItem>
                    </Select>
                </Grid>
            </Grid>
            <FormControlLabel control={<Checkbox />} label="I read and accept the terms & conditions." />
        </CardContent>
        <CardActions>
            <div className="grow"></div>
            <Button>Confirm</Button>
        </CardActions>
    </Card>
)

const FormVariants = () => (
    <Grid container spacing={3}>
        {variants.map(v => (
            <Grid item xs={6}>
                <SignUpForm variant={v}/>
            </Grid>
        ))}
    </Grid>
)

export default FormVariants