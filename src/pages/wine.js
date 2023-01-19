import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import WineCard from '../components/WineCard';
import { useLocalStorage } from 'react-use';


const dummyPrice = 59

function WinePage() {

    // window.localStorage['coffee'] = 'Latte'
    // const [coffee, setCoffee] = useLocalStorage('coffee', 'Latte')

    let [wineTitles, setWineTitles] = React.useState([])
    let [subMenu, setSubMenu] = React.useState('reds')
    // let [cart, setCart] = React.useState([])
    let [cart, setCart] = useLocalStorage('cart', [])

    function addToCard(wine) {
        // console.debug(coffee)
        cart.push(wine)
        console.table(cart)
        setCart([...cart])
    }

    React.useEffect(() => {
        let items = []
        fetch(`https://api.sampleapis.com/wines/${subMenu}`)
            .then(res => res.json())
            .then((wines) => {
                for (let i = 0; i < wines.length; i++) {
                    // console.log(coffees[i].title)
                    items.push(
                        <WineCard
                            key={i}
                            image={wines[i].image}
                            title={wines[i].wine}
                            description={wines[i].winery}
                            price={dummyPrice}
                            handleClick={() => { addToCard(wines[i]) }}
                        />
                    )
                }
                setWineTitles(items)
                localStorage.clear()
            })
    }, [subMenu])


    return <Container>
        <h1>POS</h1>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => { setSubMenu('reds') }}>Reds</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('whites') }}>Whites</Button>
        </ButtonGroup>
        <Row>
            <Col>
                <Row>
                    {wineTitles}
                </Row>
            </Col>
            <Col sm={3}>
                <h2>Cart </h2>
                <table>
                    <thead>
                        <tr style={{textAlign: 'center', background: 'green', color: 'white'}}>
                            <td style={{border: '1px solid'}}>Wine Name</td>
                            <td style={{border: '1px solid'}}>Price</td>
                        </tr>
                    </thead>
                    <tbody style={{border: '1px solid'}}>
                        {cart.map((item, i) => {
                            return <tr>
                                <td style={{border: '1px solid'}}>{item.wine}</td>
                                <td style={{border: '1px solid'}}>{dummyPrice}</td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr style={{border: '1px solid'}}>
                            <td style={{border: '1px solid'}}>
                            Total
                            </td>
                            <td style={{border: '1px solid'}}>
                            ฿{cart.length * dummyPrice}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </Col>
        </Row>
    </Container >
}

export default WinePage