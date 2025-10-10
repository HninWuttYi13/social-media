import { Avatar, Container, Box, CardContent, Card, CardHeader, Typography, TextField, Button} from "@mui/material";
import { indigo } from "@mui/material/colors";
const Comment = () => {
  return (
    <Container>
      <Card key={1} sx={{marginY: 2}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: indigo[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Alice"
          subheader="September 14, 2016"
        />
        <CardContent>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </CardContent>
      </Card>
      <Card key={1}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: indigo[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Alice"
          subheader="September 14, 2016"
        />
        <CardContent>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </CardContent>
      </Card>
      <Card key={1}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: indigo[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Alice"
          subheader="September 14, 2016"
        />
        <CardContent>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </CardContent>
      </Card>
      <form>
        <Box sx={{marginY: 2, display: "flex", flexDirection: "column", gap: 1}}>
            <TextField placeholder="your comment..." fullWidth/>
            <Button type="submit" fullWidth variant="contained">Reply</Button>
        </Box>
      </form>
    </Container>
  );
}

export default Comment