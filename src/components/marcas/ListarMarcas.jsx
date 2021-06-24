import { Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useState, useEffect } from 'react';
import { busca } from '../../api/api';
import Helmet from 'react-helmet'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    table: {
      minWidth: 650,
    },
  });

const ListarMarcas = () => {
    const classes = useStyles();

    const [marcas, setMarcas] = useState([]);

    useEffect(() =>{
        busca(`/api/v1/brand/getAll`, setMarcas)
    }, []);


    return(
        <div className={classes.root}>
             <Helmet title="Marcas - Carango bom" />
            <Container component="article">
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                marcas.map((marca) =>(
                                    <TableRow key={marca.id}>
                                        <TableCell>{marca.name}</TableCell>
                                        <TableCell>
                                            <IconButton aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete">
                                                <EditIcon />
                                            </IconButton>           
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );

}

export default ListarMarcas;