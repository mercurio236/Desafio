import React from 'react';
import { Card, Button } from 'react-bootstrap'
import Logo from '../../logo.svg';
import PropTypes from 'prop-types'


function ListarProdutos(props) {
    const protdutos = [
        { id: '0', nome: 'Teste1', preco: 'R$ 59,90' },
        { id: '1', nome: 'Teste2', preco: 'R$ 9,90' },
        { id: '2', nome: 'Teste3', preco: 'R$ 5,90' },
        { id: '3', nome: 'Teste4', preco: 'R$ 10,90' },
        { id: '4', nome: 'Teste5', preco: 'R$ 559,90' },
        { id: '5', nome: 'Teste6', preco: 'R$ 539,90' },
        { id: '6', nome: 'Teste7', preco: 'R$ 519,90' },
    ]

    function handleComprar(event, produto) {
        event.preventDefault();
        props.adicionarProduto(produto)
        props.exibirMensagem(produto)
    }

    function render(){
         const cards = protdutos.map((produto) => 
                <Card
                    key={produto.id}
                    style={{ width: '18rem', margin: 10, float: 'left' }}>
                    <Card.Img src={Logo} />
                    <Card.Body>
                        <Card.Title>{produto.nome}</Card.Title>
                        <Card.Text>
                            Ajustando
                        </Card.Text>
                        <Button variant="success" style={{ width: '100%' }} onClick={(event) => handleComprar(event, produto)}>Comprar por {produto.preco}</Button>
                    </Card.Body>
                </Card>
            )
            return cards;
    }

    return render()
}

ListarProdutos.propTypes = {
    adicionarProduto: PropTypes.func.isRequired,
    exibirMensagem: PropTypes.func.isRequired

}
export default ListarProdutos