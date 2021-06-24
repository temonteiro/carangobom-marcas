import { Button, Container, TextField } from '@material-ui/core';
import React from 'react';

const AddMarcas = () => {


    return (
        <Container maxWidth="sm">
            <form>
                <TextField id="nome" name="nome" label="Nome" variant="outlined"  fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary">Salvar</Button>
            </form>
        </Container>
    );
}

export default AddMarcas;