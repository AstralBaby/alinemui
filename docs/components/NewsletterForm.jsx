import { Card, CardHeader, CardContent, CardActions, TextField, Button } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const NewsletterForm = () => (
    <Card className="w-1/3 not-prose mt-5 p-3 shadow-xl">
        <CardHeader title="Newsletter" titleTypographyProps={{textAlign: "center"}}></CardHeader>
        <CardContent>
            I would like to receive daily updates to this email.
            <TextField
                type="email"
                placeholder="Email address"
                variant="standard"
                fullWidth
                className="mt-3"
                InputProps={{
                    startAdornment: <EmailOutlinedIcon/>
                }}
            />
        </CardContent>
        <CardActions>
            <Button fullWidth size="large">Subscribe</Button>
        </CardActions>
    </Card>
)

export default NewsletterForm