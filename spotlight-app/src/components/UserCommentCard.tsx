import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';


function UserCommentCard() {
    return (
        <>
            <Card sx={{ minWidth: 275, borderRadius: '1rem', }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Issue Title
                    </Typography>
                    <Typography variant="body2">

                        Issue Description
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit iusto alias odio debitis sint atque eum rem deleniti similique, labore porro ipsum assumenda doloremque illo.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Food" size="small" />
                        <Chip label="Human Trafficing" size="small" />
                        <Chip label="Police" size="small" />
                    </Stack>
                </CardActions>
                <CardActions>
                    <Button size="large">open</Button>
                </CardActions>
                <Divider />
                <CardContent>
                    <Typography variant="body2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit iusto alias odio debitis sint atque eum rem deleniti similique, labore porro ipsum assumenda doloremque illo.
                    </Typography>
                    <Button size="small">Show Comment</Button>
                    <Divider />
                    <Typography variant="body2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit iusto alias odio debitis sint atque eum rem deleniti similique, labore porro ipsum assumenda doloremque illo.
                    </Typography>
                    <Button size="small">Show Comment</Button>
                </CardContent>
            </Card>
        </>
    )

}

export default UserCommentCard;