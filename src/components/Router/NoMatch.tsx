import { Link } from "react-router-dom";
import { Button, Grid, Header } from "semantic-ui-react";

function NoMatch() {
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" color="blue" textAlign="center">
          404 - PÁGINA NO ENCONTRADA!
        </Header>
        <Link to="/">
          <Button color="black" fluid size="medium">
            Inicio
          </Button>
        </Link>
      </Grid.Column>
    </Grid>
  );
}

export { NoMatch };
